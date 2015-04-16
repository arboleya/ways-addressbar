/**
 * Local Browsers
 */
exports['local'] = function() {
  return [
    {browserName: 'phantomjs', tags: ['phantomjs']},
    {browserName: 'chrome', tags: ['chrome']},
    {browserName: 'firefox', tags: ['firefox']},
    {browserName: 'safari', tags: ['safari']}
  ];
};

/**
 * Sauce Connect Browsers
 */
exports['sauce labs'] = function() {
  return [

    /**
     * phantomjs
     */
    {
      browserName: 'phantomjs', tags: ['phantomjs']
    },


    /**
     * chrome
     */
    {
      browserName: 'chrome', platform: 'Windows XP',
      tags: ['chrome', 'winxp'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'Windows 7',
      tags: ['chrome', 'win7'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'Windows 8',
      tags: ['chrome', 'win8'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'Linux',
      tags: ['chrome', 'linux'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'OS X 10.6',
      tags: ['chrome', 'snow'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'OS X 10.8',
      tags: ['chrome', 'mountain'], 'record-video': true
    },

    /**
     * safari
     */
    {
      version: '5',
      browserName: 'safari', platform: 'Windows 7',
      tags: ['safari5', 'win7'], 'record-video': true
    },
    {
      version: '5',
      browserName: 'safari', platform: 'OS X 10.6',
      tags: ['safari5', 'snow'], 'record-video': true
    },
    {
      version: '6',
      browserName: 'safari', platform: 'OS X 10.8',
      tags: ['safari6', 'mountain'], 'record-video': true
    },


    /**
     * opera
     */
    {
      browserName: 'opera', version: '12', platform: 'Linux', 
      tags: ['opera', 'linux'], 'record-video': true
    },
    {
      browserName: 'opera', version: '12', platform: 'Windows 7',
      tags: ['opera', 'win7'], 'record-video': true
    },

    /**
     * firefox
     */
    {
      browserName: 'firefox', version: '22', platform: 'Windows XP',
      tags: ['firefox', 'winxp'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '22', platform: 'Windows 7',
      tags: ['firefox', 'win7'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '22', platform: 'Windows 8',
      tags: ['firefox', 'win8'], 'record-video': true
    },
    {
      browserName: 'firefox', platform: 'Linux',
      tags: ['firefox', 'linux'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '21', platform: 'OS X 10.6',
      tags: ['firefox', 'snow'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '22', platform: 'OS X 10.8',
      tags: ['firefox', 'snow'], 'record-video': true
    },

    /**
     * internet explorer
     */
    {
      browserName: 'internet explorer ', version: '6', platform: 'Windows XP',
      tags: ['ie6', 'winxp'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '7', platform: 'Windows XP',
      tags: ['ie7', 'winxp'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '8', platform: 'Windows XP',
      tags: ['ie8', 'winxp'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '8', platform: 'Windows 7',
      tags: ['ie8', 'win7'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '9', platform: 'Windows 7',
      tags: ['ie9', 'win7'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '10', platform: 'Windows 8',
      tags: ['ie10', 'win8'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '11', platform: 'Windows 8.1',
      tags: ['ie11', 'win8.1'], 'record-video': true
    },

    /**
     * ios / safari
     */
    {
      browserName: 'iphone', platform: 'OS X 10.8',
      tags: ['ios', '6.1', 'iphone'], 'record-video': true
    },
    {
      browserName: 'ipad', platform: 'OS X 10.8',
      tags: ['ios', '6.1', 'ipad'], 'record-video': true
    },

    /**
     * android / browser
     */
    {
      browserName: 'android', version: '4.0', platform: 'Linux',
      tags: ['android', '4.0', 'phone'], 'record-video': true
    },
    {
      browserName: 'android', version: '4.0',
      'device-type': 'tablet', platform: 'Linux',
      tags: ['android', '4.0', 'tablet'], 'record-video': true
    }

    /**
     * android / chrome
     */
  ];
};