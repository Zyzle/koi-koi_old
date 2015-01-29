module.exports = function(config){
    config.set({

        basePath: '../',

        files : [
            'bower_components/phaser/build/phaser.js',
            //'koi-koi/**/*.js',
            'koi-koi/board.js',
            'koi-koi/cards.js',
            'koi-koi/yaku.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Firefox'],

        plugins: ['karma-firefox-launcher',
            'karma-jasmine'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
