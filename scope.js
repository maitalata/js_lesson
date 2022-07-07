function testScope() {
    // Removing the let keyword will allow myVar to be acessible outside this function
    let myVar = 12;
    console.log(myVar);
}

testScope();
console.log(myVar);