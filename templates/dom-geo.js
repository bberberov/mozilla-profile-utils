{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "DOM - Geo") -}}

%%  if app == 'firefox'

%%  	if true
// user_pref("geo.enabled",                         false);
	{{- comment(3, "FINGERPRINTING") -}}
%%  	endif
%%  	if ver < 74
user_pref("geo.wifi.logging.enabled",             true);
	{{- comment(3, "(Hidden)") -}}
user_pref("geo.wifi.uri", "https://api.beacondb.net/v1/geolocate");
%%  	else
user_pref("geo.provider.network.logging.enabled", true);
	{{- comment(3, "(Hidden)") -}}
user_pref("geo.provider.network.url", "https://api.beacondb.net/v1/geolocate");
%%  	endif
%%  	if true
user_pref("geo.provider.ms-windows-location",    false);
user_pref("geo.provider.use_corelocation",       false);
%%  	endif
%%  	if 102 <= ver
user_pref("geo.provider.use_geoclue",            false);
%%  	endif
%%  	if ver < 128
{#- Not sure on deprecation -#}
user_pref("geo.provider.use_gpsd",               false);
	{{- comment(3, "(Hidden)") -}}
%%  	endif
%%  	if 54 == ver
user_pref("geo.security.allowinsecure",          false);
%%  	endif

%%  elif app == 'thunderbird'

%%  	if true
user_pref("geo.enabled", false);
%%  	endif

%%  endif
