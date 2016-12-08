import { HeroTutorialPage } from './app.po';

describe('hero-tutorial App', function () {
  let page: HeroTutorialPage;

  beforeEach(() => {
    page = new HeroTutorialPage();
  });

  // it('Verify browser title "HeroTutorial"', () => {
  //   page.navigateTo();
  //   expect(page.getBrowserTitle()).toEqual('HeroTutorial');
  // });

  // it('Verify heading "Tour of Heroes" of type h1 in page "Dashboard"', () => {
  //   page.navigateTo();
  //   page.printHeadingH1InMyApp();
  //   expect(page.getHeadingH1InMyApp()).toEqual('Tour of Heroes');
  // });

  // it('Verify heading "Top Heroes" of type h3 in page "Dashboard"', () => {
  //   page.navigateTo();
  //   page.printHeadingH3InMyDashboard();
  //   expect(page.getHeadingH3InMyDashboard()).toEqual('Top Heroes');
  // });

  // it('Click second hero and verify hero details heading', () => {
  //   page.navigateTo();
  //   page.getHeroNameForSecondHeroInDashboard().then(heroName => {
  //     console.log("Heroname: " + heroName);
  //     page.clickSecondHeroInDashboard().then(() => {
  //       page.printHeadingH2InMyHeroDetail();
  //       expect(page.getHeadingH2InMyHeroDetail()).toEqual(heroName + ' details!');
  //     });
  //   });
  // });

  // it('Naviagate between "Dashboard" and "Heroes"', () => {
  //   page.navigateTo();
  //   page.printHeadingH3InMyDashboard();
  //   expect(page.getHeadingH3InMyDashboard()).toEqual('Top Heroes');
  //   page.clickButtonHeroes()
  //     .then(() => {
  //       page.getHeadingH2InMyHeroes().then(heading => {
  //         console.log(`Heading h2 in my-heroes (/heros): ${heading}`);
  //         expect(heading).toEqual('My Heroes');
  //       })
  //     })
  //     .then(() => {
  //       page.clickButtonDashboard().then(() => {
  //         page.getHeadingH3InMyDashboard().then(heading => {
  //           console.log(`Heading h3 in my-app (/dashboard): ${heading}`);
  //           expect(heading).toEqual('Top Heroes');
  //         })
  //       })
  //     })
  //     .then(() => {
  //       page.clickButtonHeroes().then(() => {
  //         page.getHeadingH2InMyHeroes().then(heading => {
  //           console.log(`Heading h2 in my-heroes (/heros): ${heading}`);
  //           expect(heading).toEqual('My Heroes');
  //         });
  //       });
  //     });
  // });

  it('Verify change of hero name', () => {
    page.navigateTo();
    page.getHeroNameForSecondHeroInDashboard().
      then(heroName => {
        console.log("Heroname: " + heroName);
        page.clickSecondHeroInDashboard()
          .then(() => {
            expect(page.getHeadingH2InMyHeroDetail()).toEqual(heroName + ' details!');
          })
          .then(() => {
            page.enterHeroName('Kalle');
          })
          .then(() => {
            expect(page.getHeadingH2InMyHeroDetail()).toEqual('Kalle details!');
          })
          .then(() => {
            page.clickButtonSaveOfHeroDetails()
            .then(() => {
              expect(page.getHeroNameForSecondHeroInDashboardSlow()).toEqual('Kalle');
            });
          });
          
          // .then(() => {
          //   page.printHeroNameForSecondHeroInDashboard();
          //   expect(page.getHeroNameForSecondHeroInDashboard()).toEqual('Kalle');
          // });

          // .then(() => {
          //   page.printHeroNameForSecondHeroInDashboard();
          //   expect(page.getHeroNameForSecondHeroInDashboard()).toEqual('Kalle');
          // });
          // .then(() => {
          //   page.clickButtonSaveOfHeroDetails()
          //     .then(() => {
          //       page.printHeroNameForSecondHeroInDashboard();
          //       expect(page.getHeroNameForSecondHeroInDashboard()).toEqual('Kalle');
          //     });
          // });
      });
  });

});