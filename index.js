let str = "abcadeecfb";
let newset = new Set();
for (let i = 0; i < str.length; i++) {
    newset.add(str[i]);
}
let str2 = "";
for (let val of newset.values()) {
    str2 += val;
}
console.log(str2);





console.log("Question number 2");



let str1 = "abcadeecfb";
let a = str1.split("");
let newMap = new Map();

for (let i = 0; i < a.length; i++) {
    let count = 1;
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
            count++;
            a.splice(j, 1);
            j--;
        }
    }
    newMap.set(a[i], count);
}
for (let [key, value] of newMap.entries()) {
    console.log(key + "=" + value);
}