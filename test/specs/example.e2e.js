import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('User logs in with valid credentials', () => {
        LoginPage.open();
        LoginPage.setLogin('tanya.brant@me.com');
        LoginPage.setPassword('123123');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

        // LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // expect(SecurePage.flashAlert).toBeExisting();
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


