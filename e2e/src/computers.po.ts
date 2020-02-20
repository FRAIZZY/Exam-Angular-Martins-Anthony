import { browser, by, element } from 'protractor';

export class ComputerPage {
  sleep() {
    browser.driver.sleep(5000);
  }
  completeForm() {
  let modele = element.all(by.name('modele'));
  let marque = element.all(by.id('marque-Apple'));
  let type = element.all(by.name('type'));
  let category = element.all(by.id('category-Gaming'));
  let prixAchat = element.all(by.name('prixAchat'));
  let prixVente = element.all(by.name('prixVente'));

  modele.sendKeys('test e2e Computer');
  marque.click();
  type.sendKeys('Fixe');
  category.click();
  prixAchat.sendKeys(500);
  prixVente.sendKeys(1000);
  }

}
