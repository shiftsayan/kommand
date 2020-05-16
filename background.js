chrome.commands.onCommand.addListener(function(command) {
    if (command == "kommand") {
        chrome.tabs.query(
            {currentWindow: true, active: true}, 
            (tabs) => { chrome.tabs.sendMessage(tabs[0].id, {action: 'kommand'}); }
        )
    }
});