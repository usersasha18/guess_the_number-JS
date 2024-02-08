const a = Number(prompt("Первое число"))
const b = Number(prompt("Второе число"))
const c = Number(prompt("Третье число"))

let D = b * b - 4 * a * c

let discriminantValue = D

if (discriminantValue > 0) {
    const x1 = (-b + Math.sqrt(discriminantValue)) / (2*a)
    const x2 = (-b - Math.sqrt(discriminantValue)) / (2*a)
    console.log("Уравнение имеет два различных решения.");
    console.log("x1 =", x1)
    console.log("x2 =", x2)
} else if (discriminantValue == 0) {
    const x = -b / (2*a)
    console.log("x= ", x)
    console.log("Уравнение имеет одно решение (кратный корень).");
} else {
    console.log('Уравнение не имеет действительных решений.');
}