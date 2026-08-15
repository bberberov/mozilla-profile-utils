{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Referers") -}}

%%  if true
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault",                        true);
	{{- comment(3, "(Default true since 100)") -}}
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode",                 true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 100 <= ver
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation",  true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation",         true);
%%  endif
%%  if 52 <= ver
user_pref("network.http.referer.XOriginPolicy",                                              2);
	{{- comment(3, "(Default 2 since 84, previously 1)") -}}
user_pref("network.http.referer.XOriginTrimmingPolicy",                                      2);
	{{- comment(3, "(Default 2 since 84, previously 0)") -}}
%%  	if 3 <= doc
	// MZ:
	// 0 - full URI
	// 1 - scheme+host+port+path
	// 2 - scheme+host+port
%%  	endif
%%  endif
