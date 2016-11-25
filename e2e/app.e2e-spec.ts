import { HeroTutorialPage } from './app.po';

describe('hero-tutorial App', function () {
  let page: HeroTutorialPage;

  beforeEach(() => {
    page = new HeroTutorialPage();
  });

  it('Verify browser title "HeroTutorial"', () => {
    page.navigateTo();
    expect(page.getBrowserTitle()).toEqual('HeroTutorial');
  });

  it('Verify heading "Tour of Heroes" of type h1 in page "Dashboard"', () => {
    page.navigateTo();
    page.printHeadingH1InMyApp();
    expect(page.getHeadingH1InMyApp()).toEqual('Tour of Heroes');
  });

  it('Verify heading "Top Heroes" of type h3 in page "Dashboard"', () => {
    page.navigateTo();
    page.printHeadingH3InMyApp();
    expect(page.getHeadingH3InMyApp()).toEqual('Top Heroes');
  });

  // it('Verify change of hero name', () => {
  //   page.navigateTo();
  //   page.printOneHeroInList();
  //   setTimeout(() => { this.router.navigate(['/']); }, 5000);
  //   page.clickHeroInList();
  //   page.printHeadingH2InMyHeroDetail();
  //   expect(page.getHeadingH2InMyHeroDetail()).toEqual('Tornado details!');
  // });
});
