(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){

    // $scope.messages = ["First Message!", "Seconds!", "Third slice of pie!"];
    $scope.todos = [
                    "Clean the bike",
                    "Fill up your W-9 form for Andrew Gruesser from KASS Management",
                    "Touch base with Joel Estrada from Razorfish",
                    "Call Melissa Lederer from MATTER Chicago",
                    "Finish work for Bernina Norton from CHICAT"
                    ];

    $scope.addTodo = function(newText) {
      if (newText) {
        $scope.todos.push(newText);
        $scope.newTodo = '';
      }

      // $scope.newTodo = null;
    };

    $scope.deleteReview = function(selectedReview) {
      $scope.reviews.splice();
    };

    // $scope.clearSearch = function(newText) {
    //  $scope.searchAll = '';
    // };

    window.scope = $scope;
  });
}());