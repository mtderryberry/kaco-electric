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

                AWS.config.region = 'us-east-1';
                AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: 'us-east-1:06d2c5b5-623d-4fb9-9968-80e677654118',
                });
                 
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
