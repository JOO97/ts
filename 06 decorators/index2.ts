function classDrt<T extends { new (...args: any[]): {} }>(constructor: T) {
	console.log('classDrt');
	constructor.prototype.baseUrl = 'http://xxxxx';
	constructor.prototype.run = function (): void {
		console.log('run');
	};
}

// 饰器工厂
function classDrt2<T extends { new (...args: any[]): {} }>(url: string) {
	console.log('classDrt2');
	return function (constructor: T) {
		console.log('classDrt22');
		constructor.prototype.baseUrl = url;
		constructor.prototype.run = function (): void {
			console.log('run');
		};
	};
}

// 通过类装饰器实现对构造函数重载
function classDrt3<T extends { new (...args: any[]): {} }>(target: T) {
	console.log('classDrt3');
	return class extends target {
		title: string = 'classDrt3 title';
		getData(): void {
			console.log(this.title + '-----');
		}
	};
}

// 属性装饰器
function propDrt(params: string) {
	return function (target: any, attr: string) {
		console.log('target', target);
		console.log('attr', attr);
		console.log('params', params);
		target[attr] = params;
	};
}

function fnDrt(param: string) {
	return function (target: any, attr: string, desc: any) {
		console.log('param', param);
		console.log('target', target);
		console.log('attr', attr);
		console.log('desc', desc);
		// target[attr] = function () {
		// 	console.log('gerData2');
		// };
		let method = desc.value;
		desc.value = function (...args: any[]) {
			// args = args.map((item) => item + 'xxx');
			method.apply(this, args);
		};
	};
}

// function fnDrt2() {}

function paramsDrt() {
	return function (target: any, fnName: any, paramIndex: any) {
		console.log('target', target);
		console.log('fnName', fnName);
		console.log('paramIndex', paramIndex);
	};
}

/**
 * classDrt2
 * classDrt22
 * classDrt
 */
// @classDrt
// @classDrt2('123')
// @classDrt3
class Dec {
	// @propDrt('xxx')
	public title: string | undefined;
	// @propDrt('static xxx')
	static ti: string | undefined;
	constructor(title: string) {
		// this.title = title;
	}
	// @fnDrt('xxx')
	getData(@paramsDrt() key: string): void {
		console.log('gerData', key);
	}
}

const dec = new Dec('xxxx');
console.log('dec', dec.getData('a'));
