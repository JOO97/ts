//02
function print<T, E, O>(s: T, s2: E, s3: O, ...args: T[]) {
  //   console.log(s, s2, s3, args)
}
// print('a', 1, true)
print<string, number, boolean>('a', 1, true, 'x')

//03 泛型接口的使用
interface IPerson<T1 = string, T2 = number> {
  name: T1
  age: T2
}

const obj: IPerson = {
  name: 'x',
  age: 1
}
const obj2: IPerson<number, string> = {
  name: 1,
  age: '1'
}

//05 类型的类型约束
interface ILength {
  length: number
}

//ERROR
// function getL<T>(arg: T) {
//   console.log(arg.length)
// }
function getL<T extends ILength>(arg: T) {
  //   console.log(arg.length)
}

getL('xxx')
getL(['xxx'])
getL({ length: 123 })

//#TODO 06 ??
const flag = '' ?? 'false'

const s: string | null = 'xx'
const flag2 = s ? s : 'false'
const flag3 = s ?? 'false'

console.log(flag, flag2, flag3)
