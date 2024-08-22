"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Base = exports.Base = /*#__PURE__*/function () {
  function Base(private _templateId, private _hostId, private _elementId, private _positionElementStart) {
    _classCallCheck(this, Base);
    _defineProperty(this, "_template", void 0);
    _defineProperty(this, "_hostElement", void 0);
    _defineProperty(this, "element", void 0);
    // assign template element
    this._template = document.getElementById(this._templateId);
    // assign host element
    this._hostElement = document.getElementById(this._hostId);
    // import template content

    var templateContent = document.importNode(this._template.content, true);
    this.element = templateContent.firstElementChild;
    if (this._elementId) {
      this.element.id = this._elementId;
      this._insertElement(this._positionElementStart);
    }
  }
  return _createClass(Base, [{
    key: "_insertElement",
    value: function _insertElement(positionStart) {
      if (positionStart) {
        var isInsertStart = positionStart ? "beforeend" : "afterbegin";
        this._hostElement.insertAdjacentElement(isInsertStart, this.element);
      }
    }
  }]);
}();