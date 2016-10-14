(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){

    // $scope.messages = ["First Message!", "Seconds!", "Third slice of pie!"];
    $scope.todos = [
                    {
                      text: "Clean the bike",
                      rating: 5,
                      reviewer: "Eric Cartman"
                    },
                    {
                      text: "Fill up your W-9 form for Andrew Gruesser from KASS Management",
                      rating: 4,
                      reviewer: "Butters"
                    },
                    {
                      text: "Touch base with Joel Estrada from Razorfish",
                      rating: 3,
                      reviewer: "Kenny"
                    },
                    {
                      text: "Call Melissa Lederer from MATTER Chicago",
                      rating: 2,
                      reviewer: "Douglas Adams"
                    },
                    {
                      text: "Finish work for Bernina Norton from CHICAT",
                      rating: 1,
                      reviewer: "Lorde Ya-Ya-Ya"
                    }
                    ];

    $scope.addTodo = function(newText, newRating, newReviewer) {
      if (newText && newRating && newReviewer) {
        var todo = {
                    text: newText, 
                    rating: newRating, 
                    reviewer: newReviewer
                    }

        $scope.todos.push(newText);
        $scope.newTodo = '';
      }

      // $scope.newTodo = null;
    };

    $scope.deleteTodo = function(selectedIndex) {
      // var index = $scope.reviews.indexOf(selectedReview);
      $scope.todos.splice(selectedIndex, 1);
    };

    // $scope.clearSearch = function(newText) {
    //  $scope.searchAll = '';
    // };
      $scope.isPositive = function(theTodo) {
        return theTodo.indexOf("stupid") === -1;
      }

    window.scope = $scope;
  });
}());