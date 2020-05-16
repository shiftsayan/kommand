chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action) {
        switch (message.action) {
            case 'kommand':
                runKommand();
        }
    }
});

function getElementByAriaLabel(label) {
    return document.querySelectorAll("[aria-label^='" + label + "']")[0];
}

function getElementByType(label) {
    return document.querySelectorAll("[type^='" + label + "']")[0];
}

function runKommand() {
    switch (window.location.hostname) {
        case 'www.google.com':
            var bar = getElementByAriaLabel('Search');
            break;
        case 'www.facebook.com':
            var bar = getElementByAriaLabel('Search Facebook');
            break;
        case 'github.com':
            var bar = getElementByAriaLabel('Search or jump to…');
            break;
        case 'www.gradescope.com':
            var bar = getElementByType('search');
            break;
        case 'www.netflix.com':
            var bar = getElementByAriaLabel('Search');
            break;
        case 'drive.google.com':
            var bar = getElementByAriaLabel('Search in Drive');
            break;
    }
    bar.focus();
    bar.select();
}