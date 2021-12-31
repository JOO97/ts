//1 泛型函数
function getInfo<T>(id: T): any {
  return id
}

getInfo<string>('joo')
getInfo<Array<number>>([123])

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
  console.log(2, num)
  return num
}
fn2<string>('123')
