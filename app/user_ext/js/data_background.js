chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(changeInfo && changeInfo.status == "complete"){
    if(tab.url == "https://www.facebook.com/groups/283120708687889/"){
      console.log("tab id:" + tabId);
      chrome.tabs.sendMessage(tabId, "Give me the dom", function(response){
        (function(response) {
          var xhttp = new XMLHttpRequest();
          xhttp.open("POST", "http://localhost:5000/");
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.onreadystatechange = function() {
            if(xhttp.status == 200 && xhttp.readyState == 4) {
              // Successful response
              // console.log(xhttp.responseText);
            }
          }
          for(var i in response){
            console.log("Index " + i + " contains " + response[i]);
          }
          xhttp.send(JSON.stringify(response));
        })(response)
      });
    }
  }
});
