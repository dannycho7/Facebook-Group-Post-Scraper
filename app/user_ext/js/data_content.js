chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  alert("Received message from background");
  var posts = document.getElementsByClassName('fbUserContent');
  var returnVal = [];
  for(var i in posts) {
    if(isNaN(i) || i == 0){
      // Don't modify returnVal
    } else {
      console.log("Modified index " + i);
      returnVal.push(posts[i].getElementsByClassName('userContent')[0].children[0].innerHTML);
    }
  }
  sendResponse(returnVal);
});
