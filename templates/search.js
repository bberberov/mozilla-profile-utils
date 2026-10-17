{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Search") -}}

%%  if ver < 119
user_pref("browser.fixup.alternate.enabled",                         false);
%%  endif
%%  if ver < 65
user_pref("browser.fixup.hide_user_pass",                             true);
%%  endif
%%  if ver < 63
user_pref("browser.search.countryCode",                               "US");
	{{- comment(3, "(Hidden)") -}}
%%  endif
%%  if ver < 82
user_pref("browser.search.geoSpecificDefaults",                      false);
%%  endif
%%  if 119 <= ver
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
%%  endif
%%  if true
user_pref("browser.search.suggest.enabled",                          false);
%%  endif
%%  if 71 <= ver
user_pref("browser.search.suggest.enabled.private",                  false);
%%  endif
%%  if 'firefox' == app
user_pref("keyword.enabled",                                          true);
	{{- comment(3, "(Default)") -}}
%%  endif

%%  if 'firefox' == app

{{- comment(2, "URLbar: Suggestions") -}}

%%  	if 141 <= ver
user_pref("browser.urlbar.suggest.amp",                       false);
%%  	endif
%%  	if true
user_pref("browser.urlbar.suggest.bookmark",                   true);
%%  	endif
%%  	if 89 <= ver
user_pref("browser.urlbar.suggest.calculator",                 true);
	{{- comment(3, "(Default true since 137)") -}}
%%  	endif
%%  	if 118 <= ver
user_pref("browser.urlbar.suggest.clipboard",                 false);
%%  	endif
%%  	if 85 <= ver
user_pref("browser.urlbar.suggest.engines",                   false);
%%  	endif
%%  	if 130 <= ver and ver < 143
user_pref("browser.urlbar.suggest.fakespot",                  false);
%%  	endif
%%  	if true
user_pref("browser.urlbar.suggest.history",                    true);
%%  	endif
%%  	if 143 <= ver
// user_pref("browser.urlbar.suggest.importantDates",             true);
%%  	endif
%%  	if 117 <= ver
user_pref("browser.urlbar.suggest.mdn",                       false);
%%  	endif
%%  	if true
user_pref("browser.urlbar.suggest.openpage",                  false);
%%  	endif
%%  	if 116 <= ver and ver < 140
user_pref("browser.urlbar.suggest.pocket",                    false);
%%  	endif
%%  	if 87 <= ver and ver < 95
user_pref("browser.urlbar.suggest.quicksuggest",              false);
%%  	endif
%%  	if 146 <= ver
// user_pref("browser.urlbar.suggest.quicksuggest.all",          false);
%%  	endif
%%  	if 95 <= ver
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  	if 93 <= ver
user_pref("browser.urlbar.suggest.quicksuggest.sponsored",    false);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  	if 120 <= ver
// user_pref("browser.urlbar.suggest.recentsearches",             true);
%%  	endif
%%  	if 143 <= ver
// user_pref("browser.urlbar.suggest.realtimeOptIn",              true);
%%  	endif
%%  	if true
user_pref("browser.urlbar.suggest.searches",                  false);
%%  	endif
%%  	if 78 <= ver
user_pref("browser.urlbar.suggest.topsites",                  false);
%%  	endif
%%  	if 118 <= ver
user_pref("browser.urlbar.suggest.trending",                  false);
%%  	endif
%%  	if 123 <= ver
user_pref("browser.urlbar.suggest.yelp",                      false);
%%  	endif
%%  	if 143 <= ver
user_pref("browser.urlbar.suggest.yelpRealtime",              false);
%%  	endif
%%  	if 141 <= ver
user_pref("browser.urlbar.suggest.wikipedia",                 false);
%%  	endif
%%  	if 85 <= ver
user_pref("browser.urlbar.shortcuts.bookmarks",                true);
user_pref("browser.urlbar.shortcuts.history",                  true);
user_pref("browser.urlbar.shortcuts.tabs",                    false);
%%  	endif
%%  	if 108 <= ver
user_pref("browser.urlbar.showSearchTerms.enabled",           false);
%%  	endif

{{- comment(2, "URLbar: Other") -}}

%%  	if 115 <= ver
// user_pref("browser.urlbar.addons.minKeywordLength",              0);
%%  	endif
%%  	if ver < 65
user_pref("browser.urlbar.autocomplete.enabled",              true);
%%  	endif
%%  	if true
user_pref("browser.urlbar.autoFill",                          true);
	{{- comment(3, "(Default)") -}}
%%  	endif
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
%%  	if 69 <= ver and ver < 120
user_pref("browser.urlbar.eventTelemetry.enabled",           false);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  	if true
user_pref("browser.urlbar.filter.javascript",                 true);
user_pref("browser.urlbar.maxCharsForSearchSuggestions",        32);
	{{- comment(3, "(Default 100 since 77, previous 20)") -}}
%%  	endif
%%  	if 57 <= ver
user_pref("browser.urlbar.maxHistoricalSearchSuggestions",       5);
%%  	endif
%%  	if 51 <= ver and ver < 77
user_pref("browser.urlbar.oneOffSearches",                    true);
%%  	endif
%%  	if 87 <= ver
user_pref("browser.urlbar.quicksuggest.enabled",             false);
%%  	endif
%%  	if 118 <= ver
// user_pref("browser.urlbar.trimHttps",                        false);
%%  	endif
%%  	if true
user_pref("browser.urlbar.trimURLs",                         false);
%%  	endif
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
%%  	if 114 <= ver
// user_pref("browser.urlbar.weather.ignoreVPN",                false);
// user_pref("browser.urlbar.weather.minKeywordLength",             0);
%%  	endif
%%  	if 135 <= ver
// user_pref("browser.urlbar.unifiedSearchButton.always",       false);
%%  	endif

%%  endif
{#- 'firefox' == app -#}
