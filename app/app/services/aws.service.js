(function () {
    angular.module('kacoElectricApp')

        .factory('awsSvc', awsSvc);

    awsSvc.$inject = [];

    function awsSvc() {

        let AWS;
        let s3;
        let ses;

        return {
            getS3: getS3,
            getSES: getSES
        }

        function getS3() {
            if (angular.isUndefined(s3)) {
                init();
            }
            return s3;
        }

        function getSES() {
            if (angular.isUndefined(ses)) {
                init();
            }
            return ses;
        }

        function init() {
            if (angular.isUndefined(AWS) && angular.isUndefined(s3)) {
                // Import the Amazon service client
                require('aws-sdk/dist/aws-sdk');
                AWS = window.AWS;

                const credentials = {accessKeyId: 'AKIAIZNA6SG7ATM4W2WA', secretAccessKey: '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'};
                AWS.config.update(credentials);
                AWS.config.region = 'us-east-1';
                 
                // Set credentials and region
                s3 = new AWS.S3({
                    apiVersion: '2006-03-01'
                });

                ses = new AWS.SES({
                    apiVersion: '2010-12-01'
                });
            }
        }
    }

})();
