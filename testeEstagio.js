let matriz = [[5, -3], [1, -3], [3, 10]]
let sln = [0, 0, 0]
let i
let j
let x = 0

for(i = 0; i <= 1; i++) {
    for(j = 0; j <= 1; j++) {
        sln[i] = sln[i] + matriz[i][j]
    }
    x = x + sln[i]
}
console.log(x)