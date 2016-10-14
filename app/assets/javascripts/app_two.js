(function(){
  "use strict";

  angular.module("app").controller("appTwo", function($scope){

    $scope.message = "Seconds!";

    window.scope = $scope;
  });
}());