ToDoListApp.controller('ToDoListController', [function() {
  var self = this;
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({ taskName: self.taskItem, completed: false });
    self.taskItem = "";
  }

  self.toggleCompletion = function(item) {
    return item.completed ? item.completed = false : item.completed = true
  }

  function filterByCompletion(obj) {
    return obj.completed === false;
  }

  self.count = function() {
    return self.taskList.filter(filterByCompletion).length;
  }

  self.clearAll = function() {
    self.taskList = [];
  }
}]);
