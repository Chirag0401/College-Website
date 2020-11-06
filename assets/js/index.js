function Fun_Set_Carousel_Swipe() {
	$(".carousel-inner").swipe({
		swipeLeft: function (e, t, n, i, r) {
			$(this).parent().carousel("next")
		},
		swipeRight: function () {
			$(this).parent().carousel("prev")
		},
		threshold: 0
	})
}
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
$(document).ready((function () {
		AOS.init({
			disable: "mobile"
		}), $("[data-bs-tooltip]").tooltip()
	})), $(document).ready((function () {
		Fun_Set_Carousel_Swipe()
	})),
	function (e) {
		"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
	}((function (e) {
		"use strict";

		function t(t) {
			return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = u), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each((function () {
				var i = e(this),
					r = i.data(k);
				r || (r = new n(this, t), i.data(k, r))
			}))
		}

		function n(t, n) {
			function M(t) {
				if (!(!0 === Se.data(k + "_intouch") || e(t.target).closest(n.excludedElements, Se).length > 0)) {
					var l = t.originalEvent ? t.originalEvent : t;
					if (!l.pointerType || "mouse" != l.pointerType || 0 != n.fallbackToMouseEvents) {
						var s, u = l.touches,
							c = u ? u[0] : l;
						return xe = b, u ? Ee = u.length : !1 !== n.preventDefaultEvents && t.preventDefault(), he = 0, pe = null, fe = null, be = null, ge = 0, we = 0, ve = 0, me = 1, Te = 0, (d = {})[i] = te(i), d[r] = te(r), d[a] = te(a), d[o] = te(o), ye = d, B(), Z(0, c), !u || Ee === n.fingers || n.fingers === m || q() ? (Ce = ae(), 2 == Ee && (Z(1, u[1]), we = ve = ie(Oe[0].start, Oe[1].start)), (n.swipeStatus || n.pinchStatus) && (s = R(l, xe))) : s = !1, !1 === s ? (R(l, xe = x), s) : (n.hold && (Ie = setTimeout(e.proxy((function () {
							Se.trigger("hold", [l.target]), n.hold && (s = n.hold.call(Se, l, l.target))
						}), this), n.longTapThreshold)), K(!0), null)
					}
				}
				var d
			}

			function P(t) {
				var d, h, p, f, g = t.originalEvent ? t.originalEvent : t;
				if (xe !== S && xe !== x && !G()) {
					var T, b = g.touches,
						E = J(b ? b[0] : g);
					if (ke = ae(), b && (Ee = b.length), n.hold && clearTimeout(Ie), xe = y, 2 == Ee && (0 == we ? (Z(1, b[1]), we = ve = ie(Oe[0].start, Oe[1].start)) : (J(b[1]), ve = ie(Oe[0].end, Oe[1].end), Oe[0].end, Oe[1].end, be = me < 1 ? s : l), me = (ve / we * 1).toFixed(2), Te = Math.abs(we - ve)), Ee === n.fingers || n.fingers === m || !b || q()) {
						if (pe = re(E.start, E.end), function (e, t) {
								if (!1 !== n.preventDefaultEvents)
									if (n.allowPageScroll === u) e.preventDefault();
									else {
										var l = n.allowPageScroll === c;
										switch (t) {
											case i:
												(n.swipeLeft && l || !l && n.allowPageScroll != w) && e.preventDefault();
												break;
											case r:
												(n.swipeRight && l || !l && n.allowPageScroll != w) && e.preventDefault();
												break;
											case a:
												(n.swipeUp && l || !l && n.allowPageScroll != v) && e.preventDefault();
												break;
											case o:
												(n.swipeDown && l || !l && n.allowPageScroll != v) && e.preventDefault()
										}
									}
							}(t, fe = re(E.last, E.end)), p = E.start, f = E.end, he = Math.round(Math.sqrt(Math.pow(f.x - p.x, 2) + Math.pow(f.y - p.y, 2))), ge = ne(), function (e, t) {
								e != u && (t = Math.max(t, ee(e)), ye[e].distance = t)
							}(pe, he), T = R(g, xe), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
							var O = !0;
							if (n.triggerOnTouchLeave) {
								var C = {
									left: (h = (d = e(d = this)).offset()).left,
									right: h.left + d.outerWidth(),
									top: h.top,
									bottom: h.top + d.outerHeight()
								};
								O = function (e, t) {
									return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
								}(E.end, C)
							}!n.triggerOnTouchEnd && O ? xe = A(y) : n.triggerOnTouchLeave && !O && (xe = A(S)), xe != x && xe != S || R(g, xe)
						}
					} else R(g, xe = x);
					!1 === T && R(g, xe = x)
				}
			}

			function D(e) {
				var t = e.originalEvent ? e.originalEvent : e,
					i = t.touches;
				if (i) {
					if (i.length && !G()) return function (e) {
						Me = ae(), Pe = e.touches.length + 1
					}(t), !0;
					if (i.length && G()) return !0
				}
				return G() && (Ee = Pe), ke = ae(), ge = ne(), U() || !N() ? R(t, xe = x) : n.triggerOnTouchEnd || !1 === n.triggerOnTouchEnd && xe === y ? (!1 !== n.preventDefaultEvents && !1 !== e.cancelable && e.preventDefault(), R(t, xe = S)) : !n.triggerOnTouchEnd && W() ? _(t, xe = S, p) : xe === y && R(t, xe = x), K(!1), null
			}

			function L() {
				Ee = 0, ke = 0, Ce = 0, we = 0, ve = 0, me = 1, B(), K(!1)
			}

			function I(e) {
				var t = e.originalEvent ? e.originalEvent : e;
				n.triggerOnTouchLeave && R(t, xe = A(S))
			}

			function j() {
				Se.unbind(le, M), Se.unbind(de, L), Se.unbind(se, P), Se.unbind(ue, D), ce && Se.unbind(ce, I), K(!1)
			}

			function A(e) {
				var t = e,
					i = Q(),
					r = N(),
					a = U();
				return !i || a ? t = x : !r || e != y || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !r && e == S && n.triggerOnTouchLeave && (t = x) : t = S, t
			}

			function R(e, t) {
				var i, r = e.touches;
				return (!(!z() || !Y()) || Y()) && (i = _(e, t, d)), (!(!H() || !q()) || q()) && !1 !== i && (i = _(e, t, h)), $() && V() && !1 !== i ? i = _(e, t, f) : ge > n.longTapThreshold && he < T && n.longTap && !1 !== i ? i = _(e, t, g) : !(1 !== Ee && E || !(isNaN(he) || he < n.threshold) || !W()) && !1 !== i && (i = _(e, t, p)), t === x && L(), t === S && (r && r.length || L()), i
			}

			function _(t, u, c) {
				var w;
				if (c == d) {
					if (Se.trigger("swipeStatus", [u, pe || null, he || 0, ge || 0, Ee, Oe, fe]), n.swipeStatus && !1 === (w = n.swipeStatus.call(Se, t, u, pe || null, he || 0, ge || 0, Ee, Oe, fe))) return !1;
					if (u == S && z()) {
						if (clearTimeout(Le), clearTimeout(Ie), Se.trigger("swipe", [pe, he, ge, Ee, Oe, fe]), n.swipe && !1 === (w = n.swipe.call(Se, t, pe, he, ge, Ee, Oe, fe))) return !1;
						switch (pe) {
							case i:
								Se.trigger("swipeLeft", [pe, he, ge, Ee, Oe, fe]), n.swipeLeft && (w = n.swipeLeft.call(Se, t, pe, he, ge, Ee, Oe, fe));
								break;
							case r:
								Se.trigger("swipeRight", [pe, he, ge, Ee, Oe, fe]), n.swipeRight && (w = n.swipeRight.call(Se, t, pe, he, ge, Ee, Oe, fe));
								break;
							case a:
								Se.trigger("swipeUp", [pe, he, ge, Ee, Oe, fe]), n.swipeUp && (w = n.swipeUp.call(Se, t, pe, he, ge, Ee, Oe, fe));
								break;
							case o:
								Se.trigger("swipeDown", [pe, he, ge, Ee, Oe, fe]), n.swipeDown && (w = n.swipeDown.call(Se, t, pe, he, ge, Ee, Oe, fe))
						}
					}
				}
				if (c == h) {
					if (Se.trigger("pinchStatus", [u, be || null, Te || 0, ge || 0, Ee, me, Oe]), n.pinchStatus && !1 === (w = n.pinchStatus.call(Se, t, u, be || null, Te || 0, ge || 0, Ee, me, Oe))) return !1;
					if (u == S && H()) switch (be) {
						case l:
							Se.trigger("pinchIn", [be || null, Te || 0, ge || 0, Ee, me, Oe]), n.pinchIn && (w = n.pinchIn.call(Se, t, be || null, Te || 0, ge || 0, Ee, me, Oe));
							break;
						case s:
							Se.trigger("pinchOut", [be || null, Te || 0, ge || 0, Ee, me, Oe]), n.pinchOut && (w = n.pinchOut.call(Se, t, be || null, Te || 0, ge || 0, Ee, me, Oe))
					}
				}
				return c == p ? u !== x && u !== S || (clearTimeout(Le), clearTimeout(Ie), V() && !$() ? (De = ae(), Le = setTimeout(e.proxy((function () {
					De = null, Se.trigger("tap", [t.target]), n.tap && (w = n.tap.call(Se, t, t.target))
				}), this), n.doubleTapThreshold)) : (De = null, Se.trigger("tap", [t.target]), n.tap && (w = n.tap.call(Se, t, t.target)))) : c == f ? u !== x && u !== S || (clearTimeout(Le), clearTimeout(Ie), De = null, Se.trigger("doubletap", [t.target]), n.doubleTap && (w = n.doubleTap.call(Se, t, t.target))) : c == g && (u !== x && u !== S || (clearTimeout(Le), De = null, Se.trigger("longtap", [t.target]), n.longTap && (w = n.longTap.call(Se, t, t.target)))), w
			}

			function N() {
				var e = !0;
				return null !== n.threshold && (e = he >= n.threshold), e
			}

			function U() {
				var e = !1;
				return null !== n.cancelThreshold && null !== pe && (e = ee(pe) - he >= n.cancelThreshold), e
			}

			function Q() {
				return !(n.maxTimeThreshold && ge >= n.maxTimeThreshold)
			}

			function H() {
				var e = F(),
					t = X(),
					i = null === n.pinchThreshold || Te >= n.pinchThreshold;
				return e && t && i
			}

			function q() {
				return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
			}

			function z() {
				var e = Q(),
					t = N(),
					n = F(),
					i = X();
				return !U() && i && n && t && e
			}

			function Y() {
				return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
			}

			function F() {
				return Ee === n.fingers || n.fingers === m || !E
			}

			function X() {
				return 0 !== Oe[0].end.x
			}

			function W() {
				return !!n.tap
			}

			function V() {
				return !!n.doubleTap
			}

			function $() {
				if (null == De) return !1;
				var e = ae();
				return V() && e - De <= n.doubleTapThreshold
			}

			function B() {
				Me = 0, Pe = 0
			}

			function G() {
				var e = !1;
				Me && (ae() - Me <= n.fingerReleaseThreshold && (e = !0));
				return e
			}

			function K(e) {
				Se && (!0 === e ? (Se.bind(se, P), Se.bind(ue, D), ce && Se.bind(ce, I)) : (Se.unbind(se, P, !1), Se.unbind(ue, D, !1), ce && Se.unbind(ce, I, !1)), Se.data(k + "_intouch", !0 === e))
			}

			function Z(e, t) {
				var n = {
					start: {
						x: 0,
						y: 0
					},
					last: {
						x: 0,
						y: 0
					},
					end: {
						x: 0,
						y: 0
					}
				};
				return n.start.x = n.last.x = n.end.x = t.pageX || t.clientX, n.start.y = n.last.y = n.end.y = t.pageY || t.clientY, Oe[e] = n, n
			}

			function J(e) {
				var t = void 0 !== e.identifier ? e.identifier : 0,
					n = function (e) {
						return Oe[e] || null
					}(t);
				return null === n && (n = Z(t, e)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
			}

			function ee(e) {
				if (ye[e]) return ye[e].distance
			}

			function te(e) {
				return {
					direction: e,
					distance: 0
				}
			}

			function ne() {
				return ke - Ce
			}

			function ie(e, t) {
				var n = Math.abs(e.x - t.x),
					i = Math.abs(e.y - t.y);
				return Math.round(Math.sqrt(n * n + i * i))
			}

			function re(e, t) {
				if (l = t, (n = e).x == l.x && n.y == l.y) return u;
				var n, l, s = function (e, t) {
					var n = e.x - t.x,
						i = t.y - e.y,
						r = Math.atan2(i, n),
						a = Math.round(180 * r / Math.PI);
					return a < 0 && (a = 360 - Math.abs(a)), a
				}(e, t);
				return s <= 45 && s >= 0 || s <= 360 && s >= 315 ? i : s >= 135 && s <= 225 ? r : s > 45 && s < 135 ? o : a
			}

			function ae() {
				return (new Date).getTime()
			}
			n = e.extend({}, n);
			var oe = E || C || !n.fallbackToMouseEvents,
				le = oe ? C ? O ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
				se = oe ? C ? O ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
				ue = oe ? C ? O ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
				ce = oe ? C ? "mouseleave" : null : "mouseleave",
				de = C ? O ? "MSPointerCancel" : "pointercancel" : "touchcancel",
				he = 0,
				pe = null,
				fe = null,
				ge = 0,
				we = 0,
				ve = 0,
				me = 1,
				Te = 0,
				be = 0,
				ye = null,
				Se = e(t),
				xe = "start",
				Ee = 0,
				Oe = {},
				Ce = 0,
				ke = 0,
				Me = 0,
				Pe = 0,
				De = 0,
				Le = null,
				Ie = null;
			try {
				Se.bind(le, M), Se.bind(de, L)
			} catch (t) {
				e.error("events not supported " + le + "," + de + " on jQuery.swipe")
			}
			this.enable = function () {
				return this.disable(), Se.bind(le, M), Se.bind(de, L), Se
			}, this.disable = function () {
				return j(), Se
			}, this.destroy = function () {
				j(), Se.data(k, null), Se = null
			}, this.option = function (t, i) {
				if ("object" == typeof t) n = e.extend(n, t);
				else if (void 0 !== n[t]) {
					if (void 0 === i) return n[t];
					n[t] = i
				} else {
					if (!t) return n;
					e.error("Option " + t + " does not exist on jQuery.swipe.options")
				}
				return null
			}
		}
		var i = "left",
			r = "right",
			a = "up",
			o = "down",
			l = "in",
			s = "out",
			u = "none",
			c = "auto",
			d = "swipe",
			h = "pinch",
			p = "tap",
			f = "doubletap",
			g = "longtap",
			w = "horizontal",
			v = "vertical",
			m = "all",
			T = 10,
			b = "start",
			y = "move",
			S = "end",
			x = "cancel",
			E = "ontouchstart" in window,
			O = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !E,
			C = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !E,
			k = "TouchSwipe";
		e.fn.swipe = function (n) {
			var i = e(this),
				r = i.data(k);
			if (r && "string" == typeof n) {
				if (r[n]) return r[n].apply(r, Array.prototype.slice.call(arguments, 1));
				e.error("Method " + n + " does not exist on jQuery.swipe")
			} else if (r && "object" == typeof n) r.option.apply(r, arguments);
			else if (!(r || "object" != typeof n && n)) return t.apply(this, arguments);
			return i
		}, e.fn.swipe.version = "1.6.18", e.fn.swipe.defaults = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: ".noSwipe",
			preventDefaultEvents: !0
		}, e.fn.swipe.phases = {
			PHASE_START: b,
			PHASE_MOVE: y,
			PHASE_END: S,
			PHASE_CANCEL: x
		}, e.fn.swipe.directions = {
			LEFT: i,
			RIGHT: r,
			UP: a,
			DOWN: o,
			IN: l,
			OUT: s
		}, e.fn.swipe.pageScroll = {
			NONE: u,
			HORIZONTAL: w,
			VERTICAL: v,
			AUTO: c
		}, e.fn.swipe.fingers = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			FOUR: 4,
			FIVE: 5,
			ALL: m
		}
	})), jQuery(document).ready((function (e) {
		var t, n;

		function r(t) {
			var n = l(t);
			if (t.parents(".cd-headline").hasClass("type")) {
				var i = t.parent(".cd-words-wrapper");
				i.addClass("selected").removeClass("waiting"), setTimeout((function () {
					i.removeClass("selected"), t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
				}), 500), setTimeout((function () {
					a(n, 150)
				}), 1300)
			} else if (t.parents(".cd-headline").hasClass("letters")) {
				var u = t.children("i").length >= n.children("i").length;
				! function t(n, i, a, o) {
					n.removeClass("in").addClass("out"), n.is(":last-child") ? a && setTimeout((function () {
						r(l(i))
					}), 2e3) : setTimeout((function () {
						t(n.next(), i, a, o)
					}), o);
					if (n.is(":last-child") && e("html").hasClass("no-csstransitions")) {
						var u = l(i);
						s(i, u)
					}
				}(t.find("i").eq(0), t, u, 50), o(n.find("i").eq(0), n, u, 50)
			} else t.parents(".cd-headline").hasClass("clip") ? t.parents(".cd-words-wrapper").animate({
				width: "2px"
			}, 600, (function () {
				s(t, n), a(n)
			})) : t.parents(".cd-headline").hasClass("loading-bar") ? (t.parents(".cd-words-wrapper").removeClass("is-loading"), s(t, n), setTimeout((function () {
				r(n)
			}), 3800), setTimeout((function () {
				t.parents(".cd-words-wrapper").addClass("is-loading")
			}), 800)) : (s(t, n), setTimeout((function () {
				r(n)
			}), 2e3))
		}

		function a(e, t) {
			e.parents(".cd-headline").hasClass("type") ? (o(e.find("i").eq(0), e, !1, t), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".cd-headline").hasClass("clip") && e.parents(".cd-words-wrapper").animate({
				width: e.width() + 10
			}, 600, (function () {
				setTimeout((function () {
					r(e)
				}), 1500)
			}))
		}

		function o(e, t, n, i) {
			e.addClass("in").removeClass("out"), e.is(":last-child") ? (t.parents(".cd-headline").hasClass("type") && setTimeout((function () {
				t.parents(".cd-words-wrapper").addClass("waiting")
			}), 200), n || setTimeout((function () {
				r(t)
			}), 2e3)) : setTimeout((function () {
				o(e.next(), t, n, i)
			}), i)
		}

		function l(e) {
			return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
		}

		function s(e, t) {
			e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible")
		}
		e(".cd-headline.letters").find("b").each((function () {
			var t = e(this),
				n = t.text().split(""),
				r = t.hasClass("is-visible");
			for (i in n) t.parents(".rotate-2").length > 0 && (n[i] = "<em>" + n[i] + "</em>"), n[i] = r ? '<i class="in">' + n[i] + "</i>" : "<i>" + n[i] + "</i>";
			var a = n.join("");
			t.html(a).css("opacity", 1)
		})), t = e(".cd-headline"), n = 2e3, t.each((function () {
			var t = e(this);
			if (t.hasClass("loading-bar")) n = 3800, setTimeout((function () {
				t.find(".cd-words-wrapper").addClass("is-loading")
			}), 800);
			else if (t.hasClass("clip")) {
				var i = t.find(".cd-words-wrapper"),
					a = i.width() + 10;
				i.css("width", a)
			} else if (!t.hasClass("type")) {
				var o = t.find(".cd-words-wrapper b"),
					l = 0;
				o.each((function () {
					var t = e(this).width();
					t > l && (l = t)
				})), t.find(".cd-words-wrapper").css("width", l)
			}
			setTimeout((function () {
				r(t.find(".is-visible").eq(0))
			}), n)
		}))
	})), particlesJS("particles-js", {
		particles: {
			number: {
				value: 80,
				density: {
					enable: !0,
					value_area: 800
				}
			},
			color: {
				value: "#ffffff"
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000"
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: .5,
				random: !1,
				anim: {
					enable: !1,
					speed: 1,
					opacity_min: .1,
					sync: !1
				}
			},
			size: {
				value: 3,
				random: !0,
				anim: {
					enable: !1,
					speed: 40,
					size_min: .1,
					sync: !1
				}
			},
			line_linked: {
				enable: !0,
				distance: 150,
				color: "#ffffff",
				opacity: .4,
				width: 1
			},
			move: {
				enable: !0,
				speed: 6,
				direction: "none",
				random: !1,
				straight: !1,
				out_mode: "out",
				bounce: !1,
				attract: {
					enable: !1,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: !0,
					mode: "grab"
				},
				onclick: {
					enable: !0,
					mode: "push"
				},
				resize: !0
			},
			modes: {
				grab: {
					distance: 140,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 3
				},
				repulse: {
					distance: 200,
					duration: .4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: !0
	});
const darkSwitch = document.getElementById("darkSwitch");

function initTheme() {
	const e = null !== localStorage.getItem("darkSwitch") && "dark" === localStorage.getItem("darkSwitch");
	darkSwitch.checked = e, e ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme")
}

function resetTheme() {
	darkSwitch.checked ? (document.body.setAttribute("data-theme", "dark"), localStorage.setItem("darkSwitch", "dark")) : (document.body.removeAttribute("data-theme"), localStorage.removeItem("darkSwitch"))
}

function ws_book(e, t, n) {
	var i, r = jQuery,
		a = r(this),
		o = r(".ws_list", n),
		l = r("<div>").addClass("ws_effect ws_book").css({
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%"
		}).appendTo(n),
		s = e.duration,
		u = e.perspective || .4,
		c = e.shadow || .35,
		d = e.noCanvas || !1,
		h = e.no3d || !1,
		p = {
			domPrefixes: " Webkit Moz ms O Khtml".split(" "),
			testDom: function (e) {
				for (var t = this.domPrefixes.length; t--;)
					if (void 0 !== document.body.style[this.domPrefixes[t] + e]) return !0;
				return !1
			},
			cssTransitions: function () {
				return this.testDom("Transition")
			},
			cssTransforms3d: function () {
				var e = void 0 !== document.body.style.perspectiveProperty || this.testDom("Perspective");
				if (e && /AppleWebKit/.test(navigator.userAgent)) {
					var t = document.createElement("div"),
						n = document.createElement("style"),
						i = "Test3d" + Math.round(99999 * Math.random());
					n.textContent = "@media (-webkit-transform-3d){#" + i + "{height:3px}}", document.getElementsByTagName("head")[0].appendChild(n), t.id = i, document.body.appendChild(t), e = 3 === t.offsetHeight, n.parentNode.removeChild(n), t.parentNode.removeChild(t)
				}
				return e
			},
			canvas: function () {
				if (void 0 !== document.createElement("canvas").getContext) return !0
			}
		};

	function f(t, n, i, r, a, o, l, p, f, g, w, v) {
		if (h) {
			if (!t) {
				n *= -1;
				var m = r;
				r = i, i = m, m = o, o = a, a = m
			}
			setTimeout((function () {
				i.children("img").css("opacity", c).animate({
					opacity: 1
				}, s / 2), a.css("transform", "rotateY(" + n + "deg)").children("img").css("opacity", 1).animate({
					opacity: c
				}, s / 2, (function () {
					a.hide(), o.show().css("transform", "rotateX(0deg) rotateY(0deg)").children("img").css("opacity", c).animate({
						opacity: 1
					}, s / 2), r.children("img").css("opacity", 1).animate({
						opacity: c
					}, s / 2)
				}))
			}), 0), setTimeout(v, s)
		} else if (d) {
			l.show();
			new Date;
			var T = !0;
			wowAnimate((function (n) {
				var s = jQuery.easing.easeInOutQuint(1, n, 0, 1, 1),
					d = jQuery.easing.easeInOutCubic(1, n, 0, 1, 1),
					h = !t;
				if (n < .5) {
					s *= 2, d *= 2;
					var w = a
				} else {
					h = t, s = 2 * (1 - s), d = 2 * (1 - d);
					w = o
				}
				var v = l.height() * u / 2,
					m = (1 - s) * l.width() / 2,
					b = 1 + d * u,
					y = l.width() / 2;
				! function (t, n, i, r, a, o, l, s, u, c, d) {
					numSlices = a / 2, widthScale = a / u, heightScale = (1 - o) / numSlices, t.clearRect(0, 0, d.width(), d.height());
					for (var h = 0; h < numSlices + widthScale; h++) {
						var p = l ? h * e.width / a + e.width / 2 : (numSlices - h) * e.width / a,
							f = i + (l ? 2 : -2) * h,
							g = r + c * heightScale * h / 2;
						p < 0 && (p = 0), f < 0 && (f = 0), g < 0 && (g = 0), t.drawImage(n, p, 0, 2.5, e.height, f, g, 2, c * (1 - heightScale * h))
					}
					t.save(), t.beginPath(), t.moveTo(i, r), t.lineTo(i + (l ? 2 : -2) * (numSlices + widthScale), r + c * heightScale * (numSlices + widthScale) / 2), t.lineTo(i + (l ? 2 : -2) * (numSlices + widthScale), c * (1 - heightScale * (numSlices + widthScale)) + r + c * heightScale * (numSlices + widthScale) / 2), t.lineTo(i, r + c), t.closePath(), t.clip(), t.fillStyle = "rgba(0,0,0," + Math.round(100 * s) / 100 + ")", t.fillRect(0, 0, d.width(), d.height()), t.restore()
				}(i, w, y, v, m, b, h, d * c, y, l.height(), p), T && (g.show(), T = !1), r.clearRect(0, 0, f.width(), f.height()), r.fillStyle = "rgba(0,0,0," + (c - d * c) + ")", r.fillRect(h ? y : 0, 0, f.width() / 2, f.height())
			}), 0, 1, s, v)
		}
	}
	h || (h = p.cssTransitions() && p.cssTransforms3d()), d || (d = p.canvas()), this.go = function (e, c, p) {
		if (i) return -1;
		var g = t.get(e),
			w = t.get(c);
		p = null == p ? 0 == c && e != c + 1 || e == c - 1 : !p;
		var v = r("<div>").appendTo(l),
			m = r(g);
		if (m = {
				width: m.width(),
				height: m.height(),
				marginLeft: parseFloat(m.css("marginLeft")),
				marginTop: parseFloat(m.css("marginTop"))
			}, h) {
			var T = {
				background: "#000",
				position: "absolute",
				left: 0,
				top: 0,
				width: "100%",
				height: "100%",
				transformStyle: "preserve-3d",
				zIndex: 3,
				outline: "1px solid transparent"
			};
			perspect = n.width() * (3 - 2 * u), v.css(T).css({
				perspective: perspect,
				transform: "translate3d(0,0,0)"
			});
			var b = 90,
				y = r("<div>").css(T).css({
					position: "relative",
					float: "left",
					width: "50%",
					overflow: "hidden"
				}).append(r("<img>").attr("src", (p ? g : w).src).css(m)).appendTo(v),
				S = r("<div>").css(T).css({
					position: "relative",
					float: "left",
					width: "50%",
					overflow: "hidden"
				}).append(r("<img>").attr("src", (p ? w : g).src).css(m).css({
					marginLeft: -m.width / 2
				})).appendTo(v),
				x = r("<div>").css(T).css({
					display: p ? "block" : "none",
					width: "50%",
					transform: "rotateY(" + (p ? .1 : b) + "deg)",
					transition: (p ? "ease-in " : "ease-out ") + s / 2e3 + "s",
					transformOrigin: "right",
					overflow: "hidden"
				}).append(r("<img>").attr("src", (p ? w : g).src).css(m)).appendTo(v),
				E = r("<div>").css(T).css({
					display: p ? "none" : "block",
					left: "50%",
					width: "50%",
					transform: "rotateY(-" + (p ? b : .1) + "deg)",
					transition: (p ? "ease-out " : "ease-in ") + s / 2e3 + "s",
					transformOrigin: "left",
					overflow: "hidden"
				}).append(r("<img>").attr("src", (p ? g : w).src).css(m).css({
					marginLeft: -m.width / 2
				})).appendTo(v)
		} else if (d) var O = r("<div>").css({
				position: "absolute",
				top: 0,
				left: p ? 0 : "50%",
				width: "50%",
				height: "100%",
				overflow: "hidden",
				zIndex: 6
			}).append(r(t.get(e)).clone().css({
				position: "absolute",
				height: "100%",
				right: p ? "auto" : 0,
				left: p ? 0 : "auto"
			})).appendTo(v).hide(),
			C = r("<div>").css({
				position: "absolute",
				width: "100%",
				height: "100%",
				left: 0,
				top: 0,
				zIndex: 8
			}).appendTo(v).hide(),
			k = r("<canvas>").css({
				position: "absolute",
				zIndex: 2,
				left: 0,
				top: -C.height() * u / 2
			}).attr({
				width: C.width(),
				height: C.height() * (u + 1)
			}).appendTo(C),
			M = k.clone().css({
				top: 0,
				zIndex: 1
			}).attr({
				width: C.width(),
				height: C.height()
			}).appendTo(C),
			P = k.get(0).getContext("2d"),
			D = M.get(0).getContext("2d");
		else o.stop(!0).animate({
			left: e ? -e + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0
		}, s, "easeInOutExpo");
		if (!h && d) y = P, S = D, x = w, E = g;
		i = new f(p, b, y, S, x, E, C, k, M, O, m, (function () {
			a.trigger("effectEnd"), v.remove(), i = 0
		}))
	}
}
window.addEventListener("load", () => {
		darkSwitch && (initTheme(), darkSwitch.addEventListener("change", () => {
			resetTheme()
		}))
	}),
	function (e) {
		"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? e(require("jquery")) : e(jQuery)
	}((function (e) {
		var t = "left",
			n = "right",
			i = "up",
			r = "down",
			a = "in",
			o = "out",
			l = "none",
			s = "auto",
			u = "swipe",
			c = "pinch",
			d = "tap",
			h = "doubletap",
			p = "longtap",
			f = "horizontal",
			g = "vertical",
			w = "all",
			v = "start",
			m = "move",
			T = "end",
			b = "cancel",
			y = "ontouchstart" in window,
			S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !y,
			x = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !y,
			E = "TouchSwipe";

		function O(t) {
			return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = l), void 0 !== t.click && void 0 === t.tap && (t.tap = t.click), t || (t = {}), t = e.extend({}, e.fn.swipe.defaults, t), this.each((function () {
				var n = e(this),
					i = n.data(E);
				i || (i = new C(this, t), n.data(E, i))
			}))
		}

		function C(O, C) {
			C = e.extend({}, C);
			var k = y || x || !C.fallbackToMouseEvents,
				M = k ? x ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
				P = k ? x ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
				D = k ? x ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
				L = k ? x ? "mouseleave" : null : "mouseleave",
				I = x ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel",
				j = 0,
				A = null,
				R = null,
				_ = 0,
				N = 0,
				U = 0,
				Q = 1,
				H = 0,
				q = 0,
				z = null,
				Y = e(O),
				F = "start",
				X = 0,
				W = {},
				V = 0,
				$ = 0,
				B = 0,
				G = 0,
				K = 0,
				Z = null,
				J = null;
			try {
				Y.bind(M, ee), Y.bind(I, ie)
			} catch (t) {
				e.error("events not supported " + M + "," + I + " on jQuery.swipe")
			}

			function ee(a) {
				if (!0 !== Y.data(E + "_intouch") && !(e(a.target).closest(C.excludedElements, Y).length > 0)) {
					var o, l = a.originalEvent ? a.originalEvent : a,
						s = l.touches,
						u = s ? s[0] : l;
					return F = v, s ? X = s.length : !1 !== C.preventDefaultEvents && a.preventDefault(), j = 0, A = null, R = null, q = null, _ = 0, N = 0, U = 0, Q = 1, H = 0, z = function () {
						var e = {};
						return e[t] = ke(t), e[n] = ke(n), e.up = ke(i), e[r] = ke(r), e
					}(), ye(), Ee(0, u), !s || X === C.fingers || C.fingers === w || pe() ? (V = Le(), 2 == X && (Ee(1, s[1]), N = U = Pe(W[0].start, W[1].start)), (C.swipeStatus || C.pinchStatus) && (o = le(l, F))) : o = !1, !1 === o ? (le(l, F = b), o) : (C.hold && (J = setTimeout(e.proxy((function () {
						Y.trigger("hold", [l.target]), C.hold && (o = C.hold.call(Y, l, l.target))
					}), this), C.longTapThreshold)), xe(!0), null)
				}
			}

			function te(u) {
				var c = u.originalEvent ? u.originalEvent : u;
				if (F !== T && F !== b && !Se()) {
					var d, h = c.touches,
						p = Oe(h ? h[0] : c);
					if ($ = Le(), h && (X = h.length), C.hold && clearTimeout(J), F = m, 2 == X && (0 == N ? (Ee(1, h[1]), N = U = Pe(W[0].start, W[1].start)) : (Oe(h[1]), U = Pe(W[0].end, W[1].end), W[0].end, W[1].end, q = Q < 1 ? o : a), Q = function (e, t) {
							return (t / e * 1).toFixed(2)
						}(N, U), H = Math.abs(N - U)), X === C.fingers || C.fingers === w || !h || pe()) {
						if (A = De(p.start, p.end), function (e, a) {
								if (!1 === C.preventDefaultEvents) return;
								if (C.allowPageScroll === l) e.preventDefault();
								else {
									var o = C.allowPageScroll === s;
									switch (a) {
										case t:
											(C.swipeLeft && o || !o && C.allowPageScroll != f) && e.preventDefault();
											break;
										case n:
											(C.swipeRight && o || !o && C.allowPageScroll != f) && e.preventDefault();
											break;
										case i:
											(C.swipeUp && o || !o && C.allowPageScroll != g) && e.preventDefault();
											break;
										case r:
											(C.swipeDown && o || !o && C.allowPageScroll != g) && e.preventDefault()
									}
								}
							}(u, R = De(p.last, p.end)), j = function (e, t) {
								return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
							}(p.start, p.end), _ = Me(), function (e, t) {
								t = Math.max(t, Ce(e)), z[e].distance = t
							}(A, j), d = le(c, F), !C.triggerOnTouchEnd || C.triggerOnTouchLeave) {
							var v = !0;
							if (C.triggerOnTouchLeave) {
								var y = function (t) {
									var n = (t = e(t)).offset();
									return {
										left: n.left,
										right: n.left + t.outerWidth(),
										top: n.top,
										bottom: n.top + t.outerHeight()
									}
								}(this);
								v = function (e, t) {
									return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
								}(p.end, y)
							}!C.triggerOnTouchEnd && v ? F = oe(m) : C.triggerOnTouchLeave && !v && (F = oe(T)), F != b && F != T || le(c, F)
						}
					} else le(c, F = b);
					!1 === d && le(c, F = b)
				}
			}

			function ne(e) {
				var t = e.originalEvent ? e.originalEvent : e,
					n = t.touches;
				if (n) {
					if (n.length && !Se()) return function (e) {
						B = Le(), G = e.touches.length + 1
					}(t), !0;
					if (n.length && Se()) return !0
				}
				return Se() && (X = G), $ = Le(), _ = Me(), ce() || !ue() ? le(t, F = b) : C.triggerOnTouchEnd || 0 == C.triggerOnTouchEnd && F === m ? (!1 !== C.preventDefaultEvents && e.preventDefault(), le(t, F = T)) : !C.triggerOnTouchEnd && me() ? se(t, F = T, d) : F === m && le(t, F = b), xe(!1), null
			}

			function ie() {
				X = 0, $ = 0, V = 0, N = 0, U = 0, Q = 1, ye(), xe(!1)
			}

			function re(e) {
				var t = e.originalEvent ? e.originalEvent : e;
				C.triggerOnTouchLeave && le(t, F = oe(T))
			}

			function ae() {
				Y.unbind(M, ee), Y.unbind(I, ie), Y.unbind(P, te), Y.unbind(D, ne), L && Y.unbind(L, re), xe(!1)
			}

			function oe(e) {
				var t = e,
					n = de(),
					i = ue(),
					r = ce();
				return !n || r ? t = b : !i || e != m || C.triggerOnTouchEnd && !C.triggerOnTouchLeave ? !i && e == T && C.triggerOnTouchLeave && (t = b) : t = T, t
			}

			function le(e, t) {
				var n, i = e.touches;
				return (fe() && ge() || ge()) && (n = se(e, t, u)), (he() && pe() || pe()) && !1 !== n && (n = se(e, t, c)), be() && Te() && !1 !== n ? n = se(e, t, h) : _ > C.longTapThreshold && j < 10 && C.longTap && !1 !== n ? n = se(e, t, p) : 1 !== X && y || !(isNaN(j) || j < C.threshold) || !me() || !1 === n || (n = se(e, t, d)), t === b && (ge() && (n = se(e, t, u)), pe() && (n = se(e, t, c)), ie()), t === T && (i && i.length || ie()), n
			}

			function se(l, s, f) {
				var g;
				if (f == u) {
					if (Y.trigger("swipeStatus", [s, A || null, j || 0, _ || 0, X, W, R]), C.swipeStatus && !1 === (g = C.swipeStatus.call(Y, l, s, A || null, j || 0, _ || 0, X, W, R))) return !1;
					if (s == T && fe()) {
						if (clearTimeout(Z), clearTimeout(J), Y.trigger("swipe", [A, j, _, X, W, R]), C.swipe && !1 === (g = C.swipe.call(Y, l, A, j, _, X, W, R))) return !1;
						switch (A) {
							case t:
								Y.trigger("swipeLeft", [A, j, _, X, W, R]), C.swipeLeft && (g = C.swipeLeft.call(Y, l, A, j, _, X, W, R));
								break;
							case n:
								Y.trigger("swipeRight", [A, j, _, X, W, R]), C.swipeRight && (g = C.swipeRight.call(Y, l, A, j, _, X, W, R));
								break;
							case i:
								Y.trigger("swipeUp", [A, j, _, X, W, R]), C.swipeUp && (g = C.swipeUp.call(Y, l, A, j, _, X, W, R));
								break;
							case r:
								Y.trigger("swipeDown", [A, j, _, X, W, R]), C.swipeDown && (g = C.swipeDown.call(Y, l, A, j, _, X, W, R))
						}
					}
				}
				if (f == c) {
					if (Y.trigger("pinchStatus", [s, q || null, H || 0, _ || 0, X, Q, W]), C.pinchStatus && !1 === (g = C.pinchStatus.call(Y, l, s, q || null, H || 0, _ || 0, X, Q, W))) return !1;
					if (s == T && he()) switch (q) {
						case a:
							Y.trigger("pinchIn", [q || null, H || 0, _ || 0, X, Q, W]), C.pinchIn && (g = C.pinchIn.call(Y, l, q || null, H || 0, _ || 0, X, Q, W));
							break;
						case o:
							Y.trigger("pinchOut", [q || null, H || 0, _ || 0, X, Q, W]), C.pinchOut && (g = C.pinchOut.call(Y, l, q || null, H || 0, _ || 0, X, Q, W))
					}
				}
				return f == d ? s !== b && s !== T || (clearTimeout(Z), clearTimeout(J), Te() && !be() ? (K = Le(), Z = setTimeout(e.proxy((function () {
					K = null, Y.trigger("tap", [l.target]), C.tap && (g = C.tap.call(Y, l, l.target))
				}), this), C.doubleTapThreshold)) : (K = null, Y.trigger("tap", [l.target]), C.tap && (g = C.tap.call(Y, l, l.target)))) : f == h ? s !== b && s !== T || (clearTimeout(Z), clearTimeout(J), K = null, Y.trigger("doubletap", [l.target]), C.doubleTap && (g = C.doubleTap.call(Y, l, l.target))) : f == p && (s !== b && s !== T || (clearTimeout(Z), K = null, Y.trigger("longtap", [l.target]), C.longTap && (g = C.longTap.call(Y, l, l.target)))), g
			}

			function ue() {
				var e = !0;
				return null !== C.threshold && (e = j >= C.threshold), e
			}

			function ce() {
				var e = !1;
				return null !== C.cancelThreshold && null !== A && (e = Ce(A) - j >= C.cancelThreshold), e
			}

			function de() {
				return !C.maxTimeThreshold || !(_ >= C.maxTimeThreshold)
			}

			function he() {
				var e = we(),
					t = ve(),
					n = null === C.pinchThreshold || H >= C.pinchThreshold;
				return e && t && n
			}

			function pe() {
				return !!(C.pinchStatus || C.pinchIn || C.pinchOut)
			}

			function fe() {
				var e = de(),
					t = ue(),
					n = we(),
					i = ve();
				return !ce() && i && n && t && e
			}

			function ge() {
				return !!(C.swipe || C.swipeStatus || C.swipeLeft || C.swipeRight || C.swipeUp || C.swipeDown)
			}

			function we() {
				return X === C.fingers || C.fingers === w || !y
			}

			function ve() {
				return 0 !== W[0].end.x
			}

			function me() {
				return !!C.tap
			}

			function Te() {
				return !!C.doubleTap
			}

			function be() {
				if (null == K) return !1;
				var e = Le();
				return Te() && e - K <= C.doubleTapThreshold
			}

			function ye() {
				B = 0, G = 0
			}

			function Se() {
				var e = !1;
				B && (Le() - B <= C.fingerReleaseThreshold && (e = !0));
				return e
			}

			function xe(e) {
				Y && (!0 === e ? (Y.bind(P, te), Y.bind(D, ne), L && Y.bind(L, re)) : (Y.unbind(P, te, !1), Y.unbind(D, ne, !1), L && Y.unbind(L, re, !1)), Y.data(E + "_intouch", !0 === e))
			}

			function Ee(e, t) {
				var n = {
					start: {
						x: 0,
						y: 0
					},
					last: {
						x: 0,
						y: 0
					},
					end: {
						x: 0,
						y: 0
					}
				};
				return n.start.x = n.last.x = n.end.x = t.pageX || t.clientX, n.start.y = n.last.y = n.end.y = t.pageY || t.clientY, W[e] = n, n
			}

			function Oe(e) {
				var t = void 0 !== e.identifier ? e.identifier : 0,
					n = function (e) {
						return W[e] || null
					}(t);
				return null === n && (n = Ee(t, e)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = e.pageX || e.clientX, n.end.y = e.pageY || e.clientY, n
			}

			function Ce(e) {
				if (z[e]) return z[e].distance
			}

			function ke(e) {
				return {
					direction: e,
					distance: 0
				}
			}

			function Me() {
				return $ - V
			}

			function Pe(e, t) {
				var n = Math.abs(e.x - t.x),
					i = Math.abs(e.y - t.y);
				return Math.round(Math.sqrt(n * n + i * i))
			}

			function De(e, a) {
				var o = function (e, t) {
					var n = e.x - t.x,
						i = t.y - e.y,
						r = Math.atan2(i, n),
						a = Math.round(180 * r / Math.PI);
					return a < 0 && (a = 360 - Math.abs(a)), a
				}(e, a);
				return o <= 45 && o >= 0 || o <= 360 && o >= 315 ? t : o >= 135 && o <= 225 ? n : o > 45 && o < 135 ? r : i
			}

			function Le() {
				return (new Date).getTime()
			}
			this.enable = function () {
				return Y.bind(M, ee), Y.bind(I, ie), Y
			}, this.disable = function () {
				return ae(), Y
			}, this.destroy = function () {
				ae(), Y.data(E, null), Y = null
			}, this.option = function (t, n) {
				if ("object" == typeof t) C = e.extend(C, t);
				else if (void 0 !== C[t]) {
					if (void 0 === n) return C[t];
					C[t] = n
				} else {
					if (!t) return C;
					e.error("Option " + t + " does not exist on jQuery.swipe.options")
				}
				return null
			}
		}
		e.fn.swipe = function (t) {
			var n = e(this),
				i = n.data(E);
			if (i && "string" == typeof t) {
				if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
				e.error("Method " + t + " does not exist on jQuery.swipe")
			} else if (i && "object" == typeof t) i.option.apply(this, arguments);
			else if (!(i || "object" != typeof t && t)) return O.apply(this, arguments);
			return n
		}, e.fn.swipe.version = "1.6.15", e.fn.swipe.defaults = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: "label, button, input, select, textarea, a, .noSwipe",
			preventDefaultEvents: !0
		}, e.fn.swipe.phases = {
			PHASE_START: v,
			PHASE_MOVE: m,
			PHASE_END: T,
			PHASE_CANCEL: b
		}, e.fn.swipe.directions = {
			LEFT: t,
			RIGHT: n,
			UP: i,
			DOWN: r,
			IN: a,
			OUT: o
		}, e.fn.swipe.pageScroll = {
			NONE: l,
			HORIZONTAL: f,
			VERTICAL: g,
			AUTO: s
		}, e.fn.swipe.fingers = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			FOUR: 4,
			FIVE: 5,
			ALL: w
		}
	})),
	function (e) {
		"use strict";
		e.fn.bsTouchSlider = function (t) {
			var n = e(".carousel");
			return this.each((function () {
				function t(t) {
					t.each((function () {
						var t = e(this),
							n = t.data("animation");
						t.addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
							t.removeClass(n)
						}))
					}))
				}
				var i = n.find(".item:first").find("[data-animation ^= 'animated']");
				n.carousel(), t(i), n.on("slide.bs.carousel", (function (n) {
					t(e(n.relatedTarget).find("[data-animation ^= 'animated']"))
				})), e(".carousel .carousel-inner").swipe({
					swipeLeft: function (e, t, n, i, r) {
						this.parent().carousel("next")
					},
					swipeRight: function () {
						this.parent().carousel("prev")
					},
					threshold: 0
				})
			}))
		}
	}(jQuery), $("#bootstrap-touch-slider").bsTouchSlider(), jQuery.extend(jQuery.easing, {
		easeInOutCubic: function (e, t, n, i, r) {
			return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
		},
		easeInOutQuint: function (e, t, n, i, r) {
			return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
		}
	}), jQuery("#wowslider-container1").wowSlider({
		effect: "book",
		prev: "",
		next: "",
		duration: 2e3,
		delay: 2e3,
		width: 400,
		height: 360,
		autoPlay: !0,
		autoPlayVideo: !1,
		playPause: !1,
		stopOnHover: !1,
		loop: !1,
		bullets: 0,
		caption: !1,
		captionEffect: "parallax",
		controls: !1,
		controlsThumb: ["data1/tooltips/021s96x48.jpg", "data1/tooltips/023s96x48.jpg", "data1/tooltips/024.jpg", "data1/tooltips/026.jpg", "data1/tooltips/027s96x48.jpg"],
		responsive: 1,
		fullScreen: !1,
		gestures: 2,
		onBeforeStep: 0,
		images: 0
	});