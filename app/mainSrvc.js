angular.module('devmtnTravel').service('mainSrvc', function($http) {
  this.getTravelInfo = function() {
      return $http({
          method: 'GET',
          url: 'http://practiceapi.devmountain.com/api/travel/travel-info'
      });
    };

  this.getPackagedInfo = function() {
      return $http({
          method: 'GET',
          url: 'https://practiceapi.devmountain.com/api/travel/package-info'
      });
    };
});