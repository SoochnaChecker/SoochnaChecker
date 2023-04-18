// Listen for a message from the background script
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "openArticleInNewTab") {
    // Create a new tab and load the article in an iframe
    chrome.tabs.create(
      {
        url: chrome.runtime.getURL("iframe.html"),
      },
      (tab) => {
        console.log(request.articleUrl);
        chrome.tabs.executeScript(tab.id, {
          code: `
          const iframe = document.createElement("iframe");
          iframe.src = "${request.articleUrl}";
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          iframe.onload = () => {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.body.appendChild(document.createElement("p")).textContent = "This element was injected into the iframe body.";
          };
          document.body.appendChild(iframe);
        `,
        });
      }
    );
  }
});
