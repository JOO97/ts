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
//1 def class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.updateName = function (name) {
        this.name = name;
    };
    Person.prototype.run = function () {
        console.log(this.name + ' is running');
    };
    return Person;
}());
var p1 = new Person('joo');
p1.updateName('joo1');
var n = p1.getName();
//2 extends class
var Stu = /** @class */ (function (_super) {
    __extends(Stu, _super);
    function Stu(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Stu.prototype.run = function () {
        _super.prototype.run.call(this);
        // console.log(this.name + ' student is running')
    };
    return Stu;
}(Person));
var s = new Stu('s1', 18);
// const s: Person = new Stu('s1', 18)
s.run();
//3 modifiers
/*
public(默认)：共有在类内部、类外部、子类中都可以访问
protected：保护类型  在类内部、子类可以访问，类外部不可访问
private：私有 在类内部可以访问，在子类和类外部都不能访问
 */
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = 18;
        _this.age1 = 1;
        _this.age2 = 2;
        _this.age = age;
        return _this;
    }
    A.prototype.run = function () {
        // console.log(this.name + ' from A')
    };
    A.prototype.getAge = function () {
        return this.age;
    };
    return A;
}(Person));
var a = new A('s1', 18);
a.run();
var a_age = a.getAge();
var a_age1 = a.age;
// const a_age2 = a.age1
// const a_age3 = a.age2
//4 static
var B = /** @class */ (function () {
    function B(age) {
        B.age = age;
    }
    B.print = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old!"));
        console.log("".concat(this.name, " is ").concat(B.age, " years old!"));
    };
    B.age = 18;
    return B;
}());
B.print();
var b_age = B.age;
var b = new B(10); //b = {}
//5
// 多态 父类定义一个方法不去实现，让继承他的子类去实现。每一个子类有不同的表现，多态属于继承。
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.eat = function () { };
    return Animal;
}());
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow(n) {
        return _super.call(this, n) || this;
    }
    Cow.prototype.eat = function () {
        console.log("".concat(this.name, " eats grasses"));
    };
    return Cow;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(n) {
        return _super.call(this, n) || this;
    }
    Dog.prototype.eat = function () {
        console.log("".concat(this.name, " eats bones"));
    };
    return Dog;
}(Animal));
var dog = new Dog('dog');
dog.eat();
var cow = new Cow('cow');
cow.eat();
//6 抽象类
/**
 * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
abstract抽象方法只能放在抽象类里面
抽象类和抽象方法用来定义标准
 */
var Plant = /** @class */ (function () {
    function Plant(n) {
        this.name = n;
    }
    return Plant;
}());
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(n) {
        return _super.call(this, n) || this;
    }
    Tree.prototype.grow = function () {
        console.log('grow func of Tree');
    };
    return Tree;
}(Plant));
var t = new Tree('tree');
t.grow();
