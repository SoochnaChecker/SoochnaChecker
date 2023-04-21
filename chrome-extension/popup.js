document.getElementById("open-iframe").addEventListener("click", function () {
  var inputUrl = document.getElementById("input").value;
  var iframeUrl =
    chrome.runtime.getURL("iframe.html") +
    "?url=" +
    encodeURIComponent(inputUrl);
  chrome.tabs.create({ url: iframeUrl });
  console.log(iframeUrl);
});
