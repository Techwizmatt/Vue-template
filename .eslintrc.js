module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "new-cap": "off",
    "no-new": "off",
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "never"
      }
    ]
  }
}
