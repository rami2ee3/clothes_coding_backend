import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Member = sequelize.define(
    "Member",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, comment: "member 테이블 id" },
        userId: { type: DataTypes.STRING, comment: "회원 아이디" },
        userPw: { type: DataTypes.STRING, comment: "회원 비밀번호" },
        nickname: { type: DataTypes.STRING, comment: "회원명" },
        memberType: { type: DataTypes.STRING, comment: "회원 타입" },
        tokenId: { type: DataTypes.STRING, comment: "social login 토큰 값" },
        createdAt: { type: DataTypes.DATE, comment: "생성일시" },
        updatedAt: { type: DataTypes.DATE, comment: "수정일시" },
        isDeleted: { type: DataTypes.TINYINT, comment: "삭제여부" },
    },
    { tableName: "member", underscored: true }
);

export default Member;
