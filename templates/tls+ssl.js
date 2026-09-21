{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "TLS / SSL") -}}

{{- comment(2, "Safe negotiation") -}}

%%  if true
user_pref("security.ssl.require_safe_negotiation",            true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken",  true);
%%  endif

{{- comment(2, "SSL") -}}

%%  if 36 <= ver
// user_pref("security.ssl.disable_session_identifiers",         true);
	{{- comment(3, "(Hidden before 101)") -}}
%%  endif
%%  if ver < 86
user_pref("security.ssl.errorReporting.automatic",           false);
user_pref("security.ssl.errorReporting.enabled",             false);
// user_pref("security.ssl.errorReporting.url",                 "");
%%  endif
%%  if 68 <= ver
// user_pref("network.ssl_tokens_cache_capacity",                8192);
	{{- comment(3, "Default 8192 since 151, 2048 before") -}}
%%  endif

{{- comment(2, "TLS") -}}

%%  if true
// user_pref("security.tls.version.min",                            3);
	{{- comment(3, "Default 3 since 78") -}}
// user_pref("security.tls.version.max",                            4);
user_pref("security.tls.version.enable-deprecated",          false);
	{{- comment(3, "(Default) Enforce") -}}
%%  endif
%%  if 53 <= ver
user_pref("security.tls.enable_0rtt_data",                   false);
%%  endif
%%  if 88 <= ver
user_pref("network.http.http3.enable_0rtt",                  false);
%%  endif

{{- comment(2, "OCSP (Online Certificate Status Protocol)") -}}

%%  if 26 <= ver
user_pref("security.ssl.enable_ocsp_stapling",    true);
%%  endif
%%  if true
user_pref("security.OCSP.enabled",                   1);
	{{- comment(3, "Default 1 since at least 153") -}}
// user_pref("security.OCSP.require",                true);
	{{- comment(3, "Disabled for CRLite") -}}
%%  endif

{{- comment(2, "PKI") -}}

%%  if true
user_pref("security.cert_pinning.enforcement_level", 2);
%%  endif
%%  if 52 <= ver and not public
// user_pref("security.enterprise_roots.enabled",   false);
	{{- comment(3, "(Default true since 120)") -}}
%%  endif
%%  if ver < 103
user_pref("security.pki.sha1_enforcement_level",     1);
%%  endif
%%  if 50 <= ver and ver < 117
user_pref("security.family_safety.mode",             0);
%%  endif
%%  if 41 <= ver and app == 'firefox' and ( public or session )
user_pref("security.nocertdb",                    true);
%%  endif

{{- comment(2, "CRLite") -}}

%%  if 73 <= ver
user_pref("security.pki.crlite_mode",                           2);
%%  	if 3 <= doc
	// 0: Disable CRLite entirely.
	// 1: Consult CRLite but only collect telemetry.
	// 2: Consult CRLite and enforce both "Revoked" and "Not Revoked" results.
	// 3: Consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked".
%%  	endif
user_pref("security.remote_settings.crlite_filters.enabled", true);
	{{- comment(3, "(Default true since 137)") -}}
%%  endif

{{- comment(2, "Ciphers") -}}

%%  if ver < 93
user_pref("security.ssl3.rsa_des_ede3_sha",            false);
%%  else
user_pref("security.ssl3.deprecated.rsa_des_ede3_sha",  true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if true
user_pref("security.ssl3.dhe_rsa_aes_128_sha",         false);
	{{- comment(3, "(Default false since 78)") -}}
user_pref("security.ssl3.dhe_rsa_aes_256_sha",         false);
	{{- comment(3, "(Default false since 78)") -}}
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha",     false);
	{{- comment(3, "(Default false since 109 or 151?)") -}}
// user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha",     false);
	{{- comment(3, "(Default false since 109)") -}}
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha",       false);
// user_pref("security.ssl3.ecdhe_rsa_aes_256_sha",       false);
user_pref("security.ssl3.rsa_aes_128_gcm_sha256",      false);
user_pref("security.ssl3.rsa_aes_256_gcm_sha384",      false);
user_pref("security.ssl3.rsa_aes_128_sha",             false);
// user_pref("security.ssl3.rsa_aes_256_sha",             false);
%%  endif
%%  if ver < 53
user_pref("security.tls.unrestricted_rc4_fallback",    false);
%%  endif

{{- comment(2, "TLS/SSL UI (User Interface)") -}}

%%  if app == 'firefox'
%%  	if ver < 113
user_pref("browser.ssl_override_behavior",                               1);
%%  	endif
%%  endif
%%  if true
user_pref("browser.xul.error_pages.expert_bad_cert",                  true);
%%  endif
%%  if app == 'firefox'
%%  	if 59 <= ver and ver < 119
user_pref("security.insecure_connection_icon.enabled",                true);
user_pref("security.insecure_connection_icon.pbmode.enabled",         true);
%%  	endif
%%  	if 60 <= ver
user_pref("security.insecure_connection_text.enabled",                true);
	{{- comment(3, "(Default true since 136)") -}}
user_pref("security.insecure_connection_text.pbmode.enabled",         true);
	{{- comment(3, "(Default true since 136)") -}}
%%  	endif
%%  	if 55 <= ver
user_pref("security.insecure_field_warning.ignore_local_ip_address", false);
%%  	endif
%%  endif

{{- comment(1, "Mixed Content") -}}

%%  if true
user_pref("security.mixed_content.block_active_content",     true);
user_pref("security.mixed_content.block_display_content",    true);
%%  endif
%%  if ver < 140
user_pref("security.mixed_content.block_object_subrequest",  true);
%%  endif
%%  if true
user_pref("security.mixed_content.upgrade_display_content",  true);
%%  endif
