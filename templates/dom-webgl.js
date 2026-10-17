{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, lte_bool, gte_bool with context

{{- comment(1, "DOM - WebGL") -}}

%%  if   'firefox' == app

%%  	if true
user_pref("webgl.disabled",      {{ lte_bool(webgl, 0) }});
	{{- comment(3, "Use NoScript to manage WebGL") -}}
user_pref("webgl.enable-webgl2", {{ gte_bool(webgl, 2) }});
%%  	endif

{{- comment(2, "Limit") -}}

%%  	if ver < 74
user_pref("webgl.disable-extensions",                        true);
%%  	endif
%%  	if true
user_pref("webgl.disable-fail-if-major-performance-caveat",  true);
	{{- comment(3, "(Default true since 86)") -}}
// user_pref("webgl.min_capability_mode",                      {{ lte_bool(webgl, 1) }});
%%  	endif

%%  elif 'thunderbird' == app

%%  	if true
user_pref("webgl.disabled",       true);
user_pref("webgl.enable-webgl2", false);
%%  	endif

%%  endif
