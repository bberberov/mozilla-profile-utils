{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Authentication") -}}

%%  if 41 <= ver
user_pref("network.auth.subresource-http-auth-allow", 1);
%%  endif

%%  if 91 <= ver
// user_pref("network.http.windows-sso.enabled",  false);
%%  endif
