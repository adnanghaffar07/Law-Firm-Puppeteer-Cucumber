Feature: Login
        Scenario: Login to the H & H consulting platform
            Given I am online at "https://demo.hnhconsulting.ca/#/qaexam1"
             When I login with email "adnan.qat123@gmail.com" and password "candidate123"
             Then I should see homepage
