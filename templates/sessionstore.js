{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

## Some settings are available in Thunderbird
%%  if app == 'firefox'

{{- comment(1, "Session Store") -}}

// user_pref("browser.sessionstore.idleDelay",                    180000);
	{{- comment(3, "(ms) (Default) Time before using interval.idle") -}}
user_pref("browser.sessionstore.interval",                    2073600000);
	{{- comment(3, "(ms) Don't save session info to disk for 24 days") -}}
user_pref("browser.sessionstore.interval.idle",               2073600000);
	{{- comment(3, "(ms) Don't save session info to disk for 24 days") -}}
user_pref("browser.sessionstore.cleanup.forget_closed_after",    1800000);
	{{- comment(3, "(ms) 30 min") -}}
user_pref("browser.sessionstore.max_resumed_crashes",                  0);
user_pref("browser.sessionstore.max_tabs_undo",                       10);
user_pref("browser.sessionstore.max_windows_undo",                     1);
user_pref("browser.sessionstore.privacy_level",                        2);
user_pref("browser.sessionstore.resume_from_crash",                false);
user_pref("browser.sessionstore.resume_session_once",              false);
	{{- comment(3, "(Default)") -}}
user_pref("browser.sessionstore.resuming_after_os_restart",        false);
	{{- comment(3, "(Default)") -}}

{{- comment(2, "On reboot") -}}

%%  	if 62 <= ver
user_pref("toolkit.winRegisterApplicationRestart",                 false);
%%  	endif

%%  endif
