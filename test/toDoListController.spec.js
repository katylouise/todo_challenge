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
        completed: false }
    ]

    beforeEach(function() {
      ctrl.taskItem = 'Do the washing up';
      ctrl.addTask();
    });

    it('displays the task added to the list', function() {
      expect(ctrl.taskList).toEqual(items);
    });
  });

  describe('marking a task as done', function() {
    beforeEach(function() {
      ctrl.taskItem = 'Do the washing up';
      ctrl.addTask();
    });

    it('marks a task as completed', function() {
      ctrl.toggleCompletion(ctrl.taskList[0]);
      expect(ctrl.taskList[0]["completed"] === true);
    });

    it('can count the number of active tasks', function() {
      ctrl.taskItem = 'Go to the gym';
      ctrl.addTask();
      ctrl.toggleCompletion(ctrl.taskList[0]);
      expect(ctrl.count()).toEqual(1);
    });

    it('can clear all tasks', function() {
      ctrl.clearAll();
      expect(ctrl.taskList.length).toEqual(0);
    });
  });
});