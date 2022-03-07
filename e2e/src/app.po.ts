import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root [id="title"]')).getText() as Promise<string>;
  }

  getInputFilter() {
    return element(by.css('app-lista-carta-pokemon [id="input-filter"]'));
  }

  getSearchButton() {
    return element(by.css('app-lista-carta-pokemon [id="button-search"]'));
  }

  getCardPokemon(): Promise<boolean> {
    return element(by.css('app-card-pokemon')).isPresent() as Promise<boolean>;
  }

  getDetailButton() {
    return element(by.css('app-card-pokemon [id="button-details"]'));
  }

  getDetailCard(): Promise<boolean> {
    return element(by.css('app-detalhe-carta-pokemon')).isPresent() as Promise<boolean>;
  }

  getLinkAttack() {
    return element(by.css('app-detalhe-carta-pokemon [id="link-attack"]'));
  }

  getDetailAttack(): Promise<boolean> {
    return element(by.css('mat-dialog-container')).isPresent() as Promise<boolean>;
  }
}
