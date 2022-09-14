

function anagrama(num) {
    if (num > 1) {
        return anagrama(num -1) * num
    } else {
        return 1
    }
}

let resultado = anagrama(9)
console.log(resultado)