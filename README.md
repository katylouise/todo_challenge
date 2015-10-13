# Organise Your Life

A simple organisational tool created in Angular served up with a simple Node.js server.  It is tested using Karma and Protractor.

## Getting Started

```
git clone https://github.com/katylouise/todo_challenge.git
cd todo_challenge
npm install
bower install
node server.js
```
Go to localhost:3000

## Running Tests

To run karma:

```
npm test
```

To run protractor:

```
webdriver-manager start
http-server
protractor test/e2e/conf.js
```

## v1.0

* You can add tasks to the list.
* Once completed, a task can be struck-through.
* Tasks can be filtered by active or completed.

