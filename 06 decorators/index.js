//Decorators
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1 类装饰器
//1.1 不带参数类装饰器 target-被装饰的类
function logClass(target) {
    // console.log('target', target)
    target.prototype.baseUrl = 'http://xxxxx';
    target.prototype.run = function () {
        console.log('run');
    };
}
var HttpReq = /** @class */ (function () {
    function HttpReq() {
        this.type = 'get';
    }
    HttpReq.prototype.run = function () {
        console.log('http run');
    };
    HttpReq = __decorate([
        logClass
    ], HttpReq);
    return HttpReq;
}());
// const http = new HttpReq() //warning
var http = new HttpReq();
// console.log(http.baseUrl)
// http.run()
//1.2带参数的装饰器（装饰器工厂）
function logClass2(params) {
    return function (target) {
        target.prototype.baseUrl = params;
    };
}
var HttpReq2 = /** @class */ (function () {
    function HttpReq2() {
        this.baseUrl = 'http://1';
    }
    HttpReq2 = __decorate([
        logClass2('http://xxxxx')
    ], HttpReq2);
    return HttpReq2;
}());
var http2 = new HttpReq2();
//console.log(http2.baseUrl) //http://1
//1.3通过类装饰器实现对构造函数重载
function logClass3(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.baseUrl = 'logClass3 baseUrl';
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log(this.baseUrl + '-----');
        };
        return class_1;
    }(target));
}
var HttpReq3 = /** @class */ (function () {
    function HttpReq3(url) {
        this.baseUrl = url;
    }
    HttpReq3.prototype.getData = function () {
        console.log(this.baseUrl);
    };
    HttpReq3 = __decorate([
        logClass3
    ], HttpReq3);
    return HttpReq3;
}());
var http3 = new HttpReq3('HttpReq3 baseUrl');
http3.getData();
// console.log(http3.baseUrl) //logClass3 baseUrl
//2 属性装饰器
/**
属性装饰器表达式会在运行时当作函数被调用。传入下列两个参数：
对应静态成员来说是类的构造函数，对于实例成员是类的原型对象
成员的名字
 */
function logClass4(params) {
    return function (target) { };
}
function logProperty(params) {
    return function (target, attr) {
        console.log(params, target, attr);
        target[attr] = params;
    };
}
// @logClass4('123')
var httpReq4 = /** @class */ (function () {
    function httpReq4() {
    }
    __decorate([
        logProperty('xxxx')
    ], httpReq4.prototype, "url");
    __decorate([
        logProperty('xxxx')
    ], httpReq4.prototype, "url2");
    return httpReq4;
}());
//3 方法装饰器
