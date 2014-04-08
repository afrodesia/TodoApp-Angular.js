
angular.module('ToDo', []).
controller('todoController', ['$scope' ,function($scope){
 
 $scope.todos = JSON.parse(localStorage.getItem('todo')) || []


  // $scope.todos = [
  //      {'title':'Create your own to list...','done':false}
  // ];

  $scope.addTodo = function(){
    $scope.todos.push({'title' :$scope.newTodo, 'done':false})
    $scope.newTodo = ''
  }
  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
         return !item.done
    })
  }
  $scope.$watch('todo', function(newValue, oldValue){
    if(newValue != oldValue){
      localStorage.setItem('todos',JSON.stringify (newValue))
    }
  },true)
  

}])
