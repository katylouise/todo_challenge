describe('To Do List', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('To-Do List App');
  });
});