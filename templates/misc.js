{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

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

user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.enabled",    true);
%%  endif

%%  if ver < 99

{{- comment(2, "CSP (Content Security Policy)") -}}

user_pref("security.csp.enable",          true);
	{{- comment(3, "(Default)") -}}

%%  endif
user_pref("security.dialog_enable_delay", 1500);

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

%%	if 55 <= ver and ver < 64
user_pref("browser.onboarding.enabled", false);
%%	endif

user_pref("devtools.debugger.remote-enabled", false);

%%  if app == 'firefox'
user_pref("browser.shell.shortcutFavicons", false);

%%  	if config_homepage is not defined
user_pref("browser.startup.page",      0);
user_pref("browser.startup.homepage", "about:blank");
%%  	else
user_pref("browser.startup.page",      1);
user_pref("browser.startup.homepage", "{{ config_homepage | join( '|' ) }}");
%%  	endif
%%  	if not public
user_pref("browser.startup.homepage_override.mstone", "ignore");
%%  	endif

// user_pref("browser.navigation.requireUserInteraction",     false);
%%  endif
