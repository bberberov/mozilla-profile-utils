{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, not_bool, use_vals with context

{{- comment(1, "Places: Bookmarks and History") -}}

{{- comment(2, "Places - Bookmarks") -}}

%%  if app == 'firefox'
user_pref("browser.bookmarks.max_backups",            {{ use_vals(public, 7, 2) }});
%%  	if 84 <= ver
user_pref("browser.bookmarks.defaultLocation", {{ use_vals(public, '"unfiled"', '"toolbar"') }});
%%  	endif
%%  elif app == 'thunderbird'
user_pref("browser.bookmarks.max_backups", 0);
%%  endif

{{- comment(2, "Places - Icons") -}}

%%  if app == 'thunderbird'
user_pref("browser.chrome.site_icons", false);
%%  endif

{{- comment(2, "Places - History") -}}

%%  if app == 'firefox'
user_pref("places.history.enabled",              {{ not_bool(session) }});
user_pref("places.history.expiration.max_pages", 1048576);
%%  elif app == 'thunderbird'
user_pref("places.history.enabled", false);
%%  endif

%%  if app == 'firefox'

{{- comment(2, "Per-tab session history") -}}

user_pref("browser.sessionhistory.max_entries", 20);
%%  endif
##

{{- comment(2, "Form Fill") -}}

%%  if app == 'firefox'
user_pref("browser.formfill.enable",         {{ not_bool(session) }});
user_pref("browser.formfill.expire_days",        7);
%%  	if ver < 55
user_pref("browser.formfill.saveHttpsForms", false);
%%  	endif
%%  elif app == 'thunderbird'
user_pref("browser.formfill.enable",         false);
%%  endif

%%  if 55 <= ver

{{- comment(2, "Form Autofill") -}}

user_pref("extensions.formautofill.addresses.enabled",     false);
%%  	if 56 <= ver
user_pref("extensions.formautofill.available",             "off");
%%  		if 57 <= ver
user_pref("extensions.formautofill.creditCards.available", false);
%%  		endif
user_pref("extensions.formautofill.creditCards.enabled",   false);
%%  	endif
%%  	if 55 == ver
user_pref("extensions.formautofill.experimental",          false);
%%  	endif
user_pref("extensions.formautofill.heuristics.enabled",    false);
%%  endif


## Do not set for thunderbird
%%  if app == 'firefox'

{{- comment(2, "Frecency") -}}

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
%%  endif

{{- comment(2, "CSS history leak") -}}

user_pref("layout.css.visited_links_enabled", {{ not_bool(public) }});
