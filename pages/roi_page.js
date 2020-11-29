const { I } = inject();

module.exports = {

  //locator for md-doalog buttons
  mddialogButton: '//md-dialog[@role=\'dialog\']//child::form//child::md-dialog-actions//child::button',
 
  aboutOrgPanel: '#roi_step1',

  noOfEmployeesField: '//label[contains(text(),\'Number of employees:\')]/following::input[1]',

  avgAnnualSalField: '//label[contains(text(),\'Number of employees:\')]/following::input[2]',

  hourlyCostEachEmpl: '//span[@class=\'hourly-employee-cost-tag emphasized-value-red ng-binding\']',////child::i',

  //37.5 * 48 = 1800 per 100000 average sal

  async calculateHourlyRate(annualSal){
    let hoursInWeek = 37.5
    let weeksInYear = 48   

    let avgSalPerHour = annualSal/(hoursInWeek*weeksInYear)
    return avgSalPerHour.toFixed(2)


  }
}
