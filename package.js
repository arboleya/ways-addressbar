Package.describe({
  name: 'arboleya:ways-addressbar',
  version: '0.2.0',
  summary: 'AddressBar plugin for Ways, supporting pushState and #hash urls',
  git: 'https://github.com/arboleya/ways-addressbar',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('ways-browser.js', 'client');
  api.export('ways_browser', 'client');
});