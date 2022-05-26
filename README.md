# Custom Tab Title and Favicon

_Custom Tab Title and Favicon_ is a Firefox web extension that allows setting 
rules to change the title, and the favicon of any tab based on
regular expressions applied to the URL or the title of the tab

## Parameters

You can manage the rules for your tabs in:

- The preferences section of the add-on listed in the Extension Management of Firefox
- By clicking on the add-on icon in the toolbar
- By displaying it in the sidebar

Each rule has the following rule settings (all of them are optional):

| Setting                    | Description                                                                                                                                                                                                                                                            |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _Rule Name_                | A user defined name to identify the rule                                                                                                                                                                                                                               |
| _Title Regular Expression_ | A matching rule applied to the title of the tab. If the title of the tab matches the regular expression, this web extension applies the rule. A simple portion of text or a regular expression are supported                                                           |
| _URL Regular Expression_   | A matching applied to the URL address of the tab. If the URL address of the tab matches the regular expression, this web extension applies the rule. A simple portion of text or a regular expression are supported                                                    |
| _Custom Title_             | The custom title replaces the title defined in the webpage when the rule is applied. If this custom title is not specified, the original title of the tab is unmodified. Dynamic values extracted from the current page can be automatically inserted in the new title |
| _Custom Favicon_           | The custom favicon replaces the favicon defined in the webpage when the rule is applied. If this custom favicon is not specified, the original favicon of the tab is unmodified.                                                                                                                                                                                                                                                                    |


The _Custom Title_ setting also supports injection of dynamic values. When the _Custom
Title_ value contains one of the input texts in the table below, it will be automatically replaced by the corresponding value.

| Input text      | Description                                                                                                                                                                                           | Example Custom title      | Page address                                  | Original title                            | New page title                                      |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|-----------------------------------------------|-------------------------------------------|-----------------------------------------------------|
| [page_title]    | The title of the tab.                                                                                                                                                                                 | Visiting: [page_title]    | https://www.mozilla.org/en-US                 | Internet for people, not profit - Mozilla | Visiting: Internet for people, not profit - Mozilla |
| [page_url]      | The URL of the page                                                                                                                                                                                   | URL: [page_title]         | https://www.mozilla.org/en-US                 | Internet for people, not profit - Mozilla | URL: https://www.mozilla.org/en-US                  |
| [page_host]     | The host property of the URL interface is a string containing the host, that is the hostname, and then, if the port of the URL is nonempty, a ':', followed by the port of the URL.                   | Host: [page_host]         | https://www.mozilla.org/en-US                 | Internet for people, not profit - Mozilla | Host: www.mozilla.org                               |
| [page_hostname] | The hostname property of the URL interface is a string containing the domain name of the URL.                                                                                                         | Hostname: [page_hostname] | https://www.mozilla.org/en-US                 | Internet for people, not profit - Mozilla | Hostname: www.mozilla.org                           |
| [page_hash]     | The hash property of the URL interface is a string containing a '#' followed by the fragment identifier of the URL.                                                                                   | Hash on page: [page_hash] | https://www.mozilla.org/en-US/#some_anchor    | Internet for people, not profit - Mozilla | Hash on page: #some_anchor                          |
| [page_search]   | The search property of the URL interface is a search string, also called a query string, that is a string containing a '?' followed by the parameters of the URL.                                     | Query: [page_search]      | https://duckduckgo.com/?q=firefox&t=h_&ia=web | firefox at DuckDuckgo                     | Query: ?q=firefox&t=h_&ia=web                       |
| [page_username] | The username property of the URL interface is a string containing the username specified before the domain name.                                                                                      | User: [page_username]     | https://utilisateur:password@www.example.com/ | Example domain                            | User: utilisateur                                   |
| [page_origin]   | The origin read-only property of the URL interface returns a string containing the Unicode serialization of the origin of the represented URL.                                                        | Origin: [page_origin]     | blob:https://mozilla.org:443/                 | ---                                       | Origin: https://mozilla.org                         |
| [page_pathname] | The pathname property of the URL interface is a string containing an initial / followed by the path of the URL, not including the query string or fragment (or the empty string if there is no path). | Path: [page_pathname]     | https://developer.mozilla.org/en-US/docs      | Web technology for developers I MDN       | Path: /en-US/docs                                   |                                                   
| [page_port]     | The port property of the URL interface is a string containing the port number of the URL.                                                                                                             | Port: [page_port]         | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Port: 443                                           |
| [page_protocol] | The protocol property of the URL interface is a string representing the protocol scheme of the URL, including the final ':'.                                                                          | Protocol: [page_protocol] | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Protocol: https                                     |
| [year]          | The current year                                                                                                                                                                                      | Year: [year]              | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Year: 2022                                          |
| [month]         | The current month                                                                                                                                                                                     | Month: [month]            | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Month: 5                                            |
| [date]          | The current day in the month                                                                                                                                                                          | Date: [date]              | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Date: 26                                            |
| [weekday]       | The current day in the week (Monday = 1, Tuesday = 2, ...)                                                                                                                                            | Day: [weekday]            | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Day: 4                                              |
| [hours]         | The current hour in the day                                                                                                                                                                           | Hours: [hours]            | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Hours: 13                                           |
| [minutes]       | The current minutes in the current hour                                                                                                                                                               | Minutes: [minutes]        | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Minutes: 39                                         |
| [seconds]       | The current seconds in the current minute                                                                                                                                                             | Seconds: [seconds]        | https://www.mozilla.org:443/en-US             | Internet for people, not profit - Mozilla | Seconds: 52                                         |


## Sync support

This web extension stores the parameters in the synced storage space. The user can then share the settings
in all synced firefox instances.

## License
This web extension is distributed under the Mozilla Public License Version 2.0 (https://www.mozilla.org/en-US/MPL/2.0/)
