import { IgtbPage } from './app.po';

describe('igtb App', function() {
  let page: IgtbPage;

  beforeEach(() => {
    page = new IgtbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
