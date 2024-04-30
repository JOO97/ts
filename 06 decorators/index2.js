"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function classDrt(constructor) {
    console.log('classDrt');
    constructor.prototype.baseUrl = 'http://xxxxx';
    constructor.prototype.run = function () {
        console.log('run');
    };
}
// 饰器工厂
function classDrt2(url) {
    console.log('classDrt2');
    return function (constructor) {
        console.log('classDrt22');
        constructor.prototype.baseUrl = url;
        constructor.prototype.run = function () {
            console.log('run');
        };
    };
}
// 通过类装饰器实现对构造函数重载
function classDrt3(target) {
    console.log('classDrt3');
    return class extends target {
        constructor() {
            super(...arguments);
            this.title = 'classDrt3 title';
        }
        getData() {
            console.log(this.title + '-----');
        }
    };
}
// 属性装饰器
function propDrt(params) {
    return function (target, attr) {
        console.log('target', target);
        console.log('attr', attr);
        console.log('params', params);
        target[attr] = params;
    };
}
function fnDrt(param) {
    return function (target, attr, desc) {
        console.log('param', param);
        console.log('target', target);
        console.log('attr', attr);
        console.log('desc', desc);
        // target[attr] = function () {
        // 	console.log('gerData2');
        // };
        let method = desc.value;
        desc.value = function (...args) {
            // args = args.map((item) => item + 'xxx');
            method.apply(this, args);
        };
    };
}
// function fnDrt2() {}
function paramsDrt() {
    return function (target, fnName, paramIndex) {
        console.log('target', target);
        console.log('fnName', fnName);
        console.log('paramIndex', paramIndex);
    };
}
/**
 * classDrt2
 * classDrt22
 * classDrt
 */
// @classDrt
// @classDrt2('123')
// @classDrt3
class Dec {
    constructor(title) {
        // this.title = title;
    }
    // @fnDrt('xxx')
    getData(key) {
        console.log('gerData', key);
    }
}
__decorate([
    __param(0, paramsDrt())
], Dec.prototype, "getData", null);
const dec = new Dec('xxxx');
console.log('dec', dec.getData('a'));
