const repeatString = function(str, times) {
    if (times >= 1) {
        let ans = '';
        for (let i=1; i<=times; i++) {
            ans += str;
        }
        return ans;
    } else if (times == 0) {
        return ''
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
