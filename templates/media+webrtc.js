{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Media and WebRTC") -}}

{{- comment(2, "Media") -}}

user_pref("media.navigator.enabled",                  false);
user_pref("media.navigator.video.enabled",            false);
##

{{- comment(2, "WebRTC") -}}

user_pref("media.peerconnection.enabled",                        false);
%%	if 42 <= ver
user_pref("media.peerconnection.ice.default_address_only",        true);
%%	endif

%%	if 51 <= ver
user_pref("media.peerconnection.ice.no_host",                     true);
%%	endif

%%	if 70 <= ver
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy",  true);
%%	endif

%%	if 42 <= ver
// user_pref("media.peerconnection.ice.relay_only",               true);
%%	endif
// user_pref("media.peerconnection.use_document_iceservers",      true);
user_pref("media.peerconnection.video.enabled",                  false);
##

{{- comment(2, "Screensharing") -}}

user_pref("media.getusermedia.audiocapture.enabled",  false);
user_pref("media.getusermedia.browser.enabled",       false);
user_pref("media.getusermedia.insecure.enabled",      false);
	{{- comment(3, "(Default)") -}}
user_pref("media.getusermedia.screensharing.enabled", false);
##

{{- comment(2, "GMP (Gecko Media Plugins) WebRTC") -}}

%%	if app == 'firefox'
user_pref("media.gmp-provider.enabled",                   false);
user_pref("media.gmp.trial-create.enabled",               false);
%%  endif
user_pref("media.gmp-manager.url",           "data:text/plain,");
user_pref("media.gmp-manager.url.override",  "data:text/plain,");
	{{- comment(3, "(Hidden)") -}}
user_pref("media.gmp-manager.updateEnabled",              false);
	{{- comment(3, "(Hidden)") -}}

%%	if app == 'firefox'

{{- comment(2, "OpenH264 Video Codec by Cisco") -}}

user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled",    false);
	{{- comment(3, "(Hidden)") -}}
user_pref("media.gmp-gmpopenh264.visible",     true);
##

{{- comment(2, "Widevine CDM (Content Decryption Module)") -}}

user_pref("media.gmp-widevinecdm.visible",    false);
user_pref("media.gmp-widevinecdm.enabled",    false);
%%  	if ver < 66
user_pref("media.gmp-widevinecdm.autoupdate", false);
%%  	endif
%%  endif

{{- comment(2, "DRM content (EME: Encrypted Media Extensions)") -}}

%%  if ver < 54
user_pref("media.eme.apiVisible",   false);
%%  endif
user_pref("media.eme.enabled",      false);
%%	if app == 'firefox'
user_pref("browser.eme.ui.enabled", false);
%% 		if 55 <= ver and ver < 57
user_pref("media.eme.chromium-api.enabled", false);
%%  	endif
%%  endif

{{- comment(2, "Other") -}}

%%		if 116 <= ver
// user_pref("media.devices.enumerate.legacy.enabled", false);
%%  	endif
