"use strict";
//Decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
let HttpReq = class HttpReq {
    constructor() {
        this.type = 'get';
    }
    run() {
        console.log('http run');
    }
};
HttpReq = __decorate([
    logClass
], HttpReq);
// const http = new HttpReq() //warning
const http = new HttpReq();
// console.log(http.baseUrl)
// http.run()
//1.2带参数的装饰器（装饰器工厂）
function logClass2(params) {
    return function (target) {
        target.prototype.baseUrl = params;
    };
}
let HttpReq2 = class HttpReq2 {
    constructor() {
        this.baseUrl = 'http://1';
    }
};
HttpReq2 = __decorate([
    logClass2('http://xxxxx')
], HttpReq2);
const http2 = new HttpReq2();
//console.log(http2.baseUrl) //http://1
//1.3通过类装饰器实现对构造函数重载
function logClass3(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.baseUrl = 'logClass3 baseUrl';
        }
        getData() {
            console.log(this.baseUrl + '-----');
        }
    };
}
let HttpReq3 = class HttpReq3 {
    constructor(url) {
        this.baseUrl = url;
    }
    getData() {
        console.log(this.baseUrl);
    }
};
HttpReq3 = __decorate([
    logClass3
], HttpReq3);
const http3 = new HttpReq3('HttpReq3 baseUrl');
// http3.getData()
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
        target[attr] = params;
    };
}
// @logClass4('123')
class httpReq4 {
    constructor() { }
}
__decorate([
    logProperty('xxxx')
], httpReq4.prototype, "url", void 0);
__decorate([
    logProperty('xxxx')
], httpReq4.prototype, "url2", void 0);
//3 方法装饰器
/**
他会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法，方法修饰符会在运行时传入以下三个参数：
1对于静态成员来说是类的构造函数，对于实例对象来说是类的原型对象
2成员的名字
3成员的属性描述符
 */
//3.1 普通方法装饰器
function logClass5(params) {
    return function (target, attr, desc) {
        // console.log(params, target, attr, desc)
        target.url = params;
        target.run = function () {
            // console.log('logClass5 run')
        };
        target.run2 = function () {
            // console.log('logClass5 run')
        };
    };
}
class HttpReq5 {
    run() {
        //优先
        console.log('5 run');
    }
}
__decorate([
    logClass5('xxxx')
], HttpReq5.prototype, "run", null);
const http5 = new HttpReq5();
// http5.run()
// http5.run2()
//3.2 修改方法参数
function logClass6(params) {
    return function (target, attr, desc) {
        let method = desc.value;
        desc.value = function (...args) {
            args = args.map((item) => item + 'xxx');
            method.apply(this, args);
        };
    };
}
class HttpReq6 {
    get(...args) {
        console.log('get', args);
    }
}
__decorate([
    logClass6('xxx')
], HttpReq6.prototype, "get", null);
const http6 = new HttpReq6();
// http6.get(1, 2, 3)
//4 方法参数装饰器
function logParams(params) {
    return function (target, fnName, paramIndex) {
        console.log(target, fnName, paramIndex);
        target.url = params;
    };
}
class HttpReq7 {
    get(id, name) {
        console.log('p', id, name);
    }
}
__decorate([
    __param(1, logParams('xxxx'))
], HttpReq7.prototype, "get", null);
const http7 = new HttpReq7();
http7.get(1, 'joo');
console.log(http7.url);
/*
各类装饰器的执行顺序：
属性装饰器 > 方法装饰器 > 方法参数装饰器 > 类装饰器
如果有多个同一类别装饰器，从后往前执行
*/
