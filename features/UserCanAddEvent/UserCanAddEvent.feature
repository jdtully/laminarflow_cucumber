Feature: User Can Add an Event

        Scenario: The  user wants to log in and  add an event
            Given A web browser is at the login page
             When The user puts testUser in the name field
              And The user puts the testpassword in the password field
              And The user clicks login
            Then The "#root" is displayed
            And The user clicks the event button
            And The user can click the new event icon
