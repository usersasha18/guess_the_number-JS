function square(a, b, c) {
    const p = (a + b + c) / 2
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    console.log("Площадь равна: ",s.toFixed(2) , "cm2")
}


square(6,5,2.2)