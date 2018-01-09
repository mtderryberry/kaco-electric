(function () {
   
    angular.module('kacoElectricApp')
        .controller('PhotoCtrl', PhotoCtrl);

      //inject the services that need to be used by Home Controller
        PhotoCtrl.$inject = ['$scope', 'awsSvc'];
        

    	function PhotoCtrl($scope, awsSvc) {
    		let self = this;

    		const bucketName = "kacoelectric-gallery";

			const params = {
		        Bucket: bucketName
		    }

		    const s3 = awsSvc.getS3();
		    const bucketUrl = "https://s3.us-east-1.amazonaws.com/" + bucketName + "/";


		    $scope.images = [];

		    $scope.firstColumnImages = [];
		    $scope.secondColumnImages = [];
		    $scope.thirdColumnImages = [];

			// gallery methods
			$scope.methods = {};

			// so you will bind openGallery method to a button on page
			// to open this gallery like ng-click="openGallery();"
			$scope.openGallery = function(index){
				$scope.methods.open(index);

				// You can also open gallery model with visible image index
				// Image at that index will be shown when gallery modal opens
				//scope.methods.open(index);
			};

			// Similar to above function
			$scope.closeGallery = function(){
				$scope.methods.close();
			};

			$scope.nextImg = function(){
				$scope.methods.next();
			};

			$scope.prevImg = function(){
				$scope.methods.prev();
			};

			$scope.conf = {
				thumbnails  	:   false,
				thumbSize		: 	300,
				inline      	:   false,
				bubbles     	:   true,
				bubbleSize		: 	40,
				imgBubbles  	:   true,
				bgClose     	:   false,
				piracy 			: 	false,
				imgAnim 		: 	'fadeup',
			};

			s3.listObjectsV2(params, function(err, data) {
				if (err) {
					console.log(err, err.stack); // an error occurred
				}
				else {
					for (let i = 0; i < data.Contents.length; i++) {
						if (data.Contents[i].Size > 0) {
							let current = bucketUrl + data.Contents[i].Key;
							let captionText = data.Contents[i].Key.split("-")[1].split(".")[0];
							$scope.images.push({
								id : i,
								url : current,
							});
							if (i < data.Contents.length/3) {
								$scope.firstColumnImages.push({
									id : i,
									url : current,
									caption: captionText,
								});
							}
							else if (i < data.Contents.length*2/3) {
								$scope.secondColumnImages.push({
									id : i,
									url : current,
									caption: captionText,
								});
							}
							else {
								$scope.thirdColumnImages.push({
									id : i,
									url : current,
									caption: captionText,
								});
							}
						}
					}
					$scope.$apply();
				}
			});
		}
})();
