import { BilletsEnConcertFrontPage } from './app.po';

describe('billets-en-concert-front App', function() {
  let page: BilletsEnConcertFrontPage;

  beforeEach(() => {
    page = new BilletsEnConcertFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
