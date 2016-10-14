(function(){
  "use strict";

  angular.module("app").controller("appThree", function($scope){

    $scope.message = "Third slice of pie!";

    window.scope = $scope;
  });
}());