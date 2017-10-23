import { PlanetWarsPage } from './app.po';

describe('planet-wars App', function() {
  let page: PlanetWarsPage;

  beforeEach(() => {
    page = new PlanetWarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
