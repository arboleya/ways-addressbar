var name = 'arboleya:ways-addressbar';

Package.describe({
  name: name,
  version: '0.2.0',
  summary: 'AddressBar plugin for Ways, supporting /pushState and #hash urls',
  git: 'https://github.com/arboleya/ways-addressbar',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('arboleya:happens@0.6.0', 'client');
  api.versionsFrom('1.0');
  api.addFiles('lib/hash.js', 'client');
  api.addFiles('lib/history.js', 'client');
  api.addFiles('lib/index.js', 'client');
  api.addFiles('meteor.js', 'client');
  api.export('WaysAddressBar');
  
});

Package.onTest(function (api) {
  api.use(name);
  api.use('tinytest');
  api.use('arboleya:ways-addressbar', 'client');
  api.addFiles('test/tests/meteor.js');
});