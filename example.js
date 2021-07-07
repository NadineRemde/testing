const camelCaseConverter = (word) => {
    if (word.match(/([a-z][_| -][a-z])/ig) || word.charAt(0).match(/[A-Z]/) || word){
      if(word == ' '){
        return '';
      } else {0
      let camelCaseString = word.replace(/[_ -0123456789&\/\\#,+()$~%.'":*?<>{}][a-z | A-Z]/g, (g) => {
        return g[1].toUpperCase();
      });
      if (camelCaseString.charAt(0).match(/[A-Z]/)) {
        let camelCaseString2 = camelCaseString.replace(/[A-Z]/, (f) => {
          return f[0].toLowerCase();
        });
        return camelCaseString2;
      };
      return camelCaseString;
    };
  };
};
  
  module.exports = {
    camelCaseConverter
  };