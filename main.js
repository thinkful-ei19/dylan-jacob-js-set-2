function jediName(firstName, lastName) {
    let lastNameArr = lastName.split('');
    let firstNameArr = firstName.split('');
    return lastNameArr[0] + lastNameArr[1] + lastNameArr[2]
    + firstName[0] + firstName[1];
}

jediName("jacob", "zimmerman");