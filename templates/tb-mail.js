{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

%%  if 'thunderbird' == app

{{- comment(1, "Thunderbird Mail") -}}

{{- comment(2, "Accounts") -}}

%%  	if true
user_pref("app.use_without_mail_account",  true);
%%  	endif

{{- comment(2, "Autosave to Drafts") -}}

%%  	if true
user_pref("mail.compose.autosave",     false);
// user_pref("mail.compose.autosaveinterval", 5);
%%  	endif

{{- comment(2, "Chat") -}}

%%  	if true
// user_pref("chat.otr.default.allowMsgLog",        false);
// user_pref("purple.conversations.im.send_read",   false);
// user_pref("purple.conversations.im.send_typing", false);
// user_pref("purple.logging.log_chats",            false);
// user_pref("purple.logging.log_ims",              false);
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

{{- comment(2, "OpenPGP") -}}

%%  	if true
// user_pref("temp.openpgp.advancedUser",       true);
// user_pref("temp.openpgp.mimeHashAlgorithm",     5);
%%  	endif

{{- comment(2, "Read Recipts") -}}

%%  	if true
// user_pref("mail.mdn.report.enabled",                false);
// user_pref("mail.mdn.report.not_in_to_cc",           0);
// user_pref("mail.mdn.report.other",                  0);
// user_pref("mail.mdn.report.outside_domain",         0);
// user_pref("mail.server.default.mdn_not_in_to_cc",   0);
// user_pref("mail.server.default.mdn_other",          0);
// user_pref("mail.server.default.mdn_outside_domain", 0);
// user_pref("mail.server.default.mdn_report_enabled", false);
%%  	endif

{{- comment(2, "Reading Email") -}}

%%  	if true
user_pref("mailnews.mark_message_read.delay",          true);
user_pref("mailnews.mark_message_read.delay.interval",   25);
%%  	endif

{{- comment(2, "Writting Email") -}}

%%  	if true
// user_pref("mail.compose.add_link_preview",           false);
	{{- comment(3, "(Default)") -}}
// user_pref("mailnews.reply_header_authorwroteondate", "#1 wrote on #2 #3:");
// user_pref("mailnews.reply_header_authorwrotesingle", "#1 wrote:");
// user_pref("mailnews.reply_header_ondateauthorwrote", "On #2 #3, #1 wrote:");
// user_pref("mailnews.reply_header_type",              1);
// user_pref("mailnews.reply_header_originalmessage",   "-------- Original Message --------");
%%  	endif

{{- comment(2, "Other") -}}

%%  	if true
user_pref("mail.server.default.send_client_info",               false);
user_pref("mail.smtpserver.default.hello_argument",             "[127.0.0.1]");
	{{- comment(3, "(Hidden)") -}}
user_pref("mail.suppress_content_language",                      true);
user_pref("mail.trusteddomains",                                "");
	{{- comment(3, "(Default)") -}}
user_pref("mailnews.auto_config.fetchFromISP.sendEmailAddress", false);
user_pref("mailnews.auto_config.fetchFromISP.sslOnly",           true);
user_pref("mailnews.auto_config.guess.requireGoodCert",          true);
	{{- comment(3, "(Default)") -}}
user_pref("mailnews.auto_config.guess.sslOnly",                  true);
user_pref("mailnews.headers.sendUserAgent",                     false);
user_pref("mailnews.headers.useMinimalUserAgent",                true);
	{{- comment(3, "(Default)") -}}
%%  	endif
%%  endif
