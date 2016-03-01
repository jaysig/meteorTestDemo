module.exports = function() {  
 'use strict';

 this.Given(/^I am on the site$/, function () {
      browser.url('http://localhost:3000');
 });

 this.When(/^I name a widget "([^"]*)"$/, function (arg1) {
   browser.setValue('input[name="widgetName"]', arg1);
 });

 this.When(/^submit the form$/, function () {
       browser.click('input[type="submit"]');
 });

 this.Then(/^I should see a list of widget names containing "([^"]*)"$/, function (arg1) {
      let _el = '.widget-name';
      browser.waitForVisible(_el);
      expect(browser.getText(_el)).toEqual(arg1);
 });
};