import { RapidProNgPage } from './app.po';

describe('rapid-pro-ng App', function() {
  let page: RapidProNgPage;

  beforeEach(() => {
    page = new RapidProNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
