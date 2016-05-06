module.exports = {
    "parser"       : "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "plugins": [ "babel" ],
    "rules"  : {
        "strict": "off",

        "arrow-parens"          : "off",
        "generator-star-spacing": "off",
        "new-cap"               : "off",

        "babel/arrow-parens"          : [ "error", "as-needed" ],
        "babel/generator-star-spacing": "error",
        "babel/new-cap"               : "error"
    }
};
