{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, use_bool, not_bool with context

{{- comment(1, "DOM - Other") -}}

%%  if app == 'thunderbird'
%%  	if config_OAuth is defined
user_pref("javascript.enabled", {{ use_bool(config_OAuth) }});
%%  	else
user_pref("javascript.enabled", false);
%%  	endif
%%  endif

{{- comment(2, "Miscellaneous") -}}

user_pref("dom.allow_scripts_to_close_windows", false);
	{{- comment(3, "(Default)") -}}
%%  if 84 <= ver
user_pref("dom.block_download_insecure",         true);
%%  endif
user_pref("dom.popup_maximum",                      3);
%%  if ver < 103
user_pref("dom.ipc.shims.enabledWarnings",       true);
%%  endif
%%  if ver < 54
user_pref("dom.archivereader.enabled",          false);
%%  endif

{{- comment(2, "Storage") -}}

%%  if config_domStorageQuota is defined
%%  	if  5120 < config_domStorageQuota
user_pref("dom.storage.default_quota",      {{ config_domStorageQuota }});
%%  	endif
%%  	if 25600 < config_domStorageQuota
user_pref("dom.storage.default_site_quota", {{ config_domStorageQuota }});
%%  	endif
%%  endif

%%  if 65 <= ver and ver < 102
user_pref("dom.storage.next_gen",                 true);
%%  endif

%%  if 98 <= ver
user_pref("dom.fs.enabled",                      false);
%%  endif
%%  if 110 <= ver
user_pref("dom.fs.writable_file_stream.enabled", false);
%%  endif

%%  if 54 <= ver and ver < 58

{{- comment(2, "Presentation") -}}

user_pref("dom.presentation.enabled",                false);
user_pref("dom.presentation.controller.enabled",     false);
user_pref("dom.presentation.discoverable",           false);
user_pref("dom.presentation.discoverable.encrypted", false);
user_pref("dom.presentation.discovery.enabled",      false);
user_pref("dom.presentation.receiver.enabled",       false);
%%  endif

{{- comment(2, "Hardware") -}}

%%  if ver < 59
user_pref("camera.control.face_detection.enabled", false);
%%  endif
// user_pref("device.sensors.enabled",                false); // In FINGERPRINTING
user_pref("device.storage.enabled",                false);
%%  if ver < 52
user_pref("dom.battery.enabled",                   false);
%%  endif
%%  if ver < 59
user_pref("dom.flyweb.enabled",                    false);
%%  endif
// user_pref("dom.gamepad.enabled",                   false); // In FINGERPRINTING
user_pref("dom.imagecapture.enabled",              false);
	{{- comment(3, "(Default)") -}}
// user_pref("dom.maxHardwareConcurrency",                2); // In FINGERPRINTING
user_pref("dom.vibrator.enabled",                  false);
// user_pref("dom.vr.enabled",                        false);
	{{- comment(3, "(Default false since 97)") -}}
##

{{- comment(2, "Acceleration and JIT") -}}

user_pref("javascript.options.asmjs",                 false);
	{{- comment(3, "http://asmjs.org/") -}}
// user_pref("javascript.options.blinterp",              false);
// user_pref("javascript.options.baselinejit",           false);
// user_pref("javascript.options.ion",                   false);
%%  if 75 <= ver
// user_pref("javascript.options.jit_trustedprincipals",  true);
	{{- comment(3, "(Hidden)") -}}
%%  endif
%%  if 52 <= ver
user_pref("javascript.options.wasm",                  false);
	{{- comment(3, "https://en.wikipedia.org/wiki/WebAssembly") -}}
%%  endif
%%  if ver < 104
// user_pref("javascript.options.wasm_simd",             false);
%%  endif
%%  if 98 <= ver
user_pref("javascript.options.wasm_simd_avx",         false);
%%  endif
user_pref("javascript.options.shared_memory",         false);
##
{{- comment(2, "Events") -}}

// user_pref("dom.event.contextmenu.enabled",  false);
// user_pref("dom.w3c_pointer_events.enabled", false); // In FINGERPRINTING
// user_pref("dom.w3c_touch_events.enabled",       0); // In FINGERPRINTING
##

{{- comment(2, "Other APIs") -}}

user_pref("canvas.capturestream.enabled",               false);
// user_pref("dom.enable_performance",	                   false);	// In FINGERPRINTING
// user_pref("dom.enable_performance_navigation_timing",   false);	// In FINGERPRINTING
// user_pref("dom.enable_performance_observer",	           false);	// In FINGERPRINTING
// user_pref("dom.enable_resource_timing",                 false);	// In FINGERPRINTING
%%  if ver < 59
user_pref("dom.idle-observers-api.enabled",             false);
%%  endif

%%  if 53 <= ver and ver < 100
user_pref("dom.IntersectionObserver.enabled",           {{ not_bool(hard) }});
%%  endif

%%  if ver < 91
user_pref("dom.mozTCPSocket.enabled",                   false);
%%  endif
// user_pref("dom.netinfo.enabled",                        false); // In FINGERPRINTING
%%  if 44 <= ver
user_pref("dom.push.enabled",                           false);
user_pref("dom.push.connection.enabled",                false);
%%  endif
user_pref("dom.serviceWorkers.enabled",                 {{ not_bool(hard) }});
%%  if 65 <= ver
user_pref("dom.targetBlankNoOpener.enabled",             true);
%%  endif
%%  if ver < 52
user_pref("dom.telephony.enabled",                      false);
%%  endif
user_pref("dom.webaudio.enabled",                       false);
%%  if 22 <= ver
// user_pref("dom.webnotifications.enabled",               false);
%%  endif
%%  if 44 <= ver
// user_pref("dom.webnotifications.serviceworker.enabled", false);
%%  endif
// user_pref("media.video_stats.enabled",                  false); // In FINGERPRINTING
// user_pref("media.webspeech.recognition.enable",         false); // In FINGERPRINTING
// user_pref("media.webspeech.synth.enabled",              false); // In FINGERPRINTING
