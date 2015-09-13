ToDoListApp.controller('ToDoListController', [function() {
  var self = this;
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({ taskName: self.taskItem, completed: false });
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
//   self.selectedTasks = function() {
//     this.taskList = $filter('filter')(this.)
//   }
}]);

// $scope.selectedSongs = function () {
//     $scope.playList = $filter('filter')($scope.selectedAlbumSongs, {checked: true});
// }