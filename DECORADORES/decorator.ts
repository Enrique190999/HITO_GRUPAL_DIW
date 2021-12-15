console.log("Decoradores en TypeScript");
console.log("No hay decoradores en JavaScript");

function changeName(data: string) {
	return function <T extends { new(...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			name = data;
		}
	}
}

@changeName('Bob')
class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	sayHi() {
		console.log(`${this.name} says hi!`)
	}
}

new Person('John').sayHi();
