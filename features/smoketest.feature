Feature: Automation Practice Smoke test

	@skipLogout
	Scenario Outline: Smoke test
		And I am at "Store" page
		And I log in Automation Practice
		Then I am at "My account" page
		And I click on <opt1>
		Then I am at <opt1> page
		And I return to My Account page
		Then I am at "My account" page
		And I click on <opt2>
		Then I am at <opt2> page
		And I return to My Account page
		Then I am at "My account" page
		And I click on <opt3>
		Then I am at <opt3> page
		And I return to My Account page
		Then I am at "My account" page
		And I log out Automation Practice
		Then I am at "Store" page

		Examples:
					| opt1|opt2|opt3|
					|"Order history"|"Order slip"|"Addresses"|
