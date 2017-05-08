import { StreamNgDemoPage } from './app.po';

describe('stream-ng-demo App', () => {
  let page: StreamNgDemoPage;

  beforeEach(() => {
    page = new StreamNgDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
