describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initializes with an empty list', function() {
    expect(ctrl.taskList.length).toBe(0);
  });

  describe('adding tasks to the to-do list', function() {
    var items = [
      { taskName: "Do the washing up",
        completed: false,
        display: true }
    ]

    it('displays the task added to the list', function() {
      ctrl.taskItem = 'Do the washing up';
      ctrl.addTask();
      expect(ctrl.taskList).toEqual(items);
    });
  });

  describe('marking a task as done', function() {
    xit('marks a task as completed', function() {

    });
  });
});