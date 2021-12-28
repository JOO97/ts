/**
 * 布尔类型（boolean）、数字类型(number)、字符串类型(string)、数组类型(array)、元祖类型(tuple)、枚举类型(enum)、任意类型(any)、null 和 undefined、void类型、never类型
 */

let flag: boolean = false

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
