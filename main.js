function jediName(firstName, lastName) {
    console.log(lastName.slice(0, 3) + firstName.slice(0, 2));
}

jediName("jacob", "zimmerman");
jediName("dylan", "stratton");

///////////////////////////////

function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    } else if (num !== Infinity && num > 0) {
        console.log('To infinity');
    } else if (num !== Infinity && num < 0) {
        console.log('To negative infinity');
    } else {
        console.log('Staying home');
    }
}

beyond(Infinity);
beyond(100);
beyond(-100);
beyond(0);