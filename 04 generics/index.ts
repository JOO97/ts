//1 泛型函数
function getInfo<T>(id: T): any {
  return id
}

getInfo<string>('joo')
getInfo<Array<number>>([123])

function getInfo2<T>(value: T): any {
  return value
}
getInfo2<number>(12)

//2类的泛型
class MinClass<T> {
  list: T[] = []
  add(value: T): void {
    this.list.push(value)
  }
  getLast(): T | null {
    const last = this.list.length ? this.list[this.list.length - 1] : null
    return last
  }
}

const m = new MinClass<number>()
m.add(123)
m.add(4)
m.add(56)
// m.add({})
m.getLast()

class MaxClass<T> {
  list: T[] = []
  add(value: T): void {
    this.list.push(value)
  }
  getMax(): T {
    return this.list.sort()[0]
  }
}
const max = new MaxClass<string>()
max.add('1')
max.add('2')
console.log('max', max.getMax())

//3 泛型接口
interface Fn<T> {
  (value: T): T
}
const fn: Fn<number> = function <T>(num: T): T {
  console.log(1, num)
  return num
}
fn(123)

interface Fn2 {
  <T>(value: T): T
}
const fn2: Fn2 = function <T>(num: T): T {
  return num
}
fn2<string>('123')

interface Fn3<T> {
  (value: T): T
}
const fn3: Fn3<number> = function <T>(n: T): T {
  return n
}

interface Fn4 {
  <T>(value: T): T
}
const fn4: Fn4 = function <T>(n: T): T {
  return n
}
fn4<number>(123)
