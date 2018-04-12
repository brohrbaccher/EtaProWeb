module.exports = {
    url: 'http://epadmin:Amherst716!@18.219.202.133/etaproweb/',
    commands: [],
    elements: {
        //EPLog Tab
        epLogTab: 'div[id=ctl00_splitter_formLayoutHeader_butEPLog_CD]',
        //Events
        firstRow : 'tr[id=ctl00_MainContent_dxPages_gvLog1_DXDataRow0]',
        //Even Log Button
        eventButton : {
            selector: '//a[@class="dxtc-link"])[1]',
            locatestrategy: 'xpath'
        },
        //Add An Entry
        addAnEntry :'div[id=ctl00_MainContent_callbackPanel_btnAdd]',
        addAnEntryID: 'span[id = ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_txtId]',
        addAnEntryUnitDrop: 'img[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_cmboUnit_B-1Img]',
        firstUnitSelection: 'td[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_cmboUnit_DDD_L_LBI0T0]',
        addLocation: 'input[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_cmboLocation_I]',
        addLocSelection: 'td[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_cmboLocation_DDD_L_LBI0T0]',
        addDesc: 'textarea[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_memoDescription_I]',
        editEntry : 'div[id=ctl00_MainContent_callbackPanel_btnEdit_CD]',
        //Browse Button in Add An Entry
        browseButton: 'div[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_txtDescription_CD]',
        browseButtonTitle: 'span[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_popupDescription_PWH-1T]',
        browseButtonCheck: 'span[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_popupDescription_treeDescription_N0_0_2_D]',
        //Update or Cancel in Add An Entry
        entryUpdate: 'a[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_DXCBtn0]',
        entryCancel: 'a[id=ctl00_MainContent_dxPages_gvLog1_efnew_ctl00_DXCBtn1]',
        //Deactivate Entry
        deactivateEntry : 'div[id=ctl00_MainContent_callbackPanel_btnDeactivate]',
        deactivateNote: 'span[id=ctl00_MainContent_dxPages_gvLog1_ef0_ctl00_lblDeactivateNote]',
        deactiveNoteInput: 'input[id=ctl00_MainContent_dxPages_gvLog1_ef0_ctl00_txtDeactivateNote_I]',
        deactiveUpdate: 'a[id=ctl00_MainContent_dxPages_gvLog1_ef0_ctl00_DXCBtn0]',
        deactiveCancel: 'a[id=ctl00_MainContent_dxPages_gvLog1_ef0_ctl00_DXCBtn1]',
        //Filter Entry
        filterEntry : 'div[id=ctl00_MainContent_callbackPanel_btnFilter]',
        //Data Log Button
        dataLog : 'div[id=ctl00_MainContent_callbackPanel_btnDataLog]',
        //Event Logs button in Data Log Page
        dataEventLogs: 'div[id=ctl00_MainContent_panelButtons_btnEventLogs_CD]',
        //Tabs in Event Logs Page
        eventLogTab : 'a[id=ctl00_MainContent_dxPages_AT0T]',
        etaProChangeTab : 'a[id=ctl00_MainContent_dxPages_T1T]',
        //Data Log
        checkBox : 'span[id=ctl00_MainContent_formLayoutDataLog_grid_DXSelBtn0_D]',
        valueInput : 'div[id=ctl00_MainContent_formLayoutDataLog_grid_DXBEC5]',
        currentTime : 'input[id=ctl00_MainContent_panelButtons_butSetCurrentTime_I]',
        submitButton: 'input[id=ctl00_MainContent_panelButtons_butSubmit_I]'
    }

}