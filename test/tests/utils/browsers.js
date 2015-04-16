/**
 * Local Browsers
 */
exports['local'] = function() {
  return [
    {browserName: 'phantomjs', tags: ['ways-addressbar', 'phantomjs', 'bal', 'ble']},
    {browserName: 'chrome', tags: ['ways-addressbar', 'chrome']},
    {browserName: 'firefox', tags: ['ways-addressbar', 'firefox']},
    {browserName: 'safari', tags: ['ways-addressbar', 'safari']}
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
      browserName: 'phantomjs', tags: ['ways-addressbar', 'phantomjs']
    },


    /**
     * chrome
     */
    {
      browserName: 'chrome', platform: 'Windows XP',
      tags: ['ways-addressbar', 'chrome', 'winxp'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'Windows 7',
      tags: ['ways-addressbar', 'chrome', 'win7'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'Windows 8',
      tags: ['ways-addressbar', 'chrome', 'win8'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'Linux',
      tags: ['ways-addressbar', 'chrome', 'linux'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'OS X 10.6',
      tags: ['ways-addressbar', 'chrome', 'snow'], 'record-video': true
    },
    {
      browserName: 'chrome', platform: 'OS X 10.8',
      tags: ['ways-addressbar', 'chrome', 'mountain'], 'record-video': true
    },

    /**
     * safari
     */
    {
      version: '5',
      browserName: 'safari', platform: 'Windows 7',
      tags: ['ways-addressbar', 'safari5', 'win7'], 'record-video': true
    },
    {
      version: '5',
      browserName: 'safari', platform: 'OS X 10.6',
      tags: ['ways-addressbar', 'safari5', 'snow'], 'record-video': true
    },
    {
      version: '6',
      browserName: 'safari', platform: 'OS X 10.8',
      tags: ['ways-addressbar', 'safari6', 'mountain'], 'record-video': true
    },


    /**
     * opera
     */
    {
      browserName: 'opera', version: '12', platform: 'Linux', 
      tags: ['ways-addressbar', 'opera', 'linux'], 'record-video': true
    },
    {
      browserName: 'opera', version: '12', platform: 'Windows 7',
      tags: ['ways-addressbar', 'opera', 'win7'], 'record-video': true
    },

    /**
     * firefox
     */
    {
      browserName: 'firefox', version: '22', platform: 'Windows XP',
      tags: ['ways-addressbar', 'firefox', 'winxp'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '22', platform: 'Windows 7',
      tags: ['ways-addressbar', 'firefox', 'win7'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '22', platform: 'Windows 8',
      tags: ['ways-addressbar', 'firefox', 'win8'], 'record-video': true
    },
    {
      browserName: 'firefox', platform: 'Linux',
      tags: ['ways-addressbar', 'firefox', 'linux'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '21', platform: 'OS X 10.6',
      tags: ['ways-addressbar', 'firefox', 'snow'], 'record-video': true
    },
    {
      browserName: 'firefox', version: '22', platform: 'OS X 10.8',
      tags: ['ways-addressbar', 'firefox', 'snow'], 'record-video': true
    },

    /**
     * internet explorer
     */
    {
      browserName: 'internet explorer ', version: '6', platform: 'Windows XP',
      tags: ['ways-addressbar', 'ie6', 'winxp'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '7', platform: 'Windows XP',
      tags: ['ways-addressbar', 'ie7', 'winxp'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '8', platform: 'Windows XP',
      tags: ['ways-addressbar', 'ie8', 'winxp'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '8', platform: 'Windows 7',
      tags: ['ways-addressbar', 'ie8', 'win7'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '9', platform: 'Windows 7',
      tags: ['ways-addressbar', 'ie9', 'win7'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '10', platform: 'Windows 8',
      tags: ['ways-addressbar', 'ie10', 'win8'], 'record-video': true
    },
    {
      browserName: 'internet explorer', version: '11', platform: 'Windows 8.1',
      tags: ['ways-addressbar', 'ie11', 'win8.1'], 'record-video': true
    },

    /**
     * ios / safari
     */
    {
      browserName: 'iphone', platform: 'OS X 10.8',
      tags: ['ways-addressbar', 'ios', '6.1', 'iphone'], 'record-video': true
    },
    {
      browserName: 'ipad', platform: 'OS X 10.8',
      tags: ['ways-addressbar', 'ios', '6.1', 'ipad'], 'record-video': true
    },

    /**
     * android / browser
     */
    {
      browserName: 'android', version: '4.0', platform: 'Linux',
      tags: ['ways-addressbar', 'android', '4.0', 'phone'], 'record-video': true
    },
    {
      browserName: 'android', version: '4.0',
      'device-type': 'tablet', platform: 'Linux',
      tags: ['ways-addressbar', 'android', '4.0', 'tablet'], 'record-video': true
    }

    /**
     * android / chrome
     */
  ];
};