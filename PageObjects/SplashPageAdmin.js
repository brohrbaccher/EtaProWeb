module.exports = {

    url: 'http://epadmin:Amherst716!@18.219.202.133/etaproweb/',    commands: [],
    elements: {
        //Plant Selection
        plantDialog: 'a[id=ctl00_splitter_formLayoutHeader_hlServerLogin]',
        plantSelection: 'input[id=ctl00_splitter_formLayoutHeader_cboEPServers_I]',
        plantSelectPlant: 'td[id=ctl00_splitter_formLayoutHeader_cboEPServers_DDD_L_LBI0T0]',
        plantGo: 'a[id=ctl00_splitter_formLayoutHeader_hlServerLogin]',
        //Screen Menu
        splitIt: 'img[id=ctl00_splitter_1i1_S_CB_Img]',
        splitItOpen:'img[id=ctl00_splitter_1i1_S_CF_Img]',
        firstTier: 'div[id=ctl00_splitter_callbackNavBarPanel_navBar_GHE0]',
        firstTierExpand: 'div[id=ctl00_splitter_callbackNavBarPanel_navBar_GHC0]',
        secondTier: 'div[id=ctl00_splitter_callbackNavBarPanel_navBar_GHE1]',
        thirdTier: 'div[id=ctl00_splitter_callbackNavBarPanel_navBar_GR2]',
        fourthTier: 'div[id=ctl00_splitter_callbackNavBarPanel_navBar_GHE3]',
        locationsDrop : {
            selector: '//img[@class="dxWeb_tvExpBtn_Metropolis dxtv-btn"])[1]',
            locateStrategy: 'xpath'
        },
        overallPlantDrop: 'img[id=ctl00_splitter_callbackNavBarPanel_navBar_GCTC0_UserControl28365f15-35f6-41bf-b987-c522ce4601d3_ctl00_treeView_N0_0I]',
        cycleScreen: 'a[id=ctl00_splitter_callbackNavBarPanel_navBar_GCTC0_UserControl3a1de861-526b-441f-8132-c1eae427bed2_ctl00_treeView_N0_0_0]',
        //Cycle Screen
        textBlocks: 'text[id=TextBlock]',
        pointID: 'text[data-pointId=ITE.DBT.A]',
        screenChart: 'image[id=b769dd87-84ed-415e-9d74-686096828a3b]',
        //Trend From Clicking Chart
        sevenDayButton: 'div[id=popupTrend_panelTrend_formTrendLayout_roundPanelButtons_butDays7_CD]',
        exitButton: 'div[id=popupTrend_panelTrend_formTrendLayout_roundPanelButtons_butExit]',
    }

}