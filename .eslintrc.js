// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType:'module',//类型为module，因为代码使用了使用了ECMAScript模块
  },
  env: {
    browser: true,
    //支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    es6:true,
    //Node.js 全局变量和 Node.js 作用域
    node:true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //禁止使用console
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //要求使用严格模式指令
    "strict": 2,
    //要求末尾逗号
    "comma-dangle": 0,
    //要求使用 === 和 !==
    "eqeqeq": 2,
    //禁止多次声明同一变量
    "no-redeclare": 2,
    //强制使用骆驼拼写法命名约定
    "camelcase": 2,
    //强制使用一致的缩进
    "indent": [2, 2],
    //禁止空格和 tab 的混合缩进
    "no-mixed-spaces-and-tabs": 1,
    //禁止出现多行空行
    "no-multiple-empty-lines": 1,
    //强制箭头函数的箭头前后使用一致的空格
    "arrow-spacing": 1,
    //禁止修改 const 声明的变量
    "no-const-assign": 2,
    //要求使用 let 或 const 而不是 var
    "no-var": 1,
    //禁止无意得把全局对象当函数调用了，比如下面写法错误的：Math(), JSON()
    "no-obj-calls": 2,
    //函数调用时，圆括号前面不能有空格
    "no-spaced-func": 2,
    //禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    //循环复杂程度
    "complexity":[2, 20],
    //必须使用 if(){} 中的{}
    "curly": [2, "all"],
    //switch语句最后必须有default
    "default-case": 2,
  }
}
