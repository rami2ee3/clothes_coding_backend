import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "JWT_SECRET_KEY"

/**
 * JWT 토큰 생성
 * @param id
 * @returns {*}
 */
export const jwtSign = (id) => {
    return jwt.sign(id, secret, {
        algorithm: "HS256",
        expiresIn: "180d",
    });
};

/**
 * JWT 토큰 검증
 * @param token
 * @returns {{payload: (*), status: boolean}|{payload, status: boolean}}
 */
export const jwtVerify = (token) => {
    try {
        const payload = jwt.verify(token, secret);
        return {
            status: true,
            payload,
        };
    } catch (error) {
        return {
            status: false,
            payload: error,
        };
    }
};
