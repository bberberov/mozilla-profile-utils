{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Plugins") -}}

{{- comment(2, "State") -}}

%%  if ver < 116
## Turn off plugins at 116
user_pref("plugin.default.state",                       0);
%%  	if ver < 72
user_pref("plugin.defaultXpi.state",                    0);
%%  	endif
%%  	if ver < 116
user_pref("plugin.state.flash",                         0);
%%  	endif
user_pref("plugin.state.java",                          0);
user_pref("plugin.state.skypebuttons",                  0);
user_pref("plugin.state.libevbrowserplugin",            0);
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);
%%  endif

{{- comment(2, "Scanning") -}}

%%  if ver < 68
user_pref("plugin.scan.plid.all",             false);
%%  endif
%%  if ver < 53
user_pref("plugin.scan.Acrobat",            "99999");
user_pref("plugin.scan.Quicktime",          "99999");
user_pref("plugin.scan.WindowsMediaPlayer", "99999");
%%  endif

{{- comment(2, "Autoplay") -}}

%%  if 25 <= ver and ver < 69
user_pref("plugins.click_to_play",                            true);
	{{- comment(3, "(Default)") -}}
%%  endif

%%  if ver < 70
user_pref("plugin.persistentPermissionAlways.intervalInDays",    1);
user_pref("plugin.sessionPermissionNow.intervalInMinutes",      30);
%%  endif

%%  if app == 'firefox'

{{- comment(2, "Infobar") -}}

%%  	if ver < 55
user_pref("plugins.hide_infobar_for_outdated_plugin", false);
%%  	else
user_pref("plugins.show_infobar",                      true);
%%  	endif
%%  endif

{{- comment(2, "Other") -}}

%%  if ver < 50
user_pref("plugins.update.notifyUser",              false);
%%  endif

%%  if ver < 59
user_pref("security.xpconnect.plugin.unrestricted", false);
%%  endif
