const express = require('express')
let path = require('path');
const router = require('./routes');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//server
//João Marques
//Student No: 301253512

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { title: 'Error' });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})