CREATE TABLE BOARD(
    NUM int,
    ID VARCHAR(50),
    TITLE VARCHAR(200),
    CONTENT VARCHAR(1000),
    WDATE DATE,
    PRIMARY KEY (NUM)
);

INSERT INTO BOARD(id, title, content, wdate)
VALUES("person1", "p", "hi.content", NOW());

CREATE TABLE BOARD(
    num int not null,
    id VARCHAR(50),
    title VARCHAR(200),
    content VARCHAR(1000),
    wdate DATE,
    PRIMARY KEY (num)
);

// 데이터 베이스 한글 인코딩
//ALTER TABLE 테이블명 CONVERT TO CHARACTER SET utf8;


//게시판 테이블
CREATE TABLE board (
   num int NOT NULL,
   id VARCHAR(50),
   title varchar(300) NOT NULL,
   content varchar(100) NOT NULL,
   wdate DATE,
 );
  

