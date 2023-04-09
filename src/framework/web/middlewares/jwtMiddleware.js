import { jwtVerify } from "../../../external/jwt.js";
import errorCode from "../enums/ErrorCode.js";
import statusCode from "../enums/StatusCode.js";
import { makeResponse } from "../utils/CommonUtils.js";

/**
 * header에서 토큰을 가져와서 검증한다.
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
export default (req, res, next) => {
  const accessToken = req.headers.authorization?.split("Bearer ")[1];
  const verifyResult = jwtVerify(accessToken);

  if (verifyResult.status) {
    req.tokenMemberId = verifyResult.payload.id;
    return next();
  } else {
    const errorMessage = verifyResult.payload.message;
    let responseStatusCode;
    if (errorMessage === "jwt expired") {
      responseStatusCode = statusCode.FORBIDDEN;
    } else {
      responseStatusCode = statusCode.UNAUTHORIZED;
    }
    return res
      .status(responseStatusCode)
      .send(makeResponse(errorCode.UNAUTHORIZED.code, "fail", errorCode.UNAUTHORIZED.info, {}));
  }
};
