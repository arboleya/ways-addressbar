var name = 'arboleya:ways-addressbar';

Package.describe({
  name: name,
  version: '0.2.0',
  summary: 'AddressBar plugin for Ways, supporting /pushState and #hash urls',
  git: 'https://github.com/arboleya/ways-addressbar',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('arboleya:happens@0.6.0');
  api.export('WaysAddressBar', 'client');
  api.addFiles('lib/hash.js', 'client');
  api.addFiles('lib/history.js', 'client');
  api.addFiles('lib/index.js', 'client');
});

Package.onTest(function (api) {
  api.use(name);
  api.use('tinytest');
  api.use('arboleya:happens');
  api.use('arboleya:ways-addressbar', 'client');
  api.addFiles('test/tests/meteor.js');
});