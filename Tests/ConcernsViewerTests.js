const data = require('../Supporting/data')
const selector = require('../Supporting/selectors')

// Jill's work
module.exports = {
before: browser =>{
browser.url('http://epuser:Amherst716!@18.219.202.133/etaproweb/')
.acceptAlert()

},
// after: browser => {
//     browser.end()

// },

'Navigate EtaProWeb': browser=> {
browser
.waitForElementVisible(selector.serverLogin, 3000)
.setValue(selector.demoServer, "Demonstration")
.click(selector.serverLogin)
.pause(2000)
.useXpath()
.waitForElementVisible(selector.locationExpanderArrow, 15000)
.click(selector.locationExpanderArrow)
.pause(20000)
.expect.element(selector.boilerExpanderArrow).to.be.visible
browser
.waitForElementVisible(selector.boilerExpanderArrow, 15000)
.pause(15000)
.waitForElementVisible(selector.concernsViewerTab, 5000)
.click(selector.concernsViewerTab)
.pause(25000)
.frame(0)
.waitForElementVisible(selector.assetFilterButton, 15000)
.useCss()
.setValue(selector.concernsViewerUnitFilter, "Heater")
.waitForElementVisible(selector.concernsViewerUnitFilter, 10000)
.click(selector.createFilter)
.pause(15000)
.useXpath()
.expect.element(selector.checkBoxChecked).is.visible


},
}