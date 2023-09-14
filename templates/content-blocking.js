{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, use_vals with context

%%  if config_OAuth is not defined
%%  	set config_OAuth = False
%%  endif

{{- comment(1, "Content Blocking") -}}

%%  if 70 <= ver and app == 'firefox'
user_pref("browser.contentblocking.category", "custom");
%%  endif

{{- comment(2, "Cookies ( Use extensions to manage)") -}}

%%  if ver < 70
%%  	if app == 'firefox'
user_pref("network.cookie.cookieBehavior",                      1);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior",                      {{ use_vals(config_OAuth, 1, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior",                      2);
%%  	endif
%%  elif 70 <= ver and ver < 78
%%  	if app == 'firefox'
user_pref("network.cookie.cookieBehavior",                      4);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior",                      {{ use_vals(config_OAuth, 4, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior",                      2);
%%  	endif
%%  else
%%  	if app == 'firefox'
user_pref("network.cookie.cookieBehavior",                      5);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior",                      {{ use_vals(config_OAuth, 5, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior",                      2);
%%  	endif
%%  endif

%%  if 89 <= ver
%%  	if app == 'firefox'
user_pref("network.cookie.cookieBehavior.pbmode",               5);
%%  	elif app == 'thunderbird'
user_pref("network.cookie.cookieBehavior.pbmode",               {{ use_vals(config_OAuth, 5, 2) }});
%%  	else
user_pref("network.cookie.cookieBehavior.pbmode",               2);
%%  	endif
%%  endif

%%  if 52 <= ver and ver < 67
user_pref("network.cookie.leave-secure-alone",               true);
%%  endif

%%  if ver < 104
%%  	if app == 'firefox'
user_pref("network.cookie.lifetimePolicy",                      {{ use_vals(session, 2, 0) }});
%%  	elif app == 'thunderbird'
user_pref("network.cookie.lifetimePolicy",                      {{ use_vals(config_OAuth, 0, 2) }});
%%  	else
user_pref("network.cookie.lifetimePolicy",                      {{ use_vals(session, 2, 0) }});
%%  	endif
%%  endif
user_pref("network.cookie.thirdparty.sessionOnly",           true);
%%  if 58 <= ver
user_pref("network.cookie.thirdparty.nonsecureSessionOnly",  true);
%%  endif

{{- comment(2, "SafeBrowsing") -}}

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

{{- comment(2, "Tracking Protection") -}}

user_pref("privacy.trackingprotection.enabled",                             true);
	{{- comment(3, "(Default)") -}}
user_pref("privacy.trackingprotection.pbmode.enabled",                      true);
	{{- comment(3, "(Default)") -}}

%%  if 66 <= ver
user_pref("privacy.trackingprotection.cryptomining.enabled",                true);
	{{- comment(3, "(Default)") -}}
user_pref("privacy.trackingprotection.fingerprinting.enabled",              true);
	{{- comment(3, "(Default)") -}}
%%  endif

%%  if 67 <= ver and app == 'firefox'
user_pref("browser.contentblocking.cryptomining.preferences.ui.enabled",    true);
	{{- comment(3, "(Default)") -}}
user_pref("browser.contentblocking.fingerprinting.preferences.ui.enabled",  true);
	{{- comment(3, "(Default)") -}}
%%  endif

%%  if 69 <= ver
user_pref("privacy.trackingprotection.socialtracking.enabled",              true);
%%  endif

%%  if 70 <= ver and app == 'firefox'
user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", true);
%%  endif

%%  if ver < 63 and app == 'firefox'
user_pref("privacy.trackingprotection.ui.enabled",                          true);
	{{- comment(3, "(Default)") -}}
%%  endif
