module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "protractor": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {

      "no-undef" : 2,
      "no-unused-vars" : 2,
      "no-extra-boolean-cast": 2,
      "comma-dangle": [2, "never"],
      "no-console": 1,
      "no-empty" : 1,

      "accessor-pairs" : 2,
      "block-scoped-var" : 2,
      "complexity": ["error", 4],
      "consistent-return": 2,
      "curly" : 2,
      "default-case" : 2,
      "dot-location" : [2, "property"],
      "dot-notation": [2, {"allowKeywords": true, "allowPattern": ""}],
      "eqeqeq" : [2, "smart"],
      "guard-for-in" : 2,
      "no-alert" : 1,
      "no-caller": 2,
      "no-case-declarations": 2,
      "no-div-regex": 1,
      "no-else-return": 0,
      "no-empty-pattern": 2,
      "no-eq-null": 2,
      "no-eval": 2,
      "no-extend-native" : 2,
      "no-extra-bind": 2,
      "no-fallthrough": 1,
      "no-floating-decimal" : 1,
      "no-implicit-coercion": 2,
      "no-implied-eval": 2,
      "no-invalid-this": 2,
      "no-iterator": 2,
      "no-labels": 2,
      "no-lone-blocks": 2,
      "no-loop-func" : 2,
      "no-magic-numbers" : 0, //IDEALLY WE WOULD FAIL FOR THIS
      "no-multi-spaces": 1,
      "no-multi-str": 2,
      "no-native-reassign" : 2,
      "no-new-func": 2,
      "no-new-wrappers": 2,
      "no-new": 2,
      "no-octal-escape": 2,
      "no-octal": 2,
      "no-param-reassign" : 2,
      "no-process-env" : 0,
      "no-proto" : 2,
      "no-redeclare" : 1,
      "no-script-url" : 2,
      "no-self-compare" : 2,
      "no-sequences" : 2,
      "no-throw-literal" : 1,
      "no-unused-expressions" : 2,
      "no-useless-call" : 2,
      "no-useless-concat" : 2,
      "no-void" : 0,
      "no-warning-comments": [1, { "terms": ["todo", "fixme"] }],
      "no-with": 2,
      "radix" : 1,
      "vars-on-top": 1,
      "wrap-iife": [2, "any"],
      "yoda" : 2,
      "no-shadow-restricted-names": 2,
      "no-shadow": 1,
      "no-undef-init" : 2,
      "no-undefined": 2,
      "no-use-before-define" : 1,

      //STYLISTIC RULES
      "array-bracket-spacing": 1,
      "block-spacing": [2, "always"],
      "brace-style": [1, "1tbs", { "allowSingleLine": false }],
      "camelcase": [1, {"properties": "always"}],
      "comma-spacing": [1, {"before": false, "after": true}],
      "comma-style": [1, "last"],
      "consistent-this": [1, "self"],
      "computed-property-spacing": [1, "never"],
      "func-names" : 1, // IDEALLY THIS WOULD BE A WARNING
      "func-style" : [1, "declaration", { "allowArrowFunctions": true }],
      "id-length" : [2, {"min" : 2, "max" : 45, "properties" : "always", "exceptions" : ["i", "j", "x", "y", "vm"]}],
      "indent": [1, 4],
      "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
      "lines-around-comment": [1, {"beforeBlockComment": true,
        "afterBlockComment": false,
        "beforeLineComment": false,
        "afterLineComment": false,
        "allowBlockStart": false,
        "allowBlockEnd": true,
        "allowObjectStart": true,
        "allowObjectEnd": true,
        "allowArrayStart": false,
        "allowArrayEnd": true }],
      "max-depth": [1, 3],
      "max-len" : [1, 140, 4],
      "max-params": [1, 10],
      "new-parens": 2,
      "newline-after-var": 0,
      "no-array-constructor": 2,
      "no-bitwise": 2,
      "no-continue": 0,
      "no-inline-comments": 0,
      "no-lonely-if": 1,
      "no-mixed-spaces-and-tabs": 2,
      "no-multiple-empty-lines": 2,
      "no-negated-condition": 2,
      "no-nested-ternary": 2,
      "no-new-object": 2,
      "no-plusplus" : [2, { "allowForLoopAfterthoughts": true }],
      "no-spaced-func": 1,
      "no-ternary": 0,
      "no-trailing-spaces": 1,
      "no-underscore-dangle": 2,
      "no-unneeded-ternary": 2,
      "object-curly-spacing": [1, "never"],
      "operator-assignment": [1, "always"],
      "operator-linebreak": [1, "after"],
      "padded-blocks": [0, "always"],
      "quote-props": [2, "consistent-as-needed"],
      "quotes": 0,
      "semi": [2, "always"],
      "sort-vars": [0, {"ignoreCase": true}],
      "keyword-spacing": 1,
      "space-before-blocks": [1, {"functions": "always", "keywords": "always"}],
      "space-before-function-paren": [0, "always"],
      "space-infix-ops": [2, {"int32Hint": false}],
      "space-unary-ops": [1, { "words": true, "nonwords": false }],
      "spaced-comment": 2
    }
};