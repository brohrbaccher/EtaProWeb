const data = require('../Supporting/data')
const selector = require('../Supporting/selectors')

// Jill's work
module.exports = {
    before: browser => {
        browser.url('http://epuser:Amherst716!@18.219.202.133/etaproweb/')
            .acceptAlert()

    },

    'Navigate EtaProWeb': browser => {
        browser
            .waitForElementVisible(selector.serverLogin, 3000)
            .setValue(selector.demoServer, "Demonstration")
            .click(selector.serverLogin)
            .useXpath()
            .pause(2000)
            .waitForElementVisible(selector.locationExpanderArrow, 15000)
            .click(selector.locationExpanderArrow)
            .waitForElementVisible(selector.boilerExpanderArrow, 20000)
            .expect.element(selector.boilerExpanderArrow).to.be.visible
        browser
            .waitForElementVisible(selector.boilerExpanderArrow, 20000)
            .waitForElementVisible(selector.concernsViewerTab, 20000)
            .click(selector.concernsViewerTab)
            .frame(0)
            .waitForElementVisible(selector.assetFilterButton, 20000)
            .useCss()
            .waitForElementVisible(selector.concernsViewerUnitFilter, 20000)
            .setValue(selector.concernsViewerUnitFilter, "Heater")
            .useXpath()
            .expect.element(selector.checkBoxChecked).is.visible
        browser.end()
    },
}