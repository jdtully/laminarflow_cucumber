Feature: User Can Log in

        Scenario: Login to the initial page for laminarflow
            Given A web browser is at the login page
             When The user puts "ctester" in the name field
              And The user puts the "w5KjzGVi2jisTc" password in the password field
             Then The user dashboard is displayed