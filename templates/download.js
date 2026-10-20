{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, use_bool with context

{{- comment(1, "Download") -}}

%%  if 100 <= ver
user_pref("browser.download.always_ask_before_handling_new_types",  true);
%%  endif
%%  if ver < 86
user_pref("browser.download.hide_plugins_without_extensions",      false);
%%  endif
%%  if 50 <= ver
user_pref("browser.download.forbid_open_with",                     {{ use_bool(public) }});
%%  endif
%%  if true
user_pref("browser.download.manager.addToRecentDocs",              false);
%%  endif
%%  if 'thunderbird' == app
user_pref("browser.download.manager.focusWhenStarting",             true);
user_pref("browser.download.manager.showAlertOnComplete",           true);
user_pref("browser.download.manager.showWhenStarting",              true);
%%  endif
%%  if 102 <= ver
user_pref("browser.download.start_downloads_in_tmp_dir",            true);
%%  endif

{{- comment(2, "Protocol Handlers") -}}

%%  if true
// user_pref("browser.helperApps.neverAsk.openFile",                  "");
// user_pref("browser.helperApps.neverAsk.saveToDisk",                "");
user_pref("browser.helperApps.deleteTempFileOnExit",             true);
	{{- comment(3, "(Default)") -}}
// user_pref("network.protocol-handler.external-default",           true);
	{{- comment(3, "(Default)") -}}
user_pref("network.protocol-handler.warn-external-default",      true);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if ver < 132
user_pref("network.protocol-handler.external.ms-windows-store", false);
%%  endif
