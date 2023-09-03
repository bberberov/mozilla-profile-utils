{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context
%%  if config_zoomValues is not defined
%%  	set config_zoomValues = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4]
%%  endif

{{-  comment(1, "Zoom") -}}

user_pref("browser.zoom.full",            true);
	{{- comment(3, "(Default)") -}}
// user_pref("browser.zoom.siteSpecific", true);
	{{- comment(3, "(Default) FINGERPRINTING") -}}
user_pref("zoom.minPercent", {{ ( config_zoomValues | first * 100 ) | int }});
user_pref("zoom.maxPercent", {{ ( config_zoomValues | last  * 100 ) | int }});
user_pref("toolkit.zoomManager.zoomValues", "{{ config_zoomValues | join( ', ' ) }}");
