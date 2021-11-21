let r = 5;
let pattern = "";

for (let i = 1; i <= r; i++) {
    for (let j = r; j > i; j--) {
        // console.log("i,j,r", i,j,r);
        pattern += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        // console.log("k,i", k,i);
        pattern += "*";
    }
    pattern += "\n";
}

for (let i = 1; i <= r - 1; i++) {
    for (let j = 0; j < i; j++) {
        pattern += " ";
    }
    for (let k = (r - i) * 2 - 1; k > 0; k--) {
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);