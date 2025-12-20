const palindromes = function (string) {
    const legalLetters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const filteredString = string.toLowerCase().split('').filter(item => legalLetters.includes(item)).join('');

    return filteredString === filteredString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
