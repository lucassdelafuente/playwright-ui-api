import { Page, Locator } from '@playwright/test';

export class GeolocationPage {
  readonly page: Page;
  readonly latitude: Locator;
  readonly longitude: Locator;
  readonly getMyLocationButton: Locator;
  readonly location: Locator;

  constructor(page: Page) {
    this.page = page;
    this.latitude = this.page.locator('#lat-value');
    this.longitude = this.page.locator('#long-value');
    this.getMyLocationButton = this.page.locator('#submit');
    this.location = this.page.locator('#location');
  }

  async goToGeolocationPage(): Promise<void> {
    await this.page.goto('/geolocation');
  }

  async getMyLocation(): Promise<void> {
    await this.getMyLocationButton.click();
  }

  async getLatitude(): Promise<string> {
    return this.latitude.innerText();
  }

  async getLongitude(): Promise<string> {
    return this.longitude.innerText();
  }

  async getLocation(): Promise<unknown> {
    // Get the location of the page
    const pageLocation = await this.page.evaluate(() => {
      return new Promise((resolve, reject) => {
        const watchId = navigator.geolocation.watchPosition(
          (position) =>
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
          (error) => reject(error),
          { timeout: 10000 }
        );
        setTimeout(() => {
          navigator.geolocation.clearWatch(watchId);
          reject(new Error('Geolocation timeout'));
        }, 10000);
      });
    });

    return pageLocation;
  }
}
