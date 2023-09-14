{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, not_bool with context

{{- comment(1, "Clipboard") -}}

user_pref("clipboard.autocopy",      false);
%%  if ver < 108
user_pref("clipboard.plainTextOnly",  true);
%%  endif

{{- comment(2, "Events and permissions") -}}

user_pref("dom.allow_cut_copy",                        false);
	{{- comment(3, "(Hidden)") -}}
user_pref("dom.event.clipboardevents.enabled",         false);
%%  if 63 <= ver and ver < 100
user_pref("dom.events.asyncClipboard",                 {{ not_bool(hard) }});
%%  	if ver < 87
// user_pref("dom.events.asyncClipboard.dataTransfer", false);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  endif
%%  if 87 <= ver
user_pref("dom.events.asyncClipboard.clipboardItem",   false);
	{{- comment(3, "(Default) Enforce") -}}
%%  endif
%%  if 90 <= ver and ver < 102
user_pref("dom.events.asyncClipboard.read",            false);
	{{- comment(3, "(Default) Enforce") -}}
%%  endif
