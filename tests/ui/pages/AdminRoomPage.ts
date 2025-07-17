import { Locator, Page, expect } from '@playwright/test';

export class AdminRoomPage {
    readonly page: Page;
    readonly roomNumberInput: Locator;
    readonly typeDropdown: Locator;
    readonly accessibleDropdown: Locator;
    readonly priceInput: Locator;
    readonly createButton: Locator;
    readonly errorToast: Locator;

    constructor(page: Page) {
        this.page = page;
        this.roomNumberInput = page.locator('#roomName');
        this.typeDropdown = page.locator('#type');
        this.accessibleDropdown = page.locator('#accessible');
        this.priceInput = page.locator('#roomPrice');
        this.createButton = page.locator('#createRoom');
        this.errorToast = page.locator('.alert.alert-danger');
    }

    async createRoom(roomNumber: string, type: string, price: string) {
        await this.roomNumberInput.fill(roomNumber);
        await this.typeDropdown.selectOption(type);
        await this.accessibleDropdown.selectOption('true');
        await this.priceInput.fill(price);
        await this.createButton.click();
    }

    async isCreationFailed(): Promise<boolean> {
        return await this.errorToast.isVisible();
    }

    async isRoomVisible(roomNumber: string): Promise<boolean> {
        const locator = this.page.locator(`#roomName${roomNumber}`);
        try {
            await locator.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch {
            console.error(`Room with number ${roomNumber} is not visible.`);
            return false;
        }
    }


}