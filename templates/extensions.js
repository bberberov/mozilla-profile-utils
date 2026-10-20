{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Extensions") -}}

%%  if 115 <= ver
// user_pref("extensions.quarantinedDomains.enabled",                  true);
	{{- comment(3, "(Default)") -}}
// user_pref("extensions.quarantinedDomains.list",                       "");
%%  endif
%%  if 153 <= ver
// user_pref("extensions.webextensions.fileSchemeAccess.requireOptIn", true);
%%  endif
%%  if true
user_pref("extensions.webextensions.restrictedDomains",               "");
%%  endif
%%  if 'firefox' == app
%%  	if 81 <= ver
user_pref("extensions.webcompat.enable_shims",                      true);
%%  	endif
%%  	if ver < 132
user_pref("webchannel.allowObject.urlWhitelist",                      "");
%%  	endif
%%  endif

{{- comment(2, "Update") -}}

%%  if true
// user_pref("extensions.update.enabled",           false);
user_pref("extensions.update.autoUpdateDefault", false);
// user_pref("extensions.update.interval",          86400);
%%  endif

{{- comment(2, "Recommendations") -}}

%%  if 'firefox' == app
%%  	if 65 <= ver
user_pref("browser.discovery.enabled",                          false);
%%  	endif
%%  	if true
user_pref("extensions.getAddons.showPane",                      false);
%%  	endif
%%  endif
%%  if 68 <= ver
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
%%  endif

{{- comment(2, "Extension Scopes") -}}

%%  if true
user_pref("extensions.autoDisableScopes", 14);
// user_pref("extensions.enabledScopes",      5);
	{{- comment(3, "(Hidden)") -}}
user_pref("extensions.startupScanScopes",  3);
%%  endif

{{- comment(2, "3rd Party") -}}

%%  if 'firefox' == app
%%  	if 82 <= ver
user_pref("extensions.postDownloadThirdPartyPrompt", false);
%%  	endif
%%  endif

%%  if 'thunderbird' == app
// user_pref("mail.cloud_files.enabled", false);
	{{- comment(3, "FileLink support") -}}
%%  endif
