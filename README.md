# Custom Tab Title and Favicon

_Custom Tab Title and Favicon_ is a Firefox web extension that allows setting 
rules to change the title, and the favicon of any tab based on
regular expressions applied to the URL or the title of the tab

## Parameters

The rules are set in the options page of the web extension.

Each rule has the following parameters:

- _Rule Name:_ A user defined name to identify the rule
- _Title Regular Expression:_ A regular expression applied to the title of the tab. 
If the title of the tab matches the regular expression, this web extension applies the rule.
- _URL Regular Expression:_ A regular expression applied to the URL address of the tab. 
 If the URL address of the tab matches the regular expression, this web extension applies the rule.
- _Custom Title:_ The custom title replaces the title defined in the webpage when the rule is applied. 
If this custom title is not specified, the original title of the tab is unmodified.
- _Custom Favicon:_ The custom favicon replaces the favicon defined in the webpage when the rule is applied.
If this custom favicon is not specified, the original favicon of the tab is unmodified.

All parameters are optional.

## Sync support

This web extension stores the parameters in the synced storage space. The user can then share the settings
in all synced firefox instances.

## License
This web extension is distributed under the Mozilla Public License Version 2.0 (https://www.mozilla.org/en-US/MPL/2.0/)
