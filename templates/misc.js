{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Miscellaneous ") -}}

{{- comment(2, "Accessibility") -}}

user_pref("accessibility.force_disabled", 1);

%%  if app == 'firefox' and 50 <= ver

{{- comment(2, "Containers") -}}

%%  	if true
user_pref("privacy.userContext.ui.enabled",  true);
	{{- comment(3, "(Default true since 153)") -}}
user_pref("privacy.userContext.enabled",     true);
	{{- comment(3, "(Default true since 153)") -}}
%%  	endif
%%  endif

{{- comment(2, "CSP (Content Security Policy)") -}}

%%  if ver < 99
user_pref("security.csp.enable",             true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 140 <= ver
user_pref("security.csp.reporting.enabled", false);
%%  endif
%%  if true
user_pref("security.dialog_enable_delay", 1500);
%%  endif

{{- comment(2, "Other") -}}

%%  if app == 'firefox'
user_pref("browser.shell.checkDefaultBrowser",     false);
user_pref("browser.uitour.enabled",                false);
%%  elif app == 'thunderbird'
user_pref("mail.shell.checkDefaultClient",         false);
%%  endif
%%  if ver < 83
user_pref("security.block_script_with_wrong_mime",  true);
%%  endif
%%  if 82 <= ver
user_pref("privacy.window.name.update.enabled",     true);
%%  endif
%%  if 151 <= ver
// user_pref("browser.contentsharing.enabled",           false);
// user_pref("browser.contentsharing.newBadge.enabled",   true);
%%	endif
%%  if 55 <= ver and ver < 64
user_pref("browser.onboarding.enabled",               false);
%%  endif
%%  if true
user_pref("browser.pagethumbnails.capturing_disabled", true);
	{{- comment(3, "(Hidden)") -}}
%%  endif
%%  if 144 <= ver
user_pref("browser.profiles.enabled",                 false);
	{{- comment(3, "(Default true since 150)") -}}
%%  endif
%%  if true
user_pref("devtools.debugger.remote-enabled",         false);
%%  endif
%%  if 143 <= ver
user_pref("devtools.anti-tracking.enabled",           false);
%%  endif

%%  if app == 'firefox'

%%  	if true
user_pref("browser.shell.shortcutFavicons",           false);
%%  	endif
%%  	if config_homepage is not defined
user_pref("browser.startup.page",                         0);
##- NOTE: user_pref("browser.newtab.url", "about:blank"); if before version 60
##- TODO: find out when chrome://browser/content/blanktab.html was introduced
%%  		if ver < 115
user_pref("browser.startup.homepage",                     "about:blank");
%%  		else
user_pref("browser.startup.homepage",                     "chrome://browser/content/blanktab.html");
%%  		endif
%%  	else
user_pref("browser.startup.page",                         1);
user_pref("browser.startup.homepage",                     "{{ config_homepage | join( '|' ) }}");
%%  	endif
%%  	if not public
user_pref("browser.startup.homepage_override.mstone",     "ignore");
	{{- comment(3, "(Hidden)") -}}
%%  	endif
%%  	if true
// user_pref("browser.navigation.requireUserInteraction", false);
	{{- comment(3, "(Default true since 135)") -}}
%%  	endif

%%  endif

%%  if 95 <= ver
##
// user_pref("privacy.globalprivacycontrol.enabled",                true);
// user_pref("privacy.globalprivacycontrol.functionality.enabled",  true);
	{{- comment(3, "(Default true since 120)") -}}
// user_pref("privacy.globalprivacycontrol.pbmode.enabled",         true);
##- TODO: unknown introduction
%%  endif
