//1 def class
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  getName(): string {
    return this.name
  }
  updateName(name: string): void {
    this.name = name
  }
  run(): void {
    console.log(this.name + ' is running')
  }
}

const p1 = new Person('joo')
p1.updateName('joo1')
const n = p1.getName()

//2 extends class
class Stu extends Person {
  age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  run(): void {
    super.run()
    // console.log(this.name + ' student is running')
  }
}

const s: Stu = new Stu('s1', 18)
// const s: Person = new Stu('s1', 18)
s.run()

//3 modifiers
/*
public(默认)：共有在类内部、类外部、子类中都可以访问
protected：保护类型  在类内部、子类可以访问，类外部不可访问
private：私有 在类内部可以访问，在子类和类外部都不能访问
 */

class A extends Person {
  age: number = 18
  protected age1: number = 1
  private age2: number = 2
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  run(): void {
    // console.log(this.name + ' from A')
  }
  getAge(): number {
    return this.age
  }
}
const a: A = new A('s1', 18)
a.run()
const a_age = a.getAge()
const a_age1 = a.age
// const a_age2 = a.age1
// const a_age3 = a.age2

//4 static
class B {
  static age: number = 18
  constructor(age: number) {
    B.age = age
  }
  static print(): void {
    console.log(`${this.name} is ${this.age} years old!`)
    console.log(`${this.name} is ${B.age} years old!`)
  }
}

B.print()
const b_age = B.age
const b = new B(10) //b = {}

//5
// 多态 父类定义一个方法不去实现，让继承他的子类去实现。每一个子类有不同的表现，多态属于继承。

class Animal {
  name: string
  constructor(n: string) {
    this.name = n
  }
  eat() {}
}

class Cow extends Animal {
  constructor(n: string) {
    super(n)
  }
  eat() {
    console.log(`${this.name} eats grasses`)
  }
}

class Dog extends Animal {
  constructor(n: string) {
    super(n)
  }
  eat() {
    console.log(`${this.name} eats bones`)
  }
}

const dog = new Dog('dog')
dog.eat()
const cow = new Cow('cow')
cow.eat()
