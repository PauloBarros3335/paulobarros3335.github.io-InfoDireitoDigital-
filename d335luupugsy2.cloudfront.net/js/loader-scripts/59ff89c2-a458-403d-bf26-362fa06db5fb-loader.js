"use strict";
var RDStation = function() {
        var t = {
            windowLoaded: !1
        };
        return window.addEventListener("load", function() {
            t.windowLoaded = !0
        }), t
    }(),
    RDCookieControl = function() {
        var t = {
            analytics: {
                eventName: "rd_cookie_consent_allow_analytics",
                track: !0
            },
            functional: {
                eventName: "rd_cookie_consent_allow_functional",
                track: !0
            },
            configuration: null
        };
        return document.addEventListener(t.analytics.eventName, function() {
            t.analytics.track = !0
        }), document.addEventListener(t.functional.eventName, function() {
            t.functional.track = !0
        }), t
    }();
! function() {
    var t = function() {
            var t = document.createElement("iframe");
            t.onload = function() {
                RDStation.windowLoaded = !0, e()
            }, t.setAttribute("style", "width: 1px; height: 1px; position: absolute; top: -100px;"), t.setAttribute("id", "rd_tmgr"), t.setAttribute("title", "RD Tag Manager"), document.body.appendChild(t)
        },
        u = function() {
            !window.opener || -1 == window.name.indexOf("TAGMANAGER_VERIFY") && -1 == window.location.href.indexOf("tagmanager_verify") || window.opener.postMessage(JSON.stringify({
                task: "checkTagManager",
                tagManagerChecked: !0
            }), "https://app.rdstation.com.br")
        },
        e = function() {
            (function(t, e, n, o, a, i) {
                var r = function() {
                        RdstationPopup.init(e, n, t, i)
                    },
                    c = function(t, e) {
                        return t + "/js/rdstation-popups/" + e + "/rdstation-popup.min.js?v=1"
                    },
                    d = function(t) {
                        t.readyState ? t.onreadystatechange = function() {
                            "loaded" != t.readyState && "complete" != t.readyState || (t.onreadystatechange = null, r())
                        } : t.onload = r
                    },
                    u = function(t, e) {
                        var n = document.createElement("script");
                        return n.setAttribute("type", "text/javascript"), n.setAttribute("src", c(t, e)), d(n), n
                    },
                    s = function() {
                        return null !== document.querySelector("#landing-page-attributes")
                    },
                    l = function() {
                        return s() && null !== document.querySelector("body > .bricks--container")
                    };
                if (!s() || l()) {
                    var f = u(o, a);
                    document.body.appendChild(f)
                }
            })("UA-129489013-1", "c564659593f72a4b663ed7b6328fd0e4", "15346", "https://d335luupugsy2.cloudfront.net", "bricks", "")
        },
        s = function() {
            return "complete" === document.readyState
        };
    (function(t) {
        function e() {
            i.onload = r, i.onreadystatechange = function() {
                "complete" === this.readyState && r()
            }, document.body.appendChild(i)
        }

        function n() {
            TrafficSourceCookie.init("__trf.src", [".ekyte.com", ".app.ekyte.com", ".rds.land"]), console.log("TrafficSourceCookie", "initialized");
            try {
                u()
            } catch (t) {
                console.error(t)
            }
        }

        function o() {
            c.onload = n, c.onreadystatechange = function() {
                "complete" === this.readyState && n()
            }, document.body.appendChild(c)
        }
        if (window.hasOwnProperty("RDStationTrackingCodeChecker") && window.RDStationTrackingCodeChecker) return;
        if (window.RDStationTrackingCodeChecker = !0, -1 != navigator.userAgent.toLowerCase().indexOf("safari")) var a = setInterval(function d() {
            s() && (clearInterval(a), t())
        }, 500);
        else s() ? t() : window.addEventListener("load", t);
        var i = document.createElement("script"),
            r = function() {
                LeadTracking.init({
                    token: "c564659593f72a4b663ed7b6328fd0e4"
                }), console.log("LeadTracking", "initialized")
            };
        i.setAttribute("type", "text/javascript"), i.setAttribute("src", "https://d335luupugsy2.cloudfront.net/js/lead-tracking/stable/lead-tracking.min.js"), RDCookieControl.analytics.track ? e() : document.addEventListener(RDCookieControl.analytics.eventName, e);
        var c = document.createElement("script");
        c.setAttribute("type", "text/javascript"), c.setAttribute("src", "https://d335luupugsy2.cloudfront.net/js/traffic-source-cookie/stable/traffic-source-cookie.min.js"), RDCookieControl.analytics.track ? o() : document.addEventListener(RDCookieControl.analytics.eventName, o)
    })(t)
}();