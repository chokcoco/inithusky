/**
 * eslint 规则配置文件，由 inithusky 自动产出
 * 默认采用 airbnb 规则包，各团队可根据实际情况自行修改扩充规则
 */

module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "globals": {
    "__PLATFORM__": true,
    "__GLOBAL__": true
  },
  "rules": {
    "code": 100,
    "no-bitwise": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/no-find-dom-node": "off",
    "import/no-named-as-default": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-no-bind": "off",
    "class-methods-use-this": "off",
    "no-mixed-spaces-and-tabs": "off"
  }
}