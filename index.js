// ==UserScript==
// @name        苦逼的北邮同学们，只能帮你们到这了
// @namespace   Gizeta.Debris.BUPTMoocHelper
// @description 女票那么忙，哪有时间盯着屏幕看课。具体功能往下看
// @include     https://mooc1-2.chaoxing.com/ananas/modules/video/index.html*
// @version     1.1
// @grant       none
// ==/UserScript==
window.frameElement.setAttribute("fastforward", "false");
window.frameElement.setAttribute("switchwindow", "false");
var t = {};
var j = setInterval(function() {
    var h = Array.from(window.parent.parent.document.body.getElementsByTagName('h4'));
    if (h && h.length > 10) {
        clearInterval(j);
        h.some(function (l, i) {
            if (l.className.includes('currents')) {
                t.cur = l;
                t.next = h[i + 1];
                t.href = t.next.parentNode.getAttribute('href');
                return true;
            }
        });
    }
}, 10);
var i = setInterval(function() {
    if (window.MoocPlayer) {
        clearInterval(i);
        window.MoocPlayer.prototype.pauseMovie = function() {
            var that = this;
            this.playMovie();
            return this;
        };
        window.MoocPlayer.prototype.sendLog = function(flag, time) {
            if (flag === 'end') {
                console.log(window.parent.parent);
                t.cur.className = '';
                t.next.className = 'currents';
                window.parent.parent.eval(t.href);
            }
        };
    }
}, 10);
