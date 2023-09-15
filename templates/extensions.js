{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Extensions") -}}

%%  if 115 <= ver
user_pref("extensions.quarantinedDomains.enabled",      true);
	{{- comment(3, "(Default)") -}}
%%  endif
user_pref("extensions.webextensions.restrictedDomains", "");
##
%%  if app == 'firefox'
user_pref("webchannel.allowObject.urlWhitelist",        "");
%%  	if 81 <= ver
user_pref("extensions.webcompat.enable_shims", true);
%%  	endif
%%  endif

{{- comment(2, "Update") -}}

// user_pref("extensions.update.enabled",           false);
user_pref("extensions.update.autoUpdateDefault", false);
// user_pref("extensions.update.interval",          86400);

{{- comment(2, "Recommendations") -}}

%%  if 65 <= ver
user_pref("browser.discovery.enabled",                          false);
%%  endif
user_pref("extensions.getAddons.showPane",                      false);
%%  if 68 <= ver
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
%%  endif

{{- comment(2, "Extension Scopes") -}}

user_pref("extensions.autoDisableScopes", 14);
// user_pref("extensions.enabledScopes",      5);
	{{- comment(3, "(Hidden)") -}}
user_pref("extensions.startupScanScopes",  3);

%%  if app == 'firefox'

{{- comment(2, "3rd Party") -}}

%%  	if 82 <= ver
user_pref("extensions.postDownloadThirdPartyPrompt", false);
%%  	endif
%%  endif
