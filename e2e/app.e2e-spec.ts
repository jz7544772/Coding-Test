import { CodingTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('coding-test App', () => {
  let page: CodingTestPage;

  beforeEach(() => {
    page = new CodingTestPage();
  });

  it('should display list of restaurant-items for valid outcode', () => {
    page.navigateTo();
    
    const outcodeInput = element(by.css('input[name="outcode"]'));
    const submitButton = element(by.css('button[type="submit"]'));
    expect(outcodeInput.isPresent()).toBeTruthy();
    expect(submitButton.isPresent()).toBeTruthy();

    outcodeInput.sendKeys('se20');
    expect(outcodeInput.getAttribute('value')).toEqual('se20');

    
    submitButton.click().then(() => {
      return browser.waitForAngular();
    }).then(() => {
      const restaurantItems = element.all(by.css('.restaurant-item'));
      expect(restaurantItems.count()).toBeGreaterThan(0);
    });
  });

  it('should display error message for invalid outcode', () => {
    page.navigateTo();
    
    const outcodeInput = element(by.css('input[name="outcode"]'));
    const submitButton = element(by.css('button[type="submit"]'));
    expect(outcodeInput.isPresent()).toBeTruthy();
    expect(submitButton.isPresent()).toBeTruthy();

    outcodeInput.sendKeys('0');
    expect(outcodeInput.getAttribute('value')).toEqual('0');

    submitButton.click().then(() => {
      return browser.waitForAngular();
    }).then(() => {
      const errorMessage = element(by.css('.error-message'));
      expect(errorMessage.isPresent()).toBeTruthy();
      expect(errorMessage.getText()).not.toEqual('');
    });
  });
});
