var webdriverio = require('webdriverio');

const expect = require('chai').expect;
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
module.exports=function(){
    this.Given(/^user go to Facebook log in page$/,function(){
        browser.url('https://www.facebook.com/login');
        browser.pause(3000);
    });
    //Scenario: Verify Facebook logo
    this.When(/^user click on facebook logo in the blue bar$/,function(){
        browser.click('//*[@href="https://www.facebook.com/"]');
    });
    this.Then(/^user is redirected to facebook login and sign up page$/, function(){
        var text = browser.getText('._5iyx');
        expect(text).to.equal('Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.');
    //Scenario: Verify sign up button    
    });
    this.When(/^user click on sign up button$/, function(){
        browser.click('._42ft._4jy0.signup_btn._4jy4._4jy2.selected._51sy');
    });
    this.Then(/^user is redirected to Sign up for Facebook page$/, function(){
        var text = browser.getText('.mbs._52lq.fsl.fwb.fcb');
        expect(text).to.equal('Tạo tài khoản mới')
    });
    //Scenario: Verify login successfully
    this.When(/^user enter "([^"]*)" in (email field|password field)$/, function(text, field){
        switch (field) {
            case "email field":
              browser.setValue('#email',text);
              break;
            case "password field":
               browser.setValue('#pass',text);
               break;
        }
    });
    this.When(/^user click on login button$/, function(){
        browser.click('#loginbutton');
        browser.pause(3000);
    });
    this.Then(/^user login successfully$/, function(){
        var title = browser.getTitle();
        expect(title).to.equal('Facebook');
        browser.pause(3000);
        
    browser.click('.hasLeftCol._2yq.home.composerExpanded._5vb_.fbx._-kb._2ltu._605a._61s0.a_1cz3on-39m.chrome.webkit.win.x1.Locale_vi_VN.cores-gte4.hasAXNavMenubar');
    browser.pause(1000);
    browser.click('#userNavigationLabel');
    browser.pause(1000);
    browser.click('._54ni.navSubmenu._6398._64kz.__MenuItem');

    });
    //Scenario Outline: Verify login function unsuccessfully
    this.Then(/^user see "([^"]*)"$/, function(error){
        expect(browser.getText('div._4rbf._53ij')).to.equal(error)
    });
    //Scenario: Verify forgotten account? hyperlink
    this.When(/^user click on Forgotten account hyperlink$/, function(){
        browser.click('#forgot-password-link');
    });
    this.Then(/^user is redirected to Forgotten Password screen$/, function(){
        var text = browser.getText('.uiHeaderTitle');
        expect(text).to.equal('Tìm tài khoản của bạn')
    });
    //Scenario: Verify Sign up for Facebook hyperlink
    this.When(/^user click on Sign up for Facebook hyperlink$/, function(){
        browser.click('#reg-link');
    });
    //Scenario: Verify login function when inputting nothing
    this.When(/^user see button "Khôi phục tài khoản của bạn"$/, function(){
        var text = browser.getText('._42ft._4jy0._62c3._4jy4._517h._51sy');
        expect(text).to.equal('Khôi phục tài khoản của bạn')
    });
}