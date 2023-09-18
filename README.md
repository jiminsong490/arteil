# 실행방법

1. 터미널에서 npm install
2. src/orm.config.ts.example의 파일 이름을 orm.config.ts로 수정
3. 사용할 mysql의 username, password를 설정
4. 터미널에서 npm start



# API 명세

### 유저(판매자, 구매자 구분 없이) 등록
HTTP Method: POST
url: localhost:8080/api/v1/users

{
    "name": 유저 이름 (string),
    "money": 소지금 (number)
}


---

### 아이템 등록
HTTP Method: POST
url: http://localhost:3000/api/v1/items/:id
pathvariable: id (등록 유저 id)
{
    "name": 아이템 이름 (string),
    "price": 아이템 금액 (number),
}

### 아이템 전체 검색
HTTP Method: GET
url: http://localhost:3000/api/v1/items

### 아이템 구매
HTTP Method: POST
url: http://localhost:3000/api/v1/items/purchases/:id
pathvariable: id (구매 아이템 id)

{
    "userId": 구매자 id (number)
}