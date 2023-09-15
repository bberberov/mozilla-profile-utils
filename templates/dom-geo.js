{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "DOM - Geo") -}}

%%  if app == 'firefox'

// user_pref("geo.enabled",                      false);
	{{- comment(3, "FINGERPRINTING") -}}
%%  	if ver < 74
user_pref("geo.wifi.logging.enabled",             true);
	{{- comment(3, "(Hidden)") -}}
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
%%  	else
user_pref("geo.provider.network.logging.enabled", true);
	{{- comment(3, "(Hidden)") -}}
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
%%  	endif
user_pref("geo.provider.ms-windows-location",    false);
user_pref("geo.provider.use_corelocation",       false);
%%  	if 102 <= ver
user_pref("geo.provider.use_geoclue",            false);
%%  	endif
user_pref("geo.provider.use_gpsd",               false);
%%  	if 54 == ver
user_pref("geo.security.allowinsecure",          false);
%%  	endif

%%  elif app == 'thunderbird'
user_pref("geo.enabled", false);
%%  endif
