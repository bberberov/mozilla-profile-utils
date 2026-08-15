{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

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

%%  if   app == 'firefox'
user_pref("signon.rememberSignons",         false);
%%  elif app == 'thunderbird'
user_pref("signon.rememberSignons",          true);
%%  endif
%%  if true
user_pref("signon.autofillForms",           false);
user_pref("signon.autofillForms.http",      false);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 51 <= ver
user_pref("signon.formlessCapture.enabled", false);
%%  endif

{{- comment(2, "Clear on Shutdown") -}}

%%  if true
user_pref("privacy.clearOnShutdown.cache",         true);
	{{- comment(3, "(Default)") -}}
%%  endif
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
##
%%  	if 128 <= ver
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads",  true);
user_pref("privacy.clearOnShutdown_v2.cache",                        true);
	{{- comment(3, "(Default)") -}}
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage",           {{ use_bool(session) }});
user_pref("privacy.clearOnShutdown_v2.downloads",                   {{ use_bool(session) }});
	{{- comment(3, "(Hidden)") -}}
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", {{ use_bool(session) }});
user_pref("privacy.clearOnShutdown_v2.formdata",                    {{ use_bool(session) }});
user_pref("privacy.clearOnShutdown_v2.siteSettings",                false);
	{{- comment(3, "(Default)") -}}
%%  	endif
##
user_pref("privacy.sanitize.sanitizeOnShutdown",   true);
%%  endif

%%  if app == 'firefox' and 128 <= ver

{{- comment(2, "Clear Site Data") -}}

// user_pref("privacy.clearSiteData.browsingHistoryAndDownloads",  true);
// user_pref("privacy.clearSiteData.cache",                        true);
// user_pref("privacy.clearSiteData.cookiesAndStorage",           false);
// user_pref("privacy.clearSiteData.formdata",                     true);
// user_pref("privacy.clearSiteData.historyFormDataAndDownloads",  true);
// user_pref("privacy.clearSiteData.siteSettings",                false);
%%  endif

{{- comment(2, "Clear Private Data") -}}

%%  if true
user_pref("privacy.cpd.cache",            true);
	{{- comment(3, "(Default)") -}}
%%  endif
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
%%  if true
user_pref("privacy.cpd.history",         {{ use_bool(session) }});
%%  endif
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
%%  if 128 <= ver
// user_pref("privacy.clearHistory.browsingHistoryAndDownloads",  true);
// user_pref("privacy.clearHistory.cache",                        true);
// user_pref("privacy.clearHistory.cookiesAndStorage",           false);
// user_pref("privacy.clearHistory.formdata",                     true);
// user_pref("privacy.clearHistory.historyFormDataAndDownloads",  true);
// user_pref("privacy.clearHistory.siteSettings",                false);
%%  endif
