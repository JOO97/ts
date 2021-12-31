# TypeScript 学习笔记



# 类



## 1. 类的es5中的类通过构造函数实现，es6 和 ts 中通过 class 关键字实现。

es5 中的类

```javascript
function Person(name) {  this.name = name;  this.run = function() {    alert(this.name + "在运动");  };}var p = new Person();alert(p.name);
```



ts 中的类定义

```typescript
class Person {  name: string;  constructor(n: string) {    this.name = n;  }  getName(): string {    return this.name;  }  setName(name: string): void {    this.name = name;  }}var p1 = new Person("小栗");p1.setName("xiaoli");alert(p1.getName());
```



## 2. ts 中实现继承，通过关键字 extends 和 super 实现

```
class Person {  name: string;  constructor(n: string) {    this.name = n;  }  run(): void {    alert(`${this.name}在运动`);  }}class Web extends Person {  constructor(n: string) {    super(n);  }  run(): void {    //父类与子类有同样的方法的时候，会调用子类的方法    alert(`${this.name}在运动-子类`);  }}let w = new Web("李四");w.run();
```



## 3. 类里的修饰符

ts中定义属性的时候给我们提供三种修饰符（默认共有）

- public：共有在类内部、类外部、子类中都可以访问
- protected：保护类型  在类内部、子类可以访问，类外部不可访问
- private：私有 在类内部可以访问，在子类和类外部都不能访问



- 
- 
- 
- 
- 
- 
- 
- 

```
class Person {  protected name: string;  constructor(n: string) {    this.name = n;  }}var p = new Person("保护属性");p.name; //报错
```



## 4. 静态属性，静态方法

es5 中的静态方法、静态属性：

- 
- 
- 
- 
- 

```
function Person() {}Person.run = function() {  alert("静态方法");}; //静态方法Person.run();
```



ts 中的静态方法：

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
class Person {  public name: string;  private static sex = "男"; //静态方法  constructor(n: string) {    this.name = n;  }  run() {    //实例方法    alert(`${this.name}在运动`);  }  static print() {    //静态方法    alert(`静态方法${Person.sex}`);  }}Person.print();
```



## 5. 多态 

父类定义一个方法不去实现，让继承他的子类去实现。每一个子类有不同的表现，多态属于继承。

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
class Animal {  name: string;  constructor(n: string) {    this.name = n;  }  eat() {}}class Dog extends Animal {  constructor(n: string) {    super(n);  }  eat() {    alert(`${this.name}吃骨头`);  }}class Cat extends Animal {  constructor(n: string) {    super(n);  }  eat() {    alert(`${this.name}吃罐头`);  }}
```



## 6. 抽象类 

ts 中的抽象类它提供其他类继承的基类，不能直接被实例化,用 abstract 关键字定义的抽象类和抽象方法.有几个特点：

- 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
- abstract抽象方法只能放在抽象类里面
- 抽象类和抽象方法用来定义标准

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
abstract class Animale {  public name: string;  constructor(name: string) {    this.name = name;  }  abstract eat(): any;}class Dog extends Animale {  constructor(n: string) {    super(n);  }  eat() {    //抽象类的子类，必须实现抽象类里面的抽象方法    alert(`${this.name}吃骨头`);  }}
```



# 接口

接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用。

接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里面的实现细节，它只规定这批类必须提供某些方法。

提供这些方法的类就可以满足实际需求。ts 中的接口类似于 java 。同时还增加了更加灵活的接口类型。包括属性、函数、可索引和类等，接口可分为：

- 属性类接口

- 函数类型接口

- 类类型接口

- 可索引接口

- 接口拓展

  

## 1. 属性类接口

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
interface Config {  type: string;  url: string;  data?: string;  dataType?: string;}//原生js封装ajaxfunction ajax(config: Config) {  var xhr = new XMLHttpRequest();  xhr.open(config.type, config.url, true);  xhr.send(config.data);  xhr.onreadystatechange = function() {    if (xhr.readyState == 4 && xhr.status == 200) {      console.log("响应成功");      if (config.dataType == "json") {        console.log(JSON.parse(xhr.responseText));      } else {        console.log(xhr.responseText);      }    }  };}ajax({  type: "get",  url: "http://m.jd.com",  dataType: "json"});
```



## 2. 函数类型接口

对函数传入的参数以及返回值进行约束

- 
- 
- 
- 
- 
- 
- 

```
interface encrypt {  (key: string, value: string): string;}var md5: encrypt = function(k: string, v: string): string {  return `${k}---${v}`;};alert(md5("111", "222"));
```



## 3. 可索引接口

是对数组、对象的约束（不常用）

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
//可索引接口对数组的约束interface UserArr {  [index: number]: string;}var a: UserArr = ["123", "12313"];//可索引接口对对象的约束interface UserObj {  [index: number]: string;}var o: UserObj = {  1: "a",  "2": "b" //"2"可以转成2 所以不报错};
```



## 4. 类类型接口

对类的约束和抽象类类似

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
interface Animal {  name: string;  eat(Str: string): void;}class Dog implements Animal {  name: string;  constructor(n: string) {    this.name = n;  }  eat() {    console.log(`${this.name}吃粮食`);  }}
```



## 5. 接口扩展

接口可以继承接口

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

```
interface Animal {  eat(): void;}interface Person extends Animal {  work(): void;}class Programmer {  public name: string;  constructor(name: string) {    this.name = name;  }  code(): void {    alert(`${this.name}会coding`);  }}class FE extends Programmer implements Person {  //既可以继承又可以实现  constructor(n: string) {    super(n);  }  eat(): void {    console.log(`${this.name}会吃饭`);  }  work(): void {    console.log(`${this.name}会工作`);  }}let p1 = new FE("小王");p1.code();
```



# 接口与抽象类

## 1. 抽象类的使用原则：

- 抽象类不能被实例化，需要依靠子类采用向上转型的方式处理；
- 抽象类必须有子类去继承，一个子类只能继承一个继承抽象类；
- 抽象方法必须是 public 和 protected（因为如果是 private，则不能被子类继承，子类就不能实现此方法）；
- 如果子类继承了此抽象类，则子类必须要重写抽象类中的全部抽象方法（如果子类没有全部重写父类中的抽象方法，则子类也需要定义为abstract的）
- 抽象类不能用 final 声明，因为抽象类必须有子类；



## 2. 抽象类和接口的区别：

- 抽象类里面可以有方法的实现，但是接口完全都是抽象的，不存在方法的实现；
- 子类只能继承一个抽象类，而接口可以被多个实现；
- 抽象方法可以是 public ，protected ，但是接口只能是 public，默认的；
- 抽象类可以有构造器，而接口不能有构造器；
- 抽象类当做父类，被继承。且抽象类的派生类的构造函数中必须调用super()；接口可以当做“子类”继承其他类

