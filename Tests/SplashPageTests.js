//Can't be automated. Sorry. Selectors are a mess. Will have to work with developer to make this easier to automate.
/*
module.exports = {
    beforeEach: browser => {
        browser.resizeWindow(1600,1200)
    },
    after: browser => {
        browser.end()
    },
    'screenCheck': browser => {
        let homePage = browser.page.SplashPageAdmin();
        homePage.navigate()
        browser.acceptAlert()
        homePage.waitForElementPresent('@plantDialog', 10000)
            .click('@plantSelection')
        homePage.waitForElementPresent('@plantSelectPlant', 10000)
            .click('@plantSelectPlant')
            .click('@plantGo')
        homePage.waitForElementPresent('@firstTier', 10000)
        .click('@splitIt')
        .click('@splitItOpen')
        .click('@firstTier')
        .click('@firstTierExpand')
        browser.pause(2000)

        homePage.waitForElementVisible('locationsDrop', 15000)
        homePage.click('locationsDrop')
        browser.pause(2000)
        /*homePage.waitForElementPresent('@overallPlantDrop', 10000)
            .click('@overallPlantDrop')
            .click('@overallPlantDrop')
        homePage.waitForElementPresent('@cycleScreen', 10000)
            .click('@cycleScreen')
            .click('@cycleScreen')
        homePage.waitForElementPresent('@textBlocks', 10000)
            .click('@pointID')
        homePage.waitForElementPresent('@sevenDayButton', 10000)
            .click('@exitButton')
    }

}
*/