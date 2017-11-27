Feature: Kinkan foreman

  Background: Background
    Given user go to welcome screen
    And user click on ログイン button
    Then user is redirected kinkan login screen
    And user input MCDP-ID of foreman
    And user input password
    And user click on login
    Then user is redirected attendace list screen

  Scenario: Foreman attendace deleting
    When user click on select closing day
    And user select month
    And user select one record
    And user press delete record
    And user click on cancel button
    Then user back to attendance detail screen
    When user press delete record
    And user click on OK button
    Then user is redirected attendace list screen 