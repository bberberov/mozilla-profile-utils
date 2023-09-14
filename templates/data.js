{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, use_bool, not_bool, or_bool with context

{{- comment(1, "Data") -}}

%%  if ver < 71
{{- comment(2, "Offline Apps data store") -}}

user_pref("offline-apps.allow_by_default", false);
%%  endif

{{- comment(2, "Sign Ons and AutoFill") -}}

%%  if app == 'firefox'
user_pref("signon.rememberSignons",         false);
%%  elif app == 'thunderbird'
user_pref("signon.rememberSignons",          true);
%%  endif
user_pref("signon.autofillForms",           false);
user_pref("signon.autofillForms.http",      false);
	{{- comment(3, "(Default)") -}}
%%  	if 51 <= ver
user_pref("signon.formlessCapture.enabled", false);
%%  	endif

{{- comment(2, "Clear on Shutdown") -}}

user_pref("privacy.clearOnShutdown.cache",         true);
	{{- comment(3, "(Default)") -}}
%%  if app == 'firefox'
user_pref("privacy.clearOnShutdown.cookies",      {{ use_bool(session) }});
user_pref("privacy.clearOnShutdown.downloads",    {{ use_bool(session) }});
user_pref("privacy.clearOnShutdown.formdata",     {{ use_bool(session) }});
user_pref("privacy.clearOnShutdown.history",      {{ use_bool(session) }});
user_pref("privacy.clearOnShutdown.offlineApps",  {{ or_bool(public, session) }});
user_pref("privacy.clearOnShutdown.openWindows",   true);
user_pref("privacy.clearOnShutdown.sessions",     {{ or_bool(public, session) }});
	{{- comment(3, "(Default)") -}}
user_pref("privacy.clearOnShutdown.siteSettings", false);
	{{- comment(3, "(Default)") -}}
user_pref("privacy.sanitize.sanitizeOnShutdown",   true);
%%  endif

{{- comment(2, "Clear Private Data") -}}

user_pref("privacy.cpd.cache",            true);
	{{- comment(3, "(Default)") -}}

%%  if app == 'thunderbird'
%%  	if config_OAuth is defined
user_pref("privacy.cpd.cookies",         {{ not_bool(config_OAuth) }});
%%  	else
user_pref("privacy.cpd.cookies",          true);
%%  	endif
%%  else
user_pref("privacy.cpd.cookies",         {{ use_bool(session) }});
%%  endif

%%  if app == 'firefox'
user_pref("privacy.cpd.downloads",       {{ use_bool(session) }});
user_pref("privacy.cpd.formdata",        {{ use_bool(session) }});
%%  endif
user_pref("privacy.cpd.history",         {{ use_bool(session) }});
%%  if app == 'firefox'
user_pref("privacy.cpd.offlineApps",     {{ or_bool(public, session) }});
// user_pref("privacy.cpd.openWindows",   true);
user_pref("privacy.cpd.passwords",       false);
	{{- comment(3, "(Default)") -}}
user_pref("privacy.cpd.sessions",        {{ or_bool(public, session) }});
	{{- comment(3, "(Default)") -}}
user_pref("privacy.cpd.siteSettings",    false);
	{{- comment(3, "(Default)") -}}
// user_pref("privacy.sanitize.timeSpan",       0);
%%  endif
