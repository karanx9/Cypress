Feature: Simple form

Scenario: To validate simple form

Given User open the simple form url

When user entered firstname,lastname,email,message

And  click on submit

Then An alert saying successful message has to be displayed.


