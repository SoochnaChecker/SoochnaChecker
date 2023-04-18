// Listen for the user clicking on the extension's icon
chrome.browserAction.onClicked.addListener((tab) => {
  // Prompt the user for the URL of the article they want to view
  const articleUrl = prompt("Enter the URL of the article you want to view:");
  if (articleUrl) {
    // Send a message to the content script to open the article in a new tab
    chrome.tabs.sendMessage(tab.id, {
      action: "openArticleInNewTab",
      articleUrl: articleUrl,
    });
    console.log(articleUrl);
  }
});
