ToDoListApp.controller('ToDoListController', [function() {
  var self = this;
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({ taskName: self.taskItem, completed: false, display: true });
  }

  self.toggleCompletion = function(item) {
    if (item.completed === true) {
      item.completed = false
    }
    else {
      item.completed = true
    }
  }

  self.count = function() {
    count = 0;
    for (var i = 0; i < self.taskList.length; i++) {
      if (self.taskList[i]["completed"] === false) {
        count += 1;
      }
    }
    return count;
  }

  self.showActive = function() {
    for (var i = 0; i < self.taskList.length; i++) {
      if (self.taskList[i]["completed"] === true) {
        self.taskList[i].display = false;
      }
      else {
        self.taskList[i].display = true;
      }
    }
  }

  self.showComplete = function() {
    for (var i = 0; i < self.taskList.length; i++) {
      if (self.taskList[i]["completed"] === true) {
        self.taskList[i].display = true;
      }
      else {
        self.taskList[i].display = false;
      }
    }
  }

  self.clearAll = function() {
    self.taskList = [];
  }

  self.showAll = function() {
    for (var i = 0; i < self.taskList.length; i++) {
      self.taskList[i].display = true;
    }
  }
}]);
