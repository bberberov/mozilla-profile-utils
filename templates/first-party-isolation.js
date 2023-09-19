{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Partitioning and Isolation") -}}

%%  if public and hard

{{- comment(2, "Static First Party Isolation") -}}

%%  	if 51 <= ver
user_pref("privacy.firstparty.isolate",                            true);
%%  	endif

%%  	if 54 <= ver
// user_pref("privacy.firstparty.isolate.restrict_opener_access",  true);
// user_pref("privacy.firstparty.isolate.block_post_message",      true);
%%  	endif

%%  	if 78 <= ver
// user_pref("privacy.firstparty.isolate.use_site",                true);
%%  	endif

%%  	if 70 <= ver and ver < 87
// user_pref("browser.cache.cache_isolation",                     false);
%%  	endif
%%  endif

{{- comment(2, "Site partitioning") -}}

%%  if 104 <= ver
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage",                        true);
	{{- comment(3, "(Defaults to true since FF109)") -}}
%%  endif

%%  if 105 <= ver
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false);
	{{- comment(3, "(Defaults to false since FF109)") -}}
%%  endif

%%  if 78 <= ver
user_pref("privacy.partition.network_state",                                                          true);
	{{- comment(3, "(Defaults to true since FF85)") -}}
%%  endif

%%  if 79 <= ver
user_pref("privacy.partition.network_state.connection_with_proxy",                                    true);
%%  endif

%%  if 94 <= ver
user_pref("privacy.partition.network_state.ocsp_cache",                                               true);
user_pref("privacy.partition.network_state.ocsp_cache.pbmode",                                        true);
%%  endif

%%  if 96 <= ver
user_pref("privacy.partition.serviceWorkers",                                                         true);
	{{- comment(3, "(Default since 105)") -}}
%%  endif
