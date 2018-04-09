const data = require('../Supporting/data')

module.exports = {
    'login' : browser => {
        main = browser.page.EPReporter()
        main.login()
        browser.end()
    }

}