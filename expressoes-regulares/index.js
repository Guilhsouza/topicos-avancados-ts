"use strict";
function phoneValidator(phoneNumber) {
    const fixedString = phoneNumber.replace(/[\sa-zA-Z]/g, '');
    const countryCode = fixedString.match(/(?<=\+)\d{1,3}/);
    if (countryCode) {
        console.log(countryCode[0]);
    }
    const ddd = fixedString.match(/(?<=\()\d+(?=\))/);
    if (ddd) {
        console.log(ddd[0]);
    }
    const number = fixedString.match(/(?<=\)).+()/);
    if (number) {
        console.log(number[0]);
    }
}

phoneValidator('+55 (12) 9 9111 - 1111 abcdef');
phoneValidator('+1 (12) 9 9111 - 1111 abcdef');
phoneValidator('+143 (43) 555-333-1234');
