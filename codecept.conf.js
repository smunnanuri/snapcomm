const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      waitForNavigation: "domcontentloaded",
      waitForAction: 500
    },
    ChaiWrapper : {
      "require": "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    SnapcommsHomePage: './pages/snapcomms_page.js',
    ROIPage: './pages/roi_page.js'
  },
  customHelper: {
    require: '../helpers/customHelper.js',
  },
  bootstrap: null,
  mocha: {
    reporter: 'mocha-multi',
    reporterOptions: {
      "codeceptjs-cli-reporter": {
      stdout: "-",
      options: {
        verbose: false,
        steps: true,
      }
    },
    "mocha-junit-reporter" :{
      stdout: "./output/console.log",
      options: {
        mochaFile: "./output/results.xml"
      }
    }
  }
  },
  name: 'CodeceptjsAssignment',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}