describe('To Do List', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('To-Do List App');
  });

  it('displays items added to the list', function() {
    element(by.model('ToDoCtrl.taskItem')).sendKeys('Make an angular app');
    element(by.className('btn')).click();

    expect(element(by.binding('task')).getText()).toEqual('Make an angular app');
  });
});