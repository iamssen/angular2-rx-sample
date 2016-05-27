export class AngularRxjsTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-rxjs-test-app h1')).getText();
  }
}
