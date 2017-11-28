const expect = require('chai').expect;

module.exports=function(){
    //Background
this.Given(/^user logged into Connect with contractee role$/,function(){
    browser.url('http://192.168.86.117:3000/login')
    browser.setValue('#session_mcdp_id','ITR00018');
    browser.click('//input[@type="submit"]')
    
});
this.When(/^user clicks on "(.*)" in left menu$/, function(text){
    browser.pause(1000);
    browser.click('i.menu-icon-btn');
    browser.click('//*[text()="募集案件を登録"]');
    
});
this.Then(/^user should see "(.*)" page with list recruitment is created$/, function(text){
    var text = browser.getText('.page-title');
    expect(text).to.equal('募集案件管理');
});
//Scenario: Verify “create recruitment" button on recruitment list page
this.When(/^user should see button "(.*)" is orange$/, function(text){
    var text = browser.getText('.btn-standard-1.cub-btn');
    expect(text).to.equal('新規案件を追加');
});
this.When(/^user should see table with information such as: title, status, paper-view, number of applicants, number of message, edit$/, function(){
    var title = browser.getText('//th[1]');
    expect(title).to.equal('タイトル');
    var tstatusext = browser.getText('//th[2]');
    expect(tstatusext).to.equal('ステータス');
    var paperview = browser.getText('//th[3]');
    expect(paperview).to.equal('閲覧数');
    var numberofapplicants = browser.getText('//th[4]');
    expect(numberofapplicants).to.equal('連絡社数');
    var numberofmessage = browser.getText('//th[5]');
    expect(numberofmessage).to.equal('メッセージ数');
    var edit = browser.getText('//th[6]');
    expect(edit).to.equal('編集');
});
this.When(/^user clicks on "(.*)" button$/, function(text){
    browser.click('.menu-icon-btn');
    browser.click('.btn-standard-1.cub-btn');
});
this.Then(/^user should see "(.*)" page for creating an recruitment$/, function(text){
    var title = browser.getText('.page-title');
    expect(title).to.equal('募集案件の登録');
});
//Scenario: Verify “create recruitment” button on recruitment page with require fields
// this.When(/^user inputs title for recruitment$/, function(){
//      browser.setValue('.title .md-input', 'this is title');
// });
// this.When(/^user inputs description for recruitment$/, function(){
//      browser.setValue('.description textarea', 'this is description');
// });
this.When(/^user inputs "(.*)" in (title|description) field$/, function (text, field) {
    switch (field){
      case "title":
      browser.setValue('.title .md-input',text);
        break;
      case "description":
      browser.setValue('.description textarea',text);
        break;
    }
  });

this.When(/^user selects "(.*)" in (recruitment end|adoption|start|end) date$/, function(text, field){
    switch (field){
        case "recruitment end":
        browser.setValue('.input-1.js-datetimepicker-expire-date',text);
            break;
        case "adoption":
        browser.setValue('.input-1.js-datetimepicker-adoption-date',text);
            break;
        case "start":
        browser.setValue('.input-1.js-datetimepicker-started', text);
            break;
        case "end":
        browser.setValue('.input-1.js-datetimepicker-ended', text);
            break;
      }
      browser.click('.title .md-input');
    });
this.When(/^user selects "(.*)" in working area$/, function(text){
    browser.pause(200);
    browser.click('.prefecture .md-select-value');
    browser.elements('.md-menu-content .md-list').click(".md-list-item*=" + text);
});
this.When(/^user selects "(.*)" for contact hierarchy$/, function(text){
    browser.elements('.contract-hierarchy .pc-radio ').click(".md-radio*=" + text);
    //var abbbbbbbbbbbb = browser.getText('#contract-hierarchy-3');
    //console.log(abbbbbbbbbbbb);
});
}