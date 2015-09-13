describe('To Do List', function() {
  var inputBox = element(by.model('ToDoCtrl.taskItem'));
  var taskButton = element(by.className('btn'));
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('To-Do List App');
  });

  it('displays items added to the list', function() {
    inputBox.sendKeys('Make an angular app');
    taskButton.click();
    expect(element(by.binding('task')).getText()).toEqual('Make an angular app');
  });

  it('displays number of items in the list', function() {
    inputBox.sendKeys('Make an angular app');
    taskButton.click();
    expect(element(by.className('count')).getText()).toEqual('1 items left');
  });
});