(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){

    // $scope.messages = ["First Message!", "Seconds!", "Third slice of pie!"];
    $scope.todos = [
                    {
                      text: "Clean the bike",
                      completed: false
                    },
                    {
                      text: "Fill up your W-9 form for Andrew Gruesser from KASS Management",
                      completed: false
                    },
                    {
                      text: "Touch base with Joel Estrada from Razorfish",
                      completed: false
                    },
                    {
                      text: "Call Melissa Lederer from MATTER Chicago",
                      completed: false
                    },
                    {
                      text: "Finish work for Bernina Norton from CHICAT",
                      completed: false
                    } 
                    ];
    $scope.toggleCompleted = function(todo) {
      if (todo.completed) {
        todo.completed = true;
      } else {
        todo.completed = true;
      }
    };

    $scope.addTodo = function(newText) {
      if (newText) {
        var todo = {
                    text: newText, 
                    completed: false, 
                    }

        $scope.todos.push(newTodo);
        $scope.formText = null;
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