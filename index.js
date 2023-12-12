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

app.get('/', (req, res) =>{
    res.render('home');
})

app.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})

