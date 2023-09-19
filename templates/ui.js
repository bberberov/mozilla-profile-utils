{#-
	Copyright © 2021, 2022, 2023 Boian Berberov

	Licensed under the EUPL-1.2 only.
	License text: https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
	SPDX-License-Identifier: EUPL-1.2
-#}

%%  from 'tools.jinja' import comment, use_bool with context

{{- comment(1, "UI") -}}

{{- comment(2, "about:config warning") -}}

%%  if app == 'firefox'
%%  	if ver < 71
user_pref("general.warnOnAboutConfig",       {{ use_bool(warn) }});
%%  	else
user_pref("browser.aboutConfig.showWarning", {{ use_bool(warn) }});
%%  	endif
%%  elif app == 'thunderbird'
user_pref("general.warnOnAboutConfig",       {{ use_bool(warn) }});
%%  endif

{{- comment(2, "Widgets") -}}

%%  if app == 'firefox'
##  Thunderbird does now work well at 1.0
user_pref("layout.css.devPixelsPerPx",       "1.0");
%%  	if 103 <= ver
user_pref("browser.display.os-zoom-behavior", 0);
user_pref("ui.textScaleFactor", 100);
	{{- comment(3, "(Hidden)") -}}
%%  	endif
%%  endif

%%  if 88 <= ver
user_pref("widget.non-native-theme.enabled",  true);
	{{- comment(3, "(Default true since 89)") -}}
%%  endif

{{- comment(2, "Tabs - Look") -}}

%%  if app == 'firefox'
user_pref("browser.tabs.closeWindowWithLastTab",       false);
%%  elif app == 'thunderbird'
user_pref("mail.tabs.closeWindowWithLastTab",          false);
%%  endif

%%  if app == 'firefox'
%%  	if 95 <= ver
user_pref("browser.tabs.inTitlebar",                       1);
%%  	else
user_pref("browser.tabs.drawInTitlebar",                true);
%%  	endif
%%  elif app == 'thunderbird'
%%  	if 102 <= ver
// user_pref("browser.tabs.inTitlebar",                       1);
%%  	endif
user_pref("mail.tabs.drawInTitlebar",                   true);
%%  endif

%%  if app == 'firefox'
user_pref("browser.tabs.tabClipWidth",                   384);
%%  elif app == 'thunderbird'
user_pref("mail.tabs.tabClipWidth",                      384);
%%  endif

%%  if app == 'firefox'
user_pref("browser.tabs.tabMinWidth",                    192);
%%  elif app == 'thunderbird'
user_pref("mail.tabs.tabMinWidth",                       192);
%%  endif

%%  if app == 'thunderbird'
user_pref("mail.tabs.tabMaxWidth",                       240);
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

%%  if app == 'firefox'

{{- comment(2, "New Tab") -}}

user_pref("browser.newtab.preload",                            false);
// user_pref("browser.newtab.url",                     "about:blank");
user_pref("browser.pagethumbnails.capturing_disabled",          true);
	{{- comment(3, "(Hidden)") -}}
%%  endif

{{- comment(2, "New Tab Page") -}}

%%  if app == 'firefox'
user_pref("browser.newtabpage.enabled",  false);
%%  elif app == 'thunderbird'
// user_pref("browser.newtabpage.enabled", false);
%%  endif

{{- comment(2, "Dark mode") -}}

%%  if 89 <= ver
// user_pref("browser.theme.toolbar-theme", 2);
%%  endif

%%  if 95 <= ver
// user_pref("browser.theme.content-theme", 2);
%%  endif

%%  if 95 <= ver
user_pref("devtools.theme",    "auto");
	{{- comment(3, '"dark", "light", or "auto"') -}}
%%  else
user_pref("devtools.theme",    "dark");
	{{- comment(3, '"dark" or "light"') -}}
%%  endif

%%  if 93 <= ver
user_pref("layout.css.prefers-color-scheme.content-override", 0);
%%  endif
%%  if 67 <= ver
user_pref("ui.systemUsesDarkTheme", 1);
%%  endif

{{- comment(2, "Scrollbar") -}}

%%  if 88 <= ver
%%  	if ver < 96
user_pref("widget.non-native-theme.scrollbar.size", 20);
%%  	else
user_pref("widget.non-native-theme.scrollbar.size.override", 20);
%%  	endif

%%  endif

%%  if 99 <= ver
// user_pref("widget.gtk.overlay-scrollbars.enabled", false);
	{{- comment(3, "(Default true since 100)") -}}
// user_pref("widget.windows.overlay-scrollbars.enabled", false);
	{{- comment(3, "(Default true since 100)") -}}
%%  endif

##
##  Firefox Specific
##

%%  if app == 'firefox'

{{- comment(2, "Tabs - Loading") -}}

user_pref("browser.bookmarks.openInTabClosesMenu",  false);
user_pref("browser.tabs.loadBookmarksInBackground",  true);
user_pref("browser.tabs.loadBookmarksInTabs",        true);
user_pref("browser.search.openintab",                true);
user_pref("browser.urlbar.openintab",                true);
// user_pref("browser.tabs.insertAfterCurrent",         true);
// user_pref("browser.tabs.insertRelatedAfterCurrent",  true);
	{{- comment(3, "(Default)") -}}
##

{{- comment(2, "New Tab Page, Activity Stream") -}}

%%  	if 57 <= ver and ver < 87
user_pref("browser.library.activity-stream.enabled",  	                                              false);
%%  	endif
%%  	if 54 <= ver and ver < 60
user_pref("browser.newtabpage.activity-stream.enabled",                                               false);
%%  	endif
%%  	if 57 <= ver
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets",                            "{}");
%%  		if 67 <= ver
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",                         false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",                       false);
%%  		endif
%%  		if 66 <= ver
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed",                             false);
%%  		endif
// user_pref("browser.newtabpage.activity-stream.feeds.newtabinit",                                   false);
// user_pref("browser.newtabpage.activity-stream.feeds.places",                                       false);
// user_pref("browser.newtabpage.activity-stream.feeds.section",                                      false);
// user_pref("browser.newtabpage.activity-stream.feeds.section.highlights",                           false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories",                              false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets",                                        false);
// user_pref("browser.newtabpage.activity-stream.feeds.system.topsites",                              false);
// user_pref("browser.newtabpage.activity-stream.feeds.system.topstories",                            false);
// user_pref("browser.newtabpage.activity-stream.feeds.systemtick",                                   false);
// user_pref("browser.newtabpage.activity-stream.feeds.topsites",                                     false);
user_pref("browser.newtabpage.activity-stream.default.sites",                                            "");
// user_pref("browser.newtabpage.activity-stream.showSearch",                                         false);
%%  		if 58 <= ver
user_pref("browser.newtabpage.activity-stream.showSponsored",                                         false);
%%  		endif
%%  		if 83 <= ver
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites",                                 false);
%%  		endif
%%  		if 60 <= ver
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket",                      false);
%%  		endif
%%  		if 61 <= ver
// user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks",                false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads",                   false);
// user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited",                  false);
%%  		endif
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts",                  false);
// user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines",    "");
%%  	endif
%%  	if ver < 60
user_pref("browser.newtabpage.enhanced",                                                              false);
user_pref("browser.newtabpage.introShown",                                                            {{ use_bool(warn) }});
%%  	endif

{{- comment(2, "Windows jumplist") -}}

user_pref("browser.taskbar.lists.enabled",          false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled",   false);
user_pref("browser.taskbar.lists.tasks.enabled",    false);
##

{{- comment(2, "Windows taskbar preview") -}}

user_pref("browser.taskbar.previews.enable", false);
##

{{- comment(2, "Spellcheck") -}}

user_pref("layout.spellcheckDefault", 2);
##

{{- comment(2, "Animations") -}}

%%  	if ver < 55
user_pref("browser.tabs.animate",                  false);
%%  	endif
user_pref("browser.download.animateNotifications", false);
user_pref("browser.download.autohideButton",       false);
%%  	if ( 63 <= ver and not rfp ) or 68 <= ver
user_pref("ui.prefersReducedMotion",                   1);
%%  	endif

{{- comment(2, "Places") -}}

%%  	if ver < 57
user_pref("browser.bookmarks.showRecentlyBookmarked",      false);
%%  	endif
%%  	if 85 <=ver
user_pref("browser.toolbars.bookmarks.showOtherBookmarks", false);
%%  	endif
%%  	if 84 <=ver
user_pref("browser.toolbars.bookmarks.visibility",      "always");
%%  	endif
%%  endif
##  app == 'firefox'

##
##  Thunderbird Specific
##

%%  if app == 'thunderbird'

{{- comment(2, "Global") -}}

// user_pref("mail.uidensity",  0);
// user_pref("mail.uifontsize", 0);
##

{{- comment(2, "Folderpane") -}}

user_pref("mail.folderpane.showColumns",    true);
user_pref("mail.folderpane.sumSubfolders", false);
##

{{- comment(2, "Preview Pane Headers") -}}

user_pref("mailnews.headers.showOrganization",     true);
user_pref("mailnews.headers.showSender",           true);
user_pref("mailnews.headers.showUserAgent",        true);
user_pref("mailnews.headers.extraExpandedHeaders",   "");

user_pref("mailnews.customHeaders", "List-Id: Sender");
##

{{- comment(2, "Message Display") -}}

user_pref("mailnews.display.show_all_body_parts_menu",      true);
user_pref("mailnews.attachments.display.start_expanded",    true);
	{{- comment(3, "Expand attachments view") -}}
%%  if ver < 102
user_pref("mailnews.attachments.display.view",                 1);
%% 	endif
user_pref("mailnews.default_sort_order",                       2);
	{{- comment(3, "Sort descending") -}}
user_pref("mailnews.default_sort_type",                       18);
	{{- comment(3, "Sory by date") -}}
// user_pref("mailnews.message_display.allow_plugins",        false);
user_pref("mailnews.message_display.disable_remote_image",  true);
##

{{- comment(2, "Wrap") -}}

user_pref("mail.wrap_long_lines",       false);
user_pref("mailnews.wraplength",            0);
user_pref("plain_text.wrap_long_lines",  true);
##

{{- comment(2, "Tabs") -}}

user_pref("mail.tabs.autoHide",               false);
// user_pref("mail.tabs.closeButtons",               2);
	{{- comment(3, "Don't display close buttons") -}}
##

{{- comment(2, "Quota Display") -}}

user_pref("mail.quota.mainwindow_threshold.show",      0);
user_pref("mail.quota.mainwindow_threshold.warning",  60);
user_pref("mail.quota.mainwindow_threshold.critical", 80);
%%  endif
##  app == 'thunderbird'
