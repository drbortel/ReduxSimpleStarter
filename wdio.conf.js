/**
 * Created by PLM8038 on 6/15/2017.
 */
exports.config = {

    /**
     * server configurations
     */
    host: 'localhost',
    port: 8080,

    /**
     * specify test files
     */
    specs: [
        './test/parkingCalc.js'
    ],
    exclude: [
    ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 7'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    //baseUrl: 'http://webdriver.io',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:babel-register'],
        timeout: 90000
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('\ninitialize\n');
    },
    onComplete: function() {
        console.log('\ncomplete\n');
    }
};