/* 소스코드 참고 - https://gongbu-ing.tistory.com/32?category=780188 */

var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');

db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function (req, res) {
    res.send('ROOT');
});

// get 전송 (게시판리스트)
app.get('/list', function (req, res) {
    var sql = 'SELECT * FROM BOARD';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else {
            /* 참고 https://hunjang.tistory.com/5 */ 
            var data = req.query.data;
            console.log('GET Parameter = ' + data);
     
            var result = rows;
            console.log(rows);
            res.header("Access-Control-Allow-Origin", "*");
            res.send({result:result});
        }
    });
});

//게시판리스트_2
app.get('/list_2', function (req, res) {
    var sql = 'SELECT * FROM BOARD2';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else {
            /* 참고 https://hunjang.tistory.com/5 */ 
            var data = req.query.data;
            console.log('GET Parameter = ' + data);
     
            var result = rows;
            console.log(rows);
            res.header("Access-Control-Allow-Origin", "*");
            res.send({result:result});
        }
    });
});

//게시판상세페이지
app.get('/detail', function (req, res) {
    var sql = 'SELECT * FROM BOARD2';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else {
            /* 참고 https://hunjang.tistory.com/5 */ 
            var data = req.query.data;
            console.log('GET Parameter = ' + data);
     
            var result = rows;
            console.log(rows);
            res.header("Access-Control-Allow-Origin", "*");
            res.send({result:result});
        }
    });
});

// 게시판 글쓰기
app.post('/writeAf', function (req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO BOARD VALUES( ?, ?, ?,NOW())';
    var param = [body.id, body.title, body.content];
    console.log(sql);
    conn.query(sql, param, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list'); // insert후 '/list' 실행
    });
});

// 게시판 글쓰기_2
app.post('/write', function (req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO BOARD2 VALUES(?, ?, ?, NOW())';
    var param = [body.id, body.title, body.content];
    console.log(sql);
    conn.query(sql, param, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list_2'); // insert후 '/list' 실행
    });
});

// 게시판 글수정
app.post('/modify', function (req, res) {
    var idx = req.body.idx;
    var body = req.body;
    var id = req.body.idx;
    var title = req.body.title;
    var content = req.body.content;
    var data = [body.id, body.title, body.content];

    console.log(body);

    var sql = 'UPDATE BOARD SET(?, ?, ?, NOW())';
    console.log(sql);

    conn.query(sql,data, function(err,result)
    {
        if(err) console.error(err);
        if( id == 0)
        {
            res.send("<script>alert('수정불가능.');</script>");
        }
        else
        {
            res.redirect('/list'); // insert후 '/list' 실행
        }
    });
});


// 회원 테이블
app.post('/member', function (req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO member VALUES(?, ?, ?, ?, ? )';
    var param = [body.memberid, body.password, body.passwordcheck,body.email,body.name];
    console.log(sql);
    conn.query(sql, param, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/'); // insert후 '/list' 실행
    });
});

// 데이터 베이스 한글 인코딩
//ALTER TABLE 테이블명 CONVERT TO CHARACTER SET utf8;


app.listen(3000, () => console.log('Server is running on port 3000...'));