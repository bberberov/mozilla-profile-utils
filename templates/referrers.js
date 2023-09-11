{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Referers") -}}

user_pref("network.http.referer.disallowCrossSiteRelaxingDefault",                        true);
	{{- comment(3, "(Default)") -}}
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode",                 true);
	{{- comment(3, "(Default)") -}}
%%  if 100 <= ver
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.pbmode.top_navigation",  true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation",         true);
%%  endif
