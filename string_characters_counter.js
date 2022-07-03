let str = "Umar Sunusi Maitalata";

let arr = [];

for (let i = 0; i < str.length; i++) {
    let character = str[i];
    let count = 0;

    for (let j = 0; j < str.length; j++) {
        if (arr.includes(character)) {

            continue;
        }

        ++count;

        if (str[j] == character) {

        }

        arr.push(character);



    }

    console.log(character + " " + count);



}

//console.log(arr);