{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, not_bool with context

{{- comment(1, "Clipboard") -}}

%%  if true
user_pref("clipboard.autocopy",               false);
%%  endif
%%  if 136 <= ver
// user_pref("clipboard.copy_image.as_png",       true);
	{{- comment(3, "MZ: On Windows, whether to add PNG before BMP (CF_DIB) in the list of supported formats when copying an image to the clipboard.") -}}
// user_pref("clipboard.copy_image_file.as_png",  true);
	{{- comment(3, "MZ: On Windows, whether we encode an image as PNG (instead of the previous default of BMP) when an application to which we are copying an image requests that it be provided as a temporary file (CF_HDROP). ") -}}
%%  endif
%%  if ver < 108
user_pref("clipboard.plainTextOnly",           true);
%%  endif

{{- comment(2, "Events and permissions") -}}

%%  if true
user_pref("dom.allow_cut_copy",                        false);
	{{- comment(3, "(Was Hidden) not hidden in at least 153, Enforce") -}}
user_pref("dom.event.clipboardevents.enabled",         false);
%%  endif
%%  if 63 <= ver and ver < 100
user_pref("dom.events.asyncClipboard",                 {{ not_bool(hard) }});
%%  	if ver < 87
// user_pref("dom.events.asyncClipboard.dataTransfer", false);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  endif
%%  if 87 <= ver and ver < 147
user_pref("dom.events.asyncClipboard.clipboardItem",   false);
	{{- comment(3, "(Default) Enforce") -}}
%%  endif
{#- Supposed to be < 102, but extending to cover until rename below -#}
%%  if 90 <= ver and ver <= 102
user_pref("dom.events.asyncClipboard.read",            false);
	{{- comment(3, "(Default) Enforce") -}}
%%  endif
%%  if 103 <= ver and ver < 147
user_pref("dom.events.asyncClipboard.readText",        false);
	{{- comment(3, "(Default true since 125)") -}}
%%  endif
