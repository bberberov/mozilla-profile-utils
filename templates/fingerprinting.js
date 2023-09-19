{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, use_bool with context

{{- comment(1, "Fingerprinting") -}}

{{- comment(2, "Fingerprinting: Always") -}}

user_pref("browser.display.use_system_colors",               false);
%%  if 'firefox' == app and 60 <= ver
user_pref("browser.startup.blankWindow",                     false);
%%  endif

%%  if 79 <= ver
%%  	if ver < 94
user_pref("layout.css.font-visibility.level",                    1);
%%  	else
user_pref("layout.css.font-visibility.private",                  1);
user_pref("layout.css.font-visibility.standard",                 1);
user_pref("layout.css.font-visibility.trackingprotection",       1);
user_pref("layout.css.font-visibility.resistFingerprinting",     1);
%%  	endif
%%  endif

%%  if 57 <= ver
user_pref("privacy.resistFingerprinting.block_mozAddonManager",                  true);
%%  endif

%%  if true == rfp

{{- comment(2, "Fingerprinting: RFP") -}}

%%  	if 41 <= ver
user_pref("privacy.resistFingerprinting",                                        true);
%%  	endif
%%  	if 114 <= ver
user_pref("privacy.resistFingerprinting.pbmode",                                 true);
%%  	endif
%%  	if 59 <= ver
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts",   {{ use_bool(public) }});
	{{- comment(3, "TEST") -}}
%%  	endif
%%  	if 55 <= ver
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds",    100000);
%%  	endif
// user_pref("privacy.resistFingerprinting.letterboxing",                        true);
	{{- comment(3, "(Hidden)") -}}
// user_pref("privacy.resistFingerprinting.letterboxing.dimensions",               "");
	{{- comment(3, "(Hidden)") -}}
%%  	if ver < 114
// user_pref("privacy.resistFingerprinting.testGranularityMask",                    5);
%%  	endif
// user_pref("privacy.resistFingerprinting.exemptedDomains",          "searchfox.org");
%%  	if 59 <= ver
user_pref("privacy.spoof_english",                                                  2);
%%  	endif

%%  else

{{- comment(2, "Fingerprinting: RFP Alternatives") -}}

user_pref("device.sensors.enabled",             false);
user_pref("dom.enable_performance",             false);
// user_pref("dom.enable_performance_navigation_timing", false);
// user_pref("dom.enable_performance_observer",          false);
user_pref("dom.enable_resource_timing",         false);
%%  	if ver < 55
user_pref("dom.enable_user_timing",             false);
%%  	endif
user_pref("dom.gamepad.enabled",                false);
%%  	if 48 <= ver
user_pref("dom.maxHardwareConcurrency",             2);
%%  	endif
user_pref("dom.netinfo.enabled",                false);
%%  	if ver < 87
user_pref("dom.w3c_pointer_events.enabled",     false);
%%  	endif
user_pref("dom.w3c_touch_events.enabled",           0);
%%  	if 51 <= ver
user_pref("media.ondevicechange.enabled",       false);
%%  	endif
user_pref("media.webspeech.recognition.enable", false);
user_pref("media.webspeech.synth.enabled",      false);
user_pref("media.video_stats.enabled",          false);
%%  	if 56 <= ver
user_pref("ui.use_standins_for_native_colors",   true);
%%  	endif
user_pref("webgl.enable-debug-renderer-info",   false);
%%  	if ver < 105
// user_pref("webgl.renderer-string-override",     "");
// user_pref("webgl.vendor-string-override",       "");
%%  	endif
%%  endif
##  true == rfp

{{- comment(2, "Fingerprinting: Locale") -}}

user_pref("intl.accept_languages",              "en-US, en");
%%  if 56 <= ver
user_pref("intl.regional_prefs.use_os_locales",       false);
%%  endif

%%  if ver < 59
user_pref("general.useragent.locale",               "en-US");
user_pref("intl.locale.matchOS",                      false);
%%  else
user_pref("intl.locale.requested",                  "en-US");
%%  endif
user_pref("javascript.use_us_english_locale",          true);
