import { StreamNg2DemoPage } from './app.po';

describe('stream-ng2-demo App', () => {
  let page: StreamNg2DemoPage;

  beforeEach(() => {
    page = new StreamNg2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
