//namespace

namespace A {
  interface Animal {
    name: string
    eat(): void
  }
  export class Dog implements Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    eat(): void {
      console.log(`${this.name}在吃狗粮`)
    }
  }
  export class Cat implements Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    eat(): void {
      console.log(`${this.name}在吃猫粮`)
    }
  }
}

namespace B {
  interface Animal {
    name: string
    eat(): void
  }
  export class Dog extends A.Dog implements Animal {
    constructor(name: string) {
      super(name)
    }
    eat(): void {
      console.log(`${this.name}在吃狗粮`)
    }
  }
  export class Cat implements Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }
    eat(): void {
      console.log(`${this.name}在吃猫粮`)
    }
  }
}
export { A, B }

let dogA = new A.Dog('A')
dogA.eat()
let dogB = new B.Dog('B')
dogB.eat()
