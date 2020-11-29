const assert = require('assert');
const { chooseMenu } = require('../pages/snapcomms_page');
const getData = require('../utils/ExcelReader')
let testData

Feature('ROITest');
Before(({I}) => {
  let rawData = getData('UAT', 'ROITest')
  testData = rawData[0]  
})


Scenario('Snapcomms ROI Load', async function ({ I,SnapcommsHomePage,ROIPage })  {
//Navigate to the page
I.amOnPage("https://www.snapcomms.com/");

//validate the logo on the home page
I.seeElement(SnapcommsHomePage.scLogo)

//Hover over Resources Menu and choose ROI sub menu item
await chooseMenu(SnapcommsHomePage.resourcesMenu, SnapcommsHomePage.roiSubMenu)

//Wait for ROI screen loads
I.waitForText('RETURN ON INVESTMENT CALCULATOR', 20)

//Wait for md-dialog
I.waitForElement("//div[@class='md-toolbar-tools']", 10)

//Handle dialogs
I.click(ROIPage.mddialogButton)
I.click(ROIPage.mddialogButton)
I.click(ROIPage.mddialogButton)
I.click(ROIPage.mddialogButton)

//Validate
I.see('ABOUT YOUR ORGANIZATION', ROIPage.aboutOrgPanel)

//Enter employyes
I.fillField(ROIPage.noOfEmployeesField, testData.Employees)

//Enter annual salary
I.fillField(ROIPage.avgAnnualSalField, testData.Annualsal)

let horlySal = await I.grabTextFrom(ROIPage.hourlyCostEachEmpl)

//Validate the calculation
assert.equal(horlySal, await ROIPage.calculateHourlyRate(testData.Annualsal))  
});