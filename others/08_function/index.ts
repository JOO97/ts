//01 def
type GetFnType = () => void
function get(fn: GetFnType) {
  fn()
}
get(() => {})

type UpdateFnType = (num1: number) => number
const update: UpdateFnType = function (num1: number) {
  return num1
}

//07-08 this
//1
const obj = {
  name: 'xxx',
  getName() {
    //this指向obj
    // console.log('get', this.name)
  }
}
obj.getName()

//2
//error 'this' implicitly has type 'any' because it does not have a type annotation
// function getName2() {
//   console.log(this)
// }
type ThisType = { name: string }
function getName2(this: ThisType, msg?: string[], msg2?: string) {
  //   console.log(this.name, msg, msg2)
}
const obj2 = {
  name: '2xxx',
  getName2
}
// 隐式绑定
obj2.getName2()

//显示绑定
getName2.call({ name: 'xxx' })
getName2.apply({ name: 'xxx' }, [['1', '2'], '2'])

export {}

//10 override
function add(num1: number, num2: number): number
function add(num1: string, num2: string): string
function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}
// console.log(add(1, 2), add('x', 'xx'))
