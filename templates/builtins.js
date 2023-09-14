{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

{{- comment(1, "Built-ins") -}}

{{- comment(2, "Reader") -}}

user_pref("reader.parse-on-load.enabled", false);
%%  if ver < 57

{{- comment(2, "Social") -}}

user_pref("social.enabled",                      false);
	{{- comment(3, "(Hidden)") -}}
user_pref("social.remote-install.enabled",       false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.toast-notifications.enabled",  false);
%%  endif

{{- comment(2, "PDFjs") -}}

user_pref("pdfjs.disabled",         true);
%%  if ver < 90
user_pref("pdfjs.enableWebGL",     false);
	{{- comment(3, "(Default)") -}}
%%  endif
%%  if 86 <= ver
user_pref("pdfjs.enableScripting", false);
	{{- comment(3, "(Default)") -}}
%%  endif

%%  if app == 'firefox'

%%  	if 60 <= ver
{{- comment(2, "Firefox Accounts") -}}

user_pref("identity.fxaccounts.enabled", false);
%%  	endif

%%  	if 46 <= ver
{{- comment(2, "Pocket integration") -}}

user_pref("extensions.pocket.enabled", false);
%%  	endif

%%  	if 55 <= ver
{{- comment(2, "Screenshots") -}}

%%  		if 60 <= ver
user_pref("extensions.screenshots.disabled",        false);
	{{- comment(3, "(Default)") -}}
%%  			if ver < 89
user_pref("extensions.screenshots.upload-disabled",  true);
%%  			endif
%%  		else
user_pref("extensions.screenshots.disabled", true);
%%  		endif
%%  	endif

%%  elif app == 'thunderbird'

{{- comment(2, "Chat") -}}

user_pref("mail.chat.enabled",     false);
##
{{- comment(2, "Provider") -}}

user_pref("mail.provider.enabled", false);
%%  endif
