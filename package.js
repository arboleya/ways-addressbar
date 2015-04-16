Package.describe({
  name: 'arboleya:ways-browser',
  version: '1.0.0',
  summary: 'Browser middleware for Ways, supporting both pushState and #hash urls',
  git: 'https://github.com/serpentem/ways-browser',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('ways-browser.js', 'client');
  api.export('ways_browser', 'client');
});