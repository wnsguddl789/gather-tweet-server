# GatherTweet-Backend

GatherTweet 서버

## REST API

- Swagger 문서 작성 예정

## 프레임워크/라이브러리

- Node : 20.3.1
- Nest : ^9.0.0
- Prisma : ^5.3.1
- @prisma/client : 5.3.1

## 데이터베이스

- postgres : 13.5

## 시작하기(개발 버전)

1. 환경변수를 설정합니다.
 `.env.dev.template` 을 참고해 루트 디렉토리에 `.env.development` 환경변수를 생성합니다.

| variable        | example                                    | description         |
| --------------- | ------------------------------------------ | ------------------- |
| DATABASE_URL    | postgres://username:password@host/database | Postgresql Url      |
| API_SERVER_PORT | 4000                                       | Api 서버 port       |
| ORIGIN_DOMAIN   | http://localhost:3000                      | Frontend Origin     |
| SALT_PASSWORD   | 2.79                                       | JWT hash salt value |

<br>

2. 의존 모듈을 설치합니다.

```shell
yarn install
```

<br>

3. 데이터베이스 컨테이너를 실행합니다.(로컬에 DB를 실행중이라면 생략)

```shell
yarn database:start
```

<br>

4. 데이터베이스와 애플리케이션 엔터티를 동기화 합니다.

```shell
yarn migrate:dev
```

<br>

5. 개발용 서버를 실행합니다.

```shell
yarn start:dev
```

<br>

6. API 문서를 확인합니다.

- 접속 url: `{SERVICE_URL}/api`
