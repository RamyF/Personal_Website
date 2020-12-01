const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

// load config file
dotenv.config({path: './config/config.env'});
connectDB();
// start app
const app = express();

// use morgan logging middleware if in dev mode
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// express handlebars template engine. Can use different engine such as ejs or decide on frontend framework like react.
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)); 