{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Search") -}}

user_pref("browser.fixup.alternate.enabled",        false);
%%  if ver < 65
user_pref("browser.fixup.hide_user_pass",            true);
%%  endif
%%  if ver < 63
user_pref("browser.search.countryCode",              "US");
	{{- comment(3, "(Hidden)") -}}
%%  endif
%%  if ver < 82
user_pref("browser.search.geoSpecificDefaults",     false);
%%  endif
user_pref("browser.search.suggest.enabled",         false);
%%  if 71 <= ver
user_pref("browser.search.suggest.enabled.private", false);
%%  endif

%%  if app == 'firefox'
user_pref("keyword.enabled",                         true);
	{{- comment(3, "(Default)") -}}
%%  endif

%%  if app == 'firefox'

{{- comment(2, "URLbar: Suggestions") -}}

user_pref("browser.urlbar.suggest.bookmark",                   true);
user_pref("browser.urlbar.suggest.history",                    true);
user_pref("browser.urlbar.suggest.openpage",                  false);
user_pref("browser.urlbar.suggest.searches",                  false);
%%  	if 78 <= ver
user_pref("browser.urlbar.suggest.topsites",                  false);
%%  	endif
%%  	if 85 <= ver
user_pref("browser.urlbar.suggest.engines",                   false);
%%  	endif
%%  	if 87 <= ver and ver < 95
user_pref("browser.urlbar.suggest.quicksuggest",              false);
%%  	endif
%%  	if 95 <= ver
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
%%  	endif
%%  	if 93 <= ver
user_pref("browser.urlbar.suggest.quicksuggest.sponsored",    false);
%%  	endif
%%  	if 89 <= ver
// user_pref("browser.urlbar.suggest.calculator",             false);
%%  	endif
%%  	if 85 <= ver
user_pref("browser.urlbar.shortcuts.bookmarks",    true);
user_pref("browser.urlbar.shortcuts.history",      true);
user_pref("browser.urlbar.shortcuts.tabs",        false);
%%  	endif
%%  	if 108 <= ver
user_pref("browser.urlbar.showSearchTerms.enabled", false);
%%  	endif

{{- comment(2, "URLbar: Other") -}}

%%  	if ver < 65
user_pref("browser.urlbar.autocomplete.enabled",              true);
%%  	endif
user_pref("browser.urlbar.autoFill",                          true);
	{{- comment(3, "(Default)") -}}
%%  	if ver < 62
user_pref("browser.urlbar.autoFill.typed",                    true);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  	if 53 <= ver
user_pref("browser.urlbar.decodeURLsOnCopy",                  true);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  	if 78 <= ver
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch",     0);
	{{- comment(3, "(Default since 104)") -}}
%%  	endif
%%  	if 69 <= ver
user_pref("browser.urlbar.eventTelemetry.enabled",           false);
	{{- comment(3, "(Default)") -}}
%%  	endif
user_pref("browser.urlbar.filter.javascript",                 true);
%%  	if 57 <= ver
user_pref("browser.urlbar.maxHistoricalSearchSuggestions",       5);
%%  	endif
%%  	if 51 <= ver and ver < 77
user_pref("browser.urlbar.oneOffSearches",                    true);
%%  	endif
%%  	if 87 <= ver
user_pref("browser.urlbar.quicksuggest.enabled",             false);
%%  	endif
%%  	if 56 <= ver
user_pref("browser.urlbar.speculativeConnect.enabled",       false);
%%  	endif
user_pref("browser.urlbar.trimURLs",                         false);
%%  	if 90 <= ver
// user_pref("browser.urlbar.unitConversion.enabled",        false);
%%  	endif
%%  	if 54 <= ver
user_pref("browser.urlbar.usepreloadedtopurls.enabled",      false);
%%  	endif
%%  	if 41 <= ver and ver < 67
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice",   true);
%%  	endif
%%  	if 83 <= ver and ver < 86
user_pref("browser.urlbar.update2.oneOffsRefresh",           false);
%%  	endif

%%  endif
