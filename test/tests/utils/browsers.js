exports['local'] = function() {
  return [
    phantomjs,
    // chrome_mountain
    // firefox_mountain,
    // safari6_mountain,
  ];
};

exports['sauce labs'] = function() {
  return [
    // -- chrome
    chrome_linux,
    // chrome_win8,
    // chrome_mountain,

    // -- firefox
    firefox_linux,
    // firefox_win8,
    // firefox_snow,

    // -- safari
    // safari5_win7,
    // safari5_snow,
    safari6_mountain,

    // -- opera
    // NOTE: android and sauce connect isn't currently working for localhost)
    // 
    // opera_linux,
    // opera_win7,

    // -- ie
    ie8_win7,
    ie9_win7,
    ie10_win8,
    ie11_win81,

    // -- ios
    ios_61_iphone,
    ios_61_ipad,

    // -- android
    // NOTE: android and sauce connect isn't currently working for localhost)
    // 
    // android_40_phone,
    // android_40_tablet
  ];
};

var phantomjs = {
  browserName: 'phantomjs',
  tags: ['phantomjs']
};

var chrome_winxp = {
  browserName: 'chrome',
  platform: 'Windows XP',
  tags: ['chrome', 'winxp'],
  'record-video': true
};

var chrome_win7 = {
  browserName: 'chrome',
  platform: 'Windows 7',
  tags: ['chrome', 'win7'],
  'record-video': true
};

var chrome_win8 = {
  browserName: 'chrome',
  platform: 'Windows 8',
  tags: ['chrome', 'win8'],
  'record-video': true
};

var chrome_linux = {
  browserName: 'chrome',
  platform: 'Linux',
  tags: ['chrome', 'linux'],
  'record-video': true
};

var chrome_snow = {
  browserName: 'chrome',
  platform: 'OS X 10.6',
  tags: ['chrome', 'snow'],
  'record-video': true
};

var chrome_mountain = {
  browserName: 'chrome',
  platform: 'OS X 10.8',
  tags: ['chrome', 'mountain'],
  'record-video': true
};

var safari5_win7 = {
  version: '5',
  browserName: 'safari',
  platform: 'Windows 7',
  tags: ['safari5', 'win7'],
  'record-video': true
};

var safari5_snow = {
  version: '5',
  browserName: 'safari',
  platform: 'OS X 10.6',
  tags: ['safari5', 'snow'],
  'record-video': true
};

var safari6_mountain = {
  version: '6',
  browserName: 'safari',
  platform: 'OS X 10.8',
  tags: ['safari6', 'mountain'],
  'record-video': true
};

var opera_linux = {
  version: '12',
  browserName: 'opera',
  platform: 'Linux',
  tags: ['opera', 'linux'],
  'record-video': true
};

var opera_win7 = {
  version: '12',
  browserName: 'opera',
  platform: 'Windows 7',
  tags: ['opera', 'win7'],
  'record-video': true
};

var firefox_winxp = {
  browserName: 'firefox',
  version: '22',
  platform: 'Windows XP',
  tags: ['firefox', 'winxp'],
  'record-video': true
};

var firefox_win7 = {
  browserName: 'firefox',
  version: '22',
  platform: 'Windows 7',
  tags: ['firefox', 'win7'],
  'record-video': true
};

var firefox_win8 = {
  browserName: 'firefox',
  version: '22',
  platform: 'Windows 8',
  tags: ['firefox', 'win8'],
  'record-video': true
};

var firefox_linux = {
  browserName: 'firefox',
  platform: 'Linux',
  tags: ['firefox', 'linux'],
  'record-video': true
};

var firefox_snow = {
  browserName: 'firefox',
  version: '21',
  platform: 'OS X 10.6',
  tags: ['firefox', 'snow'],
  'record-video': true
};

var firefox_mountain = {
  browserName: 'firefox',
  version: '22',
  platform: 'OS X 10.8',
  tags: ['firefox', 'snow'],
  'record-video': true
};

var ie6_winxp = {
  browserName: 'internet explorer ',
  version: '6',
  platform: 'Windows XP',
  tags: ['ie6', 'winxp'],
  'record-video': true
};

var ie7_winxp = {
  browserName: 'internet explorer',
  version: '7',
  platform: 'Windows XP',
  tags: ['ie7', 'winxp'],
  'record-video': true
};

var ie8_winxp = {
  browserName: 'internet explorer',
  version: '8',
  platform: 'Windows XP',
  tags: ['ie8', 'winxp'],
  'record-video': true
};

var ie8_win7 = {
  browserName: 'internet explorer',
  version: '8',
  platform: 'Windows 7',
  tags: ['ie8', 'win7'],
  'record-video': true
};

var ie9_win7 = {
  browserName: 'internet explorer',
  version: '9',
  platform: 'Windows 7',
  tags: ['ie9', 'win7'],
  'record-video': true
};

var ie10_win8 = {
  browserName: 'internet explorer',
  version: '10',
  platform: 'Windows 8',
  tags: ['ie10', 'win8'],
  'record-video': true
};

var ie11_win81 = {
  browserName: 'internet explorer',
  version: '11',
  platform: 'Windows 8.1',
  tags: ['ie11', 'win8.1'],
  'record-video': true
};

var ios_61_iphone = {
  browserName: 'iphone',
  platform: 'OS X 10.8',
  tags: ['ios', '6.1', 'iphone'],
  'record-video': true
};

var ios_61_ipad = {
  browserName: 'ipad',
  platform: 'OS X 10.8',
  tags: ['ios', '6.1', 'ipad'],
  'record-video': true
};

var android_40_phone = {
  browserName: 'android',
  version: '4.0',
  platform: 'Linux',
  tags: ['android', '4.0', 'phone'],
  'record-video': true
};

var android_40_tablet = {
  browserName: 'android',
  version: '4.0',
  'device-type': 'tablet',
  platform: 'Linux',
  tags: ['android', '4.0', 'tablet'],
  'record-video': true
};