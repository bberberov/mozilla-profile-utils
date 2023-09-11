{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Region") -}}

%%  if 78 <= ver
user_pref("browser.region.network.url",       "");
%%  endif
%%  if 79 <= ver
user_pref("browser.region.update.enabled", false);
%%  endif
user_pref("browser.search.region",          "US");
