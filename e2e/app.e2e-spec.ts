import { HeroTutorialPage } from './app.po';

describe('hero-tutorial App', function () {
  let page: HeroTutorialPage;

  beforeEach(() => {
    page = new HeroTutorialPage();
    page.navigateTo();
  });

  it('Verify browser title "HeroTutorial"', () => {
    expect(page.getBrowserTitle()).toEqual('HeroTutorial');
  });

  it('Verify heading "Tour of Heroes" of type h1 in page "Dashboard"', () => {
    expect(page.getHeadingH1InMyApp()).toEqual('Tour of Heroes');
  });

  it('Verify heading "Top Heroes" of type h3 in page "Dashboard"', () => {
    expect(page.getHeadingH3InMyDashboard()).toEqual('Top Heroes');
  });

  it('Click second hero in page "Dashboard" and verify hero details heading', () => {
    page.getHeroNameForSecondHeroInDashboard().then(heroName => {
      page.clickSecondHeroInDashboard().then(() => {
        expect(page.getHeadingH2InMyHeroDetail()).toEqual(heroName + ' details!');
      });
    });
  });

  it('Naviagate between "Dashboard" and "Heroes"', () => {
    expect(page.getHeadingH3InMyDashboard()).toEqual('Top Heroes');
    page.clickButtonHeroes().then(() => {
      page.getHeadingH2InMyHeroes().then(heading => {
        expect(heading).toEqual('My Heroes');
      });
    }).then(() => {
      page.clickButtonDashboard().then(() => {
        page.getHeadingH3InMyDashboard().then(heading => {
          expect(heading).toEqual('Top Heroes');
        });
      });
    }).then(() => {
      page.clickButtonHeroes().then(() => {
        page.getHeadingH2InMyHeroes().then(heading => {
          expect(heading).toEqual('My Heroes');
        });
      });
    });
  });

  it('Verify change of one hero name', () => {
    page.getHeroNameForSecondHeroInDashboard().then(heroName => {
      page.clickSecondHeroInDashboard().then(() => {
        expect(page.getHeadingH2InMyHeroDetail()).toEqual(heroName + ' details!');
      }).then(() => {
        page.enterHeroName('Kalle').then(() => {
          expect(page.getHeadingH2InMyHeroDetail()).toEqual('Kalle' + ' details!');
        }).then(() => {
          page.clickButtonSaveOfHeroDetails().then(() => {
            page.isPresentHeroNameForSecondHeroInDashboard();
            expect(page.getHeroNameForSecondHeroInDashboard()).toEqual('Kalle');
          });
        });
      });
    });
  });

  it('Verify hero details heading when naviagating via page "Heroes"', () => {
    page.clickButtonHeroes().then(() => {
      expect(page.getHeadingH2InMyHeroes()).toEqual('My Heroes');
    }).then(() => {
      page.getTextForHero10InList().then(heroName => {
        page.clickHero10InList().then(() => {
          expect(page.getTextForHero10InList()).toEqual(heroName);
          expect(page.getHeadingH2InMyHeroesOneHeroName()).toEqual(heroName.toUpperCase() + ' is my hero');
        }).then(() => {
          page.clickViewDetailsOnHeroPage().then(() => {
            expect(page.getHeadingH2InMyHeroDetail()).toEqual(heroName + ' details!');
          });
        });
      });
    });
  });

});