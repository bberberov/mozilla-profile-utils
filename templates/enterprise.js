{#-
	Copyright © 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Enterprise") -}}

%%  if 121 <= ver
// user_pref("browser.contentanalysis.enabled",        false);
%%  endif
%%  if 127 <= ver
// user_pref("browser.contentanalysis.default_result", 0);
%%  endif
user_pref("browser.policies.loglevel",              "warn");
	{{- comment(3, "(Hidden) Default is 'warn' in FF and 'error' in TB") -}}
