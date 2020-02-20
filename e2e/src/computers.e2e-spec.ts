import {browser, by, element, logging} from 'protractor';
import {ComputerPage} from './computers.po';

describe('Test Formulaire Computer', () => {
    let page: ComputerPage;
    let nbLineInit: number;

    beforeEach(() => {
      page = new ComputerPage();
      browser.get('/home');
    });

    it('Validation Formulaire', () => {
        element.all(by.css('.lineComputer')).then(totalRows => {
          this.nbLineInit = totalRows.length;
        });
        element.all(by.css('.adminBtn')).first().click();
        expect(browser.driver.getCurrentUrl()).toContain('/admin');
        element.all(by.id('btnAddComputer')).click();
        expect(browser.driver.getCurrentUrl()).toContain('/admin');
        page.completeForm();
        page.sleep();
        element.all(by.id('submitFormComputer')).click();
        expect(browser.get('/home'));
    });

    it('Notre tableau contient une ligne de plus !', () => {
        element.all(by.css('.lineComputer')).then(totalRows => {
          this.nbLineInit += 1;
          expect(totalRows.length).toEqual(this.nbLineInit);
          page.sleep();
        });
      });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
