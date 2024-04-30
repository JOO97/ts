//Decorators

//1 类装饰器
//1.1 不带参数类装饰器 target-被装饰的类
function logClass(target: any) {
	// console.log('target', target)
	target.prototype.baseUrl = 'http://xxxxx';
	target.prototype.run = function (): void {
		console.log('run');
	};
}

@logClass
class HttpReq {
	type: string = 'get';
	run(): void {
		console.log('http run');
	}
}

// const http = new HttpReq() //warning
const http: any = new HttpReq();
// console.log(http.baseUrl)
// http.run()

//1.2带参数的装饰器（装饰器工厂）
function logClass2(params: string): any {
	return function (target: any) {
		target.prototype.baseUrl = params;
	};
}
@logClass2('http://xxxxx')
class HttpReq2 {
	baseUrl: string = 'http://1';
}
const http2: any = new HttpReq2();
//console.log(http2.baseUrl) //http://1

//1.3通过类装饰器实现对构造函数重载
function logClass3(target: any) {
	return class extends target {
		baseUrl: string = 'logClass3 baseUrl';
		getData(): void {
			console.log(this.baseUrl + '-----');
		}
	};
}

@logClass3
class HttpReq3 {
	baseUrl: string | undefined;
	constructor(url: string) {
		this.baseUrl = url;
	}
	getData(): void {
		console.log(this.baseUrl);
	}
}

const http3 = new HttpReq3('HttpReq3 baseUrl');
// http3.getData()
// console.log(http3.baseUrl) //logClass3 baseUrl

//2 属性装饰器
/**
属性装饰器表达式会在运行时当作函数被调用。传入下列两个参数：
对应静态成员来说是类的构造函数，对于实例成员是类的原型对象
成员的名字
 */
function logClass4(params: any) {
	return function (target: any) {};
}

function logProperty(params: string) {
	return function (target: any, attr: string) {
		target[attr] = params;
	};
}

// @logClass4('123')
class httpReq4 {
	@logProperty('xxxx')
	public url: string | undefined;
	@logProperty('xxxx')
	public url2: string | undefined;
	constructor() {}
}

//3 方法装饰器
/**
他会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法，方法修饰符会在运行时传入以下三个参数：
1对于静态成员来说是类的构造函数，对于实例对象来说是类的原型对象
2成员的名字
3成员的属性描述符
 */
//3.1 普通方法装饰器
function logClass5(params: string) {
	return function (target: any, attr: any, desc: any) {
		// console.log(params, target, attr, desc)
		target.url = params;
		target.run = function () {
			// console.log('logClass5 run')
		};
		target.run2 = function () {
			// console.log('logClass5 run')
		};
	};
}

class HttpReq5 {
	public url: string | undefined;
	@logClass5('xxxx')
	run() {
		//优先
		console.log('5 run');
	}
}

const http5: any = new HttpReq5();
// http5.run()
// http5.run2()

//3.2 修改方法参数
function logClass6(params: string) {
	return function (target: any, attr: any, desc: any) {
		let method = desc.value;
		desc.value = function (...args: any[]) {
			args = args.map((item) => item + 'xxx');
			method.apply(this, args);
		};
	};
}

class HttpReq6 {
	@logClass6('xxx')
	get(...args: any) {
		console.log('get', args);
	}
}
const http6 = new HttpReq6();
// http6.get(1, 2, 3)

//4 方法参数装饰器
function logParams(params: string) {
	return function (target: any, fnName: any, paramIndex: any) {
		console.log(target, fnName, paramIndex);
		target.url = params;
	};
}
class HttpReq7 {
	get(id: any, @logParams('xxxx') name: string) {
		console.log('p', id, name);
	}
}

const http7: any = new HttpReq7();
http7.get(1, 'joo');
console.log(http7.url);

/*
各类装饰器的执行顺序：
属性装饰器 > 方法装饰器 > 方法参数装饰器 > 类装饰器
如果有多个同一类别装饰器，从后往前执行
*/
