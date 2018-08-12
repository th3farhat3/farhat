! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
        function e() {
                if(!t.contains(document.documentElement, this)) return t(this)
                        .timeago("dispose"), this;
                var e = i(this)
                        , r = o.settings;
                return isNaN(e.datetime) || (0 == r.cutoff || Math.abs(n(e.datetime)) < r.cutoff) && t(this)
                        .text(a(e.datetime)), this
        }

        function i(e) {
                if(!(e = t(e))
                        .data("timeago")) {
                        e.data("timeago", {
                                datetime: o.datetime(e)
                        });
                        var i = t.trim(e.text());
                        o.settings.localeTitle ? e.attr("title", e.data("timeago")
                                .datetime.toLocaleString()) : !(i.length > 0) || o.isTime(e) && e.attr("title") || e.attr("title", i)
                }
                return e.data("timeago")
        }

        function a(t) {
                return o.inWords(n(t))
        }

        function n(t) {
                return(new Date)
                        .getTime() - t.getTime()
        }
        t.timeago = function(e) {
                return a(e instanceof Date ? e : "string" == typeof e ? t.timeago.parse(e) : "number" == typeof e ? new Date(e) : t.timeago.datetime(
                        e))
        };
        var o = t.timeago;
        t.extend(t.timeago, {
                settings: {
                        refreshMillis: 6e4
                        , allowPast: !0
                        , allowFuture: !1
                        , localeTitle: !1
                        , cutoff: 0
                        , strings: {
                                prefixAgo: null
                                , prefixFromNow: null
                                , suffixAgo: ""
                                , suffixFromNow: "الآن فقط"
                                , inPast: "الآن فقط"
                                , seconds: "الآن فقط"
                                , minute: "1 منذ دقيقة"
                                , minutes: "%d منذ دقيقة"
                                , hour: "1 منذ ساعة"
                                , hours: "%d منذ ساعة"
                                , day: "1 منذ يوم"
                                , days: "%d منذ يوم"
                                , month: "1 منذ شهر"
                                , months: "%d منذ شهر"
                                , year: "1 منذ عام"
                                , years: "%d منذ عام"
                                , wordSeparator: " "
                                , numbers: []
                        }
                }
                , inWords: function(e) {
                        function i(i, n) {
                                var o = t.isFunction(i) ? i(n, e) : i
                                        , r = a.numbers && a.numbers[n] || n;
                                return o.replace(/%d/i, r)
                        }
                        if(!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                        var a = this.settings.strings
                                , n = a.prefixAgo
                                , o = a.suffixAgo;
                        if(this.settings.allowFuture && 0 > e && (n = a.prefixFromNow, o = a.suffixFromNow), !this.settings.allowPast &&
                                e >= 0) return this.settings.strings.inPast;
                        var r = Math.abs(e) / 1e3
                                , s = r / 60
                                , l = s / 60
                                , u = l / 24
                                , m = u / 365
                                , d = 45 > r && i(a.seconds, Math.round(r)) || 90 > r && i(a.minute, 1) || 45 > s && i(a.minutes
                                        , Math.round(s)) || 90 > s && i(a.hour, 1) || 24 > l && i(a.hours, Math.round(l)) || 42 >
                                l && i(a.day, 1) || 30 > u && i(a.days, Math.round(u)) || 45 > u && i(a.month, 1) || 365 > u &&
                                i(a.months, Math.round(u / 30)) || 1.5 > m && i(a.year, 1) || i(a.years, Math.round(m))
                                , g = a.wordSeparator || "";
                        return void 0 === a.wordSeparator && (g = " "), t.trim([n, d, o].join(g))
                }
                , parse: function(e) {
                        var i = t.trim(e);
                        return i = i.replace(/\.\d+/, ""), i = i.replace(/-/, "/")
                                .replace(/-/, "/"), i = i.replace(/T/, " ")
                                .replace(/Z/, " UTC"), i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), i = i.replace(
                                        /([\+\-]\d\d)$/, " $100"), new Date(i)
                }
                , datetime: function(e) {
                        var i = t(e)
                                .attr(o.isTime(e) ? "datetime" : "title");
                        return o.parse(i)
                }
                , isTime: function(e) {
                        return "time" === t(e)
                                .get(0)
                                .tagName.toLowerCase()
                }
        });
        var r = {
                init: function() {
                        var i = t.proxy(e, this);
                        i();
                        var a = o.settings;
                        a.refreshMillis > 0 && (this._timeagoInterval = setInterval(i, a.refreshMillis))
                }
                , update: function(i) {
                        var a = o.parse(i);
                        t(this)
                                .data("timeago", {
                                        datetime: a
                                }), o.settings.localeTitle && t(this)
                                .attr("title", a.toLocaleString()), e.apply(this)
                }
                , updateFromDOM: function() {
                        t(this)
                                .data("timeago", {
                                        datetime: o.parse(t(this)
                                                .attr(o.isTime(this) ? "datetime" : "title"))
                                }), e.apply(this)
                }
                , dispose: function() {
                        this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
                }
        };
        t.fn.timeago = function(t, e) {
                var i = t ? r[t] : r.init;
                if(!i) throw new Error("Unknown function name '" + t + "' for timeago");
                return this.each(function() {
                        i.call(this, e)
                }), this
        }, document.createElement("abbr"), document.createElement("time")
});
