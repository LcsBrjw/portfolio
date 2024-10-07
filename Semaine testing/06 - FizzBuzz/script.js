function FizzBuzz(z) {
    var suite = "";
    for (var i = 1; i <= z; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            suite += "FizzBuzz - ";
        } else if (i % 3 === 0) {
            suite += "Fizz - ";
        } else if (i % 5 === 0) {
            suite += "Buzz - ";
        } else {
            suite += i + " - ";
        }
    }
    console.log(suite);
}