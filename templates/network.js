{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Network Connections") -}}

{{- comment(2, "Beacon and Pings") -}}

user_pref("beacon.enabled",                       false);
user_pref("browser.send_pings",                   false);
	{{- comment(3, "(Default)") -}}
user_pref("browser.send_pings.require_same_host",  true);
	{{- comment(3, "(Default)") -}}

{{- comment(2, "Prefetch") -}}

user_pref("network.prefetch-next",                     false);
user_pref("network.dns.disablePrefetch",                true);
user_pref("network.dns.disablePrefetchFromHTTPS",       true);
user_pref("network.predictor.enabled",                 false);
%%  if 48 <= ver
user_pref("network.predictor.enable-prefetch",         false);
	{{- comment(3, "(Default)") -}}
%%  endif
user_pref("network.http.speculative-parallel-limit",       0);
%%  if app == 'firefox' and 98 <= ver
user_pref("browser.places.speculativeConnect.enabled", false);
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

%%	if app == 'firefox' and ver < 57
user_pref("browser.casting.enabled", false);
%%  endif

{{- comment(2, "Proxy") -}}

user_pref("network.proxy.autoconfig_url.include_path", false);
	{{- comment(3, "(Default)") -}}
user_pref("network.proxy.socks_remote_dns",             true);
%%  if 91 <= ver
// user_pref("network.proxy.failover_direct",            false);
%%  endif

%%  if 37 <= ver

{{- comment(2, "HTTP Alternative Services") -}}

user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe",      false);
	{{- comment(3, "(Default false since 94)") -}}
%%  endif

{{- comment(2, "DNS") -}}

user_pref("network.dns.blockDotOnion", true);
	{{- comment(3, "(Default)") -}}
user_pref("network.dns.disableIPv6",   true);
%%  if 60 <= ver
// user_pref("network.trr.mode", 5);
user_pref("doh-rollout.home-region",   "CA");
	{{- comment(3, "(Hidden)") -}}
%%  endif

{{- comment(2, "HTTP Redirects") -}}

// user_pref("network.http.redirection-limit", 10);
##

{{- comment(2, "Network - FileURI") -}}

user_pref("security.fileuri.strict_origin_policy",       true);
%%  if 53 <= ver
user_pref("browser.tabs.remote.separateFileUriProcess",  true);
%%  endif
