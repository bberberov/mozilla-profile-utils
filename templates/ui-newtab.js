{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "New Tab Page") -}}

%%  if   app == 'firefox'
user_pref("browser.newtabpage.enabled",    false);
user_pref("browser.newtab.preload",        false);
%%  	if ver < 60
user_pref("browser.newtabpage.enhanced",   false);
user_pref("browser.newtabpage.introShown", {{ use_bool(warn) }});
%%  	endif
%%  elif app == 'thunderbird'
// user_pref("browser.newtabpage.enabled",    false);
// user_pref("browser.newtab.preload",        false);
%%  endif

%%  if app == 'firefox'

{{- comment(2, "Activity Stream") -}}

%%  	if 57 <= ver and ver < 87
user_pref("browser.library.activity-stream.enabled",                                               false);
%%  	endif
%%  	if 54 <= ver and ver < 60
user_pref("browser.newtabpage.activity-stream.enabled",                                            false);
%%  	endif
##-
##- ASRouter
%%  	if ver < 122
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets",                         "{}");
%%  	endif
%%  	if 67 <= ver
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",                      false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",                    false);
%%  	endif
##-
##- Feeds
%%  	if 66 <= ver
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed",                          false);
%%  	endif
%%  	if 57 <= ver
// user_pref("browser.newtabpage.activity-stream.feeds.newtabinit",                                   false);
// user_pref("browser.newtabpage.activity-stream.feeds.places",                                       false);
// user_pref("browser.newtabpage.activity-stream.feeds.sections",                                     false);
%%  	endif
%%  	if ver < 122
user_pref("browser.newtabpage.activity-stream.feeds.snippets",                                     false);
%%  	endif
%%  	if 57 <= ver
// user_pref("browser.newtabpage.activity-stream.feeds.systemtick",                                   false);
// user_pref("browser.newtabpage.activity-stream.showSearch",                                         false);
%%  	endif
%%  	if 58 <= ver
user_pref("browser.newtabpage.activity-stream.showSponsored",                                      false);
%%  	endif
%%  	if 140 <= ver
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes",                            false);
%%  	endif

##- Improve search
%%  	if 57 <= ver
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts",               false);
// user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines",    "");
%%  	endif

{{- comment(2, "Activity Stream - Shortcuts / Top Sites") -}}

%%  	if 57 <= ver
// user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
// user_pref("browser.newtabpage.activity-stream.feeds.topsites",        false);
// user_pref("browser.newtabpage.activity-stream.default.sites",            "");
%%  	endif

%%  	if 83 <= ver
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
%%  	endif

%%  	if 60 <= ver
// user_pref("browser.newtabpage.activity-stream.topSitesRows",              1);
%%  	endif

{{- comment(2, "Activity Stream - Top Stories") -}}

%%  	if 57 <= ver
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
%%  	endif

%%  	if 62 <= ver
// user_pref("browser.newtabpage.activity-stream.section.topstories.rows",      1);
%%  	endif

{{- comment(2, "Activity Stream - Recent Activity") -}}

%%  	if 57 <= ver
// user_pref("browser.newtabpage.activity-stream.feeds.section.highlights",            false);
// user_pref("browser.newtabpage.activity-stream.feeds.system.topstories",             false);
%%  	endif

%%  	if 60 <= ver and ver < 141
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket",    false);
	{{- comment(3, "Pocket is deprecated") -}}
%%  	endif

%%  	if 61 <= ver
// user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
// user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited",   false);
%%  	endif

%%  	if 62 <= ver
// user_pref("browser.newtabpage.activity-stream.section.highlights.rows",                 2);
%%  	endif

%%  	if 127 <= ver

{{- comment(2, "Activity Stream - Weather") -}}

user_pref("browser.newtabpage.activity-stream.showWeather",        false);
user_pref("browser.newtabpage.activity-stream.system.showWeather", false);
%%  	endif

%%  endif
{#- app == 'firefox' -#}
