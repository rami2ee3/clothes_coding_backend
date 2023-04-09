"use strict";

const {DataTypes} = require("sequelize");
const tableName = "member";
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface
            .createTable(
                tableName,
                {
                    id: {
                        type: DataTypes.INTEGER.UNSIGNED,
                        allowNull: false,
                        autoIncrement: true,
                        primaryKey: true,
                    },
                    user_id: {
                        type: DataTypes.STRING(32),
                        comment: "회원 아이디",
                    },
                    user_pw: {
                        type: DataTypes.STRING(128),
                        comment: "회원 비밀번호",
                    },
                    nickname: {
                        type: DataTypes.STRING(32),
                        comment: "회원명",
                    },
                    member_type: {
                        type: DataTypes.ENUM('NORMAL', 'KAKAO', 'NAVER', 'GOOGLE'),
                        defaultValue: 'NORMAL',
                        comment: "회원 타입",
                    },
                    token_id: {
                        type: DataTypes.STRING(16),
                        comment: "social login 토큰 값",
                    },
                    created_at: {
                        type: "TIMESTAMP",
                        defaultValue: Sequelize.fn("NOW"),
                        allowNull: false,
                        comment: "생성일시",
                    },
                    updated_at: {
                        type: "TIMESTAMP",
                        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
                        comment: "수정일시",
                    },
                    is_deleted: {
                        type: DataTypes.TINYINT.UNSIGNED,
                        defaultValue: 0,
                        comment: "삭제여부",
                    },
                },
                {
                    comment: "회원 테이블",
                }
            );
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.dropTable(tableName);
    },
};
