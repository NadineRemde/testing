const camelCaseConverter = (word) => {
    if (word == ' '){
        return '';
    };

    if (word.match(/([a-z][_| -][a-z])/ig) || word.charAt(0).match(/[A-Z]/) || word){
      let result = word.replace(/[_| -][a-z | A-Z]/g, function (g) {
        return g[1].toUpperCase();
      });
      if (result.charAt(0).match(/[A-Z]/)) {
        let result2 = result.replace(/[A-Z]/, function (f){
          return f[0].toLowerCase();
        });
        return result2;
      };
      return result;
    };
};
  
  module.exports = {
    camelCaseConverter
  };