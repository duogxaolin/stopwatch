(() => { var e = { 7007: () => { var e = document.getElementById("dark"),
                    t = document.getElementById("light"),
                    n = document.documentElement,
                    r = function() { e.classList.add("hidden"), t.classList.remove("hidden"), localStorage.setItem("theme", "dark"), n.setAttribute("data-theme", "night") },
                    a = function() { e.classList.remove("hidden"), t.classList.add("hidden"), localStorage.setItem("theme", "light"), n.setAttribute("data-theme", "winter") };
                e.addEventListener("click", (function() { r() })), t.addEventListener("click", (function() { a() })), "theme" in localStorage && "light" === localStorage.getItem("theme") ? a() : r() }, 4353: function(e) { e.exports = function() { "use strict"; var e = 1e3,
                        t = 6e4,
                        n = 36e5,
                        r = "millisecond",
                        a = "second",
                        i = "minute",
                        _ = "hour",
                        s = "day",
                        u = "week",
                        o = "month",
                        d = "quarter",
                        m = "year",
                        l = "date",
                        c = "Invalid Date",
                        M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                        f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                        Y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(e) { var t = ["th", "st", "nd", "rd"],
                                    n = e % 100; return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]" } },
                        h = function(e, t, n) { var r = String(e); return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e },
                        p = { s: h, z: function(e) { var t = -e.utcOffset(),
                                    n = Math.abs(t),
                                    r = Math.floor(n / 60),
                                    a = n % 60; return (t <= 0 ? "+" : "-") + h(r, 2, "0") + ":" + h(a, 2, "0") }, m: function e(t, n) { if (t.date() < n.date()) return -e(n, t); var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                    a = t.clone().add(r, o),
                                    i = n - a < 0,
                                    _ = t.clone().add(r + (i ? -1 : 1), o); return +(-(r + (n - a) / (i ? a - _ : _ - a)) || 0) }, a: function(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }, p: function(e) { return { M: o, y: m, w: u, d: s, D: l, h: _, m: i, s: a, ms: r, Q: d }[e] || String(e || "").toLowerCase().replace(/s$/, "") }, u: function(e) { return void 0 === e } },
                        L = "en",
                        y = {};
                    y[L] = Y; var v = "$isDayjsObject",
                        k = function(e) { return e instanceof S || !(!e || !e[v]) },
                        D = function e(t, n, r) { var a; if (!t) return L; if ("string" == typeof t) { var i = t.toLowerCase();
                                y[i] && (a = i), n && (y[i] = n, a = i); var _ = t.split("-"); if (!a && _.length > 1) return e(_[0]) } else { var s = t.name;
                                y[s] = t, a = s } return !r && a && (L = a), a || !r && L },
                        g = function(e, t) { if (k(e)) return e.clone(); var n = "object" == typeof t ? t : {}; return n.date = e, n.args = arguments, new S(n) },
                        H = p;
                    H.l = D, H.i = k, H.w = function(e, t) { return g(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset }) }; var S = function() {
                            function Y(e) { this.$L = D(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[v] = !0 } var h = Y.prototype; return h.parse = function(e) { this.$d = function(e) { var t = e.date,
                                        n = e.utc; if (null === t) return new Date(NaN); if (H.u(t)) return new Date; if (t instanceof Date) return new Date(t); if ("string" == typeof t && !/Z$/i.test(t)) { var r = t.match(M); if (r) { var a = r[2] - 1 || 0,
                                                i = (r[7] || "0").substring(0, 3); return n ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i) } } return new Date(t) }(e), this.init() }, h.init = function() { var e = this.$d;
                                this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds() }, h.$utils = function() { return H }, h.isValid = function() { return !(this.$d.toString() === c) }, h.isSame = function(e, t) { var n = g(e); return this.startOf(t) <= n && n <= this.endOf(t) }, h.isAfter = function(e, t) { return g(e) < this.startOf(t) }, h.isBefore = function(e, t) { return this.endOf(t) < g(e) }, h.$g = function(e, t, n) { return H.u(e) ? this[t] : this.set(n, e) }, h.unix = function() { return Math.floor(this.valueOf() / 1e3) }, h.valueOf = function() { return this.$d.getTime() }, h.startOf = function(e, t) { var n = this,
                                    r = !!H.u(t) || t,
                                    d = H.p(e),
                                    c = function(e, t) { var a = H.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n); return r ? a : a.endOf(s) },
                                    M = function(e, t) { return H.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n) },
                                    f = this.$W,
                                    Y = this.$M,
                                    h = this.$D,
                                    p = "set" + (this.$u ? "UTC" : ""); switch (d) {
                                    case m:
                                        return r ? c(1, 0) : c(31, 11);
                                    case o:
                                        return r ? c(1, Y) : c(0, Y + 1);
                                    case u:
                                        var L = this.$locale().weekStart || 0,
                                            y = (f < L ? f + 7 : f) - L; return c(r ? h - y : h + (6 - y), Y);
                                    case s:
                                    case l:
                                        return M(p + "Hours", 0);
                                    case _:
                                        return M(p + "Minutes", 1);
                                    case i:
                                        return M(p + "Seconds", 2);
                                    case a:
                                        return M(p + "Milliseconds", 3);
                                    default:
                                        return this.clone() } }, h.endOf = function(e) { return this.startOf(e, !1) }, h.$set = function(e, t) { var n, u = H.p(e),
                                    d = "set" + (this.$u ? "UTC" : ""),
                                    c = (n = {}, n[s] = d + "Date", n[l] = d + "Date", n[o] = d + "Month", n[m] = d + "FullYear", n[_] = d + "Hours", n[i] = d + "Minutes", n[a] = d + "Seconds", n[r] = d + "Milliseconds", n)[u],
                                    M = u === s ? this.$D + (t - this.$W) : t; if (u === o || u === m) { var f = this.clone().set(l, 1);
                                    f.$d[c](M), f.init(), this.$d = f.set(l, Math.min(this.$D, f.daysInMonth())).$d } else c && this.$d[c](M); return this.init(), this }, h.set = function(e, t) { return this.clone().$set(e, t) }, h.get = function(e) { return this[H.p(e)]() }, h.add = function(r, d) { var l, c = this;
                                r = Number(r); var M = H.p(d),
                                    f = function(e) { var t = g(c); return H.w(t.date(t.date() + Math.round(e * r)), c) }; if (M === o) return this.set(o, this.$M + r); if (M === m) return this.set(m, this.$y + r); if (M === s) return f(1); if (M === u) return f(7); var Y = (l = {}, l[i] = t, l[_] = n, l[a] = e, l)[M] || 1,
                                    h = this.$d.getTime() + r * Y; return H.w(h, this) }, h.subtract = function(e, t) { return this.add(-1 * e, t) }, h.format = function(e) { var t = this,
                                    n = this.$locale(); if (!this.isValid()) return n.invalidDate || c; var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                    a = H.z(this),
                                    i = this.$H,
                                    _ = this.$m,
                                    s = this.$M,
                                    u = n.weekdays,
                                    o = n.months,
                                    d = n.meridiem,
                                    m = function(e, n, a, i) { return e && (e[n] || e(t, r)) || a[n].slice(0, i) },
                                    l = function(e) { return H.s(i % 12 || 12, e, "0") },
                                    M = d || function(e, t, n) { var r = e < 12 ? "AM" : "PM"; return n ? r.toLowerCase() : r }; return r.replace(f, (function(e, r) { return r || function(e) { switch (e) {
                                            case "YY":
                                                return String(t.$y).slice(-2);
                                            case "YYYY":
                                                return H.s(t.$y, 4, "0");
                                            case "M":
                                                return s + 1;
                                            case "MM":
                                                return H.s(s + 1, 2, "0");
                                            case "MMM":
                                                return m(n.monthsShort, s, o, 3);
                                            case "MMMM":
                                                return m(o, s);
                                            case "D":
                                                return t.$D;
                                            case "DD":
                                                return H.s(t.$D, 2, "0");
                                            case "d":
                                                return String(t.$W);
                                            case "dd":
                                                return m(n.weekdaysMin, t.$W, u, 2);
                                            case "ddd":
                                                return m(n.weekdaysShort, t.$W, u, 3);
                                            case "dddd":
                                                return u[t.$W];
                                            case "H":
                                                return String(i);
                                            case "HH":
                                                return H.s(i, 2, "0");
                                            case "h":
                                                return l(1);
                                            case "hh":
                                                return l(2);
                                            case "a":
                                                return M(i, _, !0);
                                            case "A":
                                                return M(i, _, !1);
                                            case "m":
                                                return String(_);
                                            case "mm":
                                                return H.s(_, 2, "0");
                                            case "s":
                                                return String(t.$s);
                                            case "ss":
                                                return H.s(t.$s, 2, "0");
                                            case "SSS":
                                                return H.s(t.$ms, 3, "0");
                                            case "Z":
                                                return a } return null }(e) || a.replace(":", "") })) }, h.utcOffset = function() { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, h.diff = function(r, l, c) { var M, f = this,
                                    Y = H.p(l),
                                    h = g(r),
                                    p = (h.utcOffset() - this.utcOffset()) * t,
                                    L = this - h,
                                    y = function() { return H.m(f, h) }; switch (Y) {
                                    case m:
                                        M = y() / 12; break;
                                    case o:
                                        M = y(); break;
                                    case d:
                                        M = y() / 3; break;
                                    case u:
                                        M = (L - p) / 6048e5; break;
                                    case s:
                                        M = (L - p) / 864e5; break;
                                    case _:
                                        M = L / n; break;
                                    case i:
                                        M = L / t; break;
                                    case a:
                                        M = L / e; break;
                                    default:
                                        M = L } return c ? M : H.a(M) }, h.daysInMonth = function() { return this.endOf(o).$D }, h.$locale = function() { return y[this.$L] }, h.locale = function(e, t) { if (!e) return this.$L; var n = this.clone(),
                                    r = D(e, t, !0); return r && (n.$L = r), n }, h.clone = function() { return H.w(this.$d, this) }, h.toDate = function() { return new Date(this.valueOf()) }, h.toJSON = function() { return this.isValid() ? this.toISOString() : null }, h.toISOString = function() { return this.$d.toISOString() }, h.toString = function() { return this.$d.toUTCString() }, Y }(),
                        b = S.prototype; return g.prototype = b, [
                        ["$ms", r],
                        ["$s", a],
                        ["$m", i],
                        ["$H", _],
                        ["$W", s],
                        ["$M", o],
                        ["$y", m],
                        ["$D", l]
                    ].forEach((function(e) { b[e[1]] = function(t) { return this.$g(t, e[0], e[1]) } })), g.extend = function(e, t) { return e.$i || (e(t, S, g), e.$i = !0), g }, g.locale = D, g.isDayjs = k, g.unix = function(e) { return g(1e3 * e) }, g.en = y[L], g.Ls = y, g.p = {}, g }() }, 2338: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                        a = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
                        i = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
                        _ = { name: "ar", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), months: r, monthsShort: r, weekStart: 6, meridiem: function(e) { return e > 12 ? "م" : "ص" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: "ثانية واحدة", m: "دقيقة واحدة", mm: "%d دقائق", h: "ساعة واحدة", hh: "%d ساعات", d: "يوم واحد", dd: "%d أيام", M: "شهر واحد", MM: "%d أشهر", y: "عام واحد", yy: "%d أعوام" }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) { return i[e] })).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, (function(e) { return a[e] })).replace(/,/g, "،") }, ordinal: function(e) { return e }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } }; return n.default.locale(_, null, !0), _ }(n(4353)) }, 9990: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "bg", weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekStart: 1, ordinal: function(e) { var t = e % 100; if (t > 10 && t < 20) return e + "-ти"; var n = e % 10; return 1 === n ? e + "-ви" : 2 === n ? e + "-ри" : 7 === n || 8 === n ? e + "-ми" : e + "-ти" }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 9751: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e);

                    function r(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

                    function a(e, t, n, a) { var i = e + " "; switch (n) {
                            case "s":
                                return t || a ? "pár sekund" : "pár sekundami";
                            case "m":
                                return t ? "minuta" : a ? "minutu" : "minutou";
                            case "mm":
                                return t || a ? i + (r(e) ? "minuty" : "minut") : i + "minutami";
                            case "h":
                                return t ? "hodina" : a ? "hodinu" : "hodinou";
                            case "hh":
                                return t || a ? i + (r(e) ? "hodiny" : "hodin") : i + "hodinami";
                            case "d":
                                return t || a ? "den" : "dnem";
                            case "dd":
                                return t || a ? i + (r(e) ? "dny" : "dní") : i + "dny";
                            case "M":
                                return t || a ? "měsíc" : "měsícem";
                            case "MM":
                                return t || a ? i + (r(e) ? "měsíce" : "měsíců") : i + "měsíci";
                            case "y":
                                return t || a ? "rok" : "rokem";
                            case "yy":
                                return t || a ? i + (r(e) ? "roky" : "let") : i + "lety" } } var i = { name: "cs", weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) { return e + "." }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "před %s", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a } }; return n.default.locale(i, null, !0), i }(n(4353)) }, 2706: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "da", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"), weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"), months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"), weekStart: 1, ordinal: function(e) { return e + "." }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 494: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };

                    function a(e, t, n) { var a = r[n]; return Array.isArray(a) && (a = a[t ? 0 : 1]), a.replace("%d", e) } var i = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(e) { return e + "." }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a } }; return n.default.locale(i, null, !0), i }(n(4353)) }, 4072: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(e) { return e }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 7317: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e) { return e + "º" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 9964: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e);

                    function r(e, t, n, r) { var a = { s: "muutama sekunti", m: "minuutti", mm: "%d minuuttia", h: "tunti", hh: "%d tuntia", d: "päivä", dd: "%d päivää", M: "kuukausi", MM: "%d kuukautta", y: "vuosi", yy: "%d vuotta", numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_") },
                            i = { s: "muutaman sekunnin", m: "minuutin", mm: "%d minuutin", h: "tunnin", hh: "%d tunnin", d: "päivän", dd: "%d päivän", M: "kuukauden", MM: "%d kuukauden", y: "vuoden", yy: "%d vuoden", numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_") },
                            _ = r && !t ? i : a,
                            s = _[n]; return e < 10 ? s.replace("%d", _.numbers[e]) : s.replace("%d", e) } var a = { name: "fi", weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), ordinal: function(e) { return e + "." }, weekStart: 1, yearStart: 4, relativeTime: { future: "%s päästä", past: "%s sitten", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM[ta] YYYY", LLL: "D. MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [klo] HH.mm", llll: "ddd, D. MMM YYYY, [klo] HH.mm" } }; return n.default.locale(a, null, !0), a }(n(4353)) }, 813: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(e) { return e + (1 === e ? "er" : "") } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 2010: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: "%d שעות", hh2: "שעתיים", d: "יום", dd: "%d ימים", dd2: "יומיים", M: "חודש", MM: "%d חודשים", MM2: "חודשיים", y: "שנה", yy: "%d שנים", yy2: "שנתיים" };

                    function a(e, t, n) { return (r[n + (2 === e ? "2" : "")] || r[n]).replace("%d", e) } var i = { name: "he", weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"), months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"), relativeTime: { future: "בעוד %s", past: "לפני %s", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, ordinal: function(e) { return e }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" } }; return n.default.locale(i, null, !0), i }(n(4353)) }, 5811: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                        a = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
                        i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/,
                        _ = function(e, t) { return i.test(t) ? r[e.month()] : a[e.month()] };
                    _.s = a, _.f = r; var s = { name: "hr", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: _, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "za %s", past: "prije %s", s: "sekunda", m: "minuta", mm: "%d minuta", h: "sat", hh: "%d sati", d: "dan", dd: "%d dana", M: "mjesec", MM: "%d mjeseci", y: "godina", yy: "%d godine" }, ordinal: function(e) { return e + "." } }; return n.default.locale(s, null, !0), s }(n(4353)) }, 8298: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(e) { return e + "." }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(e, t, n, r) { return "néhány másodperc" + (r || t ? "" : "e") }, m: function(e, t, n, r) { return "egy perc" + (r || t ? "" : "e") }, mm: function(e, t, n, r) { return e + " perc" + (r || t ? "" : "e") }, h: function(e, t, n, r) { return "egy " + (r || t ? "óra" : "órája") }, hh: function(e, t, n, r) { return e + " " + (r || t ? "óra" : "órája") }, d: function(e, t, n, r) { return "egy " + (r || t ? "nap" : "napja") }, dd: function(e, t, n, r) { return e + " " + (r || t ? "nap" : "napja") }, M: function(e, t, n, r) { return "egy " + (r || t ? "hónap" : "hónapja") }, MM: function(e, t, n, r) { return e + " " + (r || t ? "hónap" : "hónapja") }, y: function(e, t, n, r) { return "egy " + (r || t ? "év" : "éve") }, yy: function(e, t, n, r) { return e + " " + (r || t ? "év" : "éve") } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 7420: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(e) { return e + "." } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 3900: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un' ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(e) { return e + "º" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 952: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "ja", weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e) { return e + "日" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiem: function(e) { return e < 12 ? "午前" : "午後" }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 8003: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "ko", weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), ordinal: function(e) { return e + "일" }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, meridiem: function(e) { return e < 12 ? "오전" : "오후" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 7205: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(e) { return e + "." }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 9423: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(e) { return "[" + e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") + "]" }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 3225: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e);

                    function r(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1 }

                    function a(e, t, n) { var a = e + " "; switch (n) {
                            case "m":
                                return t ? "minuta" : "minutę";
                            case "mm":
                                return a + (r(e) ? "minuty" : "minut");
                            case "h":
                                return t ? "godzina" : "godzinę";
                            case "hh":
                                return a + (r(e) ? "godziny" : "godzin");
                            case "MM":
                                return a + (r(e) ? "miesiące" : "miesięcy");
                            case "yy":
                                return a + (r(e) ? "lata" : "lat") } } var i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
                        _ = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
                        s = /D MMMM/,
                        u = function(e, t) { return s.test(t) ? i[e.month()] : _[e.month()] };
                    u.s = _, u.f = i; var o = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(e) { return e + "." }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: a, mm: a, h: a, hh: a, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: a, y: "rok", yy: a }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } }; return n.default.locale(o, null, !0), o }(n(4353)) }, 2369: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(e) { return e + "º" }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 4334: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "ro", weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "peste %s", past: "acum %s", s: "câteva secunde", m: "un minut", mm: "%d minute", h: "o oră", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lună", MM: "%d luni", y: "un an", yy: "%d ani" }, ordinal: function(e) { return e } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 2796: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                        a = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                        i = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                        _ = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),
                        s = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

                    function u(e, t, n) { var r, a; return "m" === n ? t ? "минута" : "минуту" : e + " " + (r = +e, a = { mm: t ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2]) } var o = function(e, t) { return s.test(t) ? r[e.month()] : a[e.month()] };
                    o.s = a, o.f = r; var d = function(e, t) { return s.test(t) ? i[e.month()] : _[e.month()] };
                    d.s = _, d.f = i; var m = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: o, monthsShort: d, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: u, mm: u, h: "час", hh: u, d: "день", dd: u, M: "месяц", MM: u, y: "год", yy: u }, ordinal: function(e) { return e }, meridiem: function(e) { return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера" } }; return n.default.locale(m, null, !0), m }(n(4353)) }, 6847: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e);

                    function r(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

                    function a(e, t, n, a) { var i = e + " "; switch (n) {
                            case "s":
                                return t || a ? "pár sekúnd" : "pár sekundami";
                            case "m":
                                return t ? "minúta" : a ? "minútu" : "minútou";
                            case "mm":
                                return t || a ? i + (r(e) ? "minúty" : "minút") : i + "minútami";
                            case "h":
                                return t ? "hodina" : a ? "hodinu" : "hodinou";
                            case "hh":
                                return t || a ? i + (r(e) ? "hodiny" : "hodín") : i + "hodinami";
                            case "d":
                                return t || a ? "deň" : "dňom";
                            case "dd":
                                return t || a ? i + (r(e) ? "dni" : "dní") : i + "dňami";
                            case "M":
                                return t || a ? "mesiac" : "mesiacom";
                            case "MM":
                                return t || a ? i + (r(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                            case "y":
                                return t || a ? "rok" : "rokom";
                            case "yy":
                                return t || a ? i + (r(e) ? "roky" : "rokov") : i + "rokmi" } } var i = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) { return e + "." }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a } }; return n.default.locale(i, null, !0), i }(n(4353)) }, 5616: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { words: { m: ["jedan minut", "jednog minuta"], mm: ["%d minut", "%d minuta", "%d minuta"], h: ["jedan sat", "jednog sata"], hh: ["%d sat", "%d sata", "%d sati"], d: ["jedan dan", "jednog dana"], dd: ["%d dan", "%d dana", "%d dana"], M: ["jedan mesec", "jednog meseca"], MM: ["%d mesec", "%d meseca", "%d meseci"], y: ["jednu godinu", "jedne godine"], yy: ["%d godinu", "%d godine", "%d godina"] }, correctGrammarCase: function(e, t) { return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2] }, relativeTimeFormatter: function(e, t, n, a) { var i = r.words[n]; if (1 === n.length) return "y" === n && t ? "jedna godina" : a || t ? i[0] : i[1]; var _ = r.correctGrammarCase(e, i); return "yy" === n && t && "%d godinu" === _ ? e + " godina" : _.replace("%d", e) } },
                        a = { name: "sr", weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"), weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"), monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"), weekStart: 1, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: r.relativeTimeFormatter, mm: r.relativeTimeFormatter, h: r.relativeTimeFormatter, hh: r.relativeTimeFormatter, d: r.relativeTimeFormatter, dd: r.relativeTimeFormatter, M: r.relativeTimeFormatter, MM: r.relativeTimeFormatter, y: r.relativeTimeFormatter, yy: r.relativeTimeFormatter }, ordinal: function(e) { return e + "." }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } }; return n.default.locale(a, null, !0), a }(n(4353)) }, 1340: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "sv", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) { var t = e % 10; return "[" + e + (1 === t || 2 === t ? "a" : "e") + "]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 7081: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "th", weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }, ordinal: function(e) { return e + "." } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 4895: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(e) { return e + "." } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 4173: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                        a = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                        i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

                    function _(e, t, n) { var r, a; return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (r = +e, a = { ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: t ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[n].split("_"), r % 10 == 1 && r % 100 != 11 ? a[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? a[1] : a[2]) } var s = function(e, t) { return i.test(t) ? r[e.month()] : a[e.month()] };
                    s.s = a, s.f = r; var u = { name: "uk", weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: s, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: _, mm: _, h: _, hh: _, d: "день", dd: _, M: "місяць", MM: _, y: "рік", yy: _ }, ordinal: function(e) { return e }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" } }; return n.default.locale(u, null, !0), u }(n(4353)) }, 860: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(e) { return e }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 6033: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e, t) { return "W" === t ? e + "周" : e + "日" }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e, t) { var n = 100 * e + t; return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1100 ? "上午" : n < 1300 ? "中午" : n < 1800 ? "下午" : "晚上" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 1349: function(e, t, n) { e.exports = function(e) { "use strict";

                    function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var n = t(e),
                        r = { name: "zh-tw", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e, t) { return "W" === t ? e + "週" : e + "日" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }, meridiem: function(e, t) { var n = 100 * e + t; return n < 600 ? "凌晨" : n < 900 ? "早上" : n < 1100 ? "上午" : n < 1300 ? "中午" : n < 1800 ? "下午" : "晚上" } }; return n.default.locale(r, null, !0), r }(n(4353)) }, 7381: function(e) { e.exports = function() { "use strict"; return function(e, t) { var n = t.prototype,
                            r = n.format;
                        n.format = function(e) { var t = this,
                                n = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/(\[[^\]]+])|BBBB|BB/g, (function(e, n) { var r, a = String(t.$y + 543),
                                        i = "BB" === e ? [a.slice(-2), 2] : [a, 4]; return n || (r = t.$utils()).s.apply(r, i.concat(["0"])) })); return r.bind(this)(n) } } }() }, 8569: function(e) { e.exports = function() { "use strict"; var e = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
                        t = {}; return function(n, r, a) { var i, _ = function(e, n, r) { void 0 === r && (r = {}); var a = new Date(e),
                                    i = function(e, n) { void 0 === n && (n = {}); var r = n.timeZoneName || "short",
                                            a = e + "|" + r,
                                            i = t[a]; return i || (i = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: r }), t[a] = i), i }(n, r); return i.formatToParts(a) },
                            s = function(t, n) { for (var r = _(t, n), i = [], s = 0; s < r.length; s += 1) { var u = r[s],
                                        o = u.type,
                                        d = u.value,
                                        m = e[o];
                                    m >= 0 && (i[m] = parseInt(d, 10)) } var l = i[3],
                                    c = 24 === l ? 0 : l,
                                    M = i[0] + "-" + i[1] + "-" + i[2] + " " + c + ":" + i[4] + ":" + i[5] + ":000",
                                    f = +t; return (a.utc(M).valueOf() - (f -= f % 1e3)) / 6e4 },
                            u = r.prototype;
                        u.tz = function(e, t) { void 0 === e && (e = i); var n = this.utcOffset(),
                                r = this.toDate(),
                                _ = r.toLocaleString("en-US", { timeZone: e }),
                                s = Math.round((r - new Date(_)) / 1e3 / 60),
                                u = a(_, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r.getTimezoneOffset() / 15) - s, !0); if (t) { var o = u.utcOffset();
                                u = u.add(n - o, "minute") } return u.$x.$timezone = e, u }, u.offsetName = function(e) { var t = this.$x.$timezone || a.tz.guess(),
                                n = _(this.valueOf(), t, { timeZoneName: e }).find((function(e) { return "timezonename" === e.type.toLowerCase() })); return n && n.value }; var o = u.startOf;
                        u.startOf = function(e, t) { if (!this.$x || !this.$x.$timezone) return o.call(this, e, t); var n = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L }); return o.call(n, e, t).tz(this.$x.$timezone, !0) }, a.tz = function(e, t, n) { var r = n && t,
                                _ = n || t || i,
                                u = s(+a(), _); if ("string" != typeof e) return a(e).tz(_); var o = function(e, t, n) { var r = e - 60 * t * 1e3,
                                        a = s(r, n); if (t === a) return [r, t]; var i = s(r -= 60 * (a - t) * 1e3, n); return a === i ? [r, a] : [e - 60 * Math.min(a, i) * 1e3, Math.max(a, i)] }(a.utc(e, r).valueOf(), u, _),
                                d = o[0],
                                m = o[1],
                                l = a(d).utcOffset(m); return l.$x.$timezone = _, l }, a.tz.guess = function() { return Intl.DateTimeFormat().resolvedOptions().timeZone }, a.tz.setDefault = function(e) { i = e } } }() }, 3826: function(e) { e.exports = function() { "use strict"; var e = "minute",
                        t = /[+-]\d\d(?::?\d\d)?/g,
                        n = /([+-]|\d\d)/g; return function(r, a, i) { var _ = a.prototype;
                        i.utc = function(e) { return new a({ date: e, utc: !0, args: arguments }) }, _.utc = function(t) { var n = i(this.toDate(), { locale: this.$L, utc: !0 }); return t ? n.add(this.utcOffset(), e) : n }, _.local = function() { return i(this.toDate(), { locale: this.$L, utc: !1 }) }; var s = _.parse;
                        _.parse = function(e) { e.utc && (this.$u = !0), this.$utils().u(e.$offset) || (this.$offset = e.$offset), s.call(this, e) }; var u = _.init;
                        _.init = function() { if (this.$u) { var e = this.$d;
                                this.$y = e.getUTCFullYear(), this.$M = e.getUTCMonth(), this.$D = e.getUTCDate(), this.$W = e.getUTCDay(), this.$H = e.getUTCHours(), this.$m = e.getUTCMinutes(), this.$s = e.getUTCSeconds(), this.$ms = e.getUTCMilliseconds() } else u.call(this) }; var o = _.utcOffset;
                        _.utcOffset = function(r, a) { var i = this.$utils().u; if (i(r)) return this.$u ? 0 : i(this.$offset) ? o.call(this) : this.$offset; if ("string" == typeof r && (r = function(e) { void 0 === e && (e = ""); var r = e.match(t); if (!r) return null; var a = ("" + r[0]).match(n) || ["-", 0, 0],
                                        i = a[0],
                                        _ = 60 * +a[1] + +a[2]; return 0 === _ ? 0 : "+" === i ? _ : -_ }(r), null === r)) return this; var _ = Math.abs(r) <= 16 ? 60 * r : r,
                                s = this; if (a) return s.$offset = _, s.$u = 0 === r, s; if (0 !== r) { var u = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                                (s = this.local().add(_ + u, e)).$offset = _, s.$x.$localOffset = u } else s = this.utc(); return s }; var d = _.format;
                        _.format = function(e) { var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : ""); return d.call(this, t) }, _.valueOf = function() { var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset()); return this.$d.valueOf() - 6e4 * e }, _.isUTC = function() { return !!this.$u }, _.toISOString = function() { return this.toDate().toISOString() }, _.toString = function() { return this.toDate().toUTCString() }; var m = _.toDate;
                        _.toDate = function(e) { return "s" === e && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this) }; var l = _.diff;
                        _.diff = function(e, t, n) { if (e && this.$u === e.$u) return l.call(this, e, t, n); var r = this.local(),
                                a = i(e).local(); return l.call(r, a, t, n) } } }() } },
        t = {};

    function n(r) { var a = t[r]; if (void 0 !== a) return a.exports; var i = t[r] = { exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.exports }
    n.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t }, n.d = (e, t) => { for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { "use strict"; var e = n(4353),
            t = n.n(e);
        n(2338), n(9990), n(9751), n(2706), n(494), n(4072), n(7317), n(9964), n(813), n(2010), n(5811), n(8298), n(7420), n(4895), n(3900), n(952), n(8003), n(9423), n(7205), n(3225), n(2369), n(4334), n(2796), n(6847), n(5616), n(1340), n(7081), n(4173), n(860), n(6033), n(1349); const r = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            a = (() => { if ("undefined" == typeof document) return !1; const e = r[0],
                    t = {}; for (const n of r) { const r = n ? .[1]; if (r in document) { for (const [r, a] of n.entries()) t[e[r]] = a; return t } } return !1 })(),
            i = { change: a.fullscreenchange, error: a.fullscreenerror }; let _ = { request: (e = document.documentElement, t) => new Promise(((n, r) => { const i = () => { _.off("change", i), n() };
                _.on("change", i); const s = e[a.requestFullscreen](t);
                s instanceof Promise && s.then(i).catch(r) })), exit: () => new Promise(((e, t) => { if (!_.isFullscreen) return void e(); const n = () => { _.off("change", n), e() };
                _.on("change", n); const r = document[a.exitFullscreen]();
                r instanceof Promise && r.then(n).catch(t) })), toggle: (e, t) => _.isFullscreen ? _.exit() : _.request(e, t), onchange(e) { _.on("change", e) }, onerror(e) { _.on("error", e) }, on(e, t) { const n = i[e];
                n && document.addEventListener(n, t, !1) }, off(e, t) { const n = i[e];
                n && document.removeEventListener(n, t, !1) }, raw: a };
        Object.defineProperties(_, { isFullscreen: { get: () => Boolean(document[a.fullscreenElement]) }, element: { enumerable: !0, get: () => document[a.fullscreenElement] ? ? void 0 }, isEnabled: { enumerable: !0, get: () => Boolean(document[a.fullscreenEnabled]) } }), a || (_ = { isEnabled: !1 }); const s = _; var u = function(e) { s.isEnabled && s.request(e) }; const o = function() { var e = document.getElementById("fullscreen"),
                t = document.querySelector(".fullscreen");
            e && e.addEventListener("click", (function() { u(t) })) }; var d = document.querySelectorAll(".tab"); const m = function() { if (-1 !== window.location.href.indexOf("#")) { var e = window.location.hash;
                    d.forEach((function(t) { t.getAttribute("href") === e && t.click() })) } },
            l = function() { window.addEventListener("hashchange", (function() { var e = window.location.hash;
                    d.forEach((function(t) { t.getAttribute("href") === e && (t.click(), document.querySelector(e).scrollIntoView()) })) }), !1) }; var c = n(3826),
            M = n(8569),
            f = n(7381),
            Y = document.documentElement.lang;
        t().extend(c), t().extend(M), t().extend(f), t().locale(Y.replace("no", "nb")), n(7007); var h = document.getElementById("clock"),
            p = document.getElementById("date"),
            L = document.getElementById("city-container"),
            y = document.getElementById("clock-container"),
            v = document.getElementById("world-clock"),
            k = (document.querySelectorAll(".city-row"), document.querySelectorAll(".city")),
            D = document.querySelectorAll(".city-time"),
            g = p.getAttribute("data-format"),
            H = h.getAttribute("data-format"),
            S = v.getAttribute("data-format"),
            b = document.title,
            w = function() { var e = t()(),
                    n = y.getAttribute("data-tz"); "browser" !== n && (e = t()().tz(n)), h && (h.innerText = e.format(H), document.hasFocus() ? document.title = b : document.title = e.format(H) + " - " + b), p && (p.innerText = e.format(g)); for (var r = 0; r < D.length; r++) D[r].innerText = e.tz(D[r].getAttribute("data-tz")).format(S) };
        k.forEach((function(e) { e.addEventListener("click", (function() { y.setAttribute("data-tz", e.querySelector(".city-time").getAttribute("data-tz")), L.classList.remove("hidden"), L.innerText = e.querySelector(".city-name").getAttribute("title"), y.scrollIntoView() })) })), L.addEventListener("click", (function() { y.setAttribute("data-tz", "browser"), L.classList.add("hidden"), L.innerText = "" })), w(), setInterval((function() { w() }), 1e3), o(), m(), l() })() })();