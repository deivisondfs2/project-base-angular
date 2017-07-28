import { HeroAngularPage } from './app.po';

describe('hero-angular App', () => {
  let page: HeroAngularPage;

  beforeEach(() => {
    page = new HeroAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
