chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action) {
      switch (message.action) {
        case 'kommand':
            runKommand();
        }
    }
});

function runKommand() {
    
}