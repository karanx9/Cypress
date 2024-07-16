import Login_po from "../../../support/Page objects/Orangehrm/Login po";
import Link_po from "../../../support/Page objects/Orangehrm/Link po";
import Logout_po from "../../../support/Page objects/Orangehrm/Logout po";


describe('', () => {


    const login_po = new Login_po();
    const link_po = new Link_po;
    const logout_po = new Logout_po;
    it('Test1', () => {
        //login 
        login_po.EnterURL();
        login_po.Login();

        //click on the  Admin link
        link_po.linkclick('Admin')

        //Logging out.
        logout_po.logout();

    });
});