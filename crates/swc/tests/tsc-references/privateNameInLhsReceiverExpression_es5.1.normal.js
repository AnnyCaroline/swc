import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
import _class_private_field_get from "@swc/helpers/lib/_class_private_field_get.js";
import _class_private_field_init from "@swc/helpers/lib/_class_private_field_init.js";
import _class_private_field_set from "@swc/helpers/lib/_class_private_field_set.js";
var _y = /*#__PURE__*/ new WeakMap();
// @target: es2015
var Test = /*#__PURE__*/ function() {
    "use strict";
    function Test() {
        _class_call_check(this, Test);
        _class_private_field_init(this, _y, {
            writable: true,
            value: 123
        });
    }
    Test.something = function something(obj) {
        var _s;
        var _x, _x1;
        _class_private_field_set(obj[(new (_x = /*#__PURE__*/ new WeakMap(), function _class() {
            _class_call_check(this, _class);
            _class_private_field_init(this, _x, {
                writable: true,
                value: 1
            });
            this.s = "prop";
        })).s], _y, 1);
        _class_private_field_set(_s = obj[(new (_x1 = /*#__PURE__*/ new WeakMap(), function _class() {
            _class_call_check(this, _class);
            _class_private_field_init(this, _x1, {
                writable: true,
                value: 1
            });
            this.s = "prop";
        })).s], _y, _class_private_field_get(_s, _y) + 1);
    };
    return Test;
}();
