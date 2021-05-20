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

