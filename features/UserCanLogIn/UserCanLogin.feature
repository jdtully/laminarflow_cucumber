Feature: User Can Log in

        Scenario: Login to the initial page for laminarflow
            Given A web browser is at the login page
             When The user puts "Jdtully" in the name field
              And The user puts the "m5qR38cxtCDKezd" password in the password field
              And The user clicks login
             Then The "#root" is displayed