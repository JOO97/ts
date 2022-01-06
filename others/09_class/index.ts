//4 多态
class Animal {
  action() {}
}
class Dog {
  action() {
    console.log('dog')
  }
}
class Cat {
  action() {
    console.log('cat')
  }
}
function action(arr: Animal[]) {
  arr.map((item) => {
    item.action()
  })
}
// action([new Dog(), new Cat()])

//8 setter/getter
class Stu {
  private _name: string
  constructor(n: string) {
    this._name = n
  }
  set name(newName) {
    this._name = newName
  }
  get name() {
    return this._name
  }
}
const stu = new Stu('xx')
// console.log(stu._name) error
// console.log(stu.name)
stu.name = 'xxxx'

//10 abstract
abstract class Shape {
  abstract getArea(): number
}

class Circle extends Shape {
  r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea() {
    return this.r * this.r * 3.14
  }
}
class Rectangle extends Shape {
  w: number
  h: number
  constructor(w: number, h: number) {
    super()
    this.w = w
    this.h = h
  }
  getArea() {
    return this.w * this.h
  }
}

function getArea(item: Shape) {
  return item.getArea()
}

console.log(getArea(new Circle(5)), getArea(new Rectangle(1, 10)))
