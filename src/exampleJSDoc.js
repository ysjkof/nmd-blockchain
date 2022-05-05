// TS가 아닌 JS코드에서 TS의 도움을 받고 싶을 떄 사용.
// 예를 들면 기존 JS코드가 수천줄이고 TS로 바꾸고 싶지 않을 때.
// tsconfig에 allowJs:true한 뒤 @ts-check하고 /** */안에 코멘트를 작성한다.

// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init2(config) {
  return true;
}

/**
 * Exit the program
 * @param {*} code
 * @returns number
 */
export function exit2(code) {
  return code + 1;
}
