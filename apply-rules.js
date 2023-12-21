const addInTitles = {}

function applyRules(tabId, changeInfo) {

  if (!!addInTitles[tabId] && addInTitles[tabId] == changeInfo.title) {
    return
  }

  let targetTab = browser.tabs.get(tabId);
  targetTab.then((tab) => {

    let title = changeInfo.title || tab.title;
    let url = changeInfo.url || tab.url;

    let allRules = browser.storage.sync.get();
    allRules.then((rules) => {
      for (const rule_id in rules) {

        let rule = rules[rule_id];

        let testRule = false;
        let testTitle = Boolean(rule.title_regex) && RegExp(rule.title_regex).test(title);
        let testURL = Boolean(rule.url_regex) && RegExp(rule.url_regex).test(url);
        if (rule.and == 'true') {
          testRule = testTitle && testURL;
        } else {
          testRule = testTitle || testURL;
        }

        if (testRule) {

          if (rule.custom_title) {
            let newTitle = String(rule.custom_title)
            const pageURL = new URL(url)
            const now = new Date()

            newTitle = newTitle.replaceAll('[page_title]', title)
              .replaceAll('[page_url]', pageURL.href)
              .replaceAll('[page_host]', pageURL.host)
              .replaceAll('[page_hostname]', pageURL.hostname)
              .replaceAll('[page_hash]', pageURL.hash)
              .replaceAll('[page_search]', pageURL.search)
              .replaceAll('[page_username]', pageURL.username)
              .replaceAll('[page_origin]', pageURL.origin)
              .replaceAll('[page_pathname]', pageURL.pathname)
              .replaceAll('[page_port]', pageURL.port)
              .replaceAll('[page_protocol]', pageURL.protocol)
              .replaceAll('[year]', now.getFullYear())
              .replaceAll('[month]', now.getMonth() + 1)
              .replaceAll('[date]', now.getDate())
              .replaceAll('[weekday]', now.getDay())
              .replaceAll('[hours]', now.getHours())
              .replaceAll('[minutes]', now.getMinutes())
              .replaceAll('[seconds]', now.getSeconds())
            browser.tabs.executeScript(tabId, {
              code: "document.title = '" + newTitle + "'; "
            });

            addInTitles[tabId] = newTitle
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
  (tabId, changeInfo) => {
    applyRules(tabId, changeInfo);
  }, {
    properties:['url', 'status', 'title', 'favIconUrl']
  }
);

browser.browserAction.onClicked.addListener(() => {
  browser.windows.getCurrent({populate: true}).then((windowInfo) => {
    myWindowId = windowInfo.id;
  });
});
