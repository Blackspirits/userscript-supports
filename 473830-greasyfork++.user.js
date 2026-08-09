// ==UserScript==
// @name               Greasy Fork++
// @namespace          https://github.com/iFelix18
// @version            4.0.0
// @author             CY Fung <https://greasyfork.org/users/371179> & Davide <iFelix18@protonmail.com>
// @contributor        BlackSpirits <https://github.com/BlackSpirits>
// @icon               https://www.google.com/s2/favicons?domain=https://greasyfork.org
// @description        Adds script filtering, install helpers, statistics, notifications, and interface improvements to Greasy Fork
// @description:de     Ergänzt Greasy Fork um Skriptfilter, Installationshilfen, Statistiken, Benachrichtigungen und Verbesserungen der Benutzeroberfläche
// @description:es     Añade a Greasy Fork filtros de scripts, ayudas de instalación, estadísticas, notificaciones y mejoras de la interfaz
// @description:fr     Ajoute à Greasy Fork des filtres de scripts, des outils d’installation, des statistiques, des notifications et des améliorations de l’interface
// @description:it     Aggiunge a Greasy Fork filtri per gli script, strumenti di installazione, statistiche, notifiche e miglioramenti dell’interfaccia
// @description:pt     Adiciona ao Greasy Fork filtros de scripts, ferramentas de instalação, estatísticas, notificações e melhorias da interface
// @description:pt-BR  Adiciona ao Greasy Fork filtros de scripts, ferramentas de instalação, estatísticas, notificações e melhorias na interface
// @description:ru     Добавляет в Greasy Fork фильтрацию скриптов, инструменты установки, статистику, уведомления и улучшения интерфейса
// @description:zh-CN  为 Greasy Fork 添加脚本筛选、安装辅助、统计、通知和界面改进
// @description:zh-TW  為 Greasy Fork 加入腳本篩選、安裝輔助、統計、通知與介面改進
// @description:ja     Greasy Fork にスクリプトのフィルタリング、インストール補助、統計、通知、UI 改善を追加します
// @description:ko     Greasy Fork에 스크립트 필터링, 설치 도우미, 통계, 알림 및 인터페이스 개선을 추가합니다
// @copyright          2023, CY Fung (https://greasyfork.org/users/371179); 2021, Davide (https://github.com/iFelix18)
// @license            MIT
// @require            https://fastly.jsdelivr.net/gh/sizzlemctwizzle/GM_config@06f2015c04db3aaab9717298394ca4f025802873/gm_config.min.js
// @require            https://fastly.jsdelivr.net/npm/@violentmonkey/shortcut@1.4.4/dist/index.min.js
// @require            https://fastly.jsdelivr.net/gh/cyfung1031/userscript-supports@3fa07109efca28a21094488431363862ccd52d7c/library/WinComm.min.js
// @match              *://greasyfork.org/*
// @match              *://sleazyfork.org/*
// @match              *://cn-greasyfork.org/*
// @connect            greasyfork.org
// @connect            sleazyfork.org
// @connect            cn-greasyfork.org
// @connect            api.greasyfork.org
// @connect            api.sleazyfork.org
// @connect            api.cn-greasyfork.org
// @compatible         chrome
// @compatible         edge
// @compatible         firefox
// @compatible         safari
// @compatible         brave
// @grant              GM.deleteValue
// @grant              GM.getValue
// @grant              GM.notification
// @grant              GM.registerMenuCommand
// @grant              GM.setValue
// @grant              GM.xmlHttpRequest
// @run-at             document-start
// @inject-into        content
// @noframes
// ==/UserScript==

/* ---- updated filter ---- */

// reference1: Greasy Fork+
// reference2: https://greasyfork.org/scripts/12179 and https://greasyfork.org/scripts/13514

const filters = {
    // NonASCII: /[^\x00-\x7F\s]+/,
    NonLatin: /[^\p{Script=Latin}\p{Script=Common}\p{Script=Inherited}]/u,        //  /[^\u0000-\u024F\u2000-\u214F\s]+/
    Rules: [
        // ----------- game1 -----------
        /[^a-zA-Z](Aimbot|AntiGame|Agar|agar\.?io|agma\.?io|alis\.io|angel\.io|ExtencionRipXChetoMalo|AposBot|DFxLite|ZTx-Lite|AposFeedingBot|AposLoader|Balz|Blah Blah|Orc Clan Script|Astro\s*Empires|^\s*Attack|^\s*Battle|BiteFight|Blood\s*Wars|Bloble|Bonk|Bots|Bots4|Brawler|\bBvS\b|Business\s*Tycoon|Castle\s*Age|City\s*Ville|chopcoin\.io|Comunio|Conquer\s*Club|CosmoPulse|cursors\.io|Dark\s*Orbit|Dead\s*Frontier|Diep\.io|\bDOA\b|doblons\.io|DotD|Dossergame|Dragons\s*of\s*Atlantis|driftin\.io|Dugout|\bDS[a-z]+\n|elites\.io|Empire\s*Board|eRep(ublik)?|Epicmafia|Epic.*War|ExoPlanet|Falcon Tools|Feuerwache|Farming|FarmVille|Fightinfo|Frontier\s*Ville|Ghost\s*Trapper|Gladiatus|Goalline|Gondal|gota\.io|Grepolis|Hobopolis|\bhwm(\b|_)|Ikariam|\bIT2\b|Jellyneo|Kapi\s*Hospital|Kings\s*Age|Kingdoms?\s*of|knastv(o|oe)gel|Knight\s*Fight|\b(Power)?KoC(Atta?ck)?\b|\bKOL\b|Kongregate|Krunker|Last\s*Emperor|Legends?\s*of|Light\s*Rising|lite\.ext\.io|Lockerz|\bLoU\b|Mafia\s*(Wars|Mofo)|Menelgame|Mob\s*Wars|Mouse\s*Hunt|Molehill\s*Empire|MooMoo|MyFreeFarm|narwhale\.io|Neopets|NeoQuest|Nemexia|\bOGame\b|Ogar(io)?|Pardus|Pennergame|Pigskin\s*Empire|PlayerScripts|pokeradar\.io|Popmundo|Po?we?r\s*(Bot|Tools)|PsicoTSI|Ravenwood|Schulterglatze|Skribbl|slither\.io|slitherplus\.io|slitheriogameplay|SpaceWars|splix\.io|Survivio|\bSW_[a-z]+\n|\bSnP\b|The\s*Crims|The\s*West|torto\.io|Travian|Treasure\s*Isl(and|e)|Tribal\s*Wars|TW.?PRO|Vampire\s*Wars|vertix\.io|War\s*of\s*Ninja|World\s*of\s*Tanks|West\s*Wars|wings\.io|\bWoD\b|World\s*of\s*Dungeons|wtf\s*battles|Wurzelimperium|Yohoho|Zombs)[^a-zA-Z]/iu,
        // ----------- game2 -----------
        /\bagar(\.?io)?\b|\bagma(\.?io)?\b|\baimbot\b|\barras(\.?io)?\b|\bbots?\b|\bbubble(\.?am)?\b|\bcheats?\b|\bdiep(\.?io)?\b|\bfreebitco(\.?in)?\b|\bgota(\.?io)?\b|\bhacks?\b|\bkrunker(\.?io)?\b|\blostworld(\.?io)?\b|\bmoomoo(\.?io)?\b|\broblox(\.com)?\b|\bshell\sshockers\b|\bshellshock(\.?io)?\b|\bshellshockers\b|\bskribbl(\.?io)?\b|\bslither(\.?io)?\b|\bsurviv(\.?io)?\b|\btaming(\.?io)?\b|\bvenge(\.?io)?\b|\bvertix(\.?io)?\b|\bzombs(\.?io)?\b/iu
        // ----------- Social Networks -----------
        // /Face\s*book|Google(\+| Plus)|\bHabbo|Kaskus|\bLepra|Leprosorium|MySpace|meinVZ|odnoklassniki|Одноклассники|Orkut|sch(ue|ü)ler(VZ|\.cc)?|studiVZ|Unfriend|Valenth|VK|vkontakte|ВКонтакте|Qzone|Twitter|TweetDeck/iu,
        // ----------- Clutter -----------
        // /^\s*(.{1,3})\1+\n|^\s*(.+?)\n+\2\n*$|^\s*.{1,5}\n|do\s*n('|o)?t (install|download)|nicht installieren|(just )?(\ban? |\b)test(ing|s|\d|\b)|^\s*.{0,4}test.{0,4}\n|\ntest(ing)?\s*|^\s*(\{@|Smolka|Hacks)|\[\d{4,5}\]|free\s*download|theme|(night|dark) ?(mode)?/iu
    ],
};

/* ---- updated filter ---- */

/* global GM_config, VM */

const isInIframe = window !== top;

/**
 * @typedef { typeof import("./library/WinComm.js")  } WinComm
 */

// console.log(GM)

/** @type {WinComm} */
const WinComm = globalThis.WinComm || (typeof this !== 'undefined' ? this.WinComm : undefined);

//  -------- UU Fucntion - original code: https://fastly.jsdelivr.net/npm/@ifelix18/utils@6.5.0/lib/index.min.js  --------
// optimized by CY Fung to remove $ dependency and observe creation
const UU = isInIframe || (function () {
    const scriptName = GM.info.script.name; // not name_i18n
    const scriptVersion = GM.info.script.version;
    const authorMatch = /^(.*?)\s<\S[^\s@]*@\S[^\s.]*\.\S+>$/.exec(GM.info.script.author);
    const author = authorMatch ? authorMatch[1] : GM.info.script.author;
    let scriptId = scriptName.toLowerCase().replace(/\s/g, "-");
    let loggingEnabled = false;

    const log = (message) => {
        if (loggingEnabled) {
            console.log(`${scriptName}:`, message);
        }
    };

    const error = (message) => {
        console.error(`${scriptName}:`, message);
    };

    const warn = (message) => {
        console.warn(`${scriptName}:`, message);
    };

    const alert = (message) => {
        window.alert(`${scriptName}: ${message}`);
    };

    /** @param {string} text */
    const short = (text, length) => {
        const s = text.split(" ");
        const l = Number(length);
        return s.length > l
            ? `${s.slice(0, l).join(" ")} [...]`
            : text;
    };

    const addStyle = (css) => {
        const head = document.head || document.querySelector("head");
        const style = document.createElement("style");
        style.textContent = css;
        head.appendChild(style);
    };

    const init = async (options = {}) => {
        scriptId = options.id || scriptId;
        loggingEnabled = typeof options.logging === "boolean" ? options.logging : false;
        console.info(
            `%c${scriptName}\n%cv${scriptVersion}${author ? ` by ${author}` : ""} is running!`,
            "color:red;font-weight:700;font-size:18px;text-transform:uppercase",
            ""
        );
    };

    return {
        init,
        log,
        error,
        warn,
        alert,
        short,
        addStyle
    };
})();

//  -------- UU Fucntion - original code: https://fastly.jsdelivr.net/npm/@ifelix18/utils@6.5.0/lib/index.min.js  --------


const mWindow = isInIframe || (() => {


    const fields = {
        theme: {
            label: '', labelPos: 'left', type: 'select',
            options: ['auto', 'light', 'dark'], default: 'auto'
        },
        hideBlacklistedScripts: {
            label: '', section: [''], labelPos: 'right', type: 'checkbox', default: true
        },
        hideHiddenScript: {
            label: '', labelPos: 'right', type: 'checkbox', default: true
        },
        showInstallButton: {
            label: '', labelPos: 'right', type: 'checkbox', default: true
        },
        showTotalInstalls: {
            label: '', labelPos: 'right', type: 'checkbox', default: true
        },
        milestoneNotification: {
            label: '', labelPos: 'left', type: 'text', title: '', size: 150,
            default: '10, 100, 500, 1000, 2500, 5000, 10000, 100000, 1000000'
        },
        nonLatins: {
            label: '', section: [''], labelPos: 'right', type: 'checkbox', default: false
        },
        blacklist: {
            label: '', labelPos: 'right', type: 'checkbox', default: true
        },
        customBlacklist: {
            label: '', labelPos: 'left', type: 'text', title: '', size: 150, default: ''
        },
        hiddenList: {
            label: '', labelPos: 'left', type: 'textarea', title: '', default: '', save: false
        },
        hideRecentUsersWithin: {
            label: '', labelPos: 'left', type: 'text', title: '', default: '0', size: 150
        },
        logging: {
            label: '', section: [''], labelPos: 'right', type: 'checkbox', default: false
        },
        debugging: {
            label: '', labelPos: 'right', type: 'checkbox', default: false
        }
    }

    const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAASFBMVEVHcEwBAQEDAwMAAAACAgIBAQEAAAAREREDAwMBAQH///8WFhYuLi7U1NSdnZ1bW1vExMTq6uqtra309PRERETf399ycnKGhoaVOQEOAAAACnRSTlMAg87/rjLgE1rzhWrqxgAABexJREFUaN61WouSpCAMVPEJKCqi//+nF4IKKig6e1SduzfupEkT8oIkiRlVVdRpnmdlQ0hTZnme1kVV4Zvk96Fla8nH0ZSI8rP0Ks2uwi1Ilv4EURW5K5xS0slhMb/BkD0hrMk/q1HVeSP6QVILMFIY8wagn6ojTV5Xn8RnbFZaoAPQc9bR3gXQ/yaWvYYA8VfKKeXACZVnAE1V9o4on/izWPsb/q9Ji3j5OcrjhiCXohsAQso6lh6QL9qOEd6GAAbKYAInAFAiiqYC5LMeLIaFKeppR3h/BiAkj6CpLuEPmbbHngUBhFZsdAGiaUL5xLBzRrAAZBlk5wpnVJEohHTbuZoAD0uhMUu+uY/bLZHaryBCH4vQCuugbnSoYf5sk+llKWaEETT/Qu2TecmSHaF1KPT6gmkM4hNLLkIR2l/guAZK1fQrS3kVXmChEX5mKb0xICH/gKXrQtf2pbhlyfqFoL/1LUOVEbFwcsuSs5GfAcjJ8dVkknbafpYUfUXSQYWqRP81THcs8fbVMmTVaQU6ENNOdyxNgGRYmFsp2/mQaFiKzGeC1IcVmAjrDjq4LAF9RgdF13CAo3cTDRcAP2OOCjX6UAwCPpbWyGZsCWTMAM0YTGF2Eg0XAD8bramue9jocGVpi5y7LbUUVRO0dRINF2D9bN/PBSqgAizt8gHByJAUddEyTqa7rYF57oZkkgiYj48lYeVTuuh4Hw1A8pWhxr68snQYioOxHSm6A2gq1wuZz68suUMKELst8oCLfAew+rzMecmOLO251wYwa4CDmd4B8GyPM1YDlyXeUp8Gx412A9Chy6vP9cXO0kW+5e6N104vH68sXeW/jwzptss8OihFf1UAY2dVkgDCdQz8dfiv1m3sZek62rcIsJlr/5uADv1bhNqzxrcIb3VIkzz06m9YykMAM39kidIoAG+5R7icHlm6BViUVDqSZknpfd8NZh2MO1Xz+JKlcYsfZeK3UqjBTDRexn680PVoSxMFBiCST6RJJmXzg2FTegaPzyRWRWu9cERAHW4o6jANmPU0Ewwqe36wa8j1wyQLADHyk1FphM760H1sBY/+PtS5ECQTvucHynoapYPiZJKFDoSNnFxZYl0QYG2gQExtcJFN8LNl1voHOA++5yQelh5yVPhRopma8M3OALMO8p0GhgDT+lgKDatBhhvN5gcuRWaZJeQ8CzVBLmBLd2tgdrLND9xFxh9CW8JABYRSNQVYugJYK8rB2bn5gWOmaM4dzmXQVjvuidMzS3YfpEm9uPnBtp5yNFRJLRUTb9OaiN1x+06uk0q4+cG+U+SqCeoKLmMwrYkp1pYWRbUvgoDjDZng7EScG3/wSxAyK7+/Xvrgl974JZ1gp69r1Bc7LvUlXhEIsSxh4lWU5Ecdwixh6lhlhPwvlkyZlpIvCFEspW4B8h9YWguQYOZynzZEsJTvRWBPxwDABnKuXWJY2ovAKu8H9h7gkSXblqqFIB8AHlhyekbGUk2PYUbXtvgAXGnYjfWwNA+QcDHN3+x2Q2rngENgiSeeAUZfjDMVHkSn1m2GGBVwCh0d8NlfhJ4owiyE+VjiPV0WKQ7tHCxD1h6DeQ7PAMKWvUcERtt2PDakkio9f/1pkdcsxMOSLq7ldD5LAJf3BeCaCfQmDl57s/Xak4sHEJiPjOcdN4f61+n8CDDQaX/iIk8KcrOTDqCC4Km3tdw9AeBM1+dq1IqRE0stI8LbWk6K7AmAjYPeX/jEdF/qJtgpX+pDzfH9eCVunFyt1UEQUt8dUHwE2BE6b2f8A8I1WMxqGLQfyqu7I8zmOwBh08TJrfy36+ANw1XcQdrHEXOeWeTf5edRJ7JV+t/o+UKTc+hRxx8oF+lLaxKCvTmw1vcRshcAbGFZ8eFUv4kF4NnHewn5pM91sauv7z9gumDPPNgoobBq54/XHraLGyAZXPLqaFrnzIMpKoeR/3BxY7t6woWY2hYqZZ0u2DOPeZzZr1dP7OUZbk4MVE+wecrmqcn+5vLMevsneP3ncfwDNtu0vRpuz80AAAAASUVORK5CYII='

    const locales = {
        "de": {
                "hide": "❌ Dieses Skript ausblenden",
                "notHide": "✔️ Dieses Skript anzeigen",
                "milestone": "Herzlichen Glückwunsch! Ihre Skripte haben insgesamt $1 Installationen erreicht!",
                "settings": {
                        "title": "Einstellungen",
                        "sections": {
                                "appearance": "Darstellung",
                                "features": "Funktionen",
                                "lists": "Filter",
                                "developerOptions": "Entwickleroptionen"
                        },
                        "fields": {
                                "theme": "Farbschema:<br><span>Wähle Automatisch, Hell oder Dunkel. Automatisch folgt dem Erscheinungsbild der Website und verwendet die Systemeinstellung als Fallback.</span>",
                                "hideBlacklistedScripts": "Gefilterte Skripte ausblenden:<br><span>Blendet Skripte aus, die den unten aktiven Filtern entsprechen. Drücke <b>Strg + Alt + B</b>, um sie vorübergehend anzuzeigen.</span>",
                                "hideHiddenScript": "Skripte ausblenden:<br><span>Fügt eine Schaltfläche zum Ausblenden von Skripten hinzu.<br>Die Liste der ausgeblendeten Skripte kann unten angezeigt und bearbeitet werden. Drücke <b>Strg + Alt + H</b>, um sie anzuzeigen.</span>",
                                "showInstallButton": "Installationsschaltfläche:<br><span>Fügt der Skriptliste eine Schaltfläche hinzu, mit der ein Skript direkt installiert werden kann.</span>",
                                "showTotalInstalls": "Installationen:<br><span>Zeigt die Anzahl der täglichen und gesamten Installationen im Benutzerprofil an.</span>",
                                "milestoneNotification": "Meilenstein-Benachrichtigungen:<br><span>Benachrichtigt dich, wenn die Gesamtzahl der Installationen einen dieser Meilensteine erreicht.<br>Meilensteine durch Kommas trennen; leer lassen, um Benachrichtigungen zu deaktivieren.</span>",
                                "milestoneNotificationTitle": "Meilensteine durch Kommas trennen.",
                                "nonLatins": "Nicht-lateinische Zeichen:<br><span>Filtert Skripte, deren Titel oder Beschreibung nicht-lateinische Zeichen enthält.</span>",
                                "blacklist": "Vordefinierter Filter:<br><span>Filtert Skripte mit vordefinierten unerwünschten Begriffen im Titel oder in der Beschreibung, darunter Verweise auf Bots, Cheats und einige Online-Spiele.</span>",
                                "customBlacklist": "Benutzerdefinierter Filter:<br><span>Definiere Wörter oder Muster, die du nicht sehen möchtest.<br>Einträge durch Kommas trennen (Beispiel: YouTube, Facebook, pizza); leer lassen, um diesen Filter zu deaktivieren.</span>",
                                "customBlacklistTitle": "Filtereinträge durch Kommas trennen.",
                                "hiddenList": "Ausgeblendete Skripte:<br><span>Blendet einzelne Skripte anhand ihrer eindeutigen IDs aus.<br>IDs durch Kommas trennen.</span>",
                                "hiddenListTitle": "IDs durch Kommas trennen.",
                                "hideRecentUsersWithin": "Neue Benutzer ausblenden:<br><span>Blendet Benutzer aus, die sich innerhalb der letzten N Stunden registriert haben, um Kommentare von Spam-Konten zu reduzieren.</span>",
                                "hideRecentUsersWithinTitle": "Nur Zahlen. 0 deaktiviert diese Option. Maximum: 168. Empfohlener Wert: 48.",
                                "logging": "Protokollierung",
                                "debugging": "Debugging"
                        },
                        "themeOptions": {
                                "auto": "Automatisch",
                                "light": "Hell",
                                "dark": "Dunkel"
                        },
                        "buttons": {
                                "save": "Speichern",
                                "saveTitle": "Einstellungen speichern",
                                "close": "Schließen",
                                "closeTitle": "Fenster schließen",
                                "reset": "Auf Standardwerte zurücksetzen",
                                "resetTitle": "Felder auf ihre Standardwerte zurücksetzen"
                        },
                        "menu": {
                                "configure": "Konfigurieren",
                                "resetEverything": "Alles zurücksetzen",
                                "resetConfirm": "Wirklich alle Greasy Fork++-Einstellungen auf die Standardwerte zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Installieren {version}",
                                "reinstall": "Neu installieren {version}",
                                "update": "Aktualisieren auf {version}",
                                "downgrade": "Zurückstufen auf {version}",
                                "checking": "Status wird geprüft…",
                                "unavailable": "Status nicht verfügbar"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Gefilterte Skripte ({count})",
                                "hidden": "Ausgeblendete Skripte ({count})"
                        },
                        "actions": {
                                "copyUrl": "URL kopieren",
                                "reportComment": "Kommentar melden"
                        },
                        "messages": {
                                "copyFailed": "Kopieren nicht möglich.",
                                "textLength": "Textlänge: {current} / {max}",
                                "invalidRegex": "Ungültiger regulärer Ausdruck ignoriert: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "nicht-lateinisch",
                                "blacklist": "vordefinierter Filter",
                                "customBlacklist": "benutzerdefinierter Filter",
                                "hidden": "ausgeblendet"
                        }
                }
        },
        "en": {
                "hide": "❌ Hide this script",
                "notHide": "✔️ Show this script",
                "milestone": "Congratulations! Your scripts have reached $1 total installs.",
                "settings": {
                        "title": "Settings",
                        "sections": {
                                "appearance": "Appearance",
                                "features": "Features",
                                "lists": "Filters",
                                "developerOptions": "Developer options"
                        },
                        "fields": {
                                "theme": "Theme:<br><span>Choose Auto, Light, or Dark. Auto follows the site's appearance and falls back to your system preference.</span>",
                                "hideBlacklistedScripts": "Hide filtered scripts:<br><span>Hide scripts matched by the active filters below. Press <b>Ctrl + Alt + B</b> to temporarily show them.</span>",
                                "hideHiddenScript": "Hide scripts:<br><span>Add a button to hide scripts.<br>See and edit the list of hidden scripts below. Press <b>Ctrl + Alt + H</b> to show hidden scripts.</span>",
                                "showInstallButton": "Install button:<br><span>Add a button to the scripts list to install a script directly.</span>",
                                "showTotalInstalls": "Installations:<br><span>Show the number of daily and total installations on the user profile.</span>",
                                "milestoneNotification": "Milestone notifications:<br><span>Get notified whenever your total installs reach one of these milestones.<br>Separate milestones with commas; leave blank to disable notifications.</span>",
                                "milestoneNotificationTitle": "Separate milestones with commas.",
                                "nonLatins": "Non-Latin characters:<br><span>Filter scripts whose title or description contains non-Latin characters.</span>",
                                "blacklist": "Built-in filter:<br><span>Filter scripts containing predefined unwanted terms in the title or description, including references to bots, cheats and some online games.</span>",
                                "customBlacklist": "Custom filter:<br><span>Define words or patterns you do not want to see.<br>Separate entries with commas (example: YouTube, Facebook, pizza); leave blank to disable this filter.</span>",
                                "customBlacklistTitle": "Separate filter entries with commas.",
                                "hiddenList": "Hidden scripts:<br><span>Hide individual scripts by their unique IDs.<br>Separate IDs with commas.</span>",
                                "hiddenListTitle": "Separate IDs with commas.",
                                "hideRecentUsersWithin": "Hide recent users:<br><span>Hide users registered within the last N hours to reduce comments from spam accounts.</span>",
                                "hideRecentUsersWithinTitle": "Numbers only. 0 disables this option. Maximum: 168. Suggested value: 48.",
                                "logging": "Logging",
                                "debugging": "Debugging"
                        },
                        "themeOptions": {
                                "auto": "Auto",
                                "light": "Light",
                                "dark": "Dark"
                        },
                        "buttons": {
                                "save": "Save",
                                "saveTitle": "Save settings",
                                "close": "Close",
                                "closeTitle": "Close window",
                                "reset": "Reset to defaults",
                                "resetTitle": "Reset fields to default values"
                        },
                        "menu": {
                                "configure": "Configure",
                                "resetEverything": "Reset Everything",
                                "resetConfirm": "Reset all Greasy Fork++ settings to their defaults? This action cannot be undone."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Install {version}",
                                "reinstall": "Reinstall {version}",
                                "update": "Update to {version}",
                                "downgrade": "Downgrade to {version}",
                                "checking": "Checking status…",
                                "unavailable": "Status unavailable"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Filtered scripts ({count})",
                                "hidden": "Hidden scripts ({count})"
                        },
                        "actions": {
                                "copyUrl": "Copy URL",
                                "reportComment": "Report comment"
                        },
                        "messages": {
                                "copyFailed": "Unable to copy.",
                                "textLength": "Text length: {current} / {max}",
                                "invalidRegex": "Invalid regular expression ignored: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "non-Latin",
                                "blacklist": "built-in filter",
                                "customBlacklist": "custom filter",
                                "hidden": "hidden"
                        }
                }
        },
        "es": {
                "hide": "❌ Ocultar este script",
                "notHide": "✔️ Mostrar este script",
                "milestone": "¡Enhorabuena! Tus scripts han alcanzado $1 instalaciones en total.",
                "settings": {
                        "title": "Configuración",
                        "sections": {
                                "appearance": "Apariencia",
                                "features": "Funciones",
                                "lists": "Filtros",
                                "developerOptions": "Opciones de desarrollador"
                        },
                        "fields": {
                                "theme": "Tema:<br><span>Elige Automático, Claro u Oscuro. Automático sigue la apariencia del sitio y usa la preferencia del sistema como alternativa.</span>",
                                "hideBlacklistedScripts": "Ocultar scripts filtrados:<br><span>Oculta los scripts que coincidan con los filtros activos de abajo. Pulsa <b>Ctrl + Alt + B</b> para mostrarlos temporalmente.</span>",
                                "hideHiddenScript": "Ocultar scripts:<br><span>Añade un botón para ocultar scripts.<br>Consulta y edita abajo la lista de scripts ocultos. Pulsa <b>Ctrl + Alt + H</b> para mostrarlos.</span>",
                                "showInstallButton": "Botón de instalación:<br><span>Añade a la lista de scripts un botón para instalar directamente un script.</span>",
                                "showTotalInstalls": "Instalaciones:<br><span>Muestra el número de instalaciones diarias y totales en el perfil del usuario.</span>",
                                "milestoneNotification": "Notificaciones de hitos:<br><span>Recibe una notificación cuando el total de instalaciones alcance uno de estos hitos.<br>Separa los hitos con comas; deja el campo vacío para desactivar las notificaciones.</span>",
                                "milestoneNotificationTitle": "Separa los hitos con comas.",
                                "nonLatins": "Caracteres no latinos:<br><span>Filtra scripts cuyo título o descripción contenga caracteres no latinos.</span>",
                                "blacklist": "Filtro predefinido:<br><span>Filtra scripts que contengan términos no deseados predefinidos en el título o la descripción, incluidas referencias a bots, trucos y algunos juegos en línea.</span>",
                                "customBlacklist": "Filtro personalizado:<br><span>Define palabras o patrones que no quieres ver.<br>Separa las entradas con comas (ejemplo: YouTube, Facebook, pizza); deja el campo vacío para desactivar este filtro.</span>",
                                "customBlacklistTitle": "Separa las entradas del filtro con comas.",
                                "hiddenList": "Scripts ocultos:<br><span>Oculta scripts individuales mediante sus ID únicos.<br>Separa los ID con comas.</span>",
                                "hiddenListTitle": "Separa los ID con comas.",
                                "hideRecentUsersWithin": "Ocultar usuarios recientes:<br><span>Oculta usuarios registrados durante las últimas N horas para reducir los comentarios de cuentas de spam.</span>",
                                "hideRecentUsersWithinTitle": "Solo números. 0 desactiva esta opción. Máximo: 168. Valor recomendado: 48.",
                                "logging": "Registro",
                                "debugging": "Depuración"
                        },
                        "themeOptions": {
                                "auto": "Automático",
                                "light": "Claro",
                                "dark": "Oscuro"
                        },
                        "buttons": {
                                "save": "Guardar",
                                "saveTitle": "Guardar configuración",
                                "close": "Cerrar",
                                "closeTitle": "Cerrar ventana",
                                "reset": "Restablecer valores predeterminados",
                                "resetTitle": "Restablecer los valores predeterminados de los campos"
                        },
                        "menu": {
                                "configure": "Configurar",
                                "resetEverything": "Restablecer todo",
                                "resetConfirm": "¿Restablecer toda la configuración de Greasy Fork++ a sus valores predeterminados? Esta acción no se puede deshacer."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Instalar {version}",
                                "reinstall": "Reinstalar {version}",
                                "update": "Actualizar a {version}",
                                "downgrade": "Volver a {version}",
                                "checking": "Comprobando estado…",
                                "unavailable": "Estado no disponible"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Scripts filtrados ({count})",
                                "hidden": "Scripts ocultos ({count})"
                        },
                        "actions": {
                                "copyUrl": "Copiar URL",
                                "reportComment": "Denunciar comentario"
                        },
                        "messages": {
                                "copyFailed": "No se pudo copiar.",
                                "textLength": "Longitud del texto: {current} / {max}",
                                "invalidRegex": "Expresión regular no válida ignorada: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "no latino",
                                "blacklist": "filtro predefinido",
                                "customBlacklist": "filtro personalizado",
                                "hidden": "oculto"
                        }
                }
        },
        "fr": {
                "hide": "❌ Masquer ce script",
                "notHide": "✔️ Afficher ce script",
                "milestone": "Félicitations ! Vos scripts ont atteint $1 installations au total.",
                "settings": {
                        "title": "Paramètres",
                        "sections": {
                                "appearance": "Apparence",
                                "features": "Fonctionnalités",
                                "lists": "Filtres",
                                "developerOptions": "Options développeur"
                        },
                        "fields": {
                                "theme": "Thème :<br><span>Choisissez Automatique, Clair ou Sombre. Automatique suit l’apparence du site et utilise les préférences du système en dernier recours.</span>",
                                "hideBlacklistedScripts": "Masquer les scripts filtrés :<br><span>Masque les scripts correspondant aux filtres actifs ci-dessous. Appuyez sur <b>Ctrl + Alt + B</b> pour les afficher temporairement.</span>",
                                "hideHiddenScript": "Masquer les scripts :<br><span>Ajoute un bouton permettant de masquer les scripts.<br>Consultez et modifiez ci-dessous la liste des scripts masqués. Appuyez sur <b>Ctrl + Alt + H</b> pour les afficher.</span>",
                                "showInstallButton": "Bouton d’installation :<br><span>Ajoute à la liste des scripts un bouton permettant d’installer directement un script.</span>",
                                "showTotalInstalls": "Installations :<br><span>Affiche le nombre d’installations quotidiennes et totales sur le profil de l’utilisateur.</span>",
                                "milestoneNotification": "Notifications de paliers :<br><span>Recevez une notification lorsque le nombre total d’installations atteint l’un de ces paliers.<br>Séparez les paliers par des virgules ; laissez le champ vide pour désactiver les notifications.</span>",
                                "milestoneNotificationTitle": "Séparez les paliers par des virgules.",
                                "nonLatins": "Caractères non latins :<br><span>Filtre les scripts dont le titre ou la description contient des caractères non latins.</span>",
                                "blacklist": "Filtre prédéfini :<br><span>Filtre les scripts contenant des termes indésirables prédéfinis dans le titre ou la description, notamment des références aux bots, aux triches et à certains jeux en ligne.</span>",
                                "customBlacklist": "Filtre personnalisé :<br><span>Définissez les mots ou motifs que vous ne souhaitez pas voir.<br>Séparez les entrées par des virgules (exemple : YouTube, Facebook, pizza) ; laissez le champ vide pour désactiver ce filtre.</span>",
                                "customBlacklistTitle": "Séparez les entrées du filtre par des virgules.",
                                "hiddenList": "Scripts masqués :<br><span>Masque individuellement les scripts à l’aide de leurs identifiants uniques.<br>Séparez les identifiants par des virgules.</span>",
                                "hiddenListTitle": "Séparez les identifiants par des virgules.",
                                "hideRecentUsersWithin": "Masquer les utilisateurs récents :<br><span>Masque les utilisateurs inscrits au cours des N dernières heures afin de réduire les commentaires provenant de comptes de spam.</span>",
                                "hideRecentUsersWithinTitle": "Nombres uniquement. 0 désactive cette option. Maximum : 168. Valeur recommandée : 48.",
                                "logging": "Journalisation",
                                "debugging": "Débogage"
                        },
                        "themeOptions": {
                                "auto": "Automatique",
                                "light": "Clair",
                                "dark": "Sombre"
                        },
                        "buttons": {
                                "save": "Enregistrer",
                                "saveTitle": "Enregistrer les paramètres",
                                "close": "Fermer",
                                "closeTitle": "Fermer la fenêtre",
                                "reset": "Rétablir les valeurs par défaut",
                                "resetTitle": "Rétablir les valeurs par défaut des champs"
                        },
                        "menu": {
                                "configure": "Configurer",
                                "resetEverything": "Tout réinitialiser",
                                "resetConfirm": "Rétablir tous les paramètres de Greasy Fork++ à leurs valeurs par défaut ? Cette action est irréversible."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Installer {version}",
                                "reinstall": "Réinstaller {version}",
                                "update": "Mettre à jour vers {version}",
                                "downgrade": "Revenir à {version}",
                                "checking": "Vérification de l’état…",
                                "unavailable": "État indisponible"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Scripts filtrés ({count})",
                                "hidden": "Scripts masqués ({count})"
                        },
                        "actions": {
                                "copyUrl": "Copier l’URL",
                                "reportComment": "Signaler le commentaire"
                        },
                        "messages": {
                                "copyFailed": "Impossible de copier.",
                                "textLength": "Longueur du texte : {current} / {max}",
                                "invalidRegex": "Expression régulière non valide ignorée : {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "non latin",
                                "blacklist": "filtre prédéfini",
                                "customBlacklist": "filtre personnalisé",
                                "hidden": "masqué"
                        }
                }
        },
        "it": {
                "hide": "❌ Nascondi questo script",
                "notHide": "✔️ Mostra questo script",
                "milestone": "Congratulazioni! I tuoi script hanno raggiunto $1 installazioni totali.",
                "settings": {
                        "title": "Impostazioni",
                        "sections": {
                                "appearance": "Aspetto",
                                "features": "Funzionalità",
                                "lists": "Filtri",
                                "developerOptions": "Opzioni sviluppatore"
                        },
                        "fields": {
                                "theme": "Tema:<br><span>Scegli Automatico, Chiaro o Scuro. Automatico segue l’aspetto del sito e usa la preferenza di sistema come alternativa.</span>",
                                "hideBlacklistedScripts": "Nascondi script filtrati:<br><span>Nasconde gli script che corrispondono ai filtri attivi qui sotto. Premi <b>Ctrl + Alt + B</b> per mostrarli temporaneamente.</span>",
                                "hideHiddenScript": "Nascondi script:<br><span>Aggiunge un pulsante per nascondere gli script.<br>Visualizza e modifica qui sotto l’elenco degli script nascosti. Premi <b>Ctrl + Alt + H</b> per mostrarli.</span>",
                                "showInstallButton": "Pulsante di installazione:<br><span>Aggiunge all’elenco degli script un pulsante per installare direttamente uno script.</span>",
                                "showTotalInstalls": "Installazioni:<br><span>Mostra il numero di installazioni giornaliere e totali nel profilo utente.</span>",
                                "milestoneNotification": "Notifiche dei traguardi:<br><span>Ricevi una notifica quando il numero totale di installazioni raggiunge uno di questi traguardi.<br>Separa i traguardi con virgole; lascia il campo vuoto per disattivare le notifiche.</span>",
                                "milestoneNotificationTitle": "Separa i traguardi con virgole.",
                                "nonLatins": "Caratteri non latini:<br><span>Filtra gli script il cui titolo o descrizione contiene caratteri non latini.</span>",
                                "blacklist": "Filtro predefinito:<br><span>Filtra gli script che contengono termini indesiderati predefiniti nel titolo o nella descrizione, inclusi riferimenti a bot, cheat e alcuni giochi online.</span>",
                                "customBlacklist": "Filtro personalizzato:<br><span>Definisci parole o modelli che non vuoi vedere.<br>Separa le voci con virgole (esempio: YouTube, Facebook, pizza); lascia il campo vuoto per disattivare questo filtro.</span>",
                                "customBlacklistTitle": "Separa le voci del filtro con virgole.",
                                "hiddenList": "Script nascosti:<br><span>Nasconde singoli script tramite i rispettivi ID univoci.<br>Separa gli ID con virgole.</span>",
                                "hiddenListTitle": "Separa gli ID con virgole.",
                                "hideRecentUsersWithin": "Nascondi utenti recenti:<br><span>Nasconde gli utenti registrati nelle ultime N ore per ridurre i commenti provenienti da account spam.</span>",
                                "hideRecentUsersWithinTitle": "Solo numeri. 0 disattiva questa opzione. Massimo: 168. Valore consigliato: 48.",
                                "logging": "Registrazione",
                                "debugging": "Debug"
                        },
                        "themeOptions": {
                                "auto": "Automatico",
                                "light": "Chiaro",
                                "dark": "Scuro"
                        },
                        "buttons": {
                                "save": "Salva",
                                "saveTitle": "Salva impostazioni",
                                "close": "Chiudi",
                                "closeTitle": "Chiudi finestra",
                                "reset": "Ripristina valori predefiniti",
                                "resetTitle": "Ripristina i valori predefiniti dei campi"
                        },
                        "menu": {
                                "configure": "Configura",
                                "resetEverything": "Ripristina tutto",
                                "resetConfirm": "Ripristinare tutte le impostazioni di Greasy Fork++ ai valori predefiniti? Questa azione non può essere annullata."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Installa {version}",
                                "reinstall": "Reinstalla {version}",
                                "update": "Aggiorna a {version}",
                                "downgrade": "Ripristina a {version}",
                                "checking": "Verifica dello stato…",
                                "unavailable": "Stato non disponibile"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Script filtrati ({count})",
                                "hidden": "Script nascosti ({count})"
                        },
                        "actions": {
                                "copyUrl": "Copia URL",
                                "reportComment": "Segnala commento"
                        },
                        "messages": {
                                "copyFailed": "Impossibile copiare.",
                                "textLength": "Lunghezza del testo: {current} / {max}",
                                "invalidRegex": "Espressione regolare non valida ignorata: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "non latino",
                                "blacklist": "filtro predefinito",
                                "customBlacklist": "filtro personalizzato",
                                "hidden": "nascosto"
                        }
                }
        },
        "pt-PT": {
                "hide": "❌ Ocultar este script",
                "notHide": "✔️ Mostrar este script",
                "milestone": "Parabéns! Os teus scripts atingiram $1 instalações no total.",
                "settings": {
                        "title": "Definições",
                        "sections": {
                                "appearance": "Aspeto",
                                "features": "Funcionalidades",
                                "lists": "Filtros",
                                "developerOptions": "Opções de programador"
                        },
                        "fields": {
                                "theme": "Tema:<br><span>Escolhe Automático, Claro ou Escuro. Automático acompanha o tema do site e, se necessário, usa a preferência do sistema.</span>",
                                "hideBlacklistedScripts": "Ocultar scripts filtrados:<br><span>Oculta os scripts que correspondem aos filtros ativos abaixo. Prime <b>Ctrl + Alt + B</b> para os mostrar temporariamente.</span>",
                                "hideHiddenScript": "Ocultar scripts:<br><span>Adiciona um botão para ocultar scripts.<br>Consulta e edita abaixo a lista de scripts ocultos. Prime <b>Ctrl + Alt + H</b> para os mostrar.</span>",
                                "showInstallButton": "Botão Instalar:<br><span>Adiciona à lista de scripts um botão para instalar diretamente cada script.</span>",
                                "showTotalInstalls": "Instalações:<br><span>Mostra o número de instalações diárias e totais no perfil do utilizador.</span>",
                                "milestoneNotification": "Notificações de marcos:<br><span>Recebe uma notificação quando o total de instalações atingir um destes marcos.<br>Separa os marcos por vírgulas; deixa o campo vazio para desativar as notificações.</span>",
                                "milestoneNotificationTitle": "Separa os marcos por vírgulas.",
                                "nonLatins": "Caracteres não latinos:<br><span>Filtra scripts cujo título ou descrição contenha caracteres não latinos.</span>",
                                "blacklist": "Filtro predefinido:<br><span>Filtra scripts com termos indesejados predefinidos no título ou na descrição, incluindo referências a bots, cheats e alguns jogos online.</span>",
                                "customBlacklist": "Filtro personalizado:<br><span>Define palavras ou padrões que não queres ver.<br>Separa as entradas por vírgulas (ex.: YouTube, Facebook, pizza); deixa o campo vazio para desativar este filtro.</span>",
                                "customBlacklistTitle": "Separa as entradas do filtro por vírgulas.",
                                "hiddenList": "Scripts ocultos:<br><span>Oculta scripts individuais através dos respetivos IDs únicos.<br>Separa os IDs por vírgulas.</span>",
                                "hiddenListTitle": "Separa os IDs por vírgulas.",
                                "hideRecentUsersWithin": "Ocultar utilizadores recentes:<br><span>Oculta utilizadores registados nas últimas N horas para reduzir comentários de contas de spam.</span>",
                                "hideRecentUsersWithinTitle": "Apenas números. 0 desativa esta opção. Máximo: 168. Valor sugerido: 48.",
                                "logging": "Registo",
                                "debugging": "Depuração"
                        },
                        "themeOptions": {
                                "auto": "Automático",
                                "light": "Claro",
                                "dark": "Escuro"
                        },
                        "buttons": {
                                "save": "Guardar",
                                "saveTitle": "Guardar definições",
                                "close": "Fechar",
                                "closeTitle": "Fechar janela",
                                "reset": "Repor predefinições",
                                "resetTitle": "Repor os valores predefinidos dos campos"
                        },
                        "menu": {
                                "configure": "Configurar",
                                "resetEverything": "Repor tudo",
                                "resetConfirm": "Repor todas as definições do Greasy Fork++ para as predefinições? Esta ação não pode ser anulada."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Instalar {version}",
                                "reinstall": "Reinstalar {version}",
                                "update": "Atualizar para {version}",
                                "downgrade": "Retroceder para {version}",
                                "checking": "A verificar o estado…",
                                "unavailable": "Estado indisponível"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Scripts filtrados ({count})",
                                "hidden": "Scripts ocultos ({count})"
                        },
                        "actions": {
                                "copyUrl": "Copiar URL",
                                "reportComment": "Denunciar comentário"
                        },
                        "messages": {
                                "copyFailed": "Não foi possível copiar.",
                                "textLength": "Comprimento do texto: {current} / {max}",
                                "invalidRegex": "Expressão regular inválida ignorada: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "não latino",
                                "blacklist": "filtro predefinido",
                                "customBlacklist": "filtro personalizado",
                                "hidden": "oculto"
                        }
                }
        },
        "pt-BR": {
                "hide": "❌ Ocultar este script",
                "notHide": "✔️ Mostrar este script",
                "milestone": "Parabéns! Seus scripts atingiram $1 instalações no total.",
                "settings": {
                        "title": "Configurações",
                        "sections": {
                                "appearance": "Aparência",
                                "features": "Recursos",
                                "lists": "Filtros",
                                "developerOptions": "Opções de desenvolvedor"
                        },
                        "fields": {
                                "theme": "Tema:<br><span>Escolha Automático, Claro ou Escuro. Automático acompanha o tema do site e, se necessário, usa a preferência do sistema.</span>",
                                "hideBlacklistedScripts": "Ocultar scripts filtrados:<br><span>Oculta os scripts que correspondem aos filtros ativos abaixo. Pressione <b>Ctrl + Alt + B</b> para mostrá-los temporariamente.</span>",
                                "hideHiddenScript": "Ocultar scripts:<br><span>Adicione um botão para ocultar scripts.<br>Veja e edite abaixo a lista de scripts ocultos. Pressione <b>Ctrl + Alt + H</b> para mostrá-los.</span>",
                                "showInstallButton": "Botão Instalar:<br><span>Adicione à lista de scripts um botão para instalar diretamente cada script.</span>",
                                "showTotalInstalls": "Instalações:<br><span>Mostra o número de instalações diárias e totais no perfil do usuário.</span>",
                                "milestoneNotification": "Notificações de marcos:<br><span>Receba uma notificação quando o total de instalações atingir um destes marcos.<br>Separe os marcos por vírgulas; deixe o campo vazio para desativar as notificações.</span>",
                                "milestoneNotificationTitle": "Separe os marcos por vírgulas.",
                                "nonLatins": "Caracteres não latinos:<br><span>Filtra scripts cujo título ou descrição contenha caracteres não latinos.</span>",
                                "blacklist": "Filtro predefinido:<br><span>Filtra scripts com termos indesejados predefinidos no título ou na descrição, incluindo referências a bots, cheats e alguns jogos online.</span>",
                                "customBlacklist": "Filtro personalizado:<br><span>Defina palavras ou padrões que você não quer ver.<br>Separe as entradas por vírgulas (ex.: YouTube, Facebook, pizza); deixe o campo vazio para desativar este filtro.</span>",
                                "customBlacklistTitle": "Separe as entradas do filtro por vírgulas.",
                                "hiddenList": "Scripts ocultos:<br><span>Oculta scripts individuais por meio de seus IDs exclusivos.<br>Separe os IDs por vírgulas.</span>",
                                "hiddenListTitle": "Separe os IDs por vírgulas.",
                                "hideRecentUsersWithin": "Ocultar usuários recentes:<br><span>Oculta usuários registrados nas últimas N horas para reduzir comentários de contas de spam.</span>",
                                "hideRecentUsersWithinTitle": "Somente números. 0 desativa esta opção. Máximo: 168. Valor sugerido: 48.",
                                "logging": "Registro",
                                "debugging": "Depuração"
                        },
                        "themeOptions": {
                                "auto": "Automático",
                                "light": "Claro",
                                "dark": "Escuro"
                        },
                        "buttons": {
                                "save": "Salvar",
                                "saveTitle": "Salvar configurações",
                                "close": "Fechar",
                                "closeTitle": "Fechar janela",
                                "reset": "Restaurar padrões",
                                "resetTitle": "Restaurar os valores padrão dos campos"
                        },
                        "menu": {
                                "configure": "Configurar",
                                "resetEverything": "Restaurar tudo",
                                "resetConfirm": "Restaurar todas as configurações do Greasy Fork++ para os padrões? Esta ação não pode ser desfeita."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Instalar {version}",
                                "reinstall": "Reinstalar {version}",
                                "update": "Atualizar para {version}",
                                "downgrade": "Rebaixar para {version}",
                                "checking": "Verificando status…",
                                "unavailable": "Status indisponível"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Scripts filtrados ({count})",
                                "hidden": "Scripts ocultos ({count})"
                        },
                        "actions": {
                                "copyUrl": "Copiar URL",
                                "reportComment": "Denunciar comentário"
                        },
                        "messages": {
                                "copyFailed": "Não foi possível copiar.",
                                "textLength": "Comprimento do texto: {current} / {max}",
                                "invalidRegex": "Expressão regular inválida ignorada: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "não latino",
                                "blacklist": "filtro predefinido",
                                "customBlacklist": "filtro personalizado",
                                "hidden": "oculto"
                        }
                }
        },
        "ru": {
                "hide": "❌ Скрыть этот скрипт",
                "notHide": "✔️ Показать этот скрипт",
                "milestone": "Поздравляем! Ваши скрипты достигли отметки в $1 установок.",
                "settings": {
                        "title": "Настройки",
                        "sections": {
                                "appearance": "Внешний вид",
                                "features": "Функции",
                                "lists": "Фильтры",
                                "developerOptions": "Параметры разработчика"
                        },
                        "fields": {
                                "theme": "Тема:<br><span>Выберите Авто, Светлую или Тёмную тему. Авто следует оформлению сайта, а при необходимости — системным настройкам.</span>",
                                "hideBlacklistedScripts": "Скрывать отфильтрованные скрипты:<br><span>Скрывает скрипты, соответствующие активным фильтрам ниже. Нажмите <b>Ctrl + Alt + B</b>, чтобы временно показать их.</span>",
                                "hideHiddenScript": "Скрывать скрипты:<br><span>Добавляет кнопку для скрытия скриптов.<br>Ниже можно просмотреть и изменить список скрытых скриптов. Нажмите <b>Ctrl + Alt + H</b>, чтобы показать их.</span>",
                                "showInstallButton": "Кнопка установки:<br><span>Добавляет в список скриптов кнопку для их непосредственной установки.</span>",
                                "showTotalInstalls": "Установки:<br><span>Показывает количество установок за день и общее количество установок в профиле пользователя.</span>",
                                "milestoneNotification": "Уведомления о рубежах:<br><span>Уведомляет, когда общее число установок достигает одного из указанных рубежей.<br>Разделяйте значения запятыми; оставьте поле пустым, чтобы отключить уведомления.</span>",
                                "milestoneNotificationTitle": "Разделяйте значения запятыми.",
                                "nonLatins": "Нелатинские символы:<br><span>Фильтрует скрипты, в названии или описании которых есть нелатинские символы.</span>",
                                "blacklist": "Предустановленный фильтр:<br><span>Фильтрует скрипты с заранее заданными нежелательными терминами в названии или описании, включая упоминания ботов, читов и некоторых онлайн-игр.</span>",
                                "customBlacklist": "Пользовательский фильтр:<br><span>Задайте слова или шаблоны, которые вы не хотите видеть.<br>Разделяйте записи запятыми (например: YouTube, Facebook, pizza); оставьте поле пустым, чтобы отключить этот фильтр.</span>",
                                "customBlacklistTitle": "Разделяйте записи фильтра запятыми.",
                                "hiddenList": "Скрытые скрипты:<br><span>Скрывает отдельные скрипты по их уникальным ID.<br>Разделяйте ID запятыми.</span>",
                                "hiddenListTitle": "Разделяйте ID запятыми.",
                                "hideRecentUsersWithin": "Скрывать новых пользователей:<br><span>Скрывает пользователей, зарегистрированных за последние N часов, чтобы уменьшить число комментариев от спам-аккаунтов.</span>",
                                "hideRecentUsersWithinTitle": "Только числа. 0 отключает эту опцию. Максимум: 168. Рекомендуемое значение: 48.",
                                "logging": "Журналирование",
                                "debugging": "Отладка"
                        },
                        "themeOptions": {
                                "auto": "Авто",
                                "light": "Светлая",
                                "dark": "Тёмная"
                        },
                        "buttons": {
                                "save": "Сохранить",
                                "saveTitle": "Сохранить настройки",
                                "close": "Закрыть",
                                "closeTitle": "Закрыть окно",
                                "reset": "Восстановить значения по умолчанию",
                                "resetTitle": "Восстановить значения полей по умолчанию"
                        },
                        "menu": {
                                "configure": "Настроить",
                                "resetEverything": "Сбросить всё",
                                "resetConfirm": "Сбросить все настройки Greasy Fork++ до значений по умолчанию? Это действие нельзя отменить."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "Установить {version}",
                                "reinstall": "Переустановить {version}",
                                "update": "Обновить до {version}",
                                "downgrade": "Откатить до {version}",
                                "checking": "Проверка статуса…",
                                "unavailable": "Статус недоступен"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "Отфильтрованные скрипты ({count})",
                                "hidden": "Скрытые скрипты ({count})"
                        },
                        "actions": {
                                "copyUrl": "Копировать URL",
                                "reportComment": "Пожаловаться на комментарий"
                        },
                        "messages": {
                                "copyFailed": "Не удалось скопировать.",
                                "textLength": "Длина текста: {current} / {max}",
                                "invalidRegex": "Некорректное регулярное выражение проигнорировано: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "нелатинский",
                                "blacklist": "предустановленный фильтр",
                                "customBlacklist": "пользовательский фильтр",
                                "hidden": "скрыт"
                        }
                }
        },
        "zh-CN": {
                "hide": "❌ 隐藏此脚本",
                "notHide": "✔️ 显示此脚本",
                "milestone": "恭喜！您的脚本总安装次数已达到 $1 次！",
                "settings": {
                        "title": "设置",
                        "sections": {
                                "appearance": "外观",
                                "features": "功能",
                                "lists": "筛选器",
                                "developerOptions": "开发者选项"
                        },
                        "fields": {
                                "theme": "主题：<br><span>选择自动、浅色或深色。自动模式会跟随网站外观，并在需要时使用系统偏好。</span>",
                                "hideBlacklistedScripts": "隐藏已筛选脚本：<br><span>隐藏匹配下方已启用筛选器的脚本。按 <b>Ctrl + Alt + B</b> 可临时显示它们。</span>",
                                "hideHiddenScript": "隐藏脚本：<br><span>添加用于隐藏脚本的按钮。<br>可在下方查看和编辑已隐藏脚本列表。按 <b>Ctrl + Alt + H</b> 显示它们。</span>",
                                "showInstallButton": "安装按钮：<br><span>在脚本列表中添加可直接安装脚本的按钮。</span>",
                                "showTotalInstalls": "安装量：<br><span>在用户资料中显示每日安装量和总安装量。</span>",
                                "milestoneNotification": "里程碑通知：<br><span>当总安装次数达到以下任一里程碑时通知你。<br>使用逗号分隔里程碑；留空可禁用通知。</span>",
                                "milestoneNotificationTitle": "使用逗号分隔里程碑。",
                                "nonLatins": "非拉丁字符：<br><span>筛选标题或说明中包含非拉丁字符的脚本。</span>",
                                "blacklist": "预设筛选器：<br><span>筛选标题或说明中包含预设不需要词语的脚本，包括与机器人、作弊和部分网络游戏相关的词语。</span>",
                                "customBlacklist": "自定义筛选器：<br><span>定义你不想看到的词语或模式。<br>使用逗号分隔条目（例如：YouTube、Facebook、pizza）；留空可禁用此筛选器。</span>",
                                "customBlacklistTitle": "使用逗号分隔筛选条目。",
                                "hiddenList": "已隐藏脚本：<br><span>通过唯一 ID 隐藏单个脚本。<br>使用逗号分隔 ID。</span>",
                                "hiddenListTitle": "使用逗号分隔 ID。",
                                "hideRecentUsersWithin": "隐藏近期注册用户：<br><span>隐藏最近 N 小时内注册的用户，以减少垃圾账号评论。</span>",
                                "hideRecentUsersWithinTitle": "仅限数字。0 表示关闭。最大值：168。建议值：48。",
                                "logging": "日志记录",
                                "debugging": "调试"
                        },
                        "themeOptions": {
                                "auto": "自动",
                                "light": "浅色",
                                "dark": "深色"
                        },
                        "buttons": {
                                "save": "保存",
                                "saveTitle": "保存设置",
                                "close": "关闭",
                                "closeTitle": "关闭窗口",
                                "reset": "恢复默认设置",
                                "resetTitle": "将字段恢复为默认值"
                        },
                        "menu": {
                                "configure": "配置",
                                "resetEverything": "全部重置",
                                "resetConfirm": "将 Greasy Fork++ 的所有设置恢复为默认值？此操作无法撤销。"
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "安装 {version}",
                                "reinstall": "重新安装 {version}",
                                "update": "更新到 {version}",
                                "downgrade": "降级到 {version}",
                                "checking": "正在检查状态…",
                                "unavailable": "状态不可用"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "已筛选脚本（{count}）",
                                "hidden": "已隐藏脚本（{count}）"
                        },
                        "actions": {
                                "copyUrl": "复制 URL",
                                "reportComment": "举报评论"
                        },
                        "messages": {
                                "copyFailed": "无法复制。",
                                "textLength": "文本长度：{current} / {max}",
                                "invalidRegex": "已忽略无效的正则表达式：{pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "非拉丁字符",
                                "blacklist": "预设筛选器",
                                "customBlacklist": "自定义筛选器",
                                "hidden": "已隐藏"
                        }
                }
        },
        "zh-TW": {
                "hide": "❌ 隱藏此腳本",
                "notHide": "✔️ 顯示此腳本",
                "milestone": "恭喜！您的腳本總安裝次數已達到 $1 次！",
                "settings": {
                        "title": "設定",
                        "sections": {
                                "appearance": "外觀",
                                "features": "功能",
                                "lists": "篩選器",
                                "developerOptions": "開發者選項"
                        },
                        "fields": {
                                "theme": "主題：<br><span>選擇自動、淺色或深色。自動模式會跟隨網站外觀，並在需要時使用系統偏好。</span>",
                                "hideBlacklistedScripts": "隱藏已篩選腳本：<br><span>隱藏符合下方已啟用篩選器的腳本。按 <b>Ctrl + Alt + B</b> 可暫時顯示它們。</span>",
                                "hideHiddenScript": "隱藏腳本：<br><span>加入用來隱藏腳本的按鈕。<br>可在下方查看及編輯已隱藏腳本清單。按 <b>Ctrl + Alt + H</b> 顯示它們。</span>",
                                "showInstallButton": "安裝按鈕：<br><span>在腳本清單中加入可直接安裝腳本的按鈕。</span>",
                                "showTotalInstalls": "安裝次數：<br><span>在使用者個人資料中顯示每日及總安裝次數。</span>",
                                "milestoneNotification": "里程碑通知：<br><span>當總安裝次數達到以下任一里程碑時通知你。<br>使用逗號分隔里程碑；留空可停用通知。</span>",
                                "milestoneNotificationTitle": "以逗號分隔里程碑。",
                                "nonLatins": "非拉丁字元：<br><span>篩選標題或說明中包含非拉丁字元的腳本。</span>",
                                "blacklist": "預設篩選器：<br><span>篩選標題或說明中包含預設不需要詞語的腳本，包括與機器人、作弊和部分線上遊戲相關的詞語。</span>",
                                "customBlacklist": "自訂篩選器：<br><span>定義你不想看到的詞語或模式。<br>使用逗號分隔項目（例如：YouTube、Facebook、pizza）；留空可停用此篩選器。</span>",
                                "customBlacklistTitle": "使用逗號分隔篩選項目。",
                                "hiddenList": "已隱藏腳本：<br><span>透過唯一 ID 隱藏個別腳本。<br>使用逗號分隔 ID。</span>",
                                "hiddenListTitle": "以逗號分隔 ID。",
                                "hideRecentUsersWithin": "隱藏近期註冊使用者：<br><span>隱藏最近 N 小時內註冊的使用者，以減少垃圾帳號留言。</span>",
                                "hideRecentUsersWithinTitle": "僅限數字。0 表示停用。最大值：168。建議值：48。",
                                "logging": "記錄",
                                "debugging": "偵錯"
                        },
                        "themeOptions": {
                                "auto": "自動",
                                "light": "淺色",
                                "dark": "深色"
                        },
                        "buttons": {
                                "save": "儲存",
                                "saveTitle": "儲存設定",
                                "close": "關閉",
                                "closeTitle": "關閉視窗",
                                "reset": "還原預設值",
                                "resetTitle": "將欄位還原為預設值"
                        },
                        "menu": {
                                "configure": "設定",
                                "resetEverything": "全部重設",
                                "resetConfirm": "將 Greasy Fork++ 的所有設定還原為預設值？此操作無法復原。"
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "安裝 {version}",
                                "reinstall": "重新安裝 {version}",
                                "update": "更新至 {version}",
                                "downgrade": "降級至 {version}",
                                "checking": "正在檢查狀態…",
                                "unavailable": "狀態無法取得"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "已篩選腳本（{count}）",
                                "hidden": "已隱藏腳本（{count}）"
                        },
                        "actions": {
                                "copyUrl": "複製 URL",
                                "reportComment": "檢舉留言"
                        },
                        "messages": {
                                "copyFailed": "無法複製。",
                                "textLength": "文字長度：{current} / {max}",
                                "invalidRegex": "已忽略無效的規則運算式：{pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "非拉丁字元",
                                "blacklist": "預設篩選器",
                                "customBlacklist": "自訂篩選器",
                                "hidden": "已隱藏"
                        }
                }
        },
        "ja": {
                "hide": "❌ このスクリプトを非表示",
                "notHide": "✔️ このスクリプトを表示",
                "milestone": "おめでとうございます！スクリプトの合計インストール数が $1 回に達しました！",
                "settings": {
                        "title": "設定",
                        "sections": {
                                "appearance": "外観",
                                "features": "機能",
                                "lists": "フィルター",
                                "developerOptions": "開発者向けオプション"
                        },
                        "fields": {
                                "theme": "テーマ：<br><span>自動、ライト、ダークから選択します。自動はサイトの表示に合わせ、必要に応じてシステム設定を使用します。</span>",
                                "hideBlacklistedScripts": "フィルターされたスクリプトを非表示：<br><span>下で有効にしたフィルターに一致するスクリプトを非表示にします。<b>Ctrl + Alt + B</b> で一時的に表示できます。</span>",
                                "hideHiddenScript": "スクリプトを非表示：<br><span>スクリプトを非表示にするボタンを追加します。<br>下で非表示にしたスクリプトの一覧を確認・編集できます。<b>Ctrl + Alt + H</b> を押すと表示できます。</span>",
                                "showInstallButton": "インストールボタン：<br><span>スクリプト一覧に、スクリプトを直接インストールするためのボタンを追加します。</span>",
                                "showTotalInstalls": "インストール数：<br><span>ユーザープロフィールに1日あたりのインストール数と合計インストール数を表示します。</span>",
                                "milestoneNotification": "マイルストーン通知：<br><span>合計インストール数が次のマイルストーンのいずれかに到達したときに通知します。<br>マイルストーンはカンマで区切り、通知を無効にする場合は空欄にします。</span>",
                                "milestoneNotificationTitle": "マイルストーンをカンマで区切ってください。",
                                "nonLatins": "非ラテン文字：<br><span>タイトルまたは説明に非ラテン文字を含むスクリプトをフィルターします。</span>",
                                "blacklist": "組み込みフィルター：<br><span>タイトルまたは説明に、ボット、チート、一部のオンラインゲームなどの事前定義された不要な語句を含むスクリプトをフィルターします。</span>",
                                "customBlacklist": "カスタムフィルター：<br><span>表示したくない単語やパターンを指定します。<br>項目はカンマで区切ります（例：YouTube, Facebook, pizza）。空欄にするとこのフィルターを無効にします。</span>",
                                "customBlacklistTitle": "フィルター項目をカンマで区切ります。",
                                "hiddenList": "非表示のスクリプト：<br><span>一意の ID を使って個別のスクリプトを非表示にします。<br>ID はカンマで区切ります。</span>",
                                "hiddenListTitle": "ID をカンマで区切ってください。",
                                "hideRecentUsersWithin": "最近登録したユーザーを非表示：<br><span>過去 N 時間以内に登録したユーザーを非表示にし、スパムアカウントからのコメントを減らします。</span>",
                                "hideRecentUsersWithinTitle": "数字のみ。0 で無効になります。最大値：168。推奨値：48。",
                                "logging": "ログ記録",
                                "debugging": "デバッグ"
                        },
                        "themeOptions": {
                                "auto": "自動",
                                "light": "ライト",
                                "dark": "ダーク"
                        },
                        "buttons": {
                                "save": "保存",
                                "saveTitle": "設定を保存",
                                "close": "閉じる",
                                "closeTitle": "ウィンドウを閉じる",
                                "reset": "既定値に戻す",
                                "resetTitle": "各項目を既定値に戻す"
                        },
                        "menu": {
                                "configure": "設定",
                                "resetEverything": "すべてリセット",
                                "resetConfirm": "Greasy Fork++ のすべての設定を既定値に戻しますか？この操作は元に戻せません。"
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "{version} をインストール",
                                "reinstall": "{version} を再インストール",
                                "update": "{version} に更新",
                                "downgrade": "{version} にダウングレード",
                                "checking": "状態を確認中…",
                                "unavailable": "状態を確認できません"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "フィルターされたスクリプト（{count}）",
                                "hidden": "非表示のスクリプト（{count}）"
                        },
                        "actions": {
                                "copyUrl": "URL をコピー",
                                "reportComment": "コメントを報告"
                        },
                        "messages": {
                                "copyFailed": "コピーできませんでした。",
                                "textLength": "テキストの長さ：{current} / {max}",
                                "invalidRegex": "無効な正規表現を無視しました：{pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "非ラテン文字",
                                "blacklist": "組み込みフィルター",
                                "customBlacklist": "カスタムフィルター",
                                "hidden": "非表示"
                        }
                }
        },
        "ko": {
                "hide": "❌ 이 스크립트 숨기기",
                "notHide": "✔️ 이 스크립트 표시",
                "milestone": "축하합니다! 스크립트의 총 설치 횟수가 $1회를 달성했습니다!",
                "settings": {
                        "title": "설정",
                        "sections": {
                                "appearance": "외관",
                                "features": "기능",
                                "lists": "필터",
                                "developerOptions": "개발자 옵션"
                        },
                        "fields": {
                                "theme": "테마:<br><span>자동, 밝게 또는 어둡게를 선택하세요. 자동은 사이트의 표시를 따르고 필요하면 시스템 설정을 사용합니다.</span>",
                                "hideBlacklistedScripts": "필터링된 스크립트 숨기기:<br><span>아래의 활성 필터와 일치하는 스크립트를 숨깁니다. <b>Ctrl + Alt + B</b>를 누르면 일시적으로 표시할 수 있습니다.</span>",
                                "hideHiddenScript": "스크립트 숨기기:<br><span>스크립트를 숨기는 버튼을 추가합니다.<br>아래에서 숨긴 스크립트 목록을 확인하고 편집할 수 있습니다. 표시하려면 <b>Ctrl + Alt + H</b>를 누르세요.</span>",
                                "showInstallButton": "설치 버튼:<br><span>스크립트 목록에 스크립트를 바로 설치할 수 있는 버튼을 추가합니다.</span>",
                                "showTotalInstalls": "설치 횟수:<br><span>사용자 프로필에 일일 설치 횟수와 총 설치 횟수를 표시합니다.</span>",
                                "milestoneNotification": "마일스톤 알림:<br><span>총 설치 횟수가 다음 마일스톤 중 하나에 도달하면 알림을 받습니다.<br>마일스톤은 쉼표로 구분하고, 알림을 끄려면 비워 두세요.</span>",
                                "milestoneNotificationTitle": "마일스톤을 쉼표로 구분하세요.",
                                "nonLatins": "비라틴 문자:<br><span>제목이나 설명에 비라틴 문자가 포함된 스크립트를 필터링합니다.</span>",
                                "blacklist": "기본 필터:<br><span>제목이나 설명에 봇, 치트, 일부 온라인 게임 등 미리 정의된 원치 않는 용어가 포함된 스크립트를 필터링합니다.</span>",
                                "customBlacklist": "사용자 지정 필터:<br><span>보고 싶지 않은 단어나 패턴을 정의합니다.<br>항목은 쉼표로 구분하세요(예: YouTube, Facebook, pizza). 비워 두면 이 필터를 비활성화합니다.</span>",
                                "customBlacklistTitle": "필터 항목을 쉼표로 구분하세요.",
                                "hiddenList": "숨긴 스크립트:<br><span>고유 ID로 개별 스크립트를 숨깁니다.<br>ID는 쉼표로 구분하세요.</span>",
                                "hiddenListTitle": "ID를 쉼표로 구분하세요.",
                                "hideRecentUsersWithin": "최근 가입 사용자 숨기기:<br><span>최근 N시간 이내에 가입한 사용자를 숨겨 스팸 계정의 댓글을 줄입니다.</span>",
                                "hideRecentUsersWithinTitle": "숫자만 입력하세요. 0은 비활성화입니다. 최대값: 168. 권장값: 48.",
                                "logging": "로그 기록",
                                "debugging": "디버깅"
                        },
                        "themeOptions": {
                                "auto": "자동",
                                "light": "밝게",
                                "dark": "어둡게"
                        },
                        "buttons": {
                                "save": "저장",
                                "saveTitle": "설정 저장",
                                "close": "닫기",
                                "closeTitle": "창 닫기",
                                "reset": "기본값으로 재설정",
                                "resetTitle": "필드를 기본값으로 재설정"
                        },
                        "menu": {
                                "configure": "설정",
                                "resetEverything": "모두 재설정",
                                "resetConfirm": "Greasy Fork++의 모든 설정을 기본값으로 재설정할까요? 이 작업은 되돌릴 수 없습니다."
                        }
                },
                "runtime": {
                        "versionLabels": {
                                "install": "{version} 설치",
                                "reinstall": "{version} 재설치",
                                "update": "{version}(으)로 업데이트",
                                "downgrade": "{version}(으)로 다운그레이드",
                                "checking": "상태 확인 중…",
                                "unavailable": "상태를 확인할 수 없음"
                        },
                        "listPanel": {
                                "title": "{name}",
                                "blacklisted": "필터링된 스크립트 ({count})",
                                "hidden": "숨긴 스크립트 ({count})"
                        },
                        "actions": {
                                "copyUrl": "URL 복사",
                                "reportComment": "댓글 신고"
                        },
                        "messages": {
                                "copyFailed": "복사할 수 없습니다.",
                                "textLength": "텍스트 길이: {current} / {max}",
                                "invalidRegex": "잘못된 정규식을 무시했습니다: {pattern}"
                        },
                        "debugLabels": {
                                "nonLatin": "비라틴 문자",
                                "blacklist": "기본 필터",
                                "customBlacklist": "사용자 지정 필터",
                                "hidden": "숨김"
                        }
                }
        }
};

    const formatMessage = (template, values = {}) => String(template || '').replace(/\{(\w+)\}/g, (_, key) =>
        Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : `{${key}}`
    );

    const normalizeLocaleCode = (language) => {
        const value = String(language || '').trim();
        if (locales[value]) return value;

        const normalized = value.toLowerCase().replace(/_/g, '-');
        const aliases = {
            'pt': 'pt-PT',
            'pt-br': 'pt-BR',
            'pt-pt': 'pt-PT',
            'zh-cn': 'zh-CN',
            'zh-sg': 'zh-CN',
            'zh-hans': 'zh-CN',
            'zh-tw': 'zh-TW',
            'zh-hk': 'zh-TW',
            'zh-mo': 'zh-TW',
            'zh-hant': 'zh-TW'
        };
        const alias = aliases[normalized];
        if (alias && locales[alias]) return alias;

        const baseLanguage = normalized.split('-')[0];
        if (baseLanguage === 'pt') return 'pt-PT';
        return locales[baseLanguage] ? baseLanguage : null;
    };

    const resolveLocaleCode = (pageLanguage = '') =>
        normalizeLocaleCode(pageLanguage) || 'en';

    const getLocale = (language) => locales[normalizeLocaleCode(language) || 'en'];

    const getFields = (locale) => {
        const localizedFields = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, {
            ...value,
            ...(value.section ? { section: [...value.section] } : {})
        }]));
        const ui = (locale && locale.settings) || locales.en.settings;
        const labels = ui.fields;

        localizedFields.theme.label = labels.theme;
        localizedFields.theme.section = [ui.sections.appearance];
        localizedFields.hideBlacklistedScripts.label = labels.hideBlacklistedScripts;
        localizedFields.hideBlacklistedScripts.section = [ui.sections.features];
        localizedFields.hideHiddenScript.label = labels.hideHiddenScript;
        localizedFields.showInstallButton.label = labels.showInstallButton;
        localizedFields.showTotalInstalls.label = labels.showTotalInstalls;
        localizedFields.milestoneNotification.label = labels.milestoneNotification;
        localizedFields.milestoneNotification.title = labels.milestoneNotificationTitle;
        localizedFields.nonLatins.label = labels.nonLatins;
        localizedFields.nonLatins.section = [ui.sections.lists];
        localizedFields.blacklist.label = labels.blacklist;
        localizedFields.customBlacklist.label = labels.customBlacklist;
        localizedFields.customBlacklist.title = labels.customBlacklistTitle;
        localizedFields.hiddenList.label = labels.hiddenList;
        localizedFields.hiddenList.title = labels.hiddenListTitle;
        localizedFields.hideRecentUsersWithin.label = labels.hideRecentUsersWithin;
        localizedFields.hideRecentUsersWithin.title = labels.hideRecentUsersWithinTitle;
        localizedFields.logging.label = labels.logging;
        localizedFields.logging.section = [ui.sections.developerOptions];
        localizedFields.debugging.label = labels.debugging;

        return localizedFields;
    };


    const settingsCSS = `
        :root {
            color-scheme: light;
            --gfpp-accent: #a90000;
            --gfpp-accent-hover: #8b0000;
            --gfpp-bg: #f5f6f8;
            --gfpp-surface: #ffffff;
            --gfpp-surface-muted: #f8f9fb;
            --gfpp-text: #1d232a;
            --gfpp-muted: #667085;
            --gfpp-border: #cfd5dc;
            --gfpp-border-strong: #aeb7c2;
            --gfpp-footer-bg: rgba(245, 246, 248, .96);
            --gfpp-focus: rgba(169, 0, 0, .22);
            --gfpp-shadow: 0 1px 2px rgba(16, 24, 40, .06), 0 0 0 1px rgba(16, 24, 40, .015);
        }

        :root[data-gfpp-theme="dark"] {
            color-scheme: dark;
            --gfpp-accent: #ff6666;
            --gfpp-accent-hover: #ff8585;
            --gfpp-bg: #0f1115;
            --gfpp-surface: #171a21;
            --gfpp-surface-muted: #1d2129;
            --gfpp-text: #f2f4f7;
            --gfpp-muted: #a8b0bd;
            --gfpp-border: #46505f;
            --gfpp-border-strong: #647083;
            --gfpp-footer-bg: rgba(15, 17, 21, .96);
            --gfpp-focus: rgba(255, 102, 102, .24);
            --gfpp-shadow: 0 1px 2px rgba(0, 0, 0, .28), 0 0 0 1px rgba(255, 255, 255, .025);
        }

        @media (prefers-color-scheme: dark) {
            :root:not([data-gfpp-theme="light"]) {
                color-scheme: dark;
                --gfpp-accent: #ff6666;
                --gfpp-accent-hover: #ff8585;
                --gfpp-bg: #0f1115;
                --gfpp-surface: #171a21;
                --gfpp-surface-muted: #1d2129;
                --gfpp-text: #f2f4f7;
                --gfpp-muted: #a8b0bd;
                --gfpp-border: #46505f;
                --gfpp-border-strong: #647083;
                --gfpp-footer-bg: rgba(15, 17, 21, .96);
                --gfpp-focus: rgba(255, 102, 102, .24);
                --gfpp-shadow: 0 1px 2px rgba(0, 0, 0, .28), 0 0 0 1px rgba(255, 255, 255, .025);
            }
        }

        * { box-sizing: border-box; }
        html, body {
            margin: 0;
            min-height: 100%;
            background: var(--gfpp-bg);
            color: var(--gfpp-text);
            font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Segoe UI Emoji", sans-serif;
            font-size: 14px;
            line-height: 1.45;
        }

        body > #greasyfork-plus_wrapper:only-child {
            min-height: 100vh;
            max-height: none;
            overflow: auto;
            padding: 20px 20px 84px;
            background: var(--gfpp-bg);
            border: 0;
            scrollbar-gutter: stable;
        }

        #greasyfork-plus_header[class] {
            margin: 0 0 16px;
            font-size: clamp(20px, 3vw, 26px);
            font-weight: 750;
            letter-spacing: -.02em;
            color: var(--gfpp-text);
        }

        #greasyfork-plus .section_header_holder[class] {
            margin: 20px 0 8px;
            position: static;
        }

        #greasyfork-plus .section_header[class] {
            padding: 0 2px;
            border: 0;
            background: transparent;
            background-image: none;
            color: var(--gfpp-muted);
            font-size: 11px;
            font-weight: 750;
            letter-spacing: .09em;
            text-transform: uppercase;
        }

        #greasyfork-plus .config_var[class] {
            --config-var-display: flex;
            display: var(--config-var-display);
            position: relative;
            gap: 10px;
            align-items: flex-start;
            margin: 8px 0;
            padding: 12px 14px;
            border: 1px solid var(--gfpp-border-strong);
            border-radius: 10px;
            background: var(--gfpp-surface);
            box-shadow: var(--gfpp-shadow);
        }

        #greasyfork-plus .field_label[class] {
            flex: 1;
            min-width: 0;
            margin: 0;
            color: var(--gfpp-text);
            font-weight: 650;
        }

        #greasyfork-plus .field_label[class] span {
            display: block;
            margin-top: 3px;
            color: var(--gfpp-muted);
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.45;
        }

        #greasyfork-plus .field_label[class] b {
            color: var(--gfpp-accent);
            font-weight: 700;
        }

        #greasyfork-plus input[type="checkbox"] {
            width: 17px;
            height: 17px;
            margin-top: 2px;
            accent-color: var(--gfpp-accent);
            cursor: pointer;
        }

        #greasyfork-plus input[type="text"],
        #greasyfork-plus textarea,
        #greasyfork-plus select {
            width: 100%;
            min-height: 36px;
            padding: 8px 10px;
            border: 1px solid var(--gfpp-border);
            border-radius: 7px;
            outline: none;
            background: var(--gfpp-surface-muted);
            color: var(--gfpp-text);
            font: inherit;
            transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
        }

        #greasyfork-plus textarea {
            min-height: 74px;
            max-height: 220px;
            resize: vertical;
        }

        #greasyfork-plus_theme_var[class] {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
        }

        #greasyfork-plus_theme_var[class] .field_label[class] {
            flex: 0 0 auto !important;
            width: 100% !important;
            min-width: 0;
        }

        /* Native GM_config select stays as the source of truth.
           The custom control guarantees rounded corners for the opened menu. */
        #greasyfork-plus_field_theme[class] {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0 0 0 0) !important;
            clip-path: inset(50%) !important;
            white-space: nowrap !important;
            border: 0 !important;
        }

        .gfpp-theme-select {
            position: relative;
            width: min(320px, 100%);
            max-width: 100%;
        }

        .gfpp-theme-select__button {
            width: 100%;
            min-height: 38px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 8px 11px;
            border: 1px solid var(--gfpp-border);
            border-radius: 9px;
            background: var(--gfpp-surface-muted);
            color: var(--gfpp-text);
            font: inherit;
            text-align: left;
            cursor: pointer;
            transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
        }

        .gfpp-theme-select__button:hover {
            border-color: var(--gfpp-border-strong);
            background: var(--gfpp-surface);
        }

        .gfpp-theme-select__button:focus-visible,
        .gfpp-theme-select[data-open="true"] .gfpp-theme-select__button {
            border-color: var(--gfpp-accent);
            box-shadow: 0 0 0 3px var(--gfpp-focus);
            outline: none;
        }

        .gfpp-theme-select__chevron {
            flex: 0 0 auto;
            width: 8px;
            height: 8px;
            border-right: 2px solid currentColor;
            border-bottom: 2px solid currentColor;
            transform: rotate(45deg) translateY(-2px);
            opacity: .72;
            transition: transform .15s ease;
        }

        .gfpp-theme-select[data-open="true"] .gfpp-theme-select__chevron {
            transform: rotate(225deg) translate(-1px, -1px);
        }

        .gfpp-theme-select__menu {
            position: absolute;
            z-index: 20;
            top: calc(100% + 6px);
            left: 0;
            right: 0;
            display: none;
            overflow: hidden;
            padding: 5px;
            border: 1px solid var(--gfpp-border-strong);
            border-radius: 10px;
            background: var(--gfpp-surface);
            box-shadow: 0 12px 32px rgba(0, 0, 0, .22);
        }

        .gfpp-theme-select[data-open="true"] .gfpp-theme-select__menu {
            display: block;
        }

        .gfpp-theme-select__option {
            width: 100%;
            min-height: 34px;
            display: flex;
            align-items: center;
            padding: 7px 9px;
            border: 0;
            border-radius: 7px;
            background: transparent;
            color: var(--gfpp-text);
            font: inherit;
            text-align: left;
            cursor: pointer;
        }

        .gfpp-theme-select__option:hover,
        .gfpp-theme-select__option:focus-visible {
            background: var(--gfpp-surface-muted);
            outline: none;
        }

        .gfpp-theme-select__option[aria-selected="true"] {
            background: var(--gfpp-focus);
            color: var(--gfpp-text);
            font-weight: 650;
        }

        #greasyfork-plus input[type="text"]:focus,
        #greasyfork-plus textarea:focus,
        #greasyfork-plus select:focus,
        #greasyfork-plus button:focus-visible,
        #greasyfork-plus a:focus-visible {
            border-color: var(--gfpp-accent);
            box-shadow: 0 0 0 3px var(--gfpp-focus);
            outline: none;
        }

        #greasyfork-plus_customBlacklist_var[class],
        #greasyfork-plus_hiddenList_var[class],
        #greasyfork-plus_milestoneNotification_var[class],
        #greasyfork-plus_hideRecentUsersWithin_var[class] {
            flex-direction: column;
            margin-left: 0;
        }

        #greasyfork-plus_field_customBlacklist[class],
        #greasyfork-plus_field_hiddenList[class],
        #greasyfork-plus_field_milestoneNotification[class],
        #greasyfork-plus_field_hideRecentUsersWithin[class] {
            width: 100%;
        }

        #greasyfork-plus_logging_var[class],
        #greasyfork-plus_debugging_var[class] {
            --config-var-display: flex;
        }

        #greasyfork-plus_wrapper > #greasyfork-plus_buttons_holder:last-child {
            position: fixed;
            z-index: 10;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            margin: 0;
            padding: 12px 18px;
            border-top: 1px solid var(--gfpp-border);
            background: var(--gfpp-footer-bg);
            -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
        }

        #greasyfork-plus .saveclose_buttons[class] {
            min-height: 36px;
            margin: 0;
            padding: 7px 14px;
            border: 1px solid var(--gfpp-border);
            border-radius: 7px;
            background: var(--gfpp-surface);
            color: var(--gfpp-text);
            font: inherit;
            font-weight: 650;
            cursor: pointer;
            transition: transform .12s ease, border-color .12s ease, background .12s ease;
        }

        #greasyfork-plus .saveclose_buttons[class]:hover { transform: translateY(-1px); }
        #greasyfork-plus_saveBtn[class] {
            border-color: var(--gfpp-accent);
            background: var(--gfpp-accent);
            color: #fff;
        }
        #greasyfork-plus_saveBtn[class]:hover { background: var(--gfpp-accent-hover); }

        #greasyfork-plus_resetLink[class] {
            margin-right: auto;
            color: var(--gfpp-muted);
            text-decoration: none;
        }
        #greasyfork-plus_resetLink[class]:hover { color: var(--gfpp-accent); text-decoration: underline; }

        @media (max-width: 640px) {
            body > #greasyfork-plus_wrapper:only-child { padding: 14px 12px 82px; }
            #greasyfork-plus .config_var[class] { padding: 11px 12px; }
            #greasyfork-plus_wrapper > #greasyfork-plus_buttons_holder:last-child { padding: 10px 12px; }
            .gfpp-theme-select { width: 100%; }
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { transition: none !important; scroll-behavior: auto !important; }
        }
    `

    const pageCSS = `

        .script-list li.blacklisted{
            display:none;
            background:#321919;
            color:#e8e6e3
        }
        .script-list li.hidden{
            display:none;
            background:#321932;
            color:#e8e6e3
        }
        .script-list li.blacklisted a:not(.install-link),.script-list li.hidden a:not(.install-link){
            color:#ff8484
        }
        #script-info.hidden,#script-info.hidden .user-content{
            background:#321932;
            color:#e8e6e3
        }
        #script-info.hidden a:not(.install-link):not(.install-help-link){
            color:#ff8484
        }
        #script-info.hidden code{
            background-color:transparent
        }
        html {
            --block-btn-color:#111;
            --block-btn-bgcolor:#eee;
        }
        #script-info.hidden, #script-info.hidden .user-content {
            --block-btn-color:#eee;
            --block-btn-bgcolor:#111;
        }

        /* Use Greasy Fork's native sidebar styles for Greasy Fork++ options. */
        #greasyfork-plus-options .list-option > a:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 2px;
        }

        /*
         * Greasy Fork++ list views
         *
         * Default: filtered and hidden scripts remain hidden.
         * Filtered view: show only scripts matched by an active GF++ filter.
         * Hidden view: show only scripts explicitly hidden by the user.
         */
        html[blacklisted-shown] .script-list > li {
            display: none !important;
        }
        html[blacklisted-shown] .script-list > li.blacklisted {
            display: list-item !important;
        }

        html[hidden-shown] .script-list > li {
            display: none !important;
        }
        html[hidden-shown] .script-list > li.hidden {
            display: list-item !important;
        }

        .install-link.install-status-checking,
        .install-link.install-status-checking:visited,
        .install-link.install-status-checking:active,
        .install-link.install-status-checking:hover,
        .install-help-link.install-status-checking {
            background-color: #405458;
        }

        .install-link[data-gfpp-install-status="pending"],
        .install-link[data-gfpp-install-status="unavailable"] {
            cursor: wait;
            opacity: .72;
        }

        .install-link[data-gfpp-install-status="unavailable"] {
            cursor: not-allowed;
        }

        div.previewable{
            display: flex;
            flex-direction: column;
        }
        .script-version-ainfo-span {
            align-self:end;
            font-size: 90%;
            padding: 4px 8px;
            margin: 0;
        }
        [style*="display:"] + .script-version-ainfo-span{
            display: none;
        }


        /* Greasy Fork Enhance - Flat Layout  */

        [greasyfork-enhance-k37*="|flat-layout|"] ol.script-list > li > article > h2 {
            width: 0;
            flex-grow: 1;
            flex-basis: 60%;
        }

        [greasyfork-enhance-k37*="|flat-layout|"] ol.script-list > li > article > div.script-meta-block {
            width: auto;
            flex-basis: 40%;
            flex-shrink: 0;
            flex-grow: 0;
        }

        [greasyfork-enhance-k37*="|flat-layout|"] .script-list li:not(.ad-entry) {
            padding: 1em;
            margin: 0;
        }

        [greasyfork-enhance-k37*="|flat-layout|"] .script-list li:not(.ad-entry) article {
            padding: 0;
            margin: 0;
        }

        [greasyfork-enhance-k37*="|flat-layout|"]  #script-info div.script-meta-block + #additional-info {

            max-width: calc( 100% - 340px );
            min-height: 300px;
            box-sizing: border-box;
        }

         [greasyfork-enhance-k37*="|basic|"] ul.outline {
            margin-bottom: -99vh;

         }

         .discussion-list .hidden {
            display: none;
         }

         /* Greasy Fork Empty Ad Block */
        .ethical-ads-text[class]:empty {
            min-height: unset;
        }


        /* additional css */

        .discussion-item-by-recent-user{
            display: none !important;
        }

        .discussion-list-item {
            position: relative;
        }

        .discussion-list-item .discussion-meta .discussion-meta-item{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            gap: 4px;

        }

        .discussion-list-item .discussion-meta .discussion-meta-item:last-of-type .discussion-meta-item{
            justify-content: end;
        }

        .discussion-list-item .discussion-title{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;

        }
        a.discussion-list-item-report-comment[class] {
            all: unset;
            position: relative;
            margin: 0 0 0 0;
            background: inherit;
            color: inherit;
            border: 0;
            opacity: 0.8;
            text-decoration: none;
            font-size: 100%;
        }
        a.discussion-list-item-report-comment[class]:hover {
            opacity: 1.0;
            text-decoration: underline;
        }

        .discussion-meta-item-script-name + .discussion-meta-item {
            display: inline-flex;
            flex-direction: row;
            gap: 4px;
            align-items: center;
            justify-content: flex-start;
            justify-items: center;
        }

        li[data-script-id] .install-link[class]:not(.gfpp-install-link) {
            border-radius: 0;
            opacity: 0.8;
            cursor: pointer;
            display: inline-flex;
            white-space: nowrap;
            position: relative;
            z-index: 99;
        }

        li[data-script-id] .install-link[class]:not(.gfpp-install-link):hover {
            opacity: 1.0;
            cursor: pointer;
            display: inline-flex;
            white-space: nowrap;
        }

        .discussion-list-item span.discussion-snippet[class] {
            text-overflow: ellipsis;
            overflow: hidden;
        }

        div#script-list-cd[id]{
            /* all: revert; */
            padding: initial;
            width: initial;
            margin: initial;
        }


        /* Greasy Fork++ modern UI */
        html.gfpp-settings-open,
        html.gfpp-settings-open body {
            overflow: hidden !important;
        }

        .gfpp-settings-backdrop {
            position: fixed;
            inset: 0;
            z-index: 9998;
            background: rgba(0, 0, 0, .44);
            -webkit-backdrop-filter: blur(3px);
            backdrop-filter: blur(3px);
        }

        iframe#greasyfork-plus {
            top: 50% !important;
            left: 50% !important;
            right: auto !important;
            bottom: auto !important;
            z-index: 9999 !important;
            width: min(980px, calc(100vw - 32px)) !important;
            height: min(760px, calc(100vh - 32px)) !important;
            max-width: none !important;
            max-height: none !important;
            margin: 0 !important;
            padding: 0 !important;
            transform: translate(-50%, -50%);
            border: 1px solid rgba(148, 163, 184, .72) !important;
            outline: 1px solid rgba(0, 0, 0, .28);
            outline-offset: 0;
            border-radius: 16px;
            box-shadow:
                0 0 0 1px rgba(255, 255, 255, .10),
                0 28px 80px rgba(0, 0, 0, .46),
                0 4px 18px rgba(0, 0, 0, .24);
            overflow: hidden !important;
        }

        /* Script-list actions: compact and aligned.
           Install/Reinstall keep Greasy Fork's native install-link colors. */
        .gfpp-block-button,
        .gfpp-install-link[class] {
            box-sizing: border-box;
            min-height: 30px;
            margin-left: 8px;
            padding: 5px 10px !important;
            border-radius: 6px !important;
            font-size: 13px !important;
            font-weight: 600;
            line-height: 1.2 !important;
            vertical-align: middle;
            white-space: nowrap;
        }

        .gfpp-block-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(127, 127, 127, .46);
            background: rgba(127, 127, 127, .07);
            color: inherit;
            font-family: inherit;
            cursor: pointer;
            transition: background-color .12s ease, border-color .12s ease, opacity .12s ease;
        }
        .gfpp-block-button:hover {
            border-color: rgba(127, 127, 127, .64);
            background: rgba(127, 127, 127, .14);
        }
        .gfpp-block-button[aria-pressed="true"] {
            background: rgba(127, 127, 127, .16);
        }

        .gfpp-install-link[class] {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            opacity: .94;
            cursor: pointer;
            position: relative;
            z-index: 2;
            transition: opacity .12s ease, filter .12s ease;
        }
        .gfpp-install-link[class]:hover {
            opacity: 1;
            filter: brightness(1.04);
        }

        .gfpp-block-button:focus-visible,
        .gfpp-install-link:focus-visible,
        .discussion-list-item-report-comment:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 2px;
        }

        .gfpp-block-button--header { float: right; }
        .gfpp-debug-tag { margin-left: .35em; opacity: .68; font-size: .82em; font-weight: 500; }
        .gfpp-additional-buttons { display: inline-flex; align-items: center; gap: 6px; margin-left: 6px; }


    `

    const window = {};

    /** @param {typeof WinComm.createInstance} createInstance */
    function contentScriptText(shObject, createInstance) {

        // avoid setupEthicalAdsFallback looping
        if (typeof window.ethicalads === "undefined") {
            const p = Promise.resolve([]);
            window.ethicalads = { wait: p };
        }

        if (document.querySelector('#greasyfork-enhance-basic')) {

            const setScriptOnDisabled = async (style) => {

                try {
                    const pd = Object.getOwnPropertyDescriptor(style.constructor.prototype, 'disabled');
                    const { get, set } = pd;
                    Object.defineProperty(style, 'disabled', {
                        get() {
                            return get.call(this);
                        },
                        set(nv) {
                            let r = set.call(this, nv);
                            Promise.resolve().then(chHead);
                            return r;
                        }
                    })
                } catch (e) {

                }
            };

            document.addEventListener('style-s48', function (evt) {
                const target = (evt || 0).target || 0;
                if (!target) return;
                setScriptOnDisabled(target)

            }, true);

            const isScriptEnabled = (style) => {

                if (style instanceof HTMLStyleElement) {
                    if (!style.hasAttribute('s48')) {
                        style.setAttribute('s48', '');
                        style.dispatchEvent(new CustomEvent('style-s48'));
                        // setScriptOnDisabled(style);
                    }
                    return style.disabled !== true;
                }
                return false;
            }
            const chHead = () => {
                let p = [];
                if (isScriptEnabled(document.getElementById('greasyfork-enhance-basic')))
                    p.push('basic');
                if (isScriptEnabled(document.getElementById('greasyfork-enhance-flat-layout')))
                    p.push('flat-layout');
                if (isScriptEnabled(document.getElementById('greasyfork-enhance-animation')))
                    p.push('animation');
                if (p.length >= 1)
                    document.documentElement.setAttribute('greasyfork-enhance-k37', `|${p.join('|')}|`);
                else
                    document.documentElement.removeAttribute('greasyfork-enhance-k37');
            }
            const moHead = new MutationObserver(chHead);
            moHead.observe(document.head, { subtree: false, childList: true });
            chHead();
        }

        const { scriptName, scriptVersion, scriptNamespace, communicationId } = shObject;
        let scriptHandler = shObject.scriptHandler;

        const wincomm = createInstance(communicationId);

        const external = window.external || {};

        if (external[scriptHandler]) 1;
        else if (external && external.Violentmonkey && (scriptHandler || 'Violentmonkey') === 'Violentmonkey') scriptHandler = 'Violentmonkey';
        else if (external && external.Tampermonkey && (scriptHandler || 'Tampermonkey') === 'Tampermonkey') scriptHandler = 'Tampermonkey';
        else if (external && external.Scriptcat && (scriptHandler || 'ScriptCat') === 'ScriptCat') scriptHandler = 'Scriptcat';

        const manager = external[scriptHandler];

        if (!manager) {

            wincomm.send('userScriptManagerNotDetected', {
                code: 1
            });
            return;

        }

        const promiseWrap = (x) => {
            // bug in FireFox + Violentmonkey
            if (typeof (x || 0) === 'object' && typeof x.then === 'function') return x; else return Promise.resolve(x);
        };


        const pnIsInstalled2 = (type, scriptName, scriptNamespace) => new Promise((resolve, reject) => {
            const resultPr = promiseWrap(manager.isInstalled(scriptName, scriptNamespace));
            resultPr.then((result) => resolve({
                type,
                result: typeof result === 'string' ? { version: result } : result
            })).catch(reject);
        }).catch(console.warn);


        const pnIsInstalled3 = (type, scriptName, scriptNamespace) => new Promise((resolve, reject) => {
            try {
                manager.isInstalled(scriptName, scriptNamespace, (result) => {
                    resolve({
                        type,
                        result: typeof result === 'string' ? { version: result } : result
                    });
                });
            } catch (e) {
                reject(e);
            }
        }).catch(console.warn);



        const enableScriptInstallChecker = (r) => {

            const { type, result } = r;
            let version = result.version;
            // console.log(type, result, version)
            if (version !== scriptVersion) return;

            const pnIsInstalled = type < 25 ? pnIsInstalled2 : pnIsInstalled3;

            wincomm.hook('_$GreasyFork$Msg$OnScriptInstallCheck', {

                'installedVersion.req': (d, evt) => {
                    pnIsInstalled(type, d.data.name, d.data.namespace).then((r) => {
                        if (r && 'result' in r) {
                            wincomm.response(evt, 'installedVersion.res', {
                                version: r.result ? (r.result.version || '') : ''
                            });
                        }
                    })
                }

            });

            wincomm.send('ready', { type });

        }

        const kl = manager.isInstalled.length;

        if (!(kl === 2 || kl === 3)) return;
        const puds = kl === 2 ? [
            pnIsInstalled2(21, scriptName, scriptNamespace), // scriptName is GM.info.script.name not GM.info.script.name_i18n
            pnIsInstalled2(20, scriptName, '')
        ] : [
            pnIsInstalled3(31, scriptName, scriptNamespace),
            pnIsInstalled3(30, scriptName, '')
        ];

        Promise.all(puds).then((rs) => {
            const [r1, r0] = rs;
            if (r0 && r0.result && r0.result.version) enableScriptInstallChecker(r0); // '3.1.4'
            else if (r1 && r1.result && r1.result.version) enableScriptInstallChecker(r1);
        });

    }

    return { fields, getFields, getLocale, normalizeLocaleCode, resolveLocaleCode, formatMessage, logo, locales, settingsCSS, pageCSS, contentScriptText }

})();

if (!isInIframe) void (async () => {

    const GMA = {}; // Promise-normalized GM API, including ScriptCat-style sync implementations.
    for (const key of ['getValue', 'setValue', 'deleteValue']) {
        const fn = GM[key];
        if (typeof fn === 'function') {
            GMA[key] = async (...args) => await Reflect.apply(fn, GM, args);
        }
    }

    const scheduleFrame = typeof window.requestAnimationFrame === 'function'
        ? window.requestAnimationFrame.bind(window)
        : (callback) => window.setTimeout(() => callback(performance.now()), 16);

    let rafPromise = null;
    const getRafPromise = () => rafPromise || (rafPromise = new Promise(resolve => {
        scheduleFrame(timestamp => {
            rafPromise = null;
            resolve(timestamp);
        });
    }));

    const isValidURL = (url) => {
        if (typeof url !== 'string' || !url.trim()) return false;
        try {
            const parsed = new URL(url);
            return (parsed.protocol === 'https:' || parsed.protocol === 'http:')
                && !parsed.port
                && Boolean(parsed.hostname)
                && Boolean(parsed.pathname);
        } catch {
            return false;
        }
    };

    const stopInstallInterception = (event) => {
        // Stop Greasy Fork's delegated install handler without blocking listeners on this link.
        event.stopPropagation();
    };
    const setupInstallLink = (button) => {
        if (!button) return null;
        if (button.matches('a.install-link') && !button.hasAttribute('data-gfpp-install-link')) {
            button.setAttribute('data-gfpp-install-link', '');
            // by pass install.js weird hackjack
            button.addEventListener('click', stopInstallInterception);
            button.addEventListener('mouseover', stopInstallInterception);
            button.addEventListener('touchstart', stopInstallInterception, { passive: true });
            button.addEventListener('click', event => {
                if (button.getAttribute('aria-disabled') === 'true') event.preventDefault();
            });
        }
        return button;
    };

    async function fixValue(key, def, test) {
        const value = await GMA.getValue(key, def);
        if (!test(value)) await GMA.deleteValue(key);
    }

    function numberArr(arrVal) {
        if (!Array.isArray(arrVal)) return [];
        return [...new Set(arrVal.filter(value => Number.isInteger(value) && value > 0))];
    }

    const isScriptFirstUse = await GMA.getValue('firstUse', true);
    await Promise.all([
        fixValue('hiddenList', [], v => Array.isArray(v) && v.every(value => Number.isInteger(value) && value > 0)),
        fixValue('lastMilestone', 0, v => typeof v === 'number' && Number.isFinite(v) && v >= 0)
    ])

    function createRE(t, ...opt) {
        try {
            return new RegExp(t, ...opt);
        } catch {
            return null;
        }
    }

    const ruleFn = function (text) {
        const { rules, regExpArr } = this;
        if (!text || typeof text !== 'string' || rules.length === 0) return -1;

        const escapedText = text.replace(/\uE084/g, '\uE084x');
        const normalizedText = escapedText.toLocaleLowerCase('en-US');

        for (let index = 0; index < rules.length; index++) {
            const rule = rules[index];
            let matches = false;

            if (!rule.includes('\uE084')) {
                matches = normalizedText.includes(rule.toLocaleLowerCase('en-US'));
            } else {
                const segments = rule.split(/\uE084(\d+)r/);
                matches = segments.every((segment, segmentIndex) => {
                    if (!segment) return true;
                    if (segmentIndex % 2) {
                        const regex = regExpArr[Number(segment)];
                        if (!regex) return false;
                        regex.lastIndex = 0;
                        return regex.test(escapedText);
                    }
                    return normalizedText.includes(segment.trim().toLocaleLowerCase('en-US'));
                });
            }

            if (matches) return index;
        }
        return -1;
    };

    /** @param {string} txtRule */
    const preprocessRule = (txtRule) => {
        const regExpArr = [];
        let source = String(txtRule || '').replace(/\uE084/g, '\uE084x');
        let guard = 800;

        while (guard--) {
            const idx1 = source.search(/\bre\//);
            if (idx1 < 0) break;

            let cursor = idx1 + 3;
            let escaped = false;
            let end = -1;
            for (; cursor < source.length; cursor++) {
                const char = source[cursor];
                if (char === '/' && !escaped) {
                    end = cursor;
                    break;
                }
                escaped = char === '\\' ? !escaped : false;
            }
            if (end < 0) break;

            const flagsMatch = /^[a-z]*/i.exec(source.slice(end + 1));
            const flags = flagsMatch ? flagsMatch[0] : '';
            const pattern = source.slice(idx1 + 3, end);
            const regex = createRE(pattern, flags);
            const placeholder = `\uE084${regExpArr.length}r`;
            regExpArr.push(regex);
            if (!regex) UU.warn(mWindow.formatMessage(strings.messages.invalidRegex, { pattern: `re/${pattern}/${flags}` }));
            source = `${source.slice(0, idx1)}${placeholder}${source.slice(end + 1 + flags.length)}`;
        }

        const rules = source.split(',').map(item => item.trim()).filter(Boolean);
        return ruleFn.bind({ rules, regExpArr });
    };

    const fixLibraryScriptCodeLink = true;
    const addAdditionInfoLengthHint = true;

    const id = 'greasyfork-plus';
    const locales = mWindow.locales;

    const routeLocale = /^\/([A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,4})?)\//.exec(location.pathname)?.[1] || '';
    const pageLanguage = document.documentElement.lang || routeLocale || 'en';
    const localeCode = mWindow.resolveLocaleCode(pageLanguage);
    const lang = localeCode;
    const locale = locales[localeCode] || locales.en;
    const ui = locale.settings || locales.en.settings;
    const strings = locale.runtime || locales.en.runtime;
    const title = `${GM.info.script.name} v${GM.info.script.version} ${ui.title}`;
    const fields = mWindow.getFields(locale);
    const logo = mWindow.logo;
    const nonLatins = filters.NonLatin;
    const blacklistRules = filters.Rules;
    const hiddenList = new Set(numberArr(await GMA.getValue('hiddenList', [])));

    const _isBlackList = (text) => {
        if (!text || typeof text !== 'string') return false;
        if (text.includes('hack') && (text.includes('EXPERIMENT_FLAGS') || text.includes('yt.'))) return false;
        const t = ` ${text} `;
        for (const regexRule of blacklistRules) {
            if (regexRule.test(t)) return true;
        }
        return false;
    }
    const isBlackList = (name, description) => {
        if (!blacklistRules) return false;
        return _isBlackList(name) || _isBlackList(description);
    }

    function hiddenListStrToArr(str) {
        if (typeof str !== 'string' || !str.trim()) return [];
        return numberArr(str.split(',').map(value => Number(value.trim())));
    }

    const detectPageTheme = () => {
        const parseRgb = (value) => {
            const match = /rgba?\(\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)\s*[, ]\s*(\d+(?:\.\d+)?)/i.exec(String(value || ''));
            if (!match) return null;
            return [Number(match[1]), Number(match[2]), Number(match[3])];
        };
        for (const element of [window.document.body, window.document.documentElement]) {
            if (!element) continue;
            const rgb = parseRgb(window.getComputedStyle(element).backgroundColor);
            if (!rgb) continue;
            const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
            // Transparent backgrounds are commonly reported as rgb(0, 0, 0, 0), so only
            // treat a dark value as authoritative when the background is visibly painted.
            const raw = window.getComputedStyle(element).backgroundColor;
            if (/rgba\([^)]*,\s*0(?:\.0+)?\s*\)$/i.test(raw)) continue;
            return luminance < 128 ? 'dark' : 'light';
        }
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };


    const resolveSettingsTheme = (preference = 'auto') => {
        return preference === 'light' || preference === 'dark'
            ? preference
            : detectPageTheme();
    };

    const settingsBackdropId = `${id}-settings-backdrop`;
    const ensureSettingsBackdrop = () => {
        let backdrop = window.document.getElementById(settingsBackdropId);
        if (backdrop) return backdrop;

        backdrop = window.document.createElement('div');
        backdrop.id = settingsBackdropId;
        backdrop.className = 'gfpp-settings-backdrop';
        backdrop.setAttribute('aria-hidden', 'true');
        backdrop.addEventListener('click', () => gmc.close());
        window.document.documentElement.classList.add('gfpp-settings-open');
        window.document.body.appendChild(backdrop);
        return backdrop;
    };

    const removeSettingsBackdrop = () => {
        window.document.getElementById(settingsBackdropId)?.remove();
        window.document.documentElement.classList.remove('gfpp-settings-open');
    };


    const configDefaults = Object.fromEntries(
        Object.entries(fields)
            .filter(([, field]) => field && field.save !== false && field.type !== 'button')
            .map(([key, field]) => [key, field.default])
    );

    let settingsSessionSnapshot = null;
    let settingsSaveCommitted = false;
    let settingsEventCleanups = [];

    const clearSettingsEventListeners = () => {
        const cleanups = settingsEventCleanups;
        settingsEventCleanups = [];
        for (const cleanup of cleanups) cleanup();
    };

    const addSettingsEventListener = (target, type, handler, options) => {
        if (!target?.addEventListener) return;
        target.addEventListener(type, handler, options);
        settingsEventCleanups.push(() => target.removeEventListener(type, handler, options));
    };

    const snapshotSettingsSession = () => {
        settingsSessionSnapshot = Object.fromEntries(
            Object.keys(configDefaults).map(key => [key, gmc.get(key)])
        );
        settingsSaveCommitted = false;
    };

    const restoreSettingsSession = () => {
        if (!settingsSessionSnapshot) return;
        for (const [key, value] of Object.entries(settingsSessionSnapshot)) {
            if (gmc.fields[key]) gmc.fields[key].value = value;
        }
    };

    const gmc = new GM_config({
        id,
        title,
        fields,
        css: mWindow.settingsCSS,
        events: {
            init: () => {
                gmc.initializedResolve && gmc.initializedResolve();
                gmc.initializedResolve = null;
            },
            /** @param {Document} document */
            open: async (document) => {
                clearSettingsEventListeners();
                ensureSettingsBackdrop();
                snapshotSettingsSession();

                const frame = window.document.getElementById(id);
                if (frame?.tagName === 'IFRAME') {
                    frame.title = title;
                    frame.setAttribute('aria-label', title);
                }

                const themeSelect = document.querySelector(`#${id}_field_theme`);
                if (themeSelect) {
                    themeSelect.hidden = true;
                    themeSelect.setAttribute('aria-hidden', 'true');
                }

                const applyThemePreview = () => {
                    const preference = String(themeSelect?.value || gmc.get('theme') || 'auto');
                    document.documentElement.dataset.gfppTheme = resolveSettingsTheme(preference);
                    document.documentElement.dataset.gfppThemePreference = preference;
                };

                let syncThemePicker = () => {};
                if (themeSelect) {
                    document.querySelectorAll('.gfpp-theme-select').forEach(element => element.remove());

                    const themeLabels = ui.themeOptions || locales.en.settings.themeOptions;
                    for (const option of themeSelect.options) {
                        if (themeLabels[option.value]) option.textContent = themeLabels[option.value];
                    }

                    const wrapper = document.createElement('div');
                    wrapper.id = `${id}-theme-picker`;
                    wrapper.className = 'gfpp-theme-select';
                    wrapper.dataset.open = 'false';

                    const trigger = document.createElement('button');
                    trigger.type = 'button';
                    trigger.className = 'gfpp-theme-select__button';
                    trigger.setAttribute('aria-haspopup', 'listbox');
                    trigger.setAttribute('aria-expanded', 'false');

                    const valueLabel = document.createElement('span');
                    valueLabel.className = 'gfpp-theme-select__value';
                    valueLabel.id = `${id}-theme-current-value`;

                    const themeFieldLabel = document.querySelector(`#${id}_theme_field_label`);
                    if (themeFieldLabel?.id) {
                        trigger.setAttribute('aria-labelledby', `${themeFieldLabel.id} ${valueLabel.id}`);
                    }

                    const chevron = document.createElement('span');
                    chevron.className = 'gfpp-theme-select__chevron';
                    chevron.setAttribute('aria-hidden', 'true');

                    trigger.append(valueLabel, chevron);

                    const menu = document.createElement('div');
                    menu.className = 'gfpp-theme-select__menu';
                    menu.setAttribute('role', 'listbox');

                    const optionButtons = new Map();
                    for (const nativeOption of themeSelect.options) {
                        const optionButton = document.createElement('button');
                        optionButton.type = 'button';
                        optionButton.className = 'gfpp-theme-select__option';
                        optionButton.dataset.value = nativeOption.value;
                        optionButton.textContent = nativeOption.textContent || nativeOption.value;
                        optionButton.setAttribute('role', 'option');
                        optionButton.setAttribute('aria-selected', String(nativeOption.value === themeSelect.value));
                        optionButtons.set(nativeOption.value, optionButton);
                        menu.appendChild(optionButton);
                    }

                    const setOpen = (open) => {
                        wrapper.dataset.open = String(open);
                        trigger.setAttribute('aria-expanded', String(open));
                        if (open) optionButtons.get(themeSelect.value)?.focus();
                    };

                    syncThemePicker = () => {
                        const selectedOption = [...themeSelect.options].find(option => option.value === themeSelect.value);
                        valueLabel.textContent = selectedOption?.textContent || themeSelect.value;
                        for (const [value, optionButton] of optionButtons) {
                            optionButton.setAttribute('aria-selected', String(value === themeSelect.value));
                        }
                    };

                    addSettingsEventListener(trigger, 'click', () => {
                        setOpen(wrapper.dataset.open !== 'true');
                    });

                    addSettingsEventListener(menu, 'click', event => {
                        const optionButton = event.target.closest('.gfpp-theme-select__option');
                        if (!optionButton) return;
                        themeSelect.value = optionButton.dataset.value || 'auto';
                        themeSelect.dispatchEvent(new Event('input', { bubbles: true }));
                        themeSelect.dispatchEvent(new Event('change', { bubbles: true }));
                        syncThemePicker();
                        setOpen(false);
                        trigger.focus();
                    });

                    addSettingsEventListener(wrapper, 'keydown', event => {
                        if (event.key === 'Escape') {
                            if (wrapper.dataset.open === 'true') {
                                event.preventDefault();
                                event.stopPropagation();
                                setOpen(false);
                                trigger.focus();
                            }
                            return;
                        }

                        if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
                        event.preventDefault();

                        const values = [...optionButtons.keys()];
                        const focusedValue = document.activeElement?.dataset?.value;
                        const currentValue = focusedValue && optionButtons.has(focusedValue)
                            ? focusedValue
                            : themeSelect.value;
                        const currentIndex = Math.max(0, values.indexOf(currentValue));
                        const direction = event.key === 'ArrowDown' ? 1 : -1;
                        const nextValue = values[(currentIndex + direction + values.length) % values.length];

                        if (wrapper.dataset.open !== 'true') setOpen(true);
                        optionButtons.get(nextValue)?.focus();
                    });

                    addSettingsEventListener(document, 'pointerdown', event => {
                        if (!wrapper.contains(event.target)) setOpen(false);
                    });

                    themeSelect.after(wrapper);
                    wrapper.append(trigger, menu);

                    // Defensive invariant: GM_config may reuse the iframe DOM between
                    // openings; keep exactly one visible Theme picker.
                    document.querySelectorAll('.gfpp-theme-select').forEach(element => {
                        if (element !== wrapper) element.remove();
                    });

                    syncThemePicker();

                    addSettingsEventListener(themeSelect, 'input', () => {
                        applyThemePreview();
                        syncThemePicker();
                    });
                    addSettingsEventListener(themeSelect, 'change', () => {
                        applyThemePreview();
                        syncThemePicker();
                    });
                }
                applyThemePreview();

                const setControlText = (selector, text, titleText) => {
                    const element = document.querySelector(selector);
                    if (!element) return;
                    element.textContent = text;
                    if (titleText) element.title = titleText;
                };

                setControlText(`#${id}_saveBtn`, ui.buttons.save, ui.buttons.saveTitle);
                setControlText(`#${id}_closeBtn`, ui.buttons.close, ui.buttons.closeTitle);
                setControlText(`#${id}_resetLink`, ui.buttons.reset, ui.buttons.resetTitle);

                // GM_config resets select fields by comparing option text to the raw default.
                // The translated Theme labels would otherwise prevent resetting to "auto".
                const resetLink = document.querySelector(`#${id}_resetLink`);
                if (resetLink) {
                    addSettingsEventListener(resetLink, 'click', () => {
                        queueMicrotask(() => {
                            if (themeSelect) themeSelect.value = String(fields.theme.default || 'auto');
                            applyThemePreview();
                            syncThemePicker();
                        });
                    });
                }

                addSettingsEventListener(document, 'keydown', event => {
                    if (event.key === 'Escape') gmc.close();
                });

                const textarea = document.querySelector(`#${id}_field_hiddenList`);
                const storedHidden = numberArr(await GMA.getValue('hiddenList', []));
                const hiddenValue = [...new Set(storedHidden)].sort((a, b) => a - b).join(', ');
                gmc.fields.hiddenList.value = hiddenValue;
                if (textarea) textarea.value = hiddenValue;

                const resize = (target) => {
                    target.style.height = 'auto';
                    target.style.height = `${Math.min(target.scrollHeight, 220)}px`;
                };
                if (textarea) {
                    resize(textarea);
                    addSettingsEventListener(textarea, 'input', ({ target }) => resize(target), { passive: true });
                }
            },
            close: () => {
                clearSettingsEventListeners();
                if (!settingsSaveCommitted) restoreSettingsSession();
                settingsSessionSnapshot = null;
                settingsSaveCommitted = false;
                removeSettingsBackdrop();
            },
            save: async (values) => {
                if (!gmc.isOpen) return;
                settingsSaveCommitted = true;
                await GMA.setValue('hiddenList', hiddenListStrToArr(values.hiddenList));
                removeSettingsBackdrop();
                gmc.close();
                window.setTimeout(() => window.location.reload(), 120);
            }

        }
    });
    gmc.initialized = new Promise(r => (gmc.initializedResolve = r));
    await gmc.initialized.then();
    const customBlacklistRF = preprocessRule(gmc.get('customBlacklist') || '');

    const valHideRecentUsersWithin_ = Math.floor(+gmc.get('hideRecentUsersWithin'));
    const valHideRecentUsersWithin = valHideRecentUsersWithin_ > 168 ? 168 : valHideRecentUsersWithin_ > 0 ? valHideRecentUsersWithin_ : 0;

    /**
     *
     * Inserts element into the sorted array arr while maintaining order based on a comparator.
     * Uses binary search to find the insertion point and then splices the element into the array.
     *
     * @param {Array} arr - The sorted array. (ascending order)
     * @param {number} value - The number to compare.
     * @param {Function} keyFn - Obtain the comparable value of the element.
     */
    function binarySearchLeft(arr, value, keyFn) {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (keyFn(arr[mid]) < value) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    /**
     * Finds the smallest index i such that arr[i][1] >= targetTime.
     * Used to locate the first user in userCreations whose creation time is recent enough.
     *
     * @param {Array} arr - The sorted array. (ascending order)
     * @param {number} targetTime - targetTime
     */
    function findFirstIndex(arr, targetTime) {
        return binarySearchLeft(arr, targetTime, e => e[1]);
    }

    /**
     * Finds the insertion point for element in arr to maintain sorted order.
     * Used to find the range of uncertain requests in networkRequestsRCTake.
     *
     * @param {Array} arr - The sorted array. (ascending order)
     * @param {*} element - The element to be inserted.
     * @param {Function} keyFn - Obtain the comparable value of the element.
     */
    function insertSorted(arr, element, keyFn) {
        const idx = binarySearchLeft(arr, keyFn(element), keyFn);
        arr.splice(idx, 0, element);
        return arr;
    }

    // Assume targetHiddenRecentDateTime is set as Date.now() - valHideRecentUsersWithin * 3600000
    let targetHiddenRecentDateTime = 0;
    let userCreations = [];// [userId, creationTime] sorted by creationTime
    let networkRequestsRC = [];// [userId, processFn, result] sorted by userId
    let recentUserMP = Promise.resolve(0);
    const fetchUserCreations = () => {
        const raw = sessionStorage.getItem('__TMP_userCreations682__');
        if (!raw) return [];
        try {
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];
            return parsed
                .filter(entry => Array.isArray(entry)
                    && entry.length >= 2
                    && Number.isInteger(entry[0])
                    && entry[0] > 0
                    && Number.isFinite(entry[1]))
                .map(([userId, creationTime]) => [userId, creationTime])
                .sort((a, b) => a[1] - b[1]);
        } catch (error) {
            UU.warn(error);
            return [];
        }
    };
    userCreations = fetchUserCreations();

    // Clean up userCreations: merge with sessionStorage and trim
    const cleanupUserCreations = () => {

        // Merge with sessionStorage data
        // in case the record in sessionStorage is modified by other instances as well.
        const stored = fetchUserCreations();
        const currentSet = new Set(userCreations.map(e => e.join(',')));
        const missing = stored.filter(e => !currentSet.has(e.join(',')));
        for (const element of missing) {
            insertSorted(userCreations, element, e => e[1]);
        }

        // Remove redundant old entries
        // since targetHiddenRecentDateTime is expected monotonic increasing, small values are useless in checking.
        let deleteCount = 0;
        for (let i = 0; i < userCreations.length - 1; i++) {
            if (userCreations[i][1] < targetHiddenRecentDateTime && userCreations[i + 1][1] < targetHiddenRecentDateTime) {
                deleteCount++;
            } else {
                break;
            }
        }
        if (deleteCount > 0) {
            deleteCount === 1 ? userCreations.shift() : userCreations.splice(0, deleteCount);
        }

        // Trim to max 16 elements, keeping boundary-relevant entries
        while (userCreations.length > 16) {
            const leftIdx = 1;
            const rightIdx = userCreations.length - 2;
            userCreations = userCreations.filter((e, idx) => ((idx <= leftIdx) || (idx >= rightIdx) || ((idx % 2) === 1)));
        }

        sessionStorage.setItem('__TMP_userCreations682__', JSON.stringify(userCreations));

    };

    // Test if a user is recent using cached data
    const testByUserCreations = (userId, targetTime)=>{
        const idxJ = findFirstIndex(userCreations, targetTime);
        let newFrom = Infinity, oldFrom = 0;
        if (idxJ < userCreations.length) {
            newFrom = userCreations[idxJ][0];
            if (userId >= newFrom) return true; // User is recent
        }
        if (idxJ > 0) {
            oldFrom = userCreations[idxJ - 1][0];
            if (userId <= oldFrom) return false; // User is not recent
        }
        return { newFrom, oldFrom }; // Uncertain, need network request
    }


    // Select the next network request from the uncertain range
    /** @returns {Promise | null} */
    function networkRequestsRCTake() {
        if (networkRequestsRC.length === 0) return null;

        let oldFrom = 0;
        let newFrom = Infinity;
        if (userCreations.length > 0) {
            const idx = findFirstIndex(userCreations, targetHiddenRecentDateTime);
            if (idx < userCreations.length) newFrom = userCreations[idx][0];
            if (idx > 0) oldFrom = userCreations[idx - 1][0];
        }

        // Find range of requests in uncertain zone (oldFrom < userId < newFrom)

        const left = binarySearchLeft(networkRequestsRC, oldFrom + 1, e => e[0]);
        // Prioritize certain not recent requests (at the beginning)
        if (left > 0) {
            return networkRequestsRC.shift(); // Take the first request (userId <= oldFrom)
        }

        const right = binarySearchLeft(networkRequestsRC, newFrom, e => e[0]);
        // Prioritize certain recent requests (at the end)
        if (right < networkRequestsRC.length) {
            return networkRequestsRC.pop(); // Take the last request (userId >= newFrom)
        }

        // No certain requests left, process an uncertain one
        // The entire remaining array is uncertain (left == 0, right == length)
        const midIdx = Math.floor(networkRequestsRC.length / 2);
        return networkRequestsRC.splice(midIdx, 1)[0];

    }

    // Main function to check if a user is recent. Duplicate checks share one in-flight promise.
    const recentUserPending = new Map();
    function determineRecentUserAsync(userId) {
        const initialCheck = testByUserCreations(userId, targetHiddenRecentDateTime);
        if (typeof initialCheck === 'boolean') return Promise.resolve(initialCheck);

        const pending = recentUserPending.get(userId);
        if (pending) return pending;

        const requestPromise = new Promise(resolve => {
            const processAsyncFn = async () => {
                const check = testByUserCreations(userId, targetHiddenRecentDateTime);
                if (typeof check === 'boolean') return resolve(check);
                try {
                    const userData = await getUserData(userId, false);
                    if (!userData || Number(userData.id) !== userId) return resolve(false);
                    const creationTime = Date.parse(userData.created_at);
                    if (!Number.isFinite(creationTime)) return resolve(false);
                    insertSorted(userCreations, [userId, creationTime], e => e[1]);
                    resolve(creationTime >= targetHiddenRecentDateTime);
                    cleanupUserCreations();
                } catch (error) {
                    UU.warn(error);
                    resolve(false);
                }
            };

            insertSorted(networkRequestsRC, [userId, processAsyncFn, null], e => e[0]);
            recentUserMP = recentUserMP.catch(() => 0).then(async () => {
                const entity = networkRequestsRCTake();
                if (entity) await entity[1]();
            }).catch(error => UU.warn(error));
        });

        recentUserPending.set(userId, requestPromise);
        void requestPromise.finally(() => recentUserPending.delete(userId));
        return requestPromise;
    }

    if (typeof GM.registerMenuCommand === 'function') {
        GM.registerMenuCommand(ui.menu.configure, () => gmc.open());
        GM.registerMenuCommand(ui.menu.resetEverything, async () => {
            if (!window.confirm(ui.menu.resetConfirm || locales.en.settings.menu.resetConfirm)) return;
            await Promise.all([
                GMA.setValue(id, JSON.stringify(configDefaults)),
                GMA.deleteValue('hiddenList'),
                GMA.deleteValue('lastMilestone'),
                GMA.deleteValue('firstUse')
            ]);
            window.setTimeout(() => window.location.reload(), 80);
        });
    }

    UU.init({ id, logging: gmc.get('logging') });
    UU.log(nonLatins);
    UU.log(blacklistRules);
    UU.log(hiddenList);

    const _VM = (typeof VM !== 'undefined' ? VM : null) || {
        shortcut: {
            register: () => { }
        }
    };

    const runLater = (callback) => scheduleFrame(callback);

    const mutationRunner = (callback, element, options) => {
        let revision = 0;
        const observer = new MutationObserver((entries) => {
            if (!entries?.length) return;
            if (!element.isConnected) {
                observer.disconnect();
                return;
            }
            const currentRevision = ++revision;
            runLater(() => {
                if (currentRevision === revision && element.isConnected) callback();
            });
        });
        observer.observe(element, options);
        callback();
        return observer;
    };


    function fixLibraryCodeURL(code_url) {
        if (/\/scripts\/(\d+)(-[^/]+)\/code\//.test(code_url)) {
            code_url = code_url.replace(/\/scripts\/(\d+)(-[^/]+)\/code\//, '/scripts/$1/code/');
            let qm = code_url.indexOf('?');
            let s1 = code_url.substring(0, qm);
            let s2 = code_url.substring(qm + 1);
            if (qm > 0) {
                code_url = `${decodeURI(s1)}?${s2}`;
            }
        }
        return code_url;
    }

    function setClickToSelect(elm) {
        elm.addEventListener('click', function () {
            if (`${window.getSelection()}` === "") {
                if (typeof this.select === 'function') {
                    this.select();
                } else {
                    const range = document.createRange();  // Create a range object
                    range.selectNode(this);        // Select the text within the element
                    const selection = window.getSelection(); // Get the selection object
                    selection.removeAllRanges();  // First clear any existing selections
                    selection.addRange(range);    // Add the new range to the selection
                }
            }
        });
        elm.addEventListener('drag', function (evt) {
            evt.preventDefault();
        });
        elm.addEventListener('drop', function (evt) {
            evt.preventDefault();
        });
        elm.addEventListener('dragstart', function (evt) {
            evt.preventDefault();
        });
    }

    const copyText = async (text) => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(String(text));
                return true;
            }
        } catch (error) {
            UU.warn(error);
        }

        const textarea = document.createElement('textarea');
        textarea.value = String(text);
        Object.assign(textarea.style, { position: 'fixed', left: '-10000px', top: '0', opacity: '0' });
        document.body.appendChild(textarea);
        textarea.select();
        try {
            const copied = document.execCommand('copy');
            if (!copied) throw new Error('execCommand(copy) returned false');
            return true;
        } catch (error) {
            UU.warn(error);
            UU.alert(strings.messages.copyFailed);
            return false;
        } finally {
            textarea.remove();
        }
    };


    let avoidDuplication = 0;
    const avoidDuplicationF = () => {
        const p = avoidDuplication;
        avoidDuplication = Date.now();
        if (avoidDuplication - p < 30) return false;
        return true;
    }
    // https://violentmonkey.github.io/vm-shortcut/
    const shortcuts = [
        ['ctrlcmd-alt-keys', () => avoidDuplicationF() && gmc.open()],
        ['ctrlcmd-alt-keyb', () => gmc.get('hideBlacklistedScripts') && avoidDuplicationF() && toggleListDisplayingItem('blacklisted')],
        ['ctrlcmd-alt-keyh', () => gmc.get('hideHiddenScript') && avoidDuplicationF() && toggleListDisplayingItem('hidden')]
    ]
    for (const [scKey, scFn] of shortcuts) {
        _VM.shortcut.register(scKey, scFn);
    }

    const addSettingsToMenu = () => {
        const nav = document.querySelector('#site-nav > nav');
        if (!nav || nav.querySelector(`li.${id}`)) return;

        const scriptName = GM.info.script.name;
        const scriptVersion = GM.info.script.version;
        const menu = document.createElement('li');
        menu.classList.add(id);
        menu.setAttribute('alt', `${scriptName} ${scriptVersion}`);
        menu.setAttribute('title', `${scriptName} ${scriptVersion}`);
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.textContent = GM.info.script.name;
        menu.appendChild(link);
        nav.insertBefore(menu, document.querySelector('#site-nav > nav > li:first-of-type'));

        menu.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            gmc.open();
        });
    };


    const syncListOptionState = (type, isShown) => {
        const anchorId = type === 'blacklisted'
            ? 'hyperlink-35389'
            : type === 'hidden'
                ? 'hyperlink-40361'
                : '';
        if (!anchorId) return;

        const anchor = document.getElementById(anchorId);
        anchor?.closest('.list-option')?.classList.toggle('list-current', isShown);
        anchor?.setAttribute('aria-pressed', String(isShown));
        if (isShown) anchor?.setAttribute('aria-current', 'true');
        else anchor?.removeAttribute('aria-current');
    };

    const listViewTypes = ['blacklisted', 'hidden'];

    const toggleListDisplayingItem = (type) => {
        if (!listViewTypes.includes(type)) return false;

        const root = document.documentElement;
        const attribute = `${type}-shown`;
        const willShow = !root.hasAttribute(attribute);

        // Filtered, Hidden or normal list: special views are mutually exclusive.
        for (const viewType of listViewTypes) {
            root.removeAttribute(`${viewType}-shown`);
        }
        if (willShow) root.setAttribute(attribute, '');

        for (const viewType of listViewTypes) {
            syncListOptionState(viewType, willShow && viewType === type);
        }

        return willShow;
    };

    const createListOptionGroup = () => {
        if (document.querySelector(`#${id}-options`)) return;
        const firstOptionGroup = document.querySelector('.list-option-groups > div');
        if (!firstOptionGroup) return;

        const group = document.createElement('div');
        group.className = 'list-option-group gfpp-list-option-group';
        group.id = `${id}-options`;
        group.append(document.createTextNode(mWindow.formatMessage(strings.listPanel.title, { name: GM.info.script.name })));

        const list = document.createElement('ul');
        const makeOption = (type, anchorId) => {
            const item = document.createElement('li');
            item.className = `list-option ${type}`;

            const anchor = document.createElement('a');
            anchor.href = '#';
            anchor.id = anchorId;
            anchor.setAttribute('role', 'button');

            const syncState = (isShown = document.documentElement.hasAttribute(`${type}-shown`)) => {
                item.classList.toggle('list-current', isShown);
                anchor.setAttribute('aria-pressed', String(isShown));
                if (isShown) anchor.setAttribute('aria-current', 'true');
                else anchor.removeAttribute('aria-current');
            };

            syncState();
            item.appendChild(anchor);
            item.addEventListener('click', event => {
                event.preventDefault();
                toggleListDisplayingItem(type);
            });
            return item;
        };
        const options = [];
        if (gmc.get('hideBlacklistedScripts')) options.push(makeOption('blacklisted', 'hyperlink-35389'));
        if (gmc.get('hideHiddenScript')) options.push(makeOption('hidden', 'hyperlink-40361'));
        if (!options.length) return;

        list.append(...options);
        group.appendChild(list);
        firstOptionGroup.before(group);
    };

    const addOptions = (scriptList) => {
        if (!scriptList) return;
        createListOptionGroup();
        mutationRunner(() => {
            const blacklisted = document.querySelector('#hyperlink-35389');
            const hidden = document.querySelector('#hyperlink-40361');

            if (blacklisted) {
                blacklisted.textContent = mWindow.formatMessage(strings.listPanel.blacklisted, {
                    count: document.querySelectorAll('.script-list li.blacklisted').length
                });
            }
            if (hidden) {
                hidden.textContent = mWindow.formatMessage(strings.listPanel.hidden, {
                    count: document.querySelectorAll('.script-list li.hidden').length
                });
            }
        }, scriptList, { childList: true, subtree: true });
    };


    const delay = (ms) => new Promise(resolve => window.setTimeout(resolve, ms));

    const parseJsonResponse = (response) => {
        if (response?.response && typeof response.response === 'object') return response.response;
        const raw = response?.responseText ?? response?.response;
        if (typeof raw !== 'string' || !raw.trim()) return null;
        try { return JSON.parse(raw); } catch { return null; }
    };

    const requestJson = (url, { noCache = false, timeout = 10000 } = {}) => new Promise(resolve => {
        let settled = false;
        const finish = (result) => {
            if (settled) return;
            settled = true;
            resolve(result);
        };
        const normalize = (response) => {
            const status = Number(response?.status) || 0;
            return {
                status,
                ok: status >= 200 && status < 300,
                url: response?.finalUrl || response?.responseURL || url,
                json: parseJsonResponse(response)
            };
        };

        if (typeof GM.xmlHttpRequest === 'function') {
            const details = {
                method: 'GET',
                url,
                timeout,
                anonymous: true,
                responseType: 'json',
                headers: {
                    Accept: 'application/json',
                    ...(noCache ? { 'Cache-Control': 'no-cache' } : {})
                },
                onload: response => finish(normalize(response)),
                onerror: response => finish(normalize(response)),
                ontimeout: response => finish(normalize(response)),
                onabort: response => finish(normalize(response))
            };
            try {
                const maybePromise = GM.xmlHttpRequest(details);
                if (maybePromise?.then) {
                    maybePromise.then(response => finish(normalize(response))).catch(() => finish({ status: 0, ok: false, url, json: null }));
                }
                return;
            } catch (error) {
                UU.warn(error);
            }
        }

        const controller = typeof AbortController === 'function' ? new AbortController() : null;
        const timer = window.setTimeout(() => controller?.abort(), timeout);
        fetch(url, {
            method: 'GET',
            credentials: 'omit',
            cache: noCache ? 'reload' : 'default',
            headers: { Accept: 'application/json' },
            ...(controller ? { signal: controller.signal } : {})
        }).then(async response => finish({
            status: response.status,
            ok: response.ok,
            url: response.url,
            json: response.ok ? await response.json().catch(() => null) : null
        })).catch(() => finish({ status: 0, ok: false, url, json: null }))
            .finally(() => window.clearTimeout(timer));
    });

    let apiQueue = Promise.resolve();
    const enqueueApiRequest = (task) => {
        const run = apiQueue.catch(() => undefined).then(async () => {
            await delay(45);
            return task();
        });
        apiQueue = run.then(() => undefined, () => undefined);
        return run;
    };

    const scriptDataCache = new Map();
    const userDataCache = new Map();
    const apiHost = `api.${window.location.hostname}`;

    const apiEntityRequest = (kind, id, noCache = false) => {
        const cache = kind === 'scripts' ? scriptDataCache : userDataCache;
        const numericId = Number(id);
        if (!Number.isInteger(numericId) || numericId <= 0) return Promise.resolve(null);
        if (!noCache && cache.has(numericId)) return cache.get(numericId);

        const request = enqueueApiRequest(async () => {
            const url = `https://${apiHost}/${kind}/${numericId}.json`;
            let response = await requestJson(url, { noCache });
            if (response.status === 503 && !noCache) {
                await delay(550);
                response = await requestJson(url, { noCache: true });
            }
            UU.log(`${response.status}: ${response.url}`);
            if (!response.ok) {
                if (response.status && response.status !== 404) UU.warn(`API ${kind}/${numericId}: HTTP ${response.status}`);
                return null;
            }
            return response.json;
        });

        cache.set(numericId, request);
        request.then(data => {
            if (!data) cache.delete(numericId);
        }).catch(() => cache.delete(numericId));
        return request;
    };

    const getScriptData = async (id, noCache = false) => {
        const numericId = Number(id);
        if (!Number.isInteger(numericId) || numericId <= 0) return null;

        const onPageElement = document.querySelector(`[data-script-namespace][data-script-id="${numericId}"][data-script-name][data-script-version][href]`);
        const href = onPageElement?.getAttribute('href') || '';
        if (onPageElement && /^https:\/\/update\.[\w-]+\.org\/scripts\/\d+\/[^.?/]+\.user\.js$/i.test(href)) {
            return {
                id: numericId,
                namespace: onPageElement.getAttribute('data-script-namespace') || '',
                name: onPageElement.getAttribute('data-script-name') || '',
                code_url: href,
                version: onPageElement.getAttribute('data-script-version') || ''
            };
        }
        return apiEntityRequest('scripts', numericId, noCache);
    };

    const getUserData = (userID, noCache = false) => apiEntityRequest('users', userID, noCache);

    const getTotalInstalls = (data) => Array.isArray(data?.scripts)
        ? data.scripts.reduce((sum, script) => {
            const value = Number.parseInt(script?.total_installs, 10);
            return sum + (Number.isFinite(value) ? value : 0);
        }, 0)
        : 0;


    const communicationId = WinComm.newCommunicationId();
    const wincomm = WinComm.createInstance(communicationId);


    const withTimeout = (promise, timeoutMs, fallback = null) => Promise.race([
        Promise.resolve(promise).catch(() => fallback),
        delay(timeoutMs).then(() => fallback)
    ]);

    const installStatusTimeout = Symbol('install-status-timeout');
    const installStatusInitialTimeout = 1800;
    const installStatusLateTimeout = 10000;

    const installStatusState = Object.freeze({
        managerUnavailable: 'manager-unavailable',
        notInstalled: 'not-installed',
        resolved: 'resolved',
        pending: 'pending',
        timeout: 'timeout',
        error: 'error'
    });

    const resolvedInstallStatus = (version) => {
        const normalizedVersion = typeof version === 'string' ? version : '';
        return normalizedVersion
            ? { state: installStatusState.resolved, version: normalizedVersion }
            : { state: installStatusState.notInstalled, version: '' };
    };

    const normalizeInstalledVersionResponse = (outcome) => {
        if (!outcome || outcome.kind === 'error') {
            return { state: installStatusState.error, version: '' };
        }

        const response = outcome.response;
        if (!response?.data || !Object.prototype.hasOwnProperty.call(response.data, 'version')) {
            return { state: installStatusState.error, version: '' };
        }

        if (typeof response.data.version !== 'string') {
            return { state: installStatusState.error, version: '' };
        }

        return resolvedInstallStatus(response.data.version);
    };

    const requestInstalledVersion = async (script, bridge, timeoutMs = installStatusInitialTimeout) => {
        if (!bridge) return { state: installStatusState.managerUnavailable, version: '' };

        const type = Number(bridge?.data?.type);
        if (!Number.isFinite(type)) return { state: installStatusState.error, version: '' };

        const mode = type % 10;
        let name = script?.name || '';
        let namespace = script?.namespace || '';
        if (!name) return { state: installStatusState.error, version: '' };

        if (mode === 0) {
            namespace = '';
        } else if (mode === 1) {
            if (!namespace && script?.id) {
                const fullScript = await getScriptData(script.id);
                name = fullScript?.name || name;
                namespace = fullScript?.namespace || '';
            }
        } else {
            return { state: installStatusState.error, version: '' };
        }

        let requestPromise;
        try {
            requestPromise = Promise.resolve(wincomm.request('installedVersion.req', { name, namespace }))
                .then(
                    response => ({ kind: 'response', response }),
                    error => ({ kind: 'error', error })
                );
        } catch (error) {
            UU.warn(error);
            return { state: installStatusState.error, version: '' };
        }

        const outcome = await withTimeout(requestPromise, timeoutMs, installStatusTimeout);
        if (outcome !== installStatusTimeout) {
            return normalizeInstalledVersionResponse(outcome);
        }

        return {
            state: installStatusState.pending,
            version: '',
            late: withTimeout(requestPromise, installStatusLateTimeout, installStatusTimeout)
                .then(lateOutcome => lateOutcome === installStatusTimeout
                    ? { state: installStatusState.timeout, version: '' }
                    : normalizeInstalledVersionResponse(lateOutcome))
                .catch(error => {
                    UU.warn(error);
                    return { state: installStatusState.error, version: '' };
                })
        };
    };

    const getInstalledStatus = async (script) => {
        const bridge = await withTimeout(
            promiseScriptCheck,
            installStatusInitialTimeout,
            installStatusTimeout
        );

        if (bridge !== installStatusTimeout) {
            return requestInstalledVersion(script, bridge);
        }

        return {
            state: installStatusState.pending,
            version: '',
            late: withTimeout(promiseScriptCheck, installStatusLateTimeout, installStatusTimeout)
                .then(async lateBridge => {
                    if (lateBridge === installStatusTimeout) {
                        return { state: installStatusState.timeout, version: '' };
                    }
                    const result = await requestInstalledVersion(script, lateBridge);
                    return result.state === installStatusState.pending ? result.late : result;
                })
                .then(result => Promise.resolve(result))
                .catch(error => {
                    UU.warn(error);
                    return { state: installStatusState.error, version: '' };
                })
        };
    };

    const setInstallControlState = (link, state) => {
        if (!link?.isConnected) return;

        const isPending = state === installStatusState.pending;
        const isUnavailable = state === installStatusState.timeout || state === installStatusState.error;
        const isDisabled = isPending || isUnavailable;

        link.classList.toggle('install-status-checking', isPending);
        link.setAttribute('aria-disabled', String(isDisabled));

        if (isPending) {
            link.setAttribute('aria-busy', 'true');
            link.setAttribute('data-gfpp-install-status', 'pending');
            link.textContent = strings.versionLabels.checking;
        } else {
            link.removeAttribute('aria-busy');
            if (isUnavailable) {
                link.setAttribute('data-gfpp-install-status', 'unavailable');
                link.textContent = strings.versionLabels.unavailable;
            } else {
                link.removeAttribute('data-gfpp-install-status');
            }
        }
    };

    const applyInstallStatus = (link, availableVersion, status) => {
        if (!link?.isConnected || !status) return;

        if (status.state === installStatusState.pending) {
            setInstallControlState(link, installStatusState.pending);
            return;
        }

        if (status.state === installStatusState.timeout || status.state === installStatusState.error) {
            setInstallControlState(link, status.state);
            return;
        }

        const installedVersion = status.state === installStatusState.resolved
            ? status.version
            : '';

        link.textContent = installLabel(compareVersions(availableVersion, installedVersion), availableVersion);
        link.classList.remove('install-status-checking');
        link.removeAttribute('aria-busy');
        link.removeAttribute('aria-disabled');
        link.removeAttribute('data-gfpp-install-status');
    };

    const watchLateInstallStatus = (link, availableVersion, status) => {
        if (status?.state !== installStatusState.pending || !status.late) return false;

        setInstallControlState(link, installStatusState.pending);
        Promise.resolve(status.late).then(lateStatus => {
            applyInstallStatus(link, availableVersion, lateStatus);
        }).catch(error => {
            UU.warn(error);
            applyInstallStatus(link, availableVersion, { state: installStatusState.error, version: '' });
        });
        return true;
    };

    const compareVersions = (v1, v2) => {
        if (!v1 || !v2) return NaN;
        if (v1 === v2) return 0;

        const parse = value => String(value).split('.').map(part => {
            const match = /^\d+/.exec(part);
            return match ? Number(match[0]) : NaN;
        });
        const a = parse(v1);
        const b = parse(v2);
        if (a.some(Number.isNaN) || b.some(Number.isNaN)) return NaN;

        const count = Math.max(a.length, b.length);
        for (let index = 0; index < count; index++) {
            const left = a[index] ?? 0;
            const right = b[index] ?? 0;
            if (left > right) return 1;
            if (left < right) return -1;
        }
        return 0;
    };


    /**
     * Return label for the hide script button
     *
     * @param {boolean} hidden Is hidden
     * @returns {string} Label
     */
    const blockLabel = (hidden) => {
        return hidden ? locale.notHide : locale.hide
    }

    /**
     * Return label for the install button
     *
     * @param {number} update Update value
     * @returns {string} Label
     */
    const installLabel = (update, version) => {
        const key = update === 0 ? 'reinstall' : update === 1 ? 'update' : update === -1 ? 'downgrade' : 'install';
        return mWindow.formatMessage(strings.versionLabels[key], { version });
    };

    const refreshInstallLinkStatus = async (link) => {
        if (!link?.isConnected) return;
        const version = link.getAttribute('data-script-version') || '';
        const name = link.getAttribute('data-script-name') || '';
        const namespace = link.getAttribute('data-script-namespace') || '';
        const id = Number(link.getAttribute('data-script-id')) || 0;
        if (!version || !name) return;

        setInstallControlState(link, installStatusState.pending);
        const status = await getInstalledStatus({ id, name, namespace });
        if (!link.isConnected) return;

        if (watchLateInstallStatus(link, version, status)) return;
        applyInstallStatus(link, version, status);
    };

    const setDebugTag = (element, type, enabled = true) => {
        if (!gmc.get('debugging')) return;
        const scriptLink = element?.querySelector?.('.script-link');
        if (!scriptLink) return;
        const className = `gfpp-debug-${type}`;
        const existing = scriptLink.querySelector(`.${className}`);
        if (!enabled) {
            existing?.remove();
            return;
        }
        if (existing) return;
        const tag = document.createElement('small');
        tag.className = `gfpp-debug-tag ${className}`;
        tag.textContent = `(${strings.debugLabels[type]})`;
        scriptLink.appendChild(tag);
    };

    const hideBlacklistedDiscussion = (element, list) => {
        if (list !== 'hiddenList') return;
        const scriptLink = element.querySelector('a.script-link[href]');
        const match = /\/scripts\/(\d+)/.exec(scriptLink?.getAttribute('href') || '');
        const scriptId = match ? Number(match[1]) : 0;
        if (scriptId > 0 && hiddenList.has(scriptId)) element.classList.add('hidden');
    };

    const hideBlacklistedScript = (element, list) => {
        if (!element) return;
        const scriptLink = element.querySelector('.script-link');
        const name = scriptLink?.textContent || '';
        const description = element.querySelector('.script-description')?.textContent || '';
        if (!name) return;

        if (list === 'nonLatins') {
            if ((nonLatins.test(name) || nonLatins.test(description)) && !element.classList.contains('blacklisted')) {
                element.classList.add('blacklisted', 'non-latins');
                setDebugTag(element, 'nonLatin');
            }
            return;
        }
        if (list === 'blacklist') {
            if (isBlackList(name, description) && !element.classList.contains('blacklisted')) {
                element.classList.add('blacklisted', 'blacklist');
                setDebugTag(element, 'blacklist');
            }
            return;
        }
        if (list === 'customBlacklist') {
            if ((customBlacklistRF(name) >= 0 || customBlacklistRF(description) >= 0) && !element.classList.contains('blacklisted')) {
                element.classList.add('blacklisted', 'custom-blacklist');
                setDebugTag(element, 'customBlacklist');
            }
        }
    };

    const hideHiddenScript = (element, id) => {
        const scriptId = Number(id);
        if (!element || !Number.isInteger(scriptId) || scriptId <= 0) return;

        const isHidden = () => hiddenList.has(scriptId);
        const applyState = (hidden) => {
            element.classList.toggle('hidden', hidden);
            setDebugTag(element, 'hidden', hidden);
            for (const button of element.querySelectorAll('.gfpp-block-button')) {
                button.textContent = blockLabel(hidden);
                button.setAttribute('aria-pressed', String(hidden));
            }
        };

        applyState(isHidden());
        if (element.querySelector('.gfpp-block-button')) return;

        const target = element.querySelector('.badge-js, .badge-css') || element.querySelector('header h2');
        if (!target) return;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `block-button gfpp-block-button${target.matches('header h2') ? ' gfpp-block-button--header' : ''}`;
        button.textContent = blockLabel(isHidden());
        button.setAttribute('aria-pressed', String(isHidden()));
        target.after(button);

        button.addEventListener('click', async event => {
            event.preventDefault();
            event.stopPropagation();
            if (isHidden()) hiddenList.delete(scriptId);
            else hiddenList.add(scriptId);
            await GMA.setValue('hiddenList', [...hiddenList].sort((a, b) => a - b));
            applyState(isHidden());
        });
    };

    const insertAfter = (element, selector, node) => {
        const target = element?.querySelector?.(selector);
        if (!target || !node) return null;
        target.after(node);
        return node;
    };

    const addInstallButton = (element, url) => {
        const button = document.createElement('a');
        button.className = 'install-link gfpp-install-link';
        button.href = url;
        return setupInstallLink(insertAfter(element, '.badge-js, .badge-css', button));
    };

    const encodeFileName = (s) => {
        if (!s || typeof s !== 'string') return s;
        s = s.replace(/[.!~*'"();\/\\?@&=$,#]/g, '-').replace(/\s+/g, ' ');
        return encodeURI(s);
    }

    const isLibraryURLWithVersion = (url) => {
        if (!url || typeof url !== 'string') return;

        if (url.includes('.js?version=')) return true;

        if (/\/scripts\/\d+\/\d+\/[^.!~*'"();\/\\?@&=$,#]+\.js/.test(url)) return true;
        return false;

    }

    const showInstallButton = async (scriptID, element) => {
        await getRafPromise();
        let baseScript = null;

        if (element.nodeName === 'LI' && element.getAttribute('data-script-id') === String(scriptID) && element.getAttribute('data-script-language') === 'js') {
            const version = element.getAttribute('data-script-version') || '';
            let codeUrl = element.getAttribute('data-code-url');
            if (!codeUrl || !isValidURL(codeUrl)) {
                const name = element.getAttribute('data-script-name') || '';
                const filename = element.getAttribute('data-script-type') === 'library'
                    ? `${encodeFileName(name)}.js`
                    : `${encodeFileName(name)}.user.js`;
                codeUrl = `https://update.${location.hostname}/scripts/${scriptID}/${filename}`;
            }
            baseScript = {
                id: Number(scriptID),
                name: element.getAttribute('data-script-name') || '',
                namespace: element.getAttribute('data-script-namespace') || '',
                code_url: codeUrl,
                version
            };
        } else {
            baseScript = await getScriptData(scriptID);
        }

        const codeUrl = baseScript?.code_url || '';
        if (!codeUrl) return;

        const isLibrary = element.getAttribute('data-script-type') === 'library' || codeUrl.includes('.js?version=');
        if (isLibrary) {
            let libraryUrl = element.getAttribute('data-code-url');
            if (!libraryUrl || !isValidURL(libraryUrl)) {
                const script = codeUrl.includes('.js?version=') ? baseScript : await getScriptData(scriptID);
                libraryUrl = script?.code_url || '';
            }
            if (!libraryUrl || !isLibraryURLWithVersion(libraryUrl)) return;

            const button = addInstallButton(element, fixLibraryCodeURL(libraryUrl));
            if (!button) return;
            button.textContent = strings.actions.copyUrl;
            button.addEventListener('click', event => {
                event.preventDefault();
                void copyText(button.href);
            });
            return;
        }

        if (!baseScript.version) return;
        const button = addInstallButton(element, codeUrl);
        if (!button) return;
        setInstallControlState(button, installStatusState.pending);

        const script = baseScript.name && baseScript.namespace ? baseScript : await getScriptData(scriptID);
        if (!script) {
            applyInstallStatus(button, baseScript.version, { state: installStatusState.error, version: '' });
            return;
        }

        const version = baseScript.version && script.version && compareVersions(baseScript.version, script.version) === 1
            ? baseScript.version
            : (script.version || baseScript.version);
        const status = await getInstalledStatus(script);

        if (watchLateInstallStatus(button, version, status)) return;
        applyInstallStatus(button, version, status);
    };



    const foundScriptList = async (scriptList) => {

        // add options and style for blacklisted/hidden scripts
        if (gmc.get('hideBlacklistedScripts') || gmc.get('hideHiddenScript')) {
            addOptions(scriptList);
        }

        mutationRunner(() => {
            if (!scriptList || scriptList.isConnected !== true) return;
            const scriptElements = scriptList.querySelectorAll('li[data-script-id]:not([data-gfpp-processed])');
            for (const element of scriptElements) {
                element.setAttribute('data-gfpp-processed', '1');

                const scriptID = +element.getAttribute('data-script-id');
                if (!(scriptID > 0)) continue;

                // filtered scripts
                if (gmc.get('hideBlacklistedScripts')) {
                    if (gmc.get('nonLatins')) hideBlacklistedScript(element, 'nonLatins');
                    if (gmc.get('blacklist')) hideBlacklistedScript(element, 'blacklist');
                    if (gmc.get('customBlacklist')) hideBlacklistedScript(element, 'customBlacklist');
                }

                // hidden scripts
                if (gmc.get('hideHiddenScript')) hideHiddenScript(element, scriptID);

                // install button
                if (gmc.get('showInstallButton')) {
                    void showInstallButton(scriptID, element).catch(error => UU.warn(error));
                }

            }

        }, scriptList, { subtree: true, childList: true });

    }

    const getDiscussionId = (element) => {
        const href = element.querySelector('a.discussion-title[href*="/discussions/"]')?.getAttribute('href') || '';
        const match = /\/discussions\/(\d+)/.exec(href);
        return match ? Number(match[1]) : 0;
    };

    const getReportUrl = (discussionId) => {
        const localeMatch = /^\/([a-z]{2,3}(?:-[A-Za-z0-9]{2,3})?)\//.exec(location.pathname);
        const prefix = localeMatch ? `/${localeMatch[1]}` : '';
        return new URL(`${prefix}/reports/new?item_class=discussion&item_id=${discussionId}`, location.origin).href;
    };

    const addReportButton = (element) => {
        if (element.querySelector('.discussion-list-item-report-comment')) return;
        const discussionId = getDiscussionId(element);
        const meta = element.querySelector('div.discussion-meta');
        if (!meta || discussionId <= 0) return;

        let container = meta.querySelector('.gfpp-additional-buttons');
        if (!container) {
            container = document.createElement('span');
            container.className = 'gfpp-additional-buttons';
            meta.appendChild(container);
        }
        const button = document.createElement('a');
        button.className = 'discussion-list-item-report-comment';
        button.textContent = strings.actions.reportComment;
        button.href = getReportUrl(discussionId);
        container.appendChild(button);
    };

    const processRecentUser = (element) => {
        if (valHideRecentUsersWithin <= 0) return;
        const href = element.querySelector('a.user-link[href*="/users/"]')?.getAttribute('href') || '';
        const match = /\/users\/(\d+)/.exec(href);
        const userId = match ? Number(match[1]) : 0;
        if (userId <= 0) return;
        void determineRecentUserAsync(userId).then(isRecent => {
            if (element.isConnected) element.classList.toggle('discussion-item-by-recent-user', isRecent);
        });
    };

    const observeDiscussionList = (discussionsList, { hideHidden = false } = {}) => {
        if (valHideRecentUsersWithin > 0) {
            targetHiddenRecentDateTime = Date.now() - valHideRecentUsersWithin * 3600000;
        }
        mutationRunner(() => {
            if (!discussionsList?.isConnected) return;
            const elements = discussionsList.querySelectorAll('.discussion-list-item:not([data-gfpp-processed])');
            for (const element of elements) {
                element.setAttribute('data-gfpp-processed', '1');
                if (hideHidden && gmc.get('hideHiddenScript')) hideBlacklistedDiscussion(element, 'hiddenList');
                processRecentUser(element);
                addReportButton(element);
            }
        }, discussionsList, { subtree: true, childList: true });
    };

    const foundDiscussionList = (discussionsList) => observeDiscussionList(discussionsList, { hideHidden: true });
    const foundScriptDiscussionList = (discussionsList) => observeDiscussionList(discussionsList);

    let promiseScriptCheckResolve = null;
    const promiseScriptCheck = new Promise(resolve => {
        promiseScriptCheckResolve = resolve
    });

    const milestoneNotificationFn = async (o) => {

        const { userID } = o;

        const milestones = [...new Set(String(gmc.get('milestoneNotification') || '').split(',').map(Number).filter(value => Number.isFinite(value) && value > 0))].sort((a, b) => a - b);

        if (!userID) return;

        await new Promise(resolve => setTimeout(resolve, 800)); // delay for reducing server burden
        await getRafPromise(); // yield to the next frame

        const userMatch = /\/users\/(\d+)/.exec(String(userID));
        const userData = userMatch ? await getUserData(Number(userMatch[1])) : null;
        if (!userData) return;

        const [totalInstalls, lastMilestone] = await Promise.all([
            getTotalInstalls(userData),
            GMA.getValue('lastMilestone', 0)]);

        const milestone = milestones.filter(milestone => totalInstalls >= milestone).pop();

        UU.log(`total installs are "${totalInstalls}", milestone reached is "${milestone}", last milestone reached is "${lastMilestone}"`);

        if (milestone <= lastMilestone) return;

        if (milestone && milestone >= 0) {

            await GMA.setValue('lastMilestone', milestone);

            const text = locale.milestone.replace('$1', milestone.toLocaleString(lang || undefined));

            if (typeof GM.notification === 'function') {
                GM.notification({
                    text,
                    title: GM.info.script.name,
                    image: logo,
                    onclick: () => {
                        window.location = `https://${window.location.hostname}${userID}#user-script-list-section`;
                    }
                });
            } else {
                UU.alert(text);
            }

        }

    }
    const onReady = async () => {

        try {

            const gminfo = GM.info || 0;
            if (gminfo) {

                const gminfoscript = gminfo.script || 0;

                const scriptHandlerObject = {
                    scriptHandler: gminfo.scriptHandler || '',
                    scriptName: gminfoscript.name || '', // not name_i18n
                    scriptVersion: gminfoscript.version || '',
                    scriptNamespace: gminfoscript.namespace || '',
                    communicationId
                };

                wincomm.hook('_$GreasyFork$Msg$OnScriptInstallFeedback',
                    {
                        ready: (d, evt) => promiseScriptCheckResolve(d),
                        userScriptManagerNotDetected: (d, evt) => promiseScriptCheckResolve(null),
                        'installedVersion.res': wincomm.handleResponse
                    });

                document.head.appendChild(document.createElement('script')).textContent = `;(${mWindow.contentScriptText})(${JSON.stringify(scriptHandlerObject)}, ${WinComm.createInstance});`;

            }

            addSettingsToMenu();

            setTimeout(() => {
                getRafPromise().then(() => {
                    const installBtn = document.querySelector('a[data-script-id][data-script-version]')
                    const scriptID = installBtn && installBtn.textContent ? +installBtn.getAttribute('data-script-id') : 0;
                    if (scriptID > 0) {
                        getScriptData(scriptID, true);
                    } else {
                        const userLink = document.querySelector('#site-nav .user-profile-link a[href]');
                        let userID = userLink ? userLink.getAttribute('href') : '';
                        userID = userID ? /users\/(\d+)/.exec(userID) : null;
                        if (userID) userID = userID[1];
                        if (userID) {
                            userID = +userID;
                            if (userID > 0) {
                                getUserData(userID, true);
                            }
                        }
                    }
                });
            }, 740);

            const userLink = document.querySelector('.user-profile-link a[href]');
            const userID = userLink ? userLink.getAttribute('href') : undefined;

            const urlMatch = (url1, url2) => {
                url1 = `${url1}`
                url2 = `${url2}`;
                if (url1.includes(location.hostname)) {
                    url1 = url1.replace(`https://${location.hostname}/`, '/')
                    url1 = url1.replace(`http://${location.hostname}/`, '/')
                    url1 = url1.replace(/^\/+/, '/')
                } else if (!url1.startsWith('/')) {
                    url1 = `/${url1}`;
                }
                if (url2.includes(location.hostname)) {
                    url2 = url2.replace(`https://${location.hostname}/`, '/')
                    url2 = url2.replace(`http://${location.hostname}/`, '/')
                    url2 = url2.replace(/^\/+/, '/')
                } else if (!url2.startsWith('/')) {
                    url2 = `/${url2}`;
                }
                url1 = url1.replace(/\?\w+=\w+(&\w+=\w+)*$/, '');
                url2 = url2.replace(/\?\w+=\w+(&\w+=\w+)*$/, '');
                return url1.toLowerCase() === url2.toLowerCase();
            }

            UU.addStyle(mWindow.pageCSS);


            const elementLookup = (selector, fn) => {
                const elm0 = document.querySelector(selector);
                if (elm0) {
                    fn(elm0);
                } else {
                    const timeout = Date.now() + 3000;
                    (new MutationObserver((_, observer) => {
                        const elm = document.querySelector(selector);
                        if (elm && elm.childElementCount >= 1) {
                            observer.disconnect();
                            observer.takeRecords();
                            fn(elm);
                        } else if (Date.now() > timeout) {
                            observer.disconnect();
                            observer.takeRecords();
                        }
                    })).observe(document, { subtree: true, childList: true });
                }
            };

            // blacklisted scripts / hidden scripts / install button

            const isPageScriptBySite = location.pathname.includes('/scripts/by-site/');
            const isPageUnderScript = isPageScriptBySite ? false : location.pathname.includes('/scripts/');
            const pageType_ = isPageScriptBySite ? 'scripts' : /\/([a-z-]+)$/.exec(location.pathname);
            const pageType = typeof pageType_ === 'string' ? pageType_ : (pageType_ ? pageType_[1] : '');
            const isDiscussionListPage = !isPageUnderScript && (pageType === 'discussions' || (pageType_ && /\/discussions\/[a-z-]+$/.test(location.pathname)));
            const isFeedbackListPage = isPageUnderScript && pageType === 'feedback';
            const isScriptListPage = !isPageUnderScript && pageType === 'scripts';
            const isUserIDPage = !isPageUnderScript && urlMatch(window.location.pathname, userID);
            if (!isUserIDPage && !isDiscussionListPage && !isFeedbackListPage && (gmc.get('hideBlacklistedScripts') || gmc.get('hideHiddenScript') || gmc.get('showInstallButton'))) {

                if (isScriptListPage) {
                    elementLookup('.script-list', foundScriptList);
                } else if (isPageUnderScript) {

                    // hidden scripts on details page
                    const installLinkElement = document.querySelector('#script-info .install-link[data-script-id]');

                    if (installLinkElement) {
                        setupInstallLink(installLinkElement);
                        if (gmc.get('hideHiddenScript')) {
                            const id = +installLinkElement.getAttribute('data-script-id');
                            hideHiddenScript(document.querySelector('#script-info'), id);
                        }
                        installLinkElement.addEventListener('click', async event => {
                            if (!event?.isTrusted || !location.pathname.includes('/scripts/')) return;
                            if (
                                installLinkElement.getAttribute('data-gfpp-install-status') === 'pending'
                                || installLinkElement.hasAttribute('data-gfpp-status-refresh')
                            ) return;

                            installLinkElement.setAttribute('data-gfpp-status-refresh', '');
                            try {
                                await delay(900);
                                await getRafPromise();

                                if (installLinkElement.getAttribute('data-gfpp-install-status') !== 'pending') {
                                    await refreshInstallLinkStatus(installLinkElement);
                                }
                            } finally {
                                installLinkElement.removeAttribute('data-gfpp-status-refresh');
                            }
                        });
                    }


                }

            } else if (isDiscussionListPage) {
                elementLookup('.discussion-list', foundDiscussionList);
            } else if (isFeedbackListPage) {
                elementLookup('.script-discussion-list', foundScriptDiscussionList);
            }

            // total installs
            if (gmc.get('showTotalInstalls') && document.querySelector('#user-script-list')) {
                const parseCount = (element) => {
                    const value = Number.parseInt(String(element?.textContent || '').replace(/\D/g, ''), 10);
                    return Number.isFinite(value) ? value : 0;
                };
                const sumElements = (selector) => [...document.querySelectorAll(selector)].reduce((sum, element) => sum + parseCount(element), 0);
                const dailyInstallsSum = sumElements('#user-script-list li dd.script-list-daily-installs');
                const totalInstallsSum = sumElements('#user-script-list li dd.script-list-total-installs');

                const convertLi = (li) => {
                    if (!li) return null;
                    const a = li.firstElementChild
                    if (a === null) return li;
                    if (a === li.lastElementChild && a.nodeName === 'A') return a;
                    return null;
                }

                const plusSign = document.querySelector('#user-script-list-section a[rel="next"][href*="page="], #user-script-list-section a[rel="prev"][href*="page="]') ? '+' : '';

                const dailyOption = convertLi(document.querySelector('#script-list-sort .list-option:nth-child(1)'));
                if (dailyOption) dailyOption.append(document.createTextNode(` (${dailyInstallsSum.toLocaleString(lang || undefined)}${plusSign})`));

                const totalOption = convertLi(document.querySelector('#script-list-sort .list-option:nth-child(2)'));
                if (totalOption) totalOption.append(document.createTextNode(` (${totalInstallsSum.toLocaleString(lang || undefined)}${plusSign})`));
            }

            // milestone notification
            if (gmc.get('milestoneNotification')) {
                void milestoneNotificationFn({ userID }).catch(error => UU.warn(error));
            }

            if (isScriptFirstUse) GMA.setValue('firstUse', false).then(() => {
                gmc.open();
            });

            if (fixLibraryScriptCodeLink) {

                const xpath = "//code[contains(text(), '.js?version=') or contains(text(), '// @require https://')]";
                const snapshot = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

                for (let i = 0; i < snapshot.snapshotLength; i++) {
                    let element = snapshot.snapshotItem(i);
                    if (element.firstElementChild) continue;
                    element.textContent = element.textContent.replace(/\bhttps:\/\/(cn-greasyfork|greasyfork|sleazyfork)\.org\/scripts\/\d+-[^/]+\/code\/[^.]+\.js\?version=\d+\b/, (_) => {
                        return fixLibraryCodeURL(_);
                    });
                    element.parentNode.insertBefore(document.createTextNode('\u200B'), element);
                    element.style.display = 'inline-flex';
                    setClickToSelect(element);
                }

            }

            if (addAdditionInfoLengthHint && location.pathname.includes('/scripts/') && location.pathname.includes('/versions')) {
                const maxLength = 50000;
                const contentLength = text => String(text || '').replace(/\n/g, '  ').length;
                for (const textarea of document.querySelectorAll('textarea[id^="script-version-additional-info"]')) {
                    if (textarea.nextElementSibling?.classList.contains('script-version-ainfo-span')) continue;
                    const counter = document.createElement('span');
                    counter.className = 'script-version-ainfo-span';
                    counter.setAttribute('aria-live', 'polite');
                    const update = () => {
                        counter.textContent = mWindow.formatMessage(strings.messages.textLength, {
                            current: contentLength(textarea.value).toLocaleString(lang || undefined),
                            max: maxLength.toLocaleString(lang || undefined)
                        });
                    };
                    textarea.addEventListener('input', update, { passive: true });
                    update();
                    textarea.after(counter);
                }
            }

        } catch (error) {
            UU.error(error);
        }

    }

    Promise.resolve().then(() => {
        if (document.readyState !== 'loading') {
            onReady();
        } else {
            window.addEventListener("DOMContentLoaded", onReady, false);
        }
    });

})();
