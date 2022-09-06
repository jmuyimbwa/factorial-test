const factorial = (num) => {
    let result = 1;
  
    if (num == 0 || num == 1) {
      return result;
    } else {
      for (let i = num; i >= 1; i--) {
        // console.log(i);
        result = result * i;
      }
      return result;
    }
  };
  
  module.exports = factorial;
  