
let a = [1, 2, 3, 4]
let b = [1, 2];
function common(a, b) {
    
    let emp = [];
    for (let i=0; i<=a.length; i++) {

        for (let j=i; j<b.length; j++) {
        if (a[i] == b[j]) {
            emp.push(a[i]);
        }

        }
    }
    return emp;

}

console.log(common());