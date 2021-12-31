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
function ajax(req) {
    var xhr = new XMLHttpRequest();
    xhr.open(req.type, req.url, true);
    xhr.send(req.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
}
var md5 = function (k, v) {
    console.log("".concat(k, "-").concat(v));
    return "".concat(k, "-").concat(v);
};
md5('name', 'joo');
var newArr = [1, 2];
var newObj = {
    1: '123',
    name: 'joo'
};
var Dog = /** @class */ (function () {
    function Dog(n) {
        this.name = n;
    }
    Dog.prototype.run = function () {
        console.log("".concat(this.name, " is running"));
    };
    Dog.prototype.eat = function () {
        console.log("".concat(this.name, " eats"));
    };
    Dog.prototype.eat2 = function (s) {
        console.log("".concat(this.name, " eats ").concat(s));
    };
    return Dog;
}());
var dog = new Dog('dog');
dog.run();
dog.eat();
dog.eat2('bones');
var Programmer = /** @class */ (function () {
    function Programmer(n) {
        this.name = n;
    }
    Programmer.prototype.code = function () {
        console.log("".concat(this.name, " is coding"));
    };
    Programmer.prototype.run = function () {
        console.log("".concat(this.name, " is running"));
    };
    return Programmer;
}());
var P = /** @class */ (function (_super) {
    __extends(P, _super);
    function P(n) {
        return _super.call(this, n) || this;
    }
    P.prototype.work = function () {
        console.log("".concat(this.name, " is working"));
    };
    return P;
}(Programmer));
var p = new P('joo');
p.work();
p.code();
p.run();
