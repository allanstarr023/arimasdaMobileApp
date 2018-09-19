//document.addEventListener('deviceready', .onDeviceReady, false);

/*function onDeviceReady(){
    document.addEventListener("backbutton", function(e){
       if($.mobile.activePage.is('#homepage')){
           e.preventDefault();
           navigator.app.exitApp();
       }
       else {
           navigator.app.backHistory();
       }
    }, false);	
}*/

// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("7c757bff-58d9-43ef-bbd2-4a8ac00e04a2")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);