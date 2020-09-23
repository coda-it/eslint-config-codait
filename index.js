module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "prettier",
        "flowtype"
    ],
    "extends": [
        "airbnb",
        "prettier",
        "plugin:flowtype/recommended"
    ],
    "globals": {
        "window": true,
        "document": true,
        "fetch": true,
        "WebSocket": true,
        "cy": true,
        "Cypress": true,
        "Request": true,
        "before": true,
        "FileReader": true,
    },
    "env": {
        "jest": true
    },
    "rules": {
        "no-underscore-dangle": "off",
        "no-param-reassign": "off",
        "import/no-extraneous-dependencies": "off"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["."]
            }
        }
    }
};