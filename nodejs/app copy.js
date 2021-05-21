/* 소스코드 참고 - https://gongbu-ing.tistory.com/32?category=780188 */
var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');

db_config.connect(conn);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function (req, res) {
    res.send('ROOT');
});

// get 전송 (게시판리스트)_1
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

// 게시판 글쓰기_1
app.post('/writeAf', function (req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'INSERT INTO BOARD(id, title, wdate, content) VALUES( ?, ?, NOW(), ?)';
    var param = [body.id, body.title, body.content];
    console.log(sql);
    console.log("param: " + param);
    conn.query(sql, param, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list'); // insert후 '/list' 실행
    });
});

//게시판리스트 상세페이지
app.post('/detail', function (req, res) {
    var data = req.query.data;
    console.log('GET Parameter = ' + data);
    var sql = 'SELECT * FROM BOARD(id, title, content) where num=1';
    var param = [body.id, body.title, body.content];
    console.log(sql);
    console.log("param: " + param);
    conn.query(sql, param, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/'); 
    });
});

// 게시판 글삭제
app.post('/delete', function (req, res) {
    var num = req.params.num;
    var body = req.body;
    console.log(body);

    var sql =  'DELETE FROM board WHERE num="?"';
    var param = [body.num, body.id, body.title, body.content];
    console.log(sql);
    conn.query(sql, param, function(err,rows,fields) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else console.log(rows.insertId); 
        res.redirect('/list'); // delete후 '/list' 실행
    });
});

// 게시판 글수정
app.post('/modify', function (req, res) {
    var body = req.body;
    console.log(body);

    var sql = 'UPDATE board SET id=?, title=?, content=?';
    var param = [body.id, body.title, body.content];
    console.log(sql);
    conn.query(sql, param, function(err) {
        if(err) console.log('query is not excuted. insert fail...\n' + err);
        else res.redirect('/list'); //수정 후'/list' 실행
    });
});

app.listen(3000, () => console.log('Server is running on port 3000...'));