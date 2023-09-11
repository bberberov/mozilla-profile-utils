{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Mouse") -}}

%%  if 115 <= ver
user_pref("browser.tabs.searchclipboardfor.middleclick", false);
	{{- comment(3, "(Default)") -}}
%%  endif
user_pref("middlemouse.contentLoadURL",    false);
	{{- comment(3, "(Default)") -}}
user_pref("middlemouse.openNewWindow",     false);
user_pref("middlemouse.paste",             false);
user_pref("middlemouse.scrollbarPosition", false);
