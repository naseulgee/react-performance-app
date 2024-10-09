/** NOTE: 코드 검사를 위한 설정 파일
 * [설정 참고] https://www.npmjs.com/package/eslint-plugin-react
 * [규칙 참고] https://eslint.org/docs/latest/rules/
 */

module.exports = {
  // 코드가 동작할(검사할) 환경 명시
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['react', 'prettier'],
  // 검사할 규칙 명시
  extends: [
    // Js. ESlint 권장 규칙 사용
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  // 코드를 분석하는데 사용할 패키지 명시
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  // extends 에서 지정한 규칙 외에 커스마이징 할 규칙 명시
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off'
  }
}
