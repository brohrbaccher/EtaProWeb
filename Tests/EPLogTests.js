const data = require('../Supporting/data')
module.exports = {
    beforeEach: browser => {
        browser.resizeWindow(1600, 1200)
    },
    after: browser => {
        browser.end()
    },
    'Log In and Test EPLog': browser => {
        let homePage = browser.page.SplashPageAdmin();
        let epLog = browser.page.EPLog();
        //Log In
        homePage.navigate()
        browser.acceptAlert()
        homePage.waitForElementPresent('@plantDialog', 10000)
            .click('@plantSelection')
        homePage.waitForElementPresent('@plantSelectPlant', 10000)
            .click('@plantSelectPlant')
            .click('@plantGo')
            browser.pause(15000)
        //Click EP Log Tab
        epLog.waitForElementPresent('@epLogTab', 10000)
            .click('@epLogTab')
            browser.pause(10000)
        //Click Event Log
        .frame('contentUrlScreen')
        epLog.waitForElementPresent('@eventButton', 10000)
        .click('@eventButton')
        browser.pause(8000)
        //Add An entry
        epLog.waitForElementPresent('@addAnEntry', 10000)
            .click('@addAnEntry')
        epLog.waitForElementPresent('@addAnEntryID', 10000)
            .click('addAnEntryUnitDrop')
        epLog.waitForElementVisible('@firstUnitSelection', 10000)
            .click('@firstUnitSelection')
            browser.pause(3000)
            .click('@addLocation')
        epLog.waitForElementVisible('@addLocSelection', 10000)
        epLog.waitForElementVisible('@addDesc', 10000)
            .click('@addDesc')
            browser.pause(2000)
        epLog.setValue('@addDesc', 'Test')
            browser.pause(1000)
            .click('@entryUpdate')
        //Go to Data Log
        epLog.waitForElementPresent('@dataLog', 10000)
            .click('@dataLog')
        epLog.waitForElementPresent('@checkBox', 10000)
            .click('@checkBox')
        epLog.waitForElementPresent('@currentTime', 10000)
            .click('@currentTime')
        epLog.waitForElementVisible('@valueInput', 10000)
            .click('@valueInput')
        //Good Input Test
        epLog.setValue('@valueInput', data.goodData)
            browser.pause(1000)
        epLog.assert.containsText('@valueInput', '5')
            browser.pause(1000)
            //Bad Input Test
            .click('@valueInput')
        epLog.clearValue('@valueInput')
        epLog.setValue('@valueInput', data.badData)
        epLog.assert.containsText('@valueInput', '')
            //Good Input Test 2 and Submit
            .click('@valueInput')
        epLog.clearValue('@valueInput')
        epLog.setValue('@valueInput', data.goodData2)
            browser.pause(1000)
        epLog.assert.containsText('@valueInput', '10')
            browser.pause(1000)
            .waitForElementPresent('@submitButton', 5000)
            .click('@submitButton')
            .waitForElementPresent('@valueInput', 10000)
        epLog.assert.containsText('@valueInput', '')
        }
}
