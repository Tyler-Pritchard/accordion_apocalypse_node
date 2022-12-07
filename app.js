const express = require('express');
const morgan = require('morgan');
const accordionRouter = require('./routes/accordionRouter');
const instructorRouter = require('./routes/instructorRouter');
const eventRouter = require('./routes/eventRouter');

const hostname = 'localhost';
const port = 8000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/accordions', accordionRouter);
app.use('/instructors', instructorRouter);
app.use('/events', eventRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});