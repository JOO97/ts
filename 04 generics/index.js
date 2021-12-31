//1 泛型函数
function getInfo(id) {
    return id;
}
getInfo('joo');
getInfo([123]);
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
var fn = function (num) {
    console.log(1, num);
    return num;
};
fn(123);
var fn2 = function (num) {
    console.log(2, num);
    return num;
};
fn2('123');
