"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent = /** @class */ (function () {
    function BaseComponent(baseActivatedRoute, baseLocation) {
        this.baseActivatedRoute = baseActivatedRoute;
        this.baseLocation = baseLocation;
        this.isInEditMode = true;
    }
    BaseComponent.prototype.showMessage = function (isEditable, severity, summary, shouldGoBack, msg) {
        var _this = this;
        this.isInEditMode = isEditable;
        this.messages = [];
        this.messages.push({
            severity: severity, summary: summary, detail: msg
        });
        if (shouldGoBack) {
            setTimeout(function () {
                _this.goBack();
            }, 3000);
        }
    };
    BaseComponent.prototype.goBack = function () {
        this.baseLocation.back();
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map