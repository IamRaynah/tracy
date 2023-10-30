function areaOfTriangle(base, height) {
    let area = (base * height) / 2;
    return area
}

// let a = areaOfTriangle(4, 5)

function volumeofSphere(radius) {
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
    return volume
}

let a = volumeofSphere(49)
console.log(a)