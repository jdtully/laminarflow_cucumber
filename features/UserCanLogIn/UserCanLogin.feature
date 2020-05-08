
Feature: User Can Log in

        Scenario: Login to the initial page for laminarflow.io
            Given A web browser is at the laminarflow.io home page
             When Tries  to login
             Then the user is logged in and the dashboard shown