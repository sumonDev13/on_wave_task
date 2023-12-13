import express from 'express';
import dotenv from 'dotenv';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import mysql from 'mysql';



dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');


const connectionPool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

connectionPool.connect((err, connection) => {
    if (err) throw err;
    console.log('connected as ID' + connection.theadId);
})

app.get('/', (req, res) =>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})

