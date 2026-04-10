let st = "lksjdflksdjfl";

// size of an arr of char
console.log(st.length);

// traverse
for(i = 0; i<st.length; i++) {
    console.log(st[i]);
}

// search
let key = 'l';
for(i = 0; i < st.length; i++){
    if (key == st[i]){
        console.log("found", i);
    }
}