export function romanToInteger(str) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            i > 0 &&
            getIntByRomanDigit(str[i]) > getIntByRomanDigit(str[i - 1])
        )
            result +=
                getIntByRomanDigit(str[i]) - 2 * getIntByRomanDigit(str[i - 1]);
        else result += getIntByRomanDigit(str[i]);
    }

    return result;
}

function getIntByRomanDigit(romanNumber) {
    switch (romanNumber) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            throw 'Not a roman number';
    }
}
