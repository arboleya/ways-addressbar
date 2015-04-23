if('undefined' !== typeof Tinytest){

  if(Meteor.isServer) return;

  Tinytest.add('WaysAddressBar', function (test) {
    
    test.isNotNull(WaysAddressBar && new WaysAddressBar, {
      message: 'Expect `WaysAddressBar` to be defined'
    });
  });
}