export default class MemberDto {
  constructor({
    userId,
    userPw,
    nickname,
  }) {
    this.userId = userId;
    this.userPw = userPw;
    this.nickname = nickname;
  }
}
