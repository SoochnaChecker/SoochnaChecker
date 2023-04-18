// Listen for a message from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openArticleInNewTab") {
    // Create a new tab and load the article in an iframe
    chrome.tabs.create(
      {
        url: chrome.runtime.getURL("article.html"),
      },
      (tab) => {
        console.log(request.articleUrl);
        chrome.tabs.executeScript(tab.id, {
          code: `
          const iframe = document.createElement("iframe");
          iframe.src = "${request.articleUrl}";
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          document.body.appendChild(iframe);
        `,
        });
      }
    );
  }
});
