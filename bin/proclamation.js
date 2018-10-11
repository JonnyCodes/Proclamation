"use strict";
var Proclamation;
(function (Proclamation) {
    var Herald = /** @class */ (function () {
        function Herald() {
            this._heeders = [];
        }
        Herald.prototype.proclaim = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            for (var i = 0; i < this._heeders.length; i++) {
                this._heeders[i].heed(params);
            }
        };
        Herald.prototype.hark = function (heederFunc, context, once) {
            if (context === void 0) { context = null; }
            if (once === void 0) { once = false; }
            var heeder = new Heeder(this, heederFunc, context, once);
            this._heeders.push(heeder);
        };
        Herald.prototype.unhand = function (heederFunc, context) {
            if (context === void 0) { context = null; }
            var heederPos = -1;
            for (var i = 0; i < this._heeders.length; i++) {
                var heeder = this._heeders[i];
                if (heeder.isRightful(heederFunc, context)) {
                    heederPos = i;
                    break;
                }
            }
            this._heeders[heederPos].quell();
            this._heeders.splice(heederPos, 1);
        };
        return Herald;
    }());
    Proclamation.Herald = Herald;
    var Heeder = /** @class */ (function () {
        function Heeder(proclamation, heederFunc, context, once) {
            this._herald = proclamation;
            this._heederFunc = heederFunc;
            this._context = context;
            this._once = once;
        }
        Heeder.prototype.heed = function (params) {
            var _a;
            (_a = this._heederFunc).apply.apply(_a, [this._context].concat(params));
            if (this._once) {
                this._herald.unhand(this._heederFunc, this._context);
            }
        };
        Heeder.prototype.isRightful = function (heederFunc, context) {
            return this._heederFunc == heederFunc && this._context == context;
        };
        Heeder.prototype.quell = function () {
            delete this._herald;
            delete this._heederFunc;
            delete this._context;
            delete this._once;
        };
        return Heeder;
    }());
})(Proclamation || (Proclamation = {}));
//# sourceMappingURL=proclamation.js.map