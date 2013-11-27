exports['local'] = ->
  return [
    # phantomjs
    chrome_mountain
    firefox_mountain
    safari6_mountain
  ]

exports['sauce labs'] = ->
  return [

    # -- chrome
    chrome_linux
    # chrome_win8
    # chrome_mountain

    # -- firefox
    firefox_linux
    # firefox_win8
    # firefox_snow

    # -- safari
    # safari5_win7
    # safari5_snow
    safari6_mountain

    # -- ie
    ie8_win7
    ie9_win7
    ie10_win8
    ie11_win81

    # -- ios
    ios_61_iphone
    ios_61_ipad

    # -- android (NOTE: android and sauce connect isn't currently working)
    # android_40_phone
    # android_40_tablet
  ]


# phantom
# ----------------------------------------------------------------------------
phantomjs =
  browserName: 'phantomjs'
  tags: ['the-router-browser', 'phantomjs']


# chrome
# ----------------------------------------------------------------------------
chrome_winxp = 
  browserName: 'chrome'
  platform: 'Windows XP'
  tags: ['the-router-browser', 'chrome', 'winxp']
  'record-video': true

chrome_win7 = 
  browserName: 'chrome'
  platform: 'Windows 7'
  tags: ['the-router-browser', 'chrome', 'win7']
  'record-video': true

chrome_win8 = 
  browserName: 'chrome'
  platform: 'Windows 8'
  tags: ['the-router-browser', 'chrome', 'win8']
  'record-video': true

chrome_linux = 
  browserName: 'chrome'
  platform: 'Linux'
  tags: ['the-router-browser', 'chrome', 'linux']
  'record-video': true

chrome_snow = 
  browserName: 'chrome'
  platform: 'OS X 10.6'
  tags: ['the-router-browser', 'chrome', 'snow']
  'record-video': true

chrome_mountain = 
  browserName: 'chrome'
  platform: 'OS X 10.8'
  tags: ['the-router-browser', 'chrome', 'mountain']
  'record-video': true


# safari
# ----------------------------------------------------------------------------

safari5_win7 = 
  version: '5'
  browserName: 'safari'
  platform: 'Windows 7'
  tags: ['the-router-browser', 'safari5', 'win7']
  'record-video': true

safari5_snow = 
  version: '5'
  browserName: 'safari'
  platform: 'OS X 10.6'
  tags: ['the-router-browser', 'safari5', 'snow']
  'record-video': true

safari6_mountain = 
  version: '6'
  browserName: 'safari'
  platform: 'OS X 10.8'
  tags: ['the-router-browser', 'safari6', 'mountain']
  'record-video': true



# firefox
# ----------------------------------------------------------------------------
firefox_winxp = 
  browserName: 'firefox'
  version: '22'
  platform: 'Windows XP'
  tags: ['the-router-browser', 'firefox', 'winxp']
  'record-video': true

firefox_win7 = 
  browserName: 'firefox'
  version: '22'
  platform: 'Windows 7'
  tags: ['the-router-browser', 'firefox', 'win7']
  'record-video': true

firefox_win8 = 
  browserName: 'firefox'
  version: '22'
  platform: 'Windows 8'
  tags: ['the-router-browser', 'firefox', 'win8']
  'record-video': true

firefox_linux = 
  browserName: 'firefox'
  platform: 'Linux'
  tags: ['the-router-browser', 'firefox', 'linux']
  'record-video': true

firefox_snow = 
  browserName: 'firefox'
  version: '21'
  platform: 'OS X 10.6'
  tags: ['the-router-browser', 'firefox', 'snow']
  'record-video': true

firefox_mountain = 
  browserName: 'firefox'
  version: '22'
  platform: 'OS X 10.8'
  tags: ['the-router-browser', 'firefox', 'snow']
  'record-video': true


# ie
# ----------------------------------------------------------------------------

# win xp

ie6_winxp = 
  browserName: 'internet explorer '
  version: '6'
  platform: 'Windows XP'
  tags: ['the-router-browser', 'ie6', 'winxp']
  'record-video': true

ie7_winxp = 
  browserName: 'internet explorer'
  version: '7'
  platform: 'Windows XP'
  tags: ['the-router-browser', 'ie7', 'winxp']
  'record-video': true

ie8_winxp = 
  browserName: 'internet explorer'
  version: '8'
  platform: 'Windows XP'
  tags: ['the-router-browser', 'ie8', 'winxp']
  'record-video': true


# win 7

ie8_win7 = 
  browserName: 'internet explorer'
  version: '8'
  platform: 'Windows 7'
  tags: ['the-router-browser', 'ie8', 'win7']
  'record-video': true

ie9_win7 = 
  browserName: 'internet explorer'
  version: '9'
  platform: 'Windows 7'
  tags: ['the-router-browser', 'ie9', 'win7']
  'record-video': true


# win 8

ie10_win8 = 
  browserName: 'internet explorer'
  version: '10'
  platform: 'Windows 8'
  tags: ['the-router-browser', 'ie10', 'win8']
  'record-video': true

# win 8.1

ie11_win81 = 
  browserName: 'internet explorer'
  version: '11'
  platform: 'Windows 8.1'
  tags: ['the-router-browser', 'ie11', 'win8.1']
  'record-video': true


# ios
# ----------------------------------------------------------------------------

ios_61_iphone = 
  browserName: 'iphone'
  platform: 'OS X 10.8'
  tags: ['the-router-browser', 'ios', '6.1', 'iphone']
  'record-video': true

ios_61_ipad = 
  browserName: 'ipad'
  platform: 'OS X 10.8'
  tags: ['the-router-browser', 'ios', '6.1', 'ipad']
  'record-video': true


# android
# ----------------------------------------------------------------------------

android_40_phone = 
  browserName: 'android'
  version: '4.0'
  platform: 'Linux'
  tags: ['the-router-browser', 'android', '4.0', 'phone']
  'record-video': true

android_40_tablet = 
  browserName: 'android'
  version: '4.0'
  'device-type': 'tablet'
  platform: 'Linux'
  tags: ['the-router-browser', 'android', '4.0', 'tablet']
  'record-video': true