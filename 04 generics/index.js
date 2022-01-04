//1 泛型函数
function getInfo(id) {
    return id;
}
getInfo('joo');
getInfo([123]);
function getInfo2(value) {
    return value;
}
getInfo2(12);
//2类的泛型
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.getLast = function () {
        var last = this.list.length ? this.list[this.list.length - 1] : null;
        return last;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(123);
m.add(4);
m.add(56);
// m.add({})
m.getLast();
var MaxClass = /** @class */ (function () {
    function MaxClass() {
        this.list = [];
    }
    MaxClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MaxClass.prototype.getMax = function () {
        return this.list.sort()[0];
    };
    return MaxClass;
}());
var max = new MaxClass();
max.add('1');
max.add('2');
console.log('max', max.getMax());
var fn = function (num) {
    console.log(1, num);
    return num;
};
fn(123);
var fn2 = function (num) {
    return num;
};
fn2('123');
var fn3 = function (n) {
    return n;
};
var fn4 = function (n) {
    return n;
};
fn4(123);
