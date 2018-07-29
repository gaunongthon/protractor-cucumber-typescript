
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import { CommonPage } from "../pages/common.page";
import { MyAccountPage } from "../pages/myaccount.page";
import { HomePage } from "../pages/home.page";
import { CartPopupPage } from "../pages/cartpopup.page";
import { QuickViewPage } from "../pages/quickview.page";
import { BasePage } from "../pages/base.page";
import { CartSummaryPage } from "../pages/cartsummary.page";

export class PageFactory {

    private loginPage: LoginPage;
    private mainPage: MainPage;
    private commonPage: CommonPage;
    private myAccountPage: MyAccountPage;
    private homePage: HomePage;
    private cartPopupPage: CartPopupPage;
    private quickViewPage: QuickViewPage;
    private cartSummaryPage: CartSummaryPage;


    private static instance: PageFactory;

    private constructor() { }

    static getInstance() {
        if (!PageFactory.instance) {
            PageFactory.instance = new PageFactory();
        }
        return PageFactory.instance;
    }

    getCartSummaryPage(): CartSummaryPage {
        if (this.cartSummaryPage == null)
            this.cartSummaryPage = new CartSummaryPage();

        return this.cartSummaryPage;
    }

    getQuickViewPage(): QuickViewPage {
        if (this.quickViewPage == null)
            this.quickViewPage = new QuickViewPage();

        return this.quickViewPage;
    }

    getCartPopupPage(): CartPopupPage {
        if (this.cartPopupPage == null)
            this.cartPopupPage = new CartPopupPage();

        return this.cartPopupPage;
    }

    getHomePage(): HomePage {
        if (this.homePage == null)
            this.homePage = new HomePage();

        return this.homePage;
    }

    getMyAccountPage(): MyAccountPage {
        if (this.myAccountPage == null)
            this.myAccountPage = new MyAccountPage();

        return this.myAccountPage;
    }

    getLoginPage(): LoginPage {
        if (this.loginPage == null)
            this.loginPage = new LoginPage();

        return this.loginPage;
    }

    getMainPage(): MainPage {
        if (this.mainPage == null)
            this.mainPage = new MainPage();

        return this.mainPage;
    }

    getCommonPage(): CommonPage {
        if (this.commonPage == null)
            this.commonPage = new CommonPage();

        return this.commonPage;
    }
}
