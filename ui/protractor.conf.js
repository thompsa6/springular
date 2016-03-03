exports.config = {
    baseUrl: 'http://localhost:8888',

    specs: [
        'dist/dev/**/*.e2e.js'
    ],
    exclude: [],

    framework: 'jasmine2',

    allScriptsTimeout: 360000,

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 40000
    },
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
        browser.ignoreSynchronization = false;
    },

    /**
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     */
    useAllAngular2AppRoots: true
};
