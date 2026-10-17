{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Built-ins") -}}

{{- comment(2, "Reader") -}}

%%  if true
user_pref("reader.parse-on-load.enabled", false);
%%  endif

%%  if ver < 57

{{- comment(2, "Social") -}}

user_pref("social.enabled",                      false);
	{{- comment(3, "(Hidden)") -}}
user_pref("social.remote-install.enabled",       false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.toast-notifications.enabled",  false);
%%  endif

{{- comment(2, "PDFjs") -}}

%%  if true
user_pref("pdfjs.disabled",         true);
%%  endif
%%  if ver < 90
user_pref("pdfjs.enableWebGL",     false);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 86 <= ver
user_pref("pdfjs.enableScripting", false);
	{{- comment(3, "(Default)") -}}
%%  endif

%%  if   'firefox' == app

%%  	if 60 <= ver

{{- comment(2, "Firefox Accounts") -}}

user_pref("identity.fxaccounts.enabled", false);
%%  	endif

%%  	if 46 <= ver and ver < 145

{{- comment(2, "Pocket integration") -}}

user_pref("extensions.pocket.enabled", false);
	{{- comment(3, "(Default false since 140)") -}}
%%  	endif

%%  	if 55 <= ver

{{- comment(2, "Screenshots") -}}

%%  		if 140 <= ver
user_pref("browser.screenshots.folderList",  3);
%%  			if 3 <= doc
	// MZ: Determines the default save location for screenshots
	// Valid values are 0, 1, 2, 3 and 4.
	//   0 - Use the desktop as the default save location.
	//   1 - Use the system's downloads folder as the default save location.
	//   2 - Use the folder set in browser.screenshots.dir as the default save location.
	//   3 - Use system's screenshot folder as the default save location.
	//   4 - Use browser.download.folderList
	// Options 2 and 3 will fallback to the system downloads folder if their specified folder is not found.
%%  			endif
// user_pref("browser.screenshots.dir",        "");
%%  		endif
%%  		if 60 <= ver
%%  			if ver < 140
user_pref("extensions.screenshots.disabled",        false);
	{{- comment(3, "(Default)") -}}
%%  			endif
%%  			if ver < 89
user_pref("extensions.screenshots.upload-disabled",  true);
%%  			endif
%%  		else
user_pref("extensions.screenshots.disabled", true);
%%  		endif
%%  	endif

%%  	if 141 <= ver

{{- comment(2, "VPN") -}}

user_pref("browser.ipProtection.enabled", false);
	{{- comment(3, "(Default)") -}}
%%  	endif

%%  elif 'thunderbird' == app

{{- comment(2, "Chat") -}}

%%  	if true
user_pref("mail.chat.enabled",     false);
%%  	endif

{{- comment(2, "Provider") -}}

%%  	if true
user_pref("mail.provider.enabled", false);
%%  	endif
%%  endif
