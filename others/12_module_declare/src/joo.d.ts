//声明文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

//声明模块
declare module 'lodash' {
  export function join(arr: any[]): any
}

// 声明变量/函数/类
declare let person: string
declare function get(n: string): void
declare class Person {
  name: string
  constructor(n: string) {
    this.name = n
  }
}

// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}
