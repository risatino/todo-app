(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){

    $scope.message = "First Message!";

    window.scope = $scope;
  });
}());