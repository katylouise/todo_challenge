describe('To Do List', function() {

  var inputBox = element(by.model('ToDoCtrl.taskItem'));
  var tasks = element.all(by.repeater('task in ToDoCtrl.taskList'));
  var activeButton = element(by.className('btn-active'));
  var completedButton = element(by.className('btn-completed'));
  var clearButton = element(by.className('btn-clear'));
  var allButton = element(by.className('btn-all'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  beforeEach(function() {
    inputBox.sendKeys('Make an angular app\n');
    inputBox.clear();
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List App');
  });

  it('displays items added to the list', function() {
    expect(element(by.binding('task')).getText()).toEqual('Make an angular app');
  });

  it('allows tasks to be struck-through when completed', function() {
    inputBox.sendKeys('Go to the gym\n');
    inputBox.clear();
    inputBox.sendKeys('Bake a cake\n');
    tasks.last().click();
    expect(tasks.last().getCssValue('text-decoration')).toEqual('line-through');
    expect(element(by.className('count_plural')).getText()).toEqual('2 items left');
  });

  it('displays count as singular for 1 item', function() {
    expect(element(by.className('count_singular')).getText()).toEqual('1 item left');
  });

  it('can display only active items', function() {
    inputBox.sendKeys('Go to the gym\n');
    tasks.first().click();
    activeButton.click();
    expect(tasks.count()).toEqual(1);
    expect(tasks.get(0).getText()).toEqual('Go to the gym');
  });

  it('can display only completed items', function() {
    inputBox.sendKeys('Go to the gym\n');
    tasks.last().click();
    completedButton.click();
    expect(tasks.count()).toEqual(1);
    expect(tasks.get(0).getText()).toEqual('Go to the gym');
  });

  it('can clear all items', function() {
    clearButton.click();
    expect(tasks.count()).toEqual(0);
  });

  it('can display all items', function() {
    inputBox.sendKeys('Go to the gym\n');
    tasks.last().click();
    activeButton.click();
    allButton.click();
    expect(tasks.count()).toEqual(2);
  });
});