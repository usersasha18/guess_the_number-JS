class Cat { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    mew() {
        console.log("Мяу")
    }
    eat() {
        console.log("Ням Ням")
    }
    sleep() {
        console.log("Хр Хр")
    }
}

let first_cat = new Cat().mew()
let second_cat = new Cat().eat()
let third_cat = new Cat().sleep()
