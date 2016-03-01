#User story used to explain what is going on
# Based on http://www.mhurwi.com/tutorial-test-driven-development-with-meteor-cucumber-chimp/
Feature: Create a Widget
  As a visitor to the site,
  so that I can manage widgets,
  I want to create and delete widgets on my homepage.
  
  	#steps taken before every scenario
    Background:
        Given I am on the site

    @watch
    Scenario: Visitor creates a widget
        #what we are testing
        When I name a widget "alpha"
        And submit the form
        Then I should see a list of widget names containing "alpha"