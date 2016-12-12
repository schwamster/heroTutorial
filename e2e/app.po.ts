import { browser, element, by } from 'protractor';
import { ILocation, ISize, promise as wdpromise, WebDriver, WebElement, WebElementPromise } from 'selenium-webdriver';

export class HeroTutorialPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrowserTitle() {
    return browser.getTitle();
  }

  printHeadingH1InMyApp() {
    this.getHeadingH1InMyApp().then(result => console.log(`Heading h1 in my-app (/dashboard): ${result}`));
  }
  getHeadingH1InMyApp() {
    return element(by.css('my-app h1')).getText();
  }

  printHeadingH3InMyDashboard() {
    this.getHeadingH3InMyDashboard().then(result => console.log(`Heading h3 in my-dashboard (/dashboard): ${result}`));
  }
  getHeadingH3InMyDashboard() {
    return element(by.css('my-app h3')).getText();
  }

  printHeadingH2InMyHeroes() {
    return this.getHeadingH2InMyHeroes().then(result => {
      console.log(`Heading h2 in my-heroes (/heros): ${result}`);
      return result;
    });
  }
  getHeadingH2InMyHeroes() {
    return element(by.css('my-heroes h2')).getText();
  }

  clickButtonDashboard() {
    return element(by.linkText('Dashboard')).click();
  }

  clickButtonHeroes() {
    return element(by.linkText('Heroes')).click();
  }

  printHeroNameForSecondHeroInDashboard() {
    this.getHeroNameForSecondHeroInDashboard()
      .then(result => console.log(`Hero name for second hero in dashboard: ${result}`));
  }
  getHeroNameForSecondHeroInDashboard() {
    return element(by.xpath('//a[2]/div/h4')).getText();
  }
  getHeroNameForSecondHeroInDashboardSlow(): wdpromise.Promise<string> {
    return new wdpromise.Promise<string>(resolve =>
      setTimeout(resolve, 5000)) // delay 5 seconds
      .then(() => this.getHeroNameForSecondHeroInDashboard());
  }
  isPresentHeroNameForSecondHeroInDashboard() {
    browser.wait(() => {
      return browser.element(by.xpath('//a[2]/div/h4')).isPresent()
    }, 50 * 1000);
  }

  clickSecondHeroInDashboard() {
    return element(by.xpath('//a[2]/div/h4')).click();
  }

  printHeadingH2InMyHeroDetail() {
    this.getHeadingH2InMyHeroDetail().then(result => console.log(`Heading h2 in my-hero-detail (/detail/x): ${result}`));
  }
  getHeadingH2InMyHeroDetail() {
    return element(by.css('my-hero-detail h2')).getText();
  }

  enterHeroName(heroName: string) {
    //let idStr = by.xpath('//input');
    let idStr = this.getXPath('at-name');
    return element(idStr).clear().then(() => {
      element(idStr).sendKeys(heroName);
    });
  }

  clickButtonSaveOfHeroDetails() {
    return element(this.getXPath('at-save')).click();
  }

  getXPath(testId: string) {
    return by.xpath(`*//*[@test-id="${testId}"]`);
  }

  // getListOfHeroes() {
  //   return [];
  // }

  printOneHeroInList() {
    console.log('Print one hero in the list: ');
    this.getTextForOneHero().then(result => console.log(result));
  }
  getTextForOneHero() {
    return element(by.xpath('//li[10]')).getText();
  }
  clickHeroInList() {
    return element(by.xpath('//li[10]')).click();
  }

}
