! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 771)
}({
    771: function(e, n, t) {
        "use strict";
        if (window.self === window.top) {
            const e = document.createElement("iframe");
            e.src = chrome.runtime.getURL("beacon/beacon-message.html");
            const n = "\n    position: fixed;\n    bottom: 30px;\n    right: 30px;\n    width: 714.6px;\n    height: 164px;\n    z-index: 1000;\n    box-shadow: 2px 3px 0 0 rgba(0, 0, 0, 0.18);";
            e.style.cssText = n, e.frameBorder = "0";
            const t = n => {
                    "CLOSE_BEACON_IFRAME" === n.type && (chrome.runtime.onMessage.removeListener(t), e && e.parentNode && e.parentNode.removeChild(e))
                },
                o = () => {
                    r.onMessage.removeListener(t), e && e.parentNode && e.parentNode.removeChild(e)
                },
                r = chrome.runtime.connect({
                    name: "beacon"
                });
            r.onMessage.addListener(t), r.onDisconnect.addListener(o), document.body.appendChild(e);
            const c = n => {
                n.target !== e && (chrome.runtime.sendMessage({
                    type: "BEACON_MESSAGE_CLOSED",
                    byUser: !1
                }), document.removeEventListener("click", c))
            };
            document.addEventListener("click", c)
        }
    }
});
