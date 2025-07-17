import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorToast: Locator;

    static readonly DEFAULT_USERNAME = 'admin';
    static readonly DEFAULT_PASSWORD = 'password';

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#doLogin');
        this.errorToast = page.locator('.alert.alert-danger');
    }

    async login(
        username: string = LoginPage.DEFAULT_USERNAME,
        password: string = LoginPage.DEFAULT_PASSWORD
    ) {
        await this.page.goto('/admin');
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async isLoginFailed(): Promise<boolean> {
        return await this.errorToast.isVisible();
    }

}