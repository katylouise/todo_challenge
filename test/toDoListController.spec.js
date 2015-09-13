describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty list', function() {
    expect(ctrl.taskList).toBeUndefined();
  });

  describe('adding tasks to the to-do list', function() {
    var items = [
      "Do the washing up",
      "Make an angular app",
      "Go for a run"
    ]

    expect(ctrl.taskList).toEqual(items);
  });
});