import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Pokemon App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('POKÉMON APP');
  });

  it('should display input filter', () => {
    page.navigateTo();
    expect(page.getInputFilter().isPresent()).toEqual(true);
  });

  it('should display search filter button', () => {
    page.navigateTo();
    expect(page.getSearchButton().getText()).toEqual('search');
  });

  it('should display pokemon card', () => {
    page.navigateTo();
    expect(page.getCardPokemon()).toEqual(true);
  });

  it('should route to card detail', () => {
    page.navigateTo();
    page.getDetailButton().click();
    expect(page.getDetailCard()).toEqual(true);
  });

  it('should display attack details', () => {
    page.navigateTo();
    page.getInputFilter().sendKeys('pikachu');
    page.getSearchButton().click();
    page.getDetailButton().click();
    page.getLinkAttack().click();
    expect(page.getDetailAttack()).toEqual(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
