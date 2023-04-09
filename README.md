# clothes_coding_backend
'내입뭐입지' 프로젝트 백엔드

## migration 실행방법
```bash
# migrate 전체실행
$ npx sequelize-cli db:migrate
# migrate 전체취소
$ npx sequelize-cli db:migrate:undo

# migrate 파일 생성
$ npx sequelize-cli migration:generate --name create-[테이블명]-table
# migrate 취소
$ npx sequelize-cli db:migrate:undo --name [파일명].js
```