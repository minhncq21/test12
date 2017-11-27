var webdriverio = require('webdriverio');

const expect = require('chai').expect;
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
module.exports=function(){
    this.Given(/^user go to welcome screen$/,function(){
        browser.url('http://192.168.86.103:3000');     
    });
    this.When(/^user click on ログイン button$/, function(){
        browser.click('.sc-gGBfsJ.gAkoTF')
        browser.pause(3000);  
    });
    this.Then(/^user is redirected kinkan login screen$/, function(){
        var text = browser.getText('.sc-hEsumM.jMZpVs')
        expect(text).to.equal('ログイン')
    })
    this.When(/^user input MCDP-ID of foreman$/, function(){
        browser.setValue('(//input)[1]','0002');  
    });
    this.When(/^user input password$/, function(){
        browser.setValue('(//input)[2]','kinkan');
    });
    this.When(/^user click on login$/, function(){
        browser.click ('(//button)[2]'); 
        browser.pause(5000);
    });
    this.Then(/^user is redirected attendace list screen$/, function(){
        browser.isVisible('(//button)[1]'); 
    });
    this.When(/^user click on select closing day$/, function(){
        browser.click('(//button)[2]');
        browser.pause(5000);
    });
    this.When(/^user select month$/, function(){
        browser.click('(//span)[18]');
        browser.pause(2000);
    });
    this.When(/^user select one record$/, function(){
        browser.click('(//span)[24]')
        browser.pause(2000);
    });
    this.When(/^user press delete record$/, function(){
        browser.click ('(//button)[3]')
    });
    this.When(/^user click on cancel button$/, function(){
        browser.click('(//button)[5]');
        browser.pause(2000);
    });
    this.Then(/^user back to attendance detail screen$/, function(){
        var text = browser.getText('(//span)[1]')
        expect(text).to.equal('詳細')
    });
    this.When(/^user click on OK button$/, function(){
        browser.click('(//button)[6]');
        browser.pause(2000);
    });

}   