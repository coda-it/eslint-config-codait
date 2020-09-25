module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "prettier",
    "flowtype"
  ],
  "extends": [
    "airbnb",
    "prettier",
    "plugin:flowtype/recommended",
    "plugin:cypress/recommended",
    "plugin:react/recommended",
  ],
  "globals": {
    "window": true,
    "document": true,
    "fetch": true,
    "WebSocket": true,
    "Request": true,
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
