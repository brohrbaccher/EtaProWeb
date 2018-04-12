var login = {
    login() {
        this.navigate()
        this.api.acceptAlert()
            .windowMaximize()
        return this.waitForElementVisible('@verifiableText', 5000)
    }
}

var selectServer = {
    selectServer() {
        return this.click('@serverDropDown')
            .waitForElementVisible('@server', 5000)
            .click('@server')
            .click('@serverLogin')
            .waitForElementVisible('@navbarPanel', 60000)
    }
}

var openReport = {
    openReport() {
        this.click('@frameLink')
        this.api.frame(0)
        return this
            .waitForElementVisible('@report', 3000)
            .click('@report')
            .waitForElementVisible('@reportFile', 8000)
            .click('@reportFile')
            .waitForElementPresent('@openReportBtn', 3000)
    }
}

module.exports = {
    url: 'http://epuser:Amherst716!@18.219.202.133/etaproweb/',
    commands: [login, selectServer, openReport],
    elements: {
        verifiableText: '#ctl00_splitter_ctl17',
        serverDropDown: '#ctl00_splitter_formLayoutHeader_cboEPServers_B-1',
        server: '#ctl00_splitter_formLayoutHeader_cboEPServers_DDD_L_LBI0T0',
        serverLogin: '#ctl00_splitter_formLayoutHeader_hlServerLogin',
        navbarPanel: '#ctl00_splitter_callbackNavBarPanel_navBar_GHE0',
        frameLink: '#ctl00_splitter_formLayoutHeader_butEPReporter',
        openReportBtn: '#formLayout_btnOpenReport_CD',
        report: '#formLayout_ReportsList_LBI2T0',
        reportFile: '#formLayout_DistributionList_LBI0T0',
    }
}