{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

%%  if 'thunderbird' == app

{{- comment(1, "Thunderbird Mail") -}}

{{- comment(2, "Autosave to Drafts") -}}

%%  	if true
user_pref("mail.compose.autosave",     false);
// user_pref("mail.compose.autosaveinterval", 5);
%%  	endif

{{- comment(2, "Mail Store") -}}

%%  	if true
// user_pref("mail.serverDefaultStoreContractID", "@mozilla.org/msgstore/maildirstore;1");
%%  		if 3 <= doc
	// Mbox   : "@mozilla.org/msgstore/berkeleystore;1"
	// MailDir: "@mozilla.org/msgstore/maildirstore;1"
%%  		endif
%%  	endif

{{- comment(2, "Mail Server Defaults") -}}

%%  	if true
user_pref("mail.server.default.autosync_offline_stores", false);
user_pref("mail.server.default.offline_download",        false);
%%  	endif

{{- comment(2, "Reading Email") -}}

%%  	if true
user_pref("mailnews.mark_message_read.delay",          true);
user_pref("mailnews.mark_message_read.delay.interval",   25);
%%  	endif

%%  endif
