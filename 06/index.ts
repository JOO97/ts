//Decorators

//1 类装饰器
//1.1 不带参数类装饰器 target-被装饰的类
function logClass(target: any) {
  // console.log('target', target)
  target.prototype.baseUrl = 'http://xxxxx'
  target.prototype.run = function (): void {
    console.log('run')
  }
}

@logClass
class HttpReq {
  type: string = 'get'
  run(): void {
    console.log('http run')
  }
}

// const http = new HttpReq() //warning
const http: any = new HttpReq()
// console.log(http.baseUrl)
// http.run()

//1.2带参数的装饰器（装饰器工厂）
function logClass2(params: string): any {
  return function (target: any) {
    target.prototype.baseUrl = params
  }
}
@logClass2('http://xxxxx')
class HttpReq2 {
  baseUrl: string = 'http://1'
}
const http2: any = new HttpReq2()
//console.log(http2.baseUrl) //http://1

//1.3通过类装饰器实现对构造函数重载
function logClass3(target: any) {
  return class extends target {
    baseUrl: string = 'logClass3 baseUrl'
    getData(): void {
      console.log(this.baseUrl + '-----')
    }
  }
}

@logClass3
class HttpReq3 {
  baseUrl: string | undefined
  constructor(url: string) {
    this.baseUrl = url
  }
  getData(): void {
    console.log(this.baseUrl)
  }
}

const http3 = new HttpReq3('HttpReq3 baseUrl')
http3.getData()
// console.log(http3.baseUrl) //logClass3 baseUrl

//2 属性装饰器
/**
属性装饰器表达式会在运行时当作函数被调用。传入下列两个参数：
对应静态成员来说是类的构造函数，对于实例成员是类的原型对象
成员的名字
 */
function logClass4(params: any) {
  return function (target: any) {}
}

function logProperty(params: string) {
  return function (target: any, attr: string) {
    console.log(params, target, attr)
    target[attr] = params
  }
}

// @logClass4('123')
class httpReq4 {
  @logProperty('xxxx')
  public url: string | undefined
  @logProperty('xxxx')
  public url2: string | undefined
  constructor() {}
}

//3 方法装饰器
