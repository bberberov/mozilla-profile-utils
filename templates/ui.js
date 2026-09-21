{#-
	Copyright © 2021, 2022, 2023, 2026 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, use_bool with context

{{- comment(1, "UI") -}}

{{- comment(2, "about:config warning") -}}

%%  if   app == 'firefox'

%%  	if ver < 71
user_pref("general.warnOnAboutConfig",       {{ use_bool(warn) }});
%%  	else
user_pref("browser.aboutConfig.showWarning", {{ use_bool(warn) }});
%%  	endif

%%  elif app == 'thunderbird'

%%  	if true
user_pref("general.warnOnAboutConfig",       {{ use_bool(warn) }});
%%  	endif

%%  endif

{{- comment(2, "Profile Reset") -}}

%%  if true
user_pref("browser.disableResetPrompt",  true);
##- TODO: introduced sometime after version 60
%%  endif

{{- comment(2, "Widgets") -}}

%%  if app == 'firefox'

%%  	if true
user_pref("layout.css.devPixelsPerPx",        "1.0");
##- Thunderbird does now work well at 1.0
%%  	endif
%%  	if 103 <= ver
user_pref("browser.display.os-zoom-behavior",     0);
user_pref("ui.textScaleFactor",                 100);
	{{- comment(3, "(Hidden)") -}}
%%  	endif

%%  endif

%%  if 88 <= ver
##
%%  	if ver < 127
user_pref("widget.non-native-theme.enabled",           true);
	{{- comment(3, "(Default true since 89)") -}}
%%  	endif
%%  	if true
user_pref("widget.non-native-theme.use-theme-accent", false);
%%  	endif
%%  endif

{{- comment(2, "Dark mode") -}}

%%  if 89 <= ver
// user_pref("browser.theme.toolbar-theme",                           2);
{{- comment(3, "(Default 2 since 120)") -}}
%%  endif
%%  if 95 <= ver
// user_pref("browser.theme.content-theme",                           2);
%%  endif
%%  if 95 <= ver
user_pref("devtools.theme",                                   "auto");
{{- comment(3, '"dark", "light", or "auto"') -}}
%%  else
user_pref("devtools.theme",                                   "dark");
{{- comment(3, '"dark" or "light"') -}}
%%  endif
%%  if 93 <= ver
user_pref("layout.css.prefers-color-scheme.content-override",      0);
%%  endif
%%  if 67 <= ver
user_pref("ui.systemUsesDarkTheme",                                1);
%%  endif

{{- comment(2, "Scrollbar") -}}

%%  if 88 <= ver
%%  	if ver < 96
user_pref("widget.non-native-theme.scrollbar.size",          20);
%%  	else
user_pref("widget.non-native-theme.scrollbar.size.override", 20);
%%  	endif
%%  endif
%%  if 99 <= ver
// user_pref("widget.gtk.overlay-scrollbars.enabled",           false);
{{- comment(3, "(Default true since 100)") -}}
// user_pref("widget.windows.overlay-scrollbars.enabled",       false);
{{- comment(3, "(Default true since 100)") -}}
%%  endif

{{- comment(2, "Tabs - Look") -}}

%%  if   app == 'firefox'
user_pref("browser.tabs.closeWindowWithLastTab",       false);
%%  elif app == 'thunderbird'
user_pref("mail.tabs.closeWindowWithLastTab",          false);
%%  endif

%%  if   app == 'firefox'

%%  	if 95 <= ver
user_pref("browser.tabs.inTitlebar",                       1);
%%  	else
user_pref("browser.tabs.drawInTitlebar",                true);
%%  	endif

%%  elif app == 'thunderbird'

%%  	if 102 <= ver
// user_pref("browser.tabs.inTitlebar",                       1);
%%  	endif
%%  	if true
user_pref("mail.tabs.drawInTitlebar",                   true);
%%  	endif

%%  endif

%%  if   app == 'firefox'
user_pref("browser.tabs.tabClipWidth",                   384);
// user_pref("browser.tabs.tabMaxWidth",                    240);
user_pref("browser.tabs.tabMinWidth",                    192);
%%  elif app == 'thunderbird'
user_pref("mail.tabs.tabClipWidth",                      384);
user_pref("mail.tabs.tabMaxWidth",                       240);
user_pref("mail.tabs.tabMinWidth",                       192);
%%  endif

%%  if app == 'firefox'
%%  	if 73 <= ver
user_pref("browser.tabs.tabmanager.enabled",            true);
%%  	endif
%%  	if 85 == ver
user_pref("browser.tabs.tooltipsShowPid",              {{ use_bool(debug) }});
%%  	endif
%%  	if 86 <= ver
user_pref("browser.tabs.tooltipsShowPidAndActiveness", {{ use_bool(debug) }});
%%  	endif
%%  endif

%%  if 132 <= ver

{{- comment(2, "Tabs - Groups") -}}

%%  	if 138 <= ver
// user_pref("browser.tabs.dragDrop.createGroup.delayMS",        240);
%%  	endif
%%  	if 150 <= ver
// user_perf("browser.tabs.dragDrop.createGroup.enabled",       true);
%%  	endif
%%  	if 138 <= ver
// user_pref("browser.tabs.dragDrop.expandGroup.delayMS",        350);
// user_pref("browser.tabs.dragDrop.moveOverThresholdPercent",    80);
%%  	endif
%%  	if 146 <= ver
// user_pref("browser.tabs.dragDrop.multiselectStacking",      false);
%%  	endif
%%  	if 138 <= ver
// user_pref("browser.tabs.dragDrop.selectTab.delayMS",          350);
%%  	endif
%%  	if true
// user_pref("browser.tabs.groups.enabled",                     true);
{{- comment(3, "(Default true since 139)") -}}
%%  	endif
%%  	if 150 <= ver
// user_perf("browser.tabs.groups.alternateMenu",              false);
%%  	endif

%%  endif

{{- comment(2, "Tabs - Other") -}}

%%  if 146 <= ver
// user_pref("browser.tabs.notes.enabled",        false);
// user_pref("browser.tabs.splitView.enabled",    false);
%%  endif

{#-
 #  Firefox Specific
-#}

%%  if app == 'firefox'

{{- comment(2, "Tabs - Loading") -}}

%%  	if true
user_pref("browser.bookmarks.openInTabClosesMenu",  false);
user_pref("browser.tabs.loadBookmarksInBackground",  true);
user_pref("browser.tabs.loadBookmarksInTabs",        true);
user_pref("browser.search.openintab",                true);
user_pref("browser.urlbar.openintab",                true);
// user_pref("browser.tabs.insertAfterCurrent",         true);
// user_pref("browser.tabs.insertRelatedAfterCurrent",  true);
	{{- comment(3, "(Default)") -}}
%%  	endif

{{- comment(2, "Windows jumplist") -}}

%%  	if true
user_pref("browser.taskbar.lists.enabled",          false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled",   false);
user_pref("browser.taskbar.lists.tasks.enabled",    false);
%%  	endif

{{- comment(2, "Windows taskbar preview") -}}

%%  	if true
user_pref("browser.taskbar.previews.enable", false);
%%  	endif

{{- comment(2, "Spellcheck") -}}

%%  	if true
user_pref("layout.spellcheckDefault", 2);
%%  	endif

{{- comment(2, "Animations") -}}

%%  	if ver < 55
user_pref("browser.tabs.animate",                  false);
%%  	endif
%%  	if ver < 111
user_pref("browser.download.animateNotifications", false);
%%  	endif
%%  	if true
user_pref("browser.download.autohideButton",       false);
%%  	endif
%%  	if ( 63 <= ver and not rfp ) or 68 <= ver
user_pref("ui.prefersReducedMotion",                   1);
%%  	endif

{{- comment(2, "Places") -}}

%%  	if ver < 57
user_pref("browser.bookmarks.showRecentlyBookmarked",         false);
%%  	endif
%%  	if 85 <= ver
user_pref("browser.toolbars.bookmarks.showOtherBookmarks",    false);
%%  	endif
%%  	if 84 <= ver
user_pref("browser.toolbars.bookmarks.visibility",         "always");
%%  	endif

%%  	if 129 <= ver

{{- comment(2, "Sidebar") -}}

%%  		if 132 <= ver
// user_pref("sidebar.animation.duration-ms",                    200);
// user_pref("sidebar.animation.enabled",                       true);
%%  		endif
%%  		if 137 <= ver
// user_pref("sidebar.animation.expand-on-hover.duration-ms",    400);
// user_pref("sidebar.expandOnHover",                          false);
%%  		endif
%%  		if 150 <= ver
// user_pref("sidebar.history.sortOption",                     "date");
%%  		endif
// user_pref("sidebar.main.tools",                             "aichat,syncedtabs,history");
%%  		if 151 <= ver
// user_pref("sidebar.updatedBookmarks.enabled",               false);
%%  		endif
%%  		if true
// user_pref("sidebar.verticalTabs",                           false);
// user_pref("sidebar.visibility",                             "always-show");
%%  		endif

%%  	endif

%%  endif
{#- app == 'firefox' -#}

{#-
 #  Thunderbird Specific
-#}

%%  if app == 'thunderbird'

{{- comment(2, "Global") -}}

%%  	if true
// user_pref("mail.uidensity",  0);
// user_pref("mail.uifontsize", 0);
%%  	endif

{{- comment(2, "Folderpane") -}}

%%  	if true
user_pref("mail.folderpane.showColumns",    true);
user_pref("mail.folderpane.sumSubfolders", false);
%%  	endif

{{- comment(2, "Preview Pane Headers") -}}

%%  	if true
user_pref("mailnews.customHeaders",                 "List-Id: Sender");
user_pref("mailnews.headers.extraExpandedHeaders",  "");
user_pref("mailnews.headers.showOrganization",      true);
user_pref("mailnews.headers.showSender",            true);
user_pref("mailnews.headers.showUserAgent",         true);
%%  	endif

{{- comment(2, "Message Display") -}}

%%  	if true
user_pref("mailnews.display.show_all_body_parts_menu",      true);
user_pref("mailnews.attachments.display.start_expanded",    true);
	{{- comment(3, "Expand attachments view") -}}
%%  	endif
%%  	if ver < 102
user_pref("mailnews.attachments.display.view",                 1);
%%  	endif
%%  	if true
user_pref("mailnews.default_sort_order",                       2);
	{{- comment(3, "Sort descending") -}}
user_pref("mailnews.default_sort_type",                       18);
	{{- comment(3, "Sory by date") -}}
// user_pref("mailnews.message_display.allow_plugins",        false);
user_pref("mailnews.message_display.disable_remote_image",  true);
%%  	endif

{{- comment(2, "Wrap") -}}

%%  	if true
user_pref("mail.wrap_long_lines",       false);
user_pref("mailnews.wraplength",            0);
user_pref("plain_text.wrap_long_lines",  true);
%%  	endif

{{- comment(2, "Tabs") -}}

%%  	if true
user_pref("mail.tabs.autoHide",               false);
// user_pref("mail.tabs.closeButtons",               2);
	{{- comment(3, "Don't display close buttons") -}}
%%  	endif

{{- comment(2, "Quota Display") -}}

%%  	if true
user_pref("mail.quota.mainwindow_threshold.show",      0);
user_pref("mail.quota.mainwindow_threshold.warning",  60);
user_pref("mail.quota.mainwindow_threshold.critical", 80);
%%  	endif

%%  endif
{#- app == 'thunderbird' -#}
