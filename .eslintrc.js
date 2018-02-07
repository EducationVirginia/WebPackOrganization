module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": 0,
        "no-unused-vars": 1,
        "max-len": [1, 120, 2, {ignoreComments: true}],
        "no-console": 0,
        "import": 0,
        "space-before-function-paren": 0,
        "no-underscore-dangle": 0,
        "quotes": [1, "single"],
        "eol-last": 0,
         "import/newline-after-import": 0,

    }
};