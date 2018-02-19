function jediName(firstName, lastName) {
    console.log(lastName.slice(0, 3) + firstName.slice(0, 2));
}

/*
jediName("jacob", "zimmerman");
jediName("dylan", "stratton");
*/
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

/*
beyond(Infinity);
beyond(100);
beyond(-100);
beyond(0);
*/

function decode(word) {
    if(word[0] === 'a') {
        console.log(word[1]);
    }
    if(word[0] === 'b') {
        console.log(word[2]);
    }
    if(word[0] === 'c') {
        console.log(word[3]);
    }
    if(word[0] === 'd') {
        console.log(word[4]);
    } else {
        console.log(" ");
    }
}

// decode("craft");

/////////////////////////////


function daysInMonth(month, leapYear) {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    for (let i = 0; i < months.length; i++) {
        if (month.toLowerCase() === months[i]) {
            switch (month) {
                case 'january':
                case 'march':
                case 'may':
                case 'july':
                case 'august':
                case 'october':
                case 'december':
                    return `${month} has 31 days`;
                    break;
        
                case 'april':
                case 'june':
                case 'september':
                case 'november':
                    return `${month} has 30 days`;
                    break;
                    
                case 'february':
                    if (leapYear) {
                        return `${month} has 29 days`;
                        break;
                    } else {
                        return `${month} has 28 days`;
                        break;
                    }
            }
        }
    }

    return `Must provide a valid month`;

    
}

/*
console.log(daysInMonth('february', true));
*/

function rockPaperScissors(num) {
    if (num <1 || num > 3) {
        return "Please pick either rock(1) paper(2) or scissors(3)";
    }
    const randomNo = Math.floor(Math.random() * 3) +1;
    if (num === randomNo) return "it's a tie";
    if (num === 1 && randomNo === 2) {
        return "you Lost (paper beats rock)";
    }
    if (num === 2 && randomNo === 1) {
        return "you Won (paper beats rock)";
    }
    if (num === 1 && randomNo === 3) {
        return "you Won (rock beats scissors)";
    }
    if (num === 3 && randomNo === 1) {
        return "you Lost (rock beats scissors)";
    }
    if (num === 2 && randomNo === 3) {
        return "you Lost (scissors beats paper)";
    }
    if (num === 3 && randomNo === 2) {
        return "you Won (scissors beats paper)";
    }
}

console.log(rockPaperScissors(5));