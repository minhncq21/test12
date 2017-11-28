Feature: Registration Recruitment screen

Background:
 Given user logged into Connect with contractee role
 When user clicks on "募集案件を登録" in left menu
 Then user should see "募集案件管理" page with list recruitment is created

 Scenario: Verify “create recruitment" button on recruitment list page
 Then user should see "募集案件管理" page with list recruitment is created
 And user should see button "新規案件を追加" is orange
 And user should see table with information such as: title, status, paper-view, number of applicants, number of message, edit
 When user clicks on "新規案件を追加" button
 Then user should see "募集案件の登録" page for creating an recruitment

@watch
 Scenario: Verify “create recruitment” button on recruitment page with require fields
 When user clicks on "新規案件を追加" button
 And user should see "募集案件の登録" page for creating an recruitment
 When user inputs "this is title" in title field
 And user inputs "this is description" in description field
 And user selects "2017.12.01" in recruitment end date
 And user selects "2017.12.05" in adoption date
 And user selects "東京都" in working area
 And user selects "2017.12.10" in start date
 And user selects "2017.12.20" in end date
 And user selects "三次以下" for contact hierarchy