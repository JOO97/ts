//1 属性类接口
interface Req {
  type: string
  url: string
  data?: string
  dataType?: string
}

function ajax(req: Req): any {
  var xhr = new XMLHttpRequest()
  xhr.open(req.type, req.url, true)
  xhr.send(req.data)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}
// ajax({
//   type: 'get',
//   url: 'http://localhost:3000/',
//   dataType: 'json'
// })

//2 函数类型接口
interface Encrypt {
  (key: string, value: string): string
}

const md5: Encrypt = function (k: string, v: string): string {
  console.log(`${k}-${v}`)
  return `${k}-${v}`
}

md5('name', 'joo')

//3 可索引接口
interface Arr {
  [index: number]: number
}
const newArr: Arr = [1, 2]

interface Obj {
  [index: string]: string
}
const newObj: Obj = {
  1: '123',
  name: 'joo'
}

//4 类类型接口
interface Animal1 {
  name: string
  run(): void
  eat(str: string): void
  eat2(str?: string): void
}

class Dog implements Animal1 {
  name: string
  constructor(n: string) {
    this.name = n
  }
  run() {
    console.log(`${this.name} is running`)
  }
  eat() {
    console.log(`${this.name} eats`)
  }
  eat2(s: string) {
    console.log(`${this.name} eats ${s}`)
  }
}

const dog = new Dog('dog')
dog.run()
dog.eat()
dog.eat2('bones')

//5 接口扩展
interface Animal {
  name: string
  run(): void
}

interface Person extends Animal {
  work(): void
}

class Programmer implements Animal {
  name: string
  constructor(n: string) {
    this.name = n
  }
  code(): void {
    console.log(`${this.name} is coding`)
  }
  run() {
    console.log(`${this.name} is running`)
  }
}

class P extends Programmer implements Person {
  constructor(n: string) {
    super(n)
  }
  work() {
    console.log(`${this.name} is working`)
  }
}

const p = new P('joo')
p.work()
p.code()
p.run()
