chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    switch (request){
      case "getSelection":
        sendResponse(window.getSelection().toString());
      break;

      default:
        sendResponse({});
      break;
    }
});
