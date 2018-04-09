var login = {
    login() {
        this.navigate()
        this.api.acceptAlert()
        this.waitForElementVisible('@verifiableText', 5000)
        return this.expect.element('@verifiableText').to.be.visible
    }
}

module.exports = {
    url: 'http://epuser:Amherst716!@18.219.202.133/etaproweb/',
    commands: [login],
    elements: {
        verifiableText: '#ctl00_splitter_ctl17',
    }
}