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

    // chrome
    env('Linux', 'chrome', '39'),
    env('Linux', 'chrome', '40'),
    env('Linux', 'chrome', '41'),
    env('Linux', 'chrome', 'beta'),
    env('Linux', 'chrome', 'dev'),

    // safari
    env('OS X 10.6', 'safari'),
    env('OS X 10.8', 'safari'),
    env('OS X 10.9', 'safari'),
    env('OS X 10.10', 'safari'),

    // firefox
    env('Linux', 'firefox', '35'),
    env('Linux', 'firefox', '36'),
    env('Linux', 'firefox', '37'),
    env('Linux', 'firefox', 'beta'),
    env('Linux', 'firefox', 'dev'),

    // internet explorer
    env('Windows XP'  , 'internet explorer' , '7')  ,
    env('Windows XP'  , 'internet explorer' , '8')  ,
    env('Windows 7'   , 'internet explorer' , '9')  ,
    env('Windows 8'   , 'internet explorer' , '10') ,
    env('Windows 8.1' , 'internet explorer' , '11') ,

    // ios / ipad
    // env('OS X 10.10'    , 'ipad' , '7.0' , 'iPad Simulator') , // wont work!
    // env('OS X 10.10'    , 'ipad' , '7.1' , 'iPad Simulator') , // wont work!
    env('OS X 10.10'    , 'ipad' , '8.0' , 'iPad Simulator'),
    env('OS X 10.10'    , 'ipad' , '8.1' , 'iPad Simulator'),
    env('OS X 10.10'    , 'ipad' , '8.2' , 'iPad Simulator'),
    // env('OS X 10.10'    , 'ipad' , '8.3' , 'iPad Simulator'), // unavailable
  
    // ios / iphone
    // env('OS X 10.10'    , 'iphone' , '7.0' , 'iPhone Simulator'), // wont work
    // env('OS X 10.10'    , 'iphone' , '7.1' , 'iPhone Simulator'), // wont work
    env('OS X 10.10'    , 'iphone' , '8.1' , 'iPhone Simulator'),
    env('OS X 10.10'    , 'iphone' , '8.2' , 'iPhone Simulator'),
    // env('OS X 10.10'    , 'iphone' , '8.3' , 'iPhone Simulator'), // unavailable

    // android
    env('Linux' , 'android' , '4.0' , 'Android Emulator') ,
    env('Linux' , 'android' , '4.1' , 'Android Emulator') ,
    env('Linux' , 'android' , '4.2' , 'Android Emulator') ,
    env('Linux' , 'android' , '4.3' , 'Android Emulator') ,
    env('Linux' , 'android' , '4.4' , 'Android Emulator')
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
    'record-video': true
  };
}
