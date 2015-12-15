require('reflect-metadata');
require('angular2/test');
require('angular2/mock');

var testContext = require.context('./test', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);

var domAdapter = require('angular2/src/platform/browser/browser_adapter').BrowserDomAdapter;
domAdapter.makeCurrent();
