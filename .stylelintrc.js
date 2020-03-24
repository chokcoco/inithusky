/**
 * stylelint 规则配置文件，由 inithusky 自动产出
 * 默认采用 stylelint-config-standard 代码风格标准包，该风格是 Stylelint 的维护者汲取了 GitHub、Google、Airbnb 多家之长生成的
 * 各团队可根据实际情况自行修改扩充规则
 * http://stylelint.cn/user-guide/rules/
 */
module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-scss"
  ],
  "rules": {
    "indentation": 2,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "mixin",
          "extend",
          "content",
          "function",
          "return"
        ]
      }
    ]
  }
};