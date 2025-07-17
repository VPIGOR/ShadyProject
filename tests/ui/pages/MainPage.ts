import { Page, Locator } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly subjectInput: Locator;
  readonly messageTextarea: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.phoneInput = page.locator('#phone');
    this.subjectInput = page.locator('#subject');
    this.messageTextarea = page.locator('#description');
    this.submitButton = page.locator('//button[contains(text(),"Submit")]');
    this.successMessage = page.locator('//p[contains(text(),"We\'ll get back to you about")]');
  }

  async submitContactForm(name: string = "", email: string = "", phone: string = "", subject: string = "", message: string = "") {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.subjectInput.fill(subject);
    await this.messageTextarea.fill(message);
    await this.submitButton.click();
  }

  async isSuccessMessageVisible(): Promise<boolean> {
    return await this.successMessage.isVisible();
  }
}
