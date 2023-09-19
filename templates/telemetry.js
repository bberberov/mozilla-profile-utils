{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{  comment(1, "Telemetry and Health Reporting") -}}

{{- comment(2, "Flash Crash Reporting") -}}

%%  if ver < 101
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
%%  endif
user_pref("dom.ipc.plugins.reportCrashURL",                         false);
##

{{- comment(2, "Telemetry") -}}

user_pref("toolkit.telemetry.archive.enabled",            false);
user_pref("toolkit.telemetry.enabled",                    false);
user_pref("toolkit.telemetry.unified",                    false);
%%  if 57 <= ver
user_pref("toolkit.telemetry.bhrPing.enabled",            false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled",  false);
%%  endif
%%  if 59 <= ver and ver < 72
user_pref("toolkit.telemetry.hybridContent.enabled",      false);
%%  endif
%%  if 55 <= ver
user_pref("toolkit.telemetry.newProfilePing.enabled",     false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
%%  endif
%%  if 56 <= ver
user_pref("toolkit.telemetry.updatePing.enabled",         false);
%%  endif

%%  if app == 'firefox'

{{- comment(2, "Telemetry - Coverage") -}}

user_pref("toolkit.coverage.enabled",          false);
%%  	if 64 <= ver
user_pref("toolkit.coverage.opt-out",           true);
	{{- comment(3, "(Hidden)") -}}
%%  	endif
user_pref("toolkit.telemetry.coverage.opt-out", true);
	{{- comment(3, "(Hidden)") -}}

%%  endif

%%  if ver < 66

{{- comment(2, "Experiments (Mozilla)") -}}

user_pref("network.allow-experiments", false);
%%  endif

%%  if ver < 55

{{- comment(2, "Heartbeat (Mozilla user rating telemetry)") -}}

user_pref("browser.selfsupport.enabled", false);
	{{- comment(3, "(Hidden)") -}}

%%  endif

{{- comment(2, "Crash Reporting") -}}

user_pref("breakpad.reportURL",                                   "");
%%  if app == 'firefox'

%%  	if 58 <= ver
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
	{{- comment(3, "(Default)") -}}
%%  	else
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit",  false);
%%  	endif

%%  	if 51 <= ver
user_pref("browser.crashReports.unsubmittedCheck.enabled",     false);
	{{- comment(3, "(Default)") -}}
%%  	endif

%%  	if 44 <= ver
user_pref("browser.tabs.crashReporting.sendReport",            false);
%%  	endif

%%  endif

{{- comment(2, "Health Reporting") -}}

user_pref("datareporting.healthreport.uploadEnabled",   false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

%%  if app == 'firefox'

{{- comment(2, "Telemetry - Activity Stream") -}}

user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry",       false);

%%  	if 57 <= ver

{{- comment(2, "Telemetry - PingCentre") -}}

user_pref("browser.ping-centre.telemetry", false);
%%  	endif

%%  	if ver < 61

{{- comment(2, "Experiments (Firefox)") -}}

user_pref("experiments.supported",        false);
user_pref("experiments.enabled",          false);
user_pref("experiments.activeExperiment", false);
%%  	endif

%%  	if 53 <= ver

{{- comment(2, "Normandy / Shield") -}}

%%  		if ver < 60
user_pref("extensions.shield-recipe-client.enabled", false);
user_pref("extensions.shield-recipe-client.api_url",    "");
%%  		else
user_pref("app.normandy.enabled",             false);
user_pref("app.normandy.api_url",                "");
user_pref("app.shield.optoutstudies.enabled", false);
%%  		endif

%%  	endif

%%  endif

%%  if 56 <= ver

{{- 	comment(2, "Web Compatibility Reporter") -}}

user_pref("extensions.webcompat-reporter.enabled", false);
	{{- comment(3, "(Default)") -}}

%%  endif
