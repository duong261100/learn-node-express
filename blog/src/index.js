const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db')

db.connect()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

route(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
