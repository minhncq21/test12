
Feature: Facebook login page

  Background: Background
    Given user go to Facebook log in page

  Scenario: Verify Facebook logo
    When user click on facebook logo in the blue bar
    Then user is redirected to facebook login and sign up page
  
  Scenario: Verify sign up button
    When user click on sign up button
    Then user is redirected to Sign up for Facebook page 

  Scenario: Verify forgotten account? hyperlink
    When user click on Forgotten account hyperlink
    Then user is redirected to Forgotten Password screen
  
  Scenario: Verify Sign up for Facebook hyperlink
    When user click on Sign up for Facebook hyperlink
    Then user is redirected to Sign up for Facebook page
  
  Scenario: Verify login successfully
    When user input "han.minhnc@gmail.com" in email field
    And user input "Han1234do" in password field
    And user click on login button
    Then user login successfully

  Scenario Outline: Verify login function unsuccessfully
    When user enter <email> in email field
    And user enter <password> in password field
    And user click on login button
    Then user see <message>

    Examples:
      | email                       | password	| message |
      | abc123@gmail.com            |           | Mật khẩu bạn đã nhập không chính xác. Quên mật khẩu? |
      | han.minhnc@gmail.com        | 123	  	  | Mật khẩu bạn đã nhập không chính xác. Quên mật khẩu? |
      | 0983439700                  |           | Mật khẩu bạn đã nhập không chính xác. Quên mật khẩu? |
      | 0983439700                  | hihi      | Mật khẩu bạn đã nhập không chính xác. Quên mật khẩu? |
      | emailkhongton.tai@gmail.com |           | Email bạn đã nhập không khớp với bất kỳ tài khoản nào. Đăng ký tài khoản.|
      | ah536843fhi!@#@gmail.com    |           | Email hoặc số điện thoại bạn đã nhập không khớp với bất kỳ tài khoản nào. Đăng ký tài khoản. |
      | abc123@.com                 | 123qwe!@# | Email hoặc số điện thoại bạn đã nhập không khớp với bất kỳ tài khoản nào. Đăng ký tài khoản. |
      | 0169912880235               | 56555     | Email hoặc số điện thoại bạn đã nhập không khớp với bất kỳ tài khoản nào. Đăng ký tài khoản. | 
  
  Scenario: Verify login function when inputting nothing
  When user input "" in email field
  And user input "" in password field
  And user click on login button
  Then user see button "Khôi phục tài khoản của bạn"