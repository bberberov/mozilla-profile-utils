{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Cache") -}}

{{- comment(2, "Disk") -}}

%%  if true
user_pref("browser.cache.disk.enable",               false);
user_pref("browser.cache.disk.capacity",            512000);
	{{- comment(3, "size in KiB") -}}
user_pref("browser.cache.disk.max_entry_size",       51200);
	{{- comment(3, "(Default)") -}}
user_pref("browser.cache.disk_cache_ssl",             true);
	{{- comment(3, "(Default)") -}}
user_pref("browser.cache.disk.smart_size.enabled",   false);
// user_pref("browser.cache.disk.smart_size.first_run", false);
%%  	if 3 <= doc
	// TODO: Investigate
%%  	endif
%%  endif

{{- comment(2, "RAM") -}}

%%  if true
user_pref("browser.cache.memory.enable",              true);
	{{- comment(3, "(Default)") -}}
user_pref("browser.cache.memory.capacity",         1048576);
	{{- comment(3, "(Hidden) size in KiB") -}}
user_pref("browser.cache.memory.max_entry_size",     51200);
	{{- comment(3, "Matches disk cache's default since it's disabled") -}}
%%  endif

%%  if ver < 116

{{- comment(2, "Offline") -}}

%%  	if ver < 115 and ( public or session )
user_pref("browser.cache.offline.enable",            false);
%%  	endif
%%  	if ver < 116
user_pref("browser.cache.offline.capacity",         512000);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  	if 71 <= ver and ver < 90
user_pref("browser.cache.offline.storage.enable",    false);
	{{- comment(3, "(Default false since 84)") -}}
%%  	endif
%%  	if 60 <= ver and ver < 67
user_pref("browser.cache.offline.insecure.enable",   false);
%%  	endif
%%  	if ver < 59
user_pref("browser.cache.frecency_experiment",          -1);
%%  	endif
%%  endif

{{- comment(2, "Image") -}}

%%  if true
// user_pref("image.cache.size",                      5242880);
	{{- comment(3, "(Default 20971520 since 151, 5242880 before) size in bytes") -}}
%%  endif

{{- comment(2, "Media") -}}

%%  if true
// user_pref("media.cache_size",                       512000);
	{{- comment(3, "(Default)") -}}
%%  endif
