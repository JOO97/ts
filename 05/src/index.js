"use strict";
//namespace
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.B = exports.A = void 0;
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log("".concat(this.name, "\u5728\u5403\u72D7\u7CAE"));
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log("".concat(this.name, "\u5728\u5403\u732B\u7CAE"));
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
exports.A = A;
var B;
(function (B) {
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.eat = function () {
            console.log("".concat(this.name, "\u5728\u5403\u72D7\u7CAE"));
        };
        return Dog;
    }(A.Dog));
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log("".concat(this.name, "\u5728\u5403\u732B\u7CAE"));
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
exports.B = B;
var dogA = new A.Dog('A');
dogA.eat();
var dogB = new B.Dog('B');
dogB.eat();
