import MemberRepository from "../repository/MemberRepository.js";
import bcrypt from "bcrypt";

export default class MemberJoinUseCase {
  /**
   * 회원가입
   * @param {MemberDto} dto
   */
  async execute(dto) {
    let result = true;
    try {
      // 비밀번호 암호화
      dto.userPw = bcrypt.hashSync(dto.userPw, 10);
      await new MemberRepository().create(dto);
    } catch (error) {
      result = false;
    }
    return result;
  }
}
