import { AngularRxjsTestPage } from './app.po';

describe('angular-rxjs-test App', function() {
  let page: AngularRxjsTestPage;

  beforeEach(() => {
    page = new AngularRxjsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-rxjs-test works!');
  });
});
