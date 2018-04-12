const data = require('../Supporting/data')

module.exports = {
    'Open Report Test': browser => {
        main = browser.page.EPReporter()
        main.login()
            .selectServer()
            .openReport()
        browser.end()
    }

}