/** NOTE: tailwind 설정 파일
 * [참고] https://tailwindcss.com/docs/guides/create-react-app
 * [참고] https://tailwindcss.com/docs/adding-custom-styles
 */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // 컴포넌트 파일 경로
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  // tailwind 스타일 변수 사용자 정의
  theme: {
    // colors: {}, // 기존 변수의 값 재 정의
    extend: {
      // 추가 변수 설정
      colors: {
        primary: '#926EDC',
        secondary: '#C89AF2',
        active: colors.gray['950'],
        success: colors.green['500'],
        danger: colors.red['500'],
        warning: colors.yellow['400'],
        info: colors.gray['500']
      },
      boxShadow: {
        't-sm': '0 -1px 2px 0 rgb(0 0 0 / 0.05)',
        t: '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)',
        't-md': '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)',
        't-lg': '0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)',
        't-xl': '0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)',
        't-2xl': '0 -25px 50px -12px rgb(0 0 0 / 0.25)'
      }
    }
  },
  plugins: []
}
