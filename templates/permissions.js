{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, or_bool with context

{{- comment(1, "Permissions") -}}

%%	if app == 'firefox'
%%  	if 58 <= ver
user_pref("permissions.default.camera",                   0);
user_pref("permissions.default.desktop-notification",     0);
user_pref("permissions.default.geo",                      0);
%%  	endif
%%  	if true
user_pref("permissions.default.image",                    1);
%%  	endif
%%  	if 143 <= ver
// user_pref("permissions.default.local-network",            0);
%%  		if 150 <= ver
// user_pref("permissions.default.loopback-network",         0);
%%  		else
// user_pref("permissions.default.localhost",                0);
%%  		endif
%%  	endif
%%  	if 58 <= ver
user_pref("permissions.default.microphone",               0);
user_pref("permissions.default.shortcuts",                0);
%%  	endif
%%  	if 73 <= ver
user_pref("permissions.default.xr",                       0);
%%  	endif
%%  	if 73 <= ver and ver < 118
user_pref("permissions.delegation.enabled",           false);
%%  	endif
%%  endif
%%  if 72 <= ver
// user_pref("permissions.isolateBy.privateBrowsing",     true);
// user_pref("permissions.isolateBy.userContext",        false);
%%  endif
%%  if app == 'firefox'
%%  	if 58 <= ver
user_pref("permissions.memory_only",                  {{ or_bool(public, session) }});
	{{-	comment(3, "(Hidden)") -}}
%%  	endif
%%  	if 135 <= ver
// user_pref("permissions.manager.remote.enabled",       false);
%%  	endif
%%  endif
