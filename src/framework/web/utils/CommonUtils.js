/**
 * API 응답형식 통일용
 * @param code
 * @param message
 * @param info
 * @param data
 * @returns {{result: {code, message, info}, data}}
 */
export const makeResponse = (code, message, info, data) => {
  return { result: { code: code, message: message, info: info }, data: data };
};