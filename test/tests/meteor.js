if('undefined' !== typeof Tinytest){

  if(Meteor.isServer) return;

  Tinytest.add('WaysAddressBar', function (test) {
    test.isNotNull(WaysAddressBar, {
      message: 'Expect `WaysAddressBar` to be defined'
    });
  });
}