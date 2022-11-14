! function(n) {
	function e(i) {
		if (t[i]) return t[i].exports;
		var r = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return n[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
	}
	var t = {};
	e.m = n, e.c = t, e.i = function(n) {
		return n
	}, e.d = function(n, t, i) {
		e.o(n, t) || Object.defineProperty(n, t, {
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, e.n = function(n) {
		var t = n && n.__esModule ? function() {
			return n.default
		} : function() {
			return n
		};
		return e.d(t, "a", t), t
	}, e.o = function(n, e) {
		return Object.prototype.hasOwnProperty.call(n, e)
	}, e.p = "", e(e.s = "./client/src/TinyMCE_sslink-phone.js")
}({
	"./client/src/TinyMCE_sslink-phone.js": function(n, e, t) {
		"use strict";

		function i(n) {
			return n && n.__esModule ? n : {
				default: n
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(5),
			o = i(r),
			s = t(4),
			l = i(s),
			a = t(2),
			d = i(a),
			u = t(3),
			c = i(u),
			f = t(6),
			p = i(f),
			m = t(1),
			h = t(0);
		t("./client/src/lang/en.js"), t("./client/src/lang/fr.js"), l.default.addAction("sslink", {
			text: o.default._t("Admin.LINKLABEL_PHONE", "Link to phone number"),
			onclick: function(n) {
				return n.execCommand("sslinkphone")
			},
			priority: 51
		}).addCommandWithUrlTest("sslinkphone", /^tel:/);
		var g = {
				init: function(n) {
					n.addCommand("sslinkphone", function() {
						window.jQuery("#" + n.id).entwine("ss").openLinkPhoneDialog()
					})
				}
			},
			_ = "insert-link__dialog-wrapper--phone",
			L = (0, h.loadComponent)((0, m.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain", "EditorPhoneLink"));
		p.default.entwine("ss", function(n) {
			n("textarea.htmleditor").entwine({
				openLinkPhoneDialog: function() {
					var e = n("#" + _);
					e.length || (e = n('<div id="' + _ + '" />'), n("body").append(e)), e.addClass("insert-link__dialog-wrapper"), e.setElement(this), e.open()
				}
			}), n("#" + _).entwine({
				renderModal: function(n) {
					var e = this,
						t = function() {
							return e.close()
						},
						i = function() {
							return e.handleInsert.apply(e, arguments)
						},
						r = this.getOriginalAttributes(),
						s = tinymce.activeEditor.selection,
						l = s.getContent() || "",
						a = s.getNode().tagName,
						u = "A" !== a && "" === l.trim();
					c.default.render(d.default.createElement(L, {
						isOpen: n,
						onInsert: i,
						onClosed: t,
						title: o.default._t("Admin.LINK_PHONE", "Insert phone number link"),
						bodyClassName: "modal__dialog",
						className: "insert-link__dialog-wrapper--phone",
						fileAttributes: r,
						identifier: "Admin.InsertLinkPhoneModal",
						requireLinkText: u
					}), this[0])
				},
				getOriginalAttributes: function() {
					var e = this.getElement().getEditor(),
						t = n(e.getSelectedNode());
					return {
						Link: (t.attr("href") || "").replace(/^tel:/, ""),
						Description: t.attr("title")
					}
				},
				buildAttributes: function(n) {
					var e = this._super(n),
						t = "",
						c = 'phone-link',
						i = e.href.replace(/^tel:/, "");
					return i && (t = "tel:" + i), e.href = t, e.class = c, delete e.target, e
				}
			})
		}), tinymce.PluginManager.add("sslinkphone", function(n) {
			return g.init(n)
		}), e.default = g
	},
	"./client/src/lang/en.js": function(n, e, t) {
		"use strict";
		"undefined" == typeof i18n ? console.error("Class i18n not defined") : i18n.addDictionary("en", {
			"Admin.LINKLABEL_PHONE": "Link to phone number",
			"Admin.LINK_PHONE": "Insert phone number link"
		})
	},
	"./client/src/lang/fr.js": function(n, e, t) {
		"use strict";
		"undefined" == typeof i18n ? console.error("Class i18n not defined") : i18n.addDictionary("fr", {
			"Admin.LINKLABEL_PHONE": "Lien vers numéro de téléphone",
			"Admin.LINK_PHONE": "Inserer un lien vers un numéro de téléphone"
		})
	},
	0: function(n, e) {
		n.exports = Injector
	},
	1: function(n, e) {
		n.exports = InsertLinkModal
	},
	2: function(n, e) {
		n.exports = React
	},
	3: function(n, e) {
		n.exports = ReactDom
	},
	4: function(n, e) {
		n.exports = TinyMCEActionRegistrar
	},
	5: function(n, e) {
		n.exports = i18n
	},
	6: function(n, e) {
		n.exports = jQuery
	}
});
