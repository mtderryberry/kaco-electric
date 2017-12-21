(function () {
  angular.module('kacoElectricApp')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['$scope', 'awsSvc'];

  function ContactCtrl($scope, awsSvc) {
    let self = this;

	$scope.contact = {

	};

	// require("../../assets/images/ocean.jpg");

	$scope.sendEmail = function() {

	    const ses = awsSvc.getSES();
	    
		// Create sendEmail params 
		var params = {
			Destination: { /* required */
				CcAddresses: [
					$scope.contact.clientEmail,
					/* more items */
				],
				ToAddresses: [
					'mderryberryt@gmail.com',
					/* more items */
				]
			},
			Message: { /* required */
				Body: { /* required */
					Text: {
						Charset: "UTF-8",
						Data: $scope.contact.message
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: $scope.contact.clientSubject
				}
			},
			Source: 'kacoelectricsite@gmail.com', /* required */
			ReplyToAddresses: [
				/* more items */
			],
		};       

		// Create the promise and SES service object
		var sendPromise = ses.sendEmail(params).promise();

		// Handle promise's fulfilled/rejected states
		sendPromise
			.then(function(data) {
				console.log(data.MessageId);
			}).catch(function(err) {
				console.error(err, err.stack);
			});

	}

	
  }

})();
