{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Media autoplay") -}}

%%  if ver < 63
user_pref("media.autoplay.enabled",                   false);
user_pref("media.block-autoplay-until-in-foreground",  true);
%%  elif ver < 69
user_pref("media.autoplay.default",         1);
user_pref("media.autoplay.allow-muted", false);
%%  else
user_pref("media.autoplay.default",         5);
%%  endif
%%  if 78 <= ver
user_pref("media.autoplay.blocking_policy", 2);
%%  endif
