function calculateNumber(a, b) {
    const aR = Math.round(a);
    const bR = Math.round(b);
    return aR + bR;
}

module.exports = calculateNumber;