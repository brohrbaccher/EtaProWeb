const functions = require('../supporting/functions')
const data = require('../supporting/data')

module.exports = {
    beforeEach: browser => {
        var home = browser.page.home()
        home.navigate()
    },

    after: browser => {
        browser.end()
    },

    // 'Add New Employee Test': browser => functions.createNewEmployee(browser, data.newEmployee),
    // 'Too Few Characters Input Test': browser => functions.invalidBoundsCheck(browser, data.tooFewCharacters),
    // 'Too Many Characters Input Test': browser => functions.invalidBoundsCheck(browser, data.tooManyCharacters),
    // 'Alpha In Phone Test': browser => functions.invalidBoundsCheck(browser, data.alphaAndSpecialInPhone),
    'Create Test Employee Test' : browser => functions.createTestEmployee(browser, data.testEmployee),

    'Wright' : browser => functions.modifyEmployee(browser, data.changeEntry)
    
}                                                                                                                                                                                                       