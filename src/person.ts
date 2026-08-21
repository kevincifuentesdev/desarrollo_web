class Person {
    public name: string;
    public age: number;
    public city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getPerson(): string {
        return `Name: ${this.name}\nAge: ${this.age}\nCity: ${this.city}`;
    }
}

let person_1: Person = new Person('Kevin', 19, 'Medellín')

console.log(person_1.getPerson())