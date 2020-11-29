const { I } = inject();

module.exports = {

  scLogo: '#SCLogo',

  //locator for Resources menu  
  resourcesMenu: '//a[contains(text(),\'Resources\')]'  ,

  roiSubMenu: '//a[contains(text(),\'ROI Calculator for Internal Communication\')]',

async chooseMenu(menu, submenu){
   //Hover over Resources Menu
   I.moveCursorTo(menu)

   //Click on the second level menu
   I.click(submenu)
 }
 
}
