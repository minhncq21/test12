const expect = require('chai').expect;

module.exports=function(){
this.Given(/^user logged into Connect with contractee role$/,function(){
    browser.url('http://192.168.86.117:3000/login')
    browser.pause(2000);
    browser.setValue('#session_mcdp_id','NLU01035');
    browser.click('//input[@type="submit"]')
    browser.pause(4000);
});
this.When(/^user clicks on "(.*)" in left menu$/, function(text){
    browser.click('i.menu-icon-btn');
    browser.pause(2000);
    browser.click('//*[text()="募集案件を登録"]');
    browser.pause(2000);
});
this.Then(/^user should see "(.*)" page with list recruitment is created$/, function(text){
    var text = browser.getText('.page-title');
    expect(text).to.equal('募集案件管理');
});
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
    //browser.click('//*[text()="新規案件を追加"]');
    browser.click('.btn-standard-1');
    browser.pause(2000);
});
this.Then(/^user should see "(.*)" page for creating an recruitment$/, function(text){
    var title = browser.getText('.page-title');
    expect(title).to.equal('募集案件の登録');
    browser.pause(2000);
});
/*this.When(/^user should see order columns following: title, description, recruitment end date, prefecture, city, started at date, ended at date, company job type, contract hierarchy, budget, number of worker, Payment conditions, method$/, function(){

    //var title = browser.getText('//*[text()="タイトル"]');
    //expect(title).to.equal('タイトル');
    var content = browser.getText('.header-1');
    console.log(content);
    expect (content).to.equal(['タイトル 必須',
    '詳細',
    '募集終了日 必須',
    '依頼予定期日 必須',
    '工事場所 必須',
    '工事期間 必須',
    '工事内容 必須',
    '発注者の次数 必須',
    '金額情報 必須',
    '必要な人数規模',
    '支払条件・方法']);
});*/
}