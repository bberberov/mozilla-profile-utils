{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Media and WebRTC") -}}

{{- comment(2, "Media") -}}

%%  if true
user_pref("media.navigator.enabled",                  false);
user_pref("media.navigator.video.enabled",            false);
%%  endif

{{- comment(2, "WebRTC") -}}

%%  if ver < 116
user_pref("media.peerconnection.enabled",                        false);
%%  endif
%%  if 42 <= ver
user_pref("media.peerconnection.ice.default_address_only",        true);
%%  endif
%%  if 51 <= ver
user_pref("media.peerconnection.ice.no_host",                     true);
%%  endif
%%  if 70 <= ver
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy",  true);
%%  endif
%%  if 114 <= ver
user_pref("media.peerconnection.ice.proxy_only_if_pbmode",       false);
%%  endif
%%  if 42 <= ver
// user_pref("media.peerconnection.ice.relay_only",                  true);
%%  endif
%%  if 141 <= ver
// user_pref("media.peerconnection.sctp.default_max_streams",        2048);
// user_pref("media.peerconnection.sctp.use_dcsctp",                false);
%%	endif
%%  if true
// user_pref("media.peerconnection.use_document_iceservers",         true);
user_pref("media.peerconnection.video.enabled",                  false);
%%  endif

{{- comment(2, "Screensharing") -}}

%%  if ver < 127
user_pref("media.getusermedia.audiocapture.enabled",  false);
%%  else
user_pref("media.getusermedia.audio.capture.enabled", false);
%%  endif
%%  if true
user_pref("media.getusermedia.browser.enabled",       false);
user_pref("media.getusermedia.insecure.enabled",      false);
	{{- comment(3, "(Default)") -}}
user_pref("media.getusermedia.screensharing.enabled", false);
%%  endif

{{- comment(2, "GMP (Gecko Media Plugins) WebRTC") -}}

%%  if 'firefox' == app
user_pref("media.gmp-provider.enabled",                   false);
user_pref("media.gmp.trial-create.enabled",               false);
%%  endif
%%  if true
user_pref("media.gmp-manager.url",           "data:text/plain,");
user_pref("media.gmp-manager.url.override",  "data:text/plain,");
	{{- comment(3, "(Hidden)") -}}
user_pref("media.gmp-manager.updateEnabled",              false);
	{{- comment(3, "(Hidden)") -}}
%%  endif

%%  if 'firefox' == app

{{- comment(2, "OpenH264 Video Codec by Cisco") -}}

%%  	if true
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled",    false);
	{{- comment(3, "(Hidden)") -}}
user_pref("media.gmp-gmpopenh264.visible",     true);
%%  	endif

{{- comment(2, "Widevine CDM (Content Decryption Module)") -}}

%%  	if true
user_pref("media.gmp-widevinecdm.visible",    false);
user_pref("media.gmp-widevinecdm.enabled",    false);
%%  	endif
%%  	if ver < 66
user_pref("media.gmp-widevinecdm.autoupdate", false);
%%  	endif

%%  endif

{{- comment(2, "DRM content (EME: Encrypted Media Extensions)") -}}

%%  if ver < 54
user_pref("media.eme.apiVisible",   false);
%%  endif
%%  if true
user_pref("media.eme.enabled",      false);
%%  endif
%%  if 'firefox' == app
user_pref("browser.eme.ui.enabled", false);
%%  	if 55 <= ver and ver < 57
user_pref("media.eme.chromium-api.enabled", false);
%%  	endif
%%  endif

{{- comment(2, "Other") -}}

%%  if 116 <= ver
// user_pref("media.devices.enumerate.legacy.enabled", false);
%%  endif
