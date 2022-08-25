Feature: Manage Users
        Scenario: Add User and verify user is added to the list
            Given I am online at "https://demo.hnhconsulting.ca/#/qaexam1"
             When I login with email "adnan.qat123@gmail.com" and password "candidate123"
              And I should see homepage
              And I add user with user name "Test", email "Test@email.com" and role "Admin"
             Then I see user with email "Test@email.com"

        Scenario: Edit user and veriy user is edited
            Given I am online at "https://demo.hnhconsulting.ca/#/qaexam1"
             When I login with email "adnan.qat123@gmail.com" and password "candidate123"
              And I should see homepage
              And I edit the user with user name "EditedUser"
             Then I see user with user name "EditedUser"

        Scenario: Delete User and Verify
            Given I am online at "https://demo.hnhconsulting.ca/#/qaexam1"
             When I login with email "adnan.qat123@gmail.com" and password "candidate123"
              And I should see homepage
              And I delete the user "EditedUser"
             Then I can't see user with user name "EditedUser"

        Scenario: Reset fileds and verify
            Given I am online at "https://demo.hnhconsulting.ca/#/qaexam1"
             When I login with email "adnan.qat123@gmail.com" and password "candidate123"
              And I should see homepage
              And I fill fields with user name "TestUser", email "QW@email.com" and role "User"
              And I click on reset button
             Then I see fields are empty