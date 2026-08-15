{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, not_bool, use_vals with context

{{- comment(1, "Places: Bookmarks and History") -}}

%%  if 119 <= ver
// user_pref("browser.places.interactions.enabled", true);
%%  endif

{{- comment(2, "Places - Bookmarks") -}}

%%  if app == 'firefox'

%%  	if true
user_pref("browser.bookmarks.max_backups",            {{ use_vals(public, 7, 2) }});
%%  	endif
%%  	if 84 <= ver
user_pref("browser.bookmarks.defaultLocation", {{ use_vals(public, '"unfiled"', '"toolbar"') }});
%%  	endif

%%  elif app == 'thunderbird'

%%  	if true
user_pref("browser.bookmarks.max_backups", 0);
%%  	endif

%%  endif

{{- comment(2, "Places - Icons") -}}

%%  if app == 'thunderbird'
user_pref("browser.chrome.site_icons", false);
%%  endif

{{- comment(2, "Places - History") -}}

%%  if app == 'firefox'

%%  	if true
user_pref("places.history.enabled",              {{ not_bool(session) }});
user_pref("places.history.expiration.max_pages", 1048576);
%%  	endif

%%  elif app == 'thunderbird'

%%  	if true
user_pref("places.history.enabled", false);
%%  	endif

%%  endif

%%  if app == 'firefox'

{{- comment(2, "Per-tab session history") -}}

user_pref("browser.sessionhistory.max_entries", 20);
%%  endif

{{- comment(2, "Form Fill") -}}

%%  if app == 'firefox'

%%  	if true
user_pref("browser.formfill.enable",         {{ not_bool(session) }});
user_pref("browser.formfill.expire_days",        7);
%%  	endif
%%  	if ver < 55
user_pref("browser.formfill.saveHttpsForms", false);
%%  	endif
%%  	if 153 <= ver
user_pref("extensions.formautofill.useml",   false);
%%  	endif

%%  elif app == 'thunderbird'

%%  	if true
user_pref("browser.formfill.enable",         false);
%%  	endif

%%  endif

%%  if 55 <= ver

{{- comment(2, "Form Autofill") -}}

%%  	if true
user_pref("extensions.formautofill.addresses.enabled",     false);
%%  	endif
%%  	if 56 <= ver
user_pref("extensions.formautofill.available",             "off");
%%  		if 57 <= ver and ver < 117
user_pref("extensions.formautofill.creditCards.available", false);
%%  		endif
user_pref("extensions.formautofill.creditCards.enabled",   false);
%%  	endif
%%  	if 55 == ver
user_pref("extensions.formautofill.experimental",          false);
%%  	endif
%%  	if true
user_pref("extensions.formautofill.heuristics.enabled",    false);
%%  	endif
%%  endif

%%  if app == 'firefox'

{{- comment(2, "Frecency") -}}

%%  	if ver < 147
// user_pref("places.frecency.numVisits", 10);
	{{- comment(3, "Default: 10") -}}
// user_pref("places.frecency.firstBucketCutoff",    4);
	{{- comment(3, "Default: 4") -}}
// user_pref("places.frecency.secondBucketCutoff",  14);
	{{- comment(3, "Default: 14") -}}
// user_pref("places.frecency.thirdBucketCutoff",   31);
	{{- comment(3, "Default: 31") -}}
// user_pref("places.frecency.fourthBucketCutoff",  90);
	{{- comment(3, "Default: 90") -}}
// user_pref("places.frecency.firstBucketWeight",   100);
	{{- comment(3, "Default: 100") -}}
// user_pref("places.frecency.secondBucketWeight",   70);
	{{- comment(3, "Default: 70") -}}
// user_pref("places.frecency.thirdBucketWeight",    50);
	{{- comment(3, "Default: 50") -}}
// user_pref("places.frecency.fourthBucketWeight",   30);
	{{- comment(3, "Default: 30") -}}
// user_pref("places.frecency.defaultBucketWeight",  10);
	{{- comment(3, "Default: 10") -}}
// user_pref("places.frecency.embedVisitBonus",         0);
	{{- comment(3, "Default: 0") -}}
// user_pref("places.frecency.framedLinkVisitBonus",    0);
	{{- comment(3, "Default: 0") -}}
// user_pref("places.frecency.linkVisitBonus",        100);
	{{- comment(3, "Default: 100") -}}
user_pref("places.frecency.typedVisitBonus",       200);
	{{- comment(3, "Default: 2000") -}}
user_pref("places.frecency.bookmarkVisitBonus",    100);
	{{- comment(3, "Default: 75") -}}
// user_pref("places.frecency.redirectSourceVisitBonus", 25);
	{{- comment(3, "Default: 25") -}}
// user_pref("places.frecency.downloadVisitBonus",        0);
	{{- comment(3, "Default: 0") -}}
// user_pref("places.frecency.permRedirectVisitBonus",   50);
	{{- comment(3, "Default: 50") -}}
// user_pref("places.frecency.tempRedirectVisitBonus",   40);
	{{- comment(3, "Default: 40") -}}
// user_pref("places.frecency.reloadVisitBonus",          0);
	{{- comment(3, "Default: 0") -}}
// user_pref("places.frecency.defaultVisitBonus",         0);
	{{- comment(3, "Default: 0") -}}
user_pref("places.frecency.unvisitedBookmarkBonus",  200);
	{{- comment(3, "Default: 140") -}}
user_pref("places.frecency.unvisitedTypedBonus",     200);
	{{- comment(3, "Default: 200") -}}
%%  	endif

%%  	if 115 <= ver

{{- comment(2, "Frecency - Alternative") -}}

##  		if ver < 147
// user_perf("places.frecency.pages.alternative.interactions.manyKeypresses",                   50);
// user_perf("places.frecency.pages.alternative.interactions.maxVisitGapSeconds",              120);
// user_perf("places.frecency.pages.alternative.interactions.viewTimeIfManyKeypressesSeconds",  20);
// user_perf("places.frecency.pages.alternative.interactions.viewTimeSeconds",                  60);
// user_pref("places.frecency.pages.alternative.featureGate",                                false);
// user_pref("places.frecency.pages.alternative.halfLifeDays",                                  30);
// user_pref("places.frecency.pages.alternative.highWeight",                                   100);
// user_pref("places.frecency.pages.alternative.lowWeight",                                     20);
// user_pref("places.frecency.pages.alternative.mediumWeight",                                  50);
// user_pref("places.frecency.pages.alternative.numSampledVisits",                              10);
##  		else
// user_perf("places.frecency.pages.interactions.manyKeypresses",                   50);
// user_perf("places.frecency.pages.interactions.maxVisitGapSeconds",              120);
// user_perf("places.frecency.pages.interactions.viewTimeIfManyKeypressesSeconds",  20);
// user_perf("places.frecency.pages.interactions.viewTimeSeconds",                  60);
// user_perf("places.frecency.pages.lowWeight",                                     20);
// user_perf("places.frecency.pages.mediumWeight",                                  50);
// user_perf("places.frecency.pages.numSampledVisits",                              10);
// user_perf("places.frecency.pages.veryHighWeight",                               200);
// user_pref("places.frecency.pages.halfLifeDays",                                  30);
// user_pref("places.frecency.pages.highWeight",                                   100);
##  		endif
%%  	endif
%%  endif

{{- comment(2, "CSS history leak") -}}

%%  if true
user_pref("layout.css.visited_links_enabled", {{ not_bool(public) }});
%%  endif
