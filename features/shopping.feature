Feature: Automation Practice Shopping

	@preconditionAdminlogin
	Scenario: Verifying shopping cart
		Given I am at "My account" page
		And I return to Home page
		And I open "first" product in "quick" view
		Then I add product to shopping cart in "quick" view
		And I continue shopping
		And I open "last" product in "quick" view
		And I add product to shopping cart in "quick" view
		And I proceed to checkout shopping cart
		Then I verify shopping cart summary contains all selected products
