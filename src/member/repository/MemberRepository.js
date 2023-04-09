import Member from "../../framework/orm/models/Member.js";

export default class MemberRepository {
  async create(dto) {
    const result = await Member.create(dto);
    return result.id;
  }
}
