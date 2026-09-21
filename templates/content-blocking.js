{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, not_bool, use_vals with context

%%  if config_OAuth is not defined
%%  	set config_OAuth = False
%%  endif

{{- comment(1, "Content Blocking") -}}

%%  if 70 <= ver and app == 'firefox'
user_pref("browser.contentblocking.category", "custom");
%%  endif

{{- comment(2, "Cookies ( Use extensions to manage)") -}}

%%  if ver < 70
%%  	if   app == 'firefox'
user_pref("network.cookie.cookieBehavior",                      1);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior",                      {{ use_vals(config_OAuth, 1, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior",                      2);
%%  	endif
%%  elif 70 <= ver and ver < 78
%%  	if   app == 'firefox'
user_pref("network.cookie.cookieBehavior",                      4);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior",                      {{ use_vals(config_OAuth, 4, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior",                      2);
%%  	endif
%%  else
%%  	if   app == 'firefox'
user_pref("network.cookie.cookieBehavior",                      5);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior",                      {{ use_vals(config_OAuth, 5, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior",                      2);
%%  	endif
%%  endif
%%  if 122 <= ver
%%  	if   app == 'firefox'
// user_pref("network.cookie.cookieBehavior.optInPartitioning", true);
%%  	elif app == 'thunderbird'
// user_pref("network.cookie.cookieBehavior.optInPartitioning", {{ use_vals(config_OAuth, true, false) }});
%%  	else
// user_pref("network.cookie.cookieBehavior.optInPartitioning", false);
%%  	endif
%%  endif
%%  if 89 <= ver
%%  	if   app == 'firefox'
user_pref("network.cookie.cookieBehavior.pbmode",               5);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior.pbmode",               {{ use_vals(config_OAuth, 5, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior.pbmode",               2);
%%  	endif
%%  endif
%%  	if 3 <= doc
	// network.cookie.cookieBehavior*:
	// 0 - allow all cookies
	// 1 - reject all third-party cookies
	// 2 - reject all cookies
	// 3 - reject third-party cookies unless the, eTLD already has at least one cookie
	// 4 - reject trackers
	// 5 - partition third-party cookies
%%  	endif
%%  if 52 <= ver and ver < 67
user_pref("network.cookie.leave-secure-alone",               true);
%%  endif
%%  if ver < 104
%%  	if   app == 'firefox'
user_pref("network.cookie.lifetimePolicy",                      {{ use_vals(session, 2, 0) }});
%%  	elif app == 'thunderbird'
user_pref("network.cookie.lifetimePolicy",                      {{ use_vals(config_OAuth, 0, 2) }});
%%  	else
user_pref("network.cookie.lifetimePolicy",                      {{ use_vals(session, 2, 0) }});
%%  	endif
%%  endif
%%  if ver < 129
user_pref("network.cookie.thirdparty.sessionOnly",           true);
%%  endif
%%  if 58 <= ver and ver < 129
user_pref("network.cookie.thirdparty.nonsecureSessionOnly",  true);
%%  endif

{{- comment(2, "SafeBrowsing") -}}

%%  if true
user_pref("browser.safebrowsing.blockedURIs.enabled",      false);
user_pref("browser.safebrowsing.downloads.enabled",        false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url",        "");
// user_pref("browser.safebrowsing.downloads.remote.block_dangerous",            false);
// user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host",       false);
// user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
// user_pref("browser.safebrowsing.downloads.remote.block_uncommon",             false);
user_pref("browser.safebrowsing.malware.enabled",          false);
user_pref("browser.safebrowsing.phishing.enabled",         false);
// user_pref("browser.safebrowsing.passwords.enabled",     false);
	{{- comment(3, "(Default)") -}}
%%  endif

{{- comment(2, "Tracking Protection") -}}

%%  if 93 <= ver
user_pref("privacy.antitracking.enableWebcompat",                           {{ not_bool(public) }});
%%  endif
%%  if 139 <= ver
user_pref("privacy.antitracking.isolateContentScriptResources",              true);
%%  endif
%%  if 141 <= ver
user_pref("privacy.trackingprotection.allow_list.baseline.enabled",         false);
user_pref("privacy.trackingprotection.allow_list.convenience.enabled",      false);
user_pref("privacy.trackingprotection.allow_list.hasMigratedCategoryPrefs",  true);
%%  endif
%%  if true
user_pref("privacy.trackingprotection.enabled",                              true);
	{{- comment(3, "(Default)") -}}
user_pref("privacy.trackingprotection.pbmode.enabled",                       true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 66 <= ver
user_pref("privacy.trackingprotection.cryptomining.enabled",                 true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 67 <= ver and app == 'firefox'
user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled",     true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 104 <= ver
// user_pref("privacy.trackingprotection.emailtracking.enabled",                true);
%%  endif
%%  if 112 <= ver
// user_pref("privacy.trackingprotection.emailtracking.pbmode.enabled",         true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 66 <= ver
user_pref("privacy.trackingprotection.fingerprinting.enabled",               true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 67 <= ver and app == 'firefox'
user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled",   true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 147 <= ver
// user_pref("privacy.trackingprotection.harmfuladdon.enabled",                 true);
%%  endif
%%  if 69 <= ver
user_pref("privacy.trackingprotection.socialtracking.enabled",               true);
%%  endif
%%  if 70 <= ver and ver < 141 and app == 'firefox'
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled",  true);
%%  endif
%%  if ver < 63 and app == 'firefox'
user_pref("privacy.trackingprotection.ui.enabled",                           true);
	{{- comment(3, "(Default)") -}}
%%  endif

{{- comment(2, "Query Stripping") -}}

%%  if 90 <= ver
// user_pref("privacy.query_stripping.allow_list",                "");
// user_pref("privacy.query_stripping.enabled",                false);
// user_pref("privacy.query_stripping.redirect",                true);
// user_pref("privacy.query_stripping.strip_list",                "");
%%  endif
%%  if 115 <= ver
// user_pref("privacy.query_stripping.strip_on_share.enabled",  true);
	{{- comment(3, "(Default true since 120)") -}}
%%  endif

%%  if 131 <= ver

{{- comment(2, "Bounce Tracking Protection") -}}

// user_pref("privacy.bounceTrackingProtection.mode", 1);
%%  	if 3 <= doc
	// MODE_DISABLED = 0,
	// MODE_ENABLED = 1,
	// MODE_ENABLED_STANDBY = 2,
	// MODE_ENABLED_DRY_RUN = 3,
%%  	endif
%%  endif
