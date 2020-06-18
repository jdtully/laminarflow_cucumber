Feature: User can log in
    Scenario: User wants to login
        Given I visit the laminarflow login page
        When I enter the username and password
        Then I should see the console
    
