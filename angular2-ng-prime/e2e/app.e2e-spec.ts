import { Angular2NgPrimePage } from './app.po';

describe('angular2-ng-prime App', () => {
  let page: Angular2NgPrimePage;

  beforeEach(() => {
    page = new Angular2NgPrimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
