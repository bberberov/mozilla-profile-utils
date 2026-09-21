{#-
	Copyright © 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment with context

%%  if 133 <= ver

{{- comment(1, "AI / ML / LLM") -}}

{{- comment(2, "General") -}}

%%  	if 133 <= ver
// user_pref("browser.ml.checkForMemory",         true);
%%  	endif
%%  	if 125 <= ver
user_pref("browser.ml.enable",                false);
	{{- comment(3, "(Default true since 138)") -}}
%%  	endif
%%  	if 133 <= ver
user_pref("browser.ml.minimumPhysicalMemory",     8);
	{{- comment(3, "(Default 3 since 140, was 4) in GiBs") -}}
%%  	endif
%%  	if 143 <= ver
// user_pref("browser.ml.pageAssist.enabled",    false);
%%  	endif
%%  	if 134 <= ver
user_pref("extensions.ml.enabled",            false);
	{{- comment(3, "(Default true since 140)") -}}
%%  	endif

{{- comment(2, "Chat") -}}

%%  	if 128 <= ver
// user_pref("browser.ml.chat.enabled",           true);
	{{- comment(3, "(Default true since 136)") -}}
%%  	endif
%%  	if 129 <= ver
user_pref("browser.ml.chat.hideLocalhost",    false);
%%  	endif
%%  	if 142 <= ver
// user_pref("browser.ml.chat.maxLength",         7000);
%%  	endif
%%  	if 141 <= ver
// user_pref("browser.ml.chat.menu",              true);
// user_pref("browser.ml.chat.page",             false);
	{{- comment(3, "(Default true since 144)") -}}
// user_pref("browser.ml.chat.page.footerBadge",  true);
// user_pref("browser.ml.chat.page.menuBadge",    true);
%%  	endif
%%  	if 128 <= ver
// user_pref("browser.ml.chat.provider",            "");
	{{- comment(3, "Empty by default") -}}
// user_pref("browser.ml.chat.providers",           "");
	{{- comment(3, "(Hidden)") -}}
%%  	endif
%%  	if 129 <= ver
// user_pref("browser.ml.chat.sidebar",           true);
%%  	endif

{{- comment(2, "Link Preview") -}}

%%  	if 148 <= ver
user_pref("browser.ai.control.linkPreviewKeyPoints", "blocked");
	{{- comment(3, "UI control for browser.ml.linkPreview.enabled") -}}
%%  	endif
%%  	if 138 <= ver
// user_pref("browser.ml.linkPreview.allowedLanguages",      "en");
// user_pref("browser.ml.linkPreview.blockListEnabled",      true);
%%  	endif
%%  	if 140 <= ver
// user_pref("browser.ml.linkPreview.collapsed",            false);
%%  	endif
%%  	if 138 <= ver
user_pref("browser.ml.linkPreview.enabled",              false);
	{{- comment(3, "(Default true since 146)") -}}
%%  	endif
%%  	if 140 <= ver
// user_pref("browser.ml.linkPreview.ignoreMs",              2000);
%%  	endif
%%  	if 140 <= ver
// user_pref("browser.ml.linkPreview.longPress",             true);
// user_pref("browser.ml.linkPreview.longPressMs",           1000);
// user_pref("browser.ml.linkPreview.optin",                false);
%%  	endif
%%  	if 138 <= ver
// user_pref("browser.ml.linkPreview.outputSentences",          3);
%%  	endif
%%  	if 140 <= ver
// user_pref("browser.ml.linkPreview.recentTypingMs",        1000);
// user_pref("browser.ml.linkPreview.shift",                 true);
// user_pref("browser.ml.linkPreview.shiftAlt",             false);
%%  	endif

{{- comment(2, "PDFjs Suggestions") -}}

%%  	if 148 <= ver
user_pref("browser.ai.control.pdfjsAltText", "blocked");
%%  	endif

{{- comment(2, "Tab Group Suggestions") -}}

%%  	if 148 <= ver
user_pref("browser.ai.control.smartTabGroups", "blocked");
%%  	endif
%%  	if 137 <= ver
user_pref("browser.tabs.groups.smart.enabled",     false);
	{{- comment(3, "(Default true since 143)") -}}
%%  	endif

{{- comment(2, "Translations") -}}

%%  	if 148 <= ver
user_pref("browser.ai.control.translations", "blocked");
%%  	endif

%%  endif

%%  if 149 <= ver

{{- comment(2, "Smart Window") -}}

%%  	if 150 <= ver
// user_pref("browser.ai.control.smartWindow",                        "default");
%%  	endif
%%  	if 153 <= ver
// user_pref("browser.ml.chat.shortcuts.smartwindow",                  true);
%%  	endif
%%  	if 149 <= ver and ver < 153
// user_perf("browser.smartwindow.apiKey",                            "");
// user_perf("browser.smartwindow.firstrun.modelChoice",              "");
%%  	endif
%%  	if 149 <= ver
// user_perf("browser.smartwindow.chatHistory.loglevel",              "Error");
// user_perf("browser.smartwindow.chatStore.loglevel",                "Error");
// user_perf("browser.smartwindow.endpoint",                          "https://mlpa-prod-prod-mozilla.global.ssl.fastly.net/v1");
// user_perf("browser.smartwindow.firstrun.autoAdvanceMS",            3000);
// user_perf("browser.smartwindow.firstrun.hasCompleted",             false);
%%  	endif
%%  	if 149 <= ver and ver < 150
// user_perf("browser.smartwindow.memories",                           true);
%%  	endif
%%  	if 149 <= ver
// user_perf("browser.smartwindow.memoriesLogLevel",                  "Warn");
%%  	endif
%%  	if 149 <= ver and ver < 153
// user_perf("browser.smartwindow.model",                             "");
// user_perf("browser.smartwindow.perferences.endpoint",              "");
%%  	endif
%%  	if 149 <= ver
// user_perf("browser.smartwindow.smartbarMentions.loglevel",         "Error");
%%  	endif
%%  	if 150 <= ver
// user_perf("browser.smartwindow.conversation.logLevel",             "Error");
// user_perf("browser.smartwindow.firstrun.explainerURL",             "https://www.firefox.com/en-US/smart-window/?v=product");
// user_perf("browser.smartwindow.memories.generateFromConversation",  true);
// user_perf("browser.smartwindow.memories.generateFromHistory",       true);
// user_perf("browser.smartwindow.memories.hasSeenMemories",          false);
// user_perf("browser.smartwindow.showThemesNotice",                   true);
// user_perf("browser.smartwindow.sidebar.openByDefault",              true);
%%  	endif
%%  	if 152 <= ver
	%%  	if ver < 153
// user_pref("browser.smartwindow.allowTables",                        true);
%%  		endif
// user_pref("browser.smartwindow.isDefaultWindow",                   false);
%%  	endif

%%  endif

%%  if 153 <= ver

{{- comment(2, "Other") -}}

%%  	if 153 <= ver
// user_pref("browser.ml.embedGen.textEmbeddingFeatureModel",  "");
// user_pref("browser.ml.embedGen.textEmbeddingSize",         384);
%%  	endif
%%  endif
