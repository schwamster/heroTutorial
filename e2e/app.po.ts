import { browser, element, by } from 'protractor';

export class HeroTutorialPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrowserTitle() {
    return browser.getTitle();
  }

  printHeadingH1InMyApp() {
    console.log('Heading h1 in my-app: ');
    this.getHeadingH1InMyApp().then(result => console.log(result));
  }
  getHeadingH1InMyApp() {
    return element(by.css('my-app h1')).getText();
  }

  printHeadingH3InMyApp() {
    console.log('Heading h3 in my-app: ');
    this.getHeadingH3InMyApp().then(result => console.log(result));
  }
  getHeadingH3InMyApp() {
    return element(by.css('my-app h3')).getText();
  }

  printHeadingH2InMyHeroDetail() {
    console.log('Heading h2 in my-hero-detail: ');
    this.getHeadingH2InMyHeroDetail().then(result => console.log(result));
  }
  getHeadingH2InMyHeroDetail() {
    return element(by.css('my-hero-detail h2')).getText();
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
