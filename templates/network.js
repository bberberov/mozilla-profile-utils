{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Network Connections") -}}

{{- comment(2, "Beacon and Pings") -}}

%%  if true
user_pref("beacon.enabled",                       false);
user_pref("browser.send_pings",                   false);
	{{- comment(3, "(Default)") -}}
user_pref("browser.send_pings.require_same_host",  true);
	{{- comment(3, "(Default)") -}}
%%  endif

{{- comment(2, "Prefetch") -}}

%%  if true
user_pref("network.prefetch-next",                     false);
user_pref("network.dns.disablePrefetch",                true);
user_pref("network.dns.disablePrefetchFromHTTPS",       true);
%%  endif
%%  if ver < 148
user_pref("network.predictor.enabled",                 false);
	{{- comment(3, "(Default false since 144)") -}}
%%  endif
%%  if 48 <= ver and ver < 148
user_pref("network.predictor.enable-prefetch",         false);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if true
user_pref("network.http.speculative-parallel-limit",       0);
%%  endif
%%  if 'firefox' == app
%%  	if 98 <= ver
user_pref("browser.places.speculativeConnect.enabled", false);
%%  	endif
%%  	if 56 <= ver
user_pref("browser.urlbar.speculativeConnect.enabled", false);
%%  	endif
%%  endif
%%  if 117 <= ver
user_pref("network.preconnect",                        false);
%%  endif

%%  if 52 <= ver

{{- comment(2, "Necko / Captive Portal detection") -}}

user_pref("network.captive-portal-service.enabled", false);
%%  endif

{{- comment(2, "Network Connectivity checks") -}}

%%  if 65 <= ver
user_pref("network.connectivity-service.enabled", false);
// user_pref("network.connectivity-service.DNSv4.domain", "example.org"); // prev: "mozilla.org"
// user_pref("network.connectivity-service.DNSv6.domain", "example.org"); // prev: "mozilla.org"
%%  endif
%%	if 'firefox' == app and ver < 57
user_pref("browser.casting.enabled", false);
%%  endif

{{- comment(2, "Proxy") -}}

%%  if true
user_pref("network.proxy.autoconfig_url.include_path", false);
	{{- comment(3, "(Default)") -}}
user_pref("network.proxy.socks_remote_dns",             true);
%%  endif
%%  if 91 <= ver
// user_pref("network.proxy.failover_direct",             false);
%%  endif

%%  if 37 <= ver

{{- comment(2, "HTTP Alternative Services") -}}

%%  	if true
user_pref("network.http.altsvc.enabled", false);
%%  	endif
%%  	if ver < 152
user_pref("network.http.altsvc.oe",      false);
	{{- comment(3, "(Default false since 94)") -}}
%%  	endif
%%  endif

{{- comment(2, "DNS") -}}

%%  if true
user_pref("network.dns.blockDotOnion", true);
	{{- comment(3, "(Default)") -}}
user_pref("network.dns.disableIPv6",   true);
%%  endif
%%  if 60 <= ver
// user_pref("network.trr.mode",             5);
user_pref("doh-rollout.home-region",   "CA");
	{{- comment(3, "(Hidden)") -}}
%%  endif

{{- comment(2, "HTTP Redirects") -}}

%%  if true
// user_pref("network.http.redirection-limit", 10);
%%  endif

{{- comment(2, "Network - FileURI") -}}

%%  if true
user_pref("security.fileuri.strict_origin_policy",       true);
%%  endif
%%  if 53 <= ver
user_pref("browser.tabs.remote.separateFileUriProcess",  true);
%%  endif

%%  if 141 <= ver

{{- comment(2, "Network - LNA") -}}

%%  	if 142 <= ver
// user_pref("network.lna.address_space.local.override",              "");
// user_pref("network.lna.address_space.private.override",            "");
// user_pref("network.lna.address_space.public.override",             "");
%%  	endif
%%  	if 144 <= ver
// user_pref("network.lna.allow_top_level_navigation",              true);
	{{- comment(3, "MZ: When this pref is true, top-level document navigation to local network addresses will bypass LNA permission checks.") -}}
%%  	endif
%%  	if 146 <= ver
// user_pref("network.lna.benchmarking-is-local",                  false);
%%  	endif
%%  	if 141 <= ver
// user_pref("network.lna.block_trackers",                         false);
// user_pref("network.lna.blocking",                               false);
user_pref("network.lna.enabled",                                 true);
	{{- comment(3, "(Default true since 153)") -}}
%%  	endif
%%  	if 146 <= ver
// user_pref("network.lna.etp.enabled",                            false);
	{{- comment(3, "(Default true since 149)") -}}
user_pref("network.lna.local-network-to-localhost.skip-checks", false);
// user_pref("network.lna.skip-domains",                              "");
%%  		if 3 <= doc
	// MZ: Comma-separated list of domains to skip LNA checks for.
	// Supports suffix wildcard patterns (*.example.com)
%%  		endif
user_pref("network.lna.websocket.enabled",                       true);
%%  		if 3 <= doc
	// MZ: When this pref is false, skip all LNA checks for WebSocket connections.
	// When true, WebSocket connections follow normal LNA rules.
%%  		endif
%%  	endif
%%  endif

{{- comment(2, "Network - Other") -}}

%%  if 130 <= ver
user_pref("network.socket.ip_addr_any.disabled", true);
	{{- comment(3, "MZ: Disable requests to 0.0.0.0.  See Bug 1889130") -}}
%%  endif
