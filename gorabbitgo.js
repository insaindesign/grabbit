var casper = require('casper').create();
var config = require('./config');
var listOfPages = require('./list');
var sanitise = require('sanitize-filename');

var d = new Date();
var date = [d.getFullYear(), (d.getMonth() + 1), d.getDate()].join('_');
var time = [d.getHours(), d.getMinutes()].join('_');

if (!config.login.email || !config.login.pass) {
  throw new Error('You must specify a login and password. Modify config.js.');
}

// Login to Facebook
console.log('Logging in to', config.loginURL, 'as', config.login.email);
casper.start(config.loginURL, function() {
  this.fill('form#login_form', config.login, true);
});

// Login approvals check
if (config.requireApproval) {
  console.log(
    'Waiting for login approval, go to ' + config.loginURL +
    ', open your notifications and allow access. You have 30 seconds!'
  );
  casper.wait(30000);
  casper.then(function() {
    console.log('Done waiting, I hope you approved in time!');
  });
}

// then go to all the pages listed and save screenshots
listOfPages.forEach(function(page) {
  casper.thenOpen(page.url, function() {
    console.log('Opening page', page.url);
    this.waitForSelector(page.loadSelector || 'body', function() {
      var filename = './out/'+sanitise(page.name+'-'+date+'-'+time)+'.png';
      console.log(
        'Taking screenshot of "'+ page.name +'",'+
        ' saving to "' + filename + '"'
      );
      if (page.captureSelector) {
        this.captureSelector(filename, page.captureSelector);
      } else {
        this.capture(filename);
      }
    });
  });
});

casper.run();
