ToDoListApp.controller('ToDoListController', [function() {
  var self = this;
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push(self.taskItem);
  }
}]);