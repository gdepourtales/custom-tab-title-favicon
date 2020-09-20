function applyRules(tabId) {

    let targetTab = browser.tabs.get(tabId);
    targetTab.then((tab) => {
        let title = tab.title;
        let url = tab.url;

        let allRules = browser.storage.sync.get();
        allRules.then((rules) => {
            for (const rule_id in rules) {
                let rule = rules[rule_id];
                console.log("Testing rule " + rule.rule_name + " (#" + rule_id + ")");
                if ((rule.title_regex && RegExp(rule.title_regex).test(title)) ||
                    (rule.url_regex && RegExp(rule.url_regex).test(url))) {
                    console.log(rule);
                    if (rule.custom_title) {
                        browser.tabs.executeScript(tabId, {
                            code: "document.title = '" + rule.custom_title +"';"
                        });
                    }
                    if (rule.custom_icon_url) {
                        browser.tabs.executeScript(tabId, {
                            code: "var link = document.querySelector(\"link[rel*='icon']\") || document.createElement('link');\n" +
                                "    link.type = 'image/x-icon';\n" +
                                "    link.rel = 'shortcut icon';\n" +
                                "    link.href = '" + rule.custom_icon_url + "';\n" +
                                "    document.getElementsByTagName('head')[0].appendChild(link);"
                        })
                    }
                }
            }
        });
    });
}

browser.tabs.onUpdated.addListener(
    (tabId) => {
        applyRules(tabId);
    }
);
