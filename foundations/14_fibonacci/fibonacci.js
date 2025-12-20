const fibonacci = function(n) {
    if (typeof n === 'string') {
        n = parseInt(n);
    }
    if (n < 0) {
        return "OOPS";
    }
    const dp = new Array(n+2).fill(0);
    dp[0] = 1;
    for (let i=2; i<n+2; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n+1];
};

// Do not edit below this line
module.exports = fibonacci;
