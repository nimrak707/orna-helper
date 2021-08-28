const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
//const cors = require('cors');

const app = express();
const port = 3000;


let books = [];

//app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/book', (req, res) => {
    const book = req.body;


    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/books', (req, res) => {
    res.json(books);
});


app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
