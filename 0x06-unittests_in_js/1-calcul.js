function calculateNumber(type, a, b) {
    const aR = Math.round(a);
    const bR = Math.round(b);
    const sum = 'SUM';
    const subtract = 'SUBTRACT';
    const divide = 'DIVIDE';
    if (type === sum){
      return aR + bR;
    } else if(type === subtract) {
      return aR - bR;
    } else if(type === divide) {
      if(bR === 0) {
        return 'Error'
      } else {
        return aR / bR;
      }
    }
    
}

module.exports = calculateNumber;