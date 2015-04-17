/**
 * Local Browsers
 */
exports['local'] = function() {
  return [
    env(null, 'phantomjs'),
    env(null, 'chrome'),
    env(null, 'firefox'),
    env(null, 'safari'),
  ];
};

/**
 * Sauce Connect Browsers
 */
exports['sauce labs'] = function() {
  return [
    /**
     * chrome
     */
    env('OS X 10.6'   , 'chrome'),
    env('OS X 10.8'   , 'chrome'),
    env('OS X 10.9'   , 'chrome'),
    env('OS X 10.10'  , 'chrome'),
    env('Windows XP'  , 'chrome'),
    env('Windows 7'   , 'chrome'),
    env('Windows 8'   , 'chrome'),
    env('Windows 8.1' , 'chrome'),
    env('Linux'       , 'chrome'),

    /**
     * safari
     */
    env('Windows 7'  , 'safari'),
    env('OS X 10.6'  , 'safari'),
    env('OS X 10.8'  , 'safari'),
    env('OS X 10.9'  , 'safari'),
    env('OS X 10.10' , 'safari'),
    env('OS X 10.10' , 'safari'),

    /**
     * opera
     */
    env('Linux'      , 'opera'),
    env('Windows XP' , 'opera'),
    env('Windows 7'  , 'opera'),

    /**
     * firefox
     */        
    env('Windows XP'  , 'firefox'),
    env('Windows 7'   , 'firefox'),
    env('Windows 8'   , 'firefox'),
    env('Windows 8.1' , 'firefox'),
    env('OS X 10.6'   , 'firefox'),
    env('OS X 10.9'   , 'firefox'),
    env('OS X 10.10'  , 'firefox'),
    env('Linux'       , 'firefox'),

    /**
     * internet explorer
     */
    env('Windows XP'  , 'internet explorer' , 7),
    env('Windows XP'  , 'internet explorer' , 8),
    env('Windows XP'  , 'internet explorer' , 9),
    env('Windows 7'   , 'internet explorer' , 8),
    env('Windows 7'   , 'internet explorer' , 9),
    env('Windows 7'   , 'internet explorer' , 10),
    env('Windows 7'   , 'internet explorer' , 11),
    env('Windows 8'   , 'internet explorer' , 10),
    env('Windows 8.1' , 'internet explorer' , 11),

    /**
     * ios / safari
     */
    env('OS X 10.10' , 'ipad', 6.0, 'iPad Simulator'),
    env('OS X 10.10' , 'ipad', 6.1, 'iPad Simulator'),
    env('OS X 10.10' , 'ipad', 7.0, 'iPad Simulator'),
    env('OS X 10.10' , 'ipad', 7.1, 'iPad Simulator'),
    env('OS X 10.10' , 'ipad', 8.1, 'iPad Simulator'),
    env('OS X 10.10' , 'ipad', 8.2, 'iPad Simulator'),
    env('OS X 10.10' , 'ipad', 8.3, 'iPad Simulator'),
    env('OS X 10.10' , 'iphone', 6.0, 'iPhone Simulator'),
    env('OS X 10.10' , 'iphone', 6.1, 'iPhone Simulator'),
    env('OS X 10.10' , 'iphone', 7.0, 'iPhone Simulator'),
    env('OS X 10.10' , 'iphone', 7.1, 'iPhone Simulator'),
    env('OS X 10.10' , 'iphone', 8.1, 'iPhone Simulator'),
    env('OS X 10.10' , 'iphone', 8.2, 'iPhone Simulator'),
    env('OS X 10.10' , 'iphone', 8.3, 'iPhone Simulator'),

    /**
     * android / browser
     */
    env('Linux' , 'android', 4.2, 'LG Nexus 4 Emulator'),
    env('Linux' , 'android', 4.3, 'LG Nexus 4 Emulator'),
    env('Linux' , 'android', 4.4, 'LG Nexus 4 Emulator'),
    env('Linux' , 'android', 4.2, 'Samsung Galaxy Tab 3 Emulator'),
  ];
};

function env(platform, browser, version, deviceName){
  var args = Array.prototype.slice.call(arguments, 0);
  return {
    platform: platform,
    browserName: browser,
    version: version,
    deviceName: deviceName,
    name: (platform == null ? 'local' : '') + args.join(' - '),
    tags: ['ways-addressbar'],
    'record-video': false
  };
}