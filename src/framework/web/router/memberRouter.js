import { Router } from "express";

import MemberDto from "../../../member/dto/req/MemberDto.js";
import MemberJoinUseCase from "../../../member/useCase/MemberJoinUseCase.js";
import statusCode from "../enums/StatusCode.js";
import { makeResponse } from "../utils/CommonUtils.js";

const memberRouter = new Router();

/**
 * 회원가입
 * @param {MemberDto} dto
 * @returns {Promise<void>}
 */
memberRouter.post("/join", async (req, res) => {
  try {
    const dto = new MemberDto({
      userId: req.body.userId,
      userPw: req.body.userPw,
      nickName: req.body.nickName
    });
    // TODO : 회원 가입 전 아이디 중복체크 필요
    const result = await new MemberJoinUseCase().execute(dto);
    if (result) {
        return res
            .status(statusCode.SUCCESS)
            .send(makeResponse(200, "success", "회원가입이 완료되었습니다.", {}));
    } else{
        return res
            .status(statusCode.ERROR)
            .send(makeResponse(500, "fail", "회원가입에 실패하였습니다.", {}));
    }
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.ERROR)
      .send(makeResponse(500, "fail", "오류가 발생하였습니다.", error));
  }
});

export default memberRouter;
