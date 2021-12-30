//1 类型
/**
 * 布尔类型（boolean）、数字类型(number)、字符串类型(string)、数组类型(array)、元祖类型(tuple)、枚举类型(enum)、任意类型(any)、null 和 undefined、void类型、never类型
 */

let flag: boolean = false
//"strictNullChecks": false
// flag = undefined
// flag = null

let num: number
num = 123

let arr: number[] = []
let arr1: string[] = ['2']
let arr2: Array<number> = [1]
let arr3: Array<any> = [{}, '']
let arr4: any[] = [{}, '']

/**
 * 元祖类型（tuple）
属于数组的一种,定义数组中具体的类型
 */
let tuple: [number, string, object] = [2, '2', {}]

//enum

enum Color {
  red,
  blue,
  green = 5,
  pink
}

/*
{
    "0": "red",
    "1": "blue",
    "5": "green",
    "6": "pink",
    "red": 0,
    "blue": 1,
    "green": 5,
    "pink": 6
}
*/

const c: Color = Color['pink']
const c2: string = Color[5]

enum Msg {
  error = '错误',
  info = '提示',
  '警告' = 'warning'
}
/*
{
    "error": "错误",
    "info": "提示",
    "警告": "warning"
}
*/

// var oBox: any = document.getElementById('box')
// oBox.style.color = 'red'
let person: any = {}

//undefined 和 null,
//是其他数据类型（ never 类型）的子类型
let num1: number | undefined | null
num1 = 123
num1 = undefined
num1 = null

let num2: never

function run(): void {
  console.log('run')
}
run()

// function run2(): never {
//   throw new Error()
// }
// run2()

//2 func
function getData(name: string = '1', id?: number): number {
  return 1
}
getData('1')

const getData2 = function (): number {
  return 2
}
getData2()

//剩余参数
function fun(num1: number, ...result: Array<number>): number {
  return num1
}
fun(1, 2, 3)

//3 重载
// function getInfo(name: string): string
// function getInfo(age: number): number

function getInfo(str: string | number): any {
  if (typeof str === 'string') {
    return `姓名：${str}`
  } else if (typeof str === 'number') {
    return str
  }
}
getInfo(1)

// function getInfo(name: string): string
// function getInfo(name: string, age: number): string

function getInfo2(name: string, age?: number): string {
  if (age) return name + age
  return name
}
getInfo2('1', 11)
