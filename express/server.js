const express = require('express');
const morgan = require('morgan');
const accordionRouter = require('../routes/accordionRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/accordions', accordionRouter)

app.all('/accordions', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/accordions', (req, res) => {
    res.end('Will send all the accordions to you');
});

app.post('/accordions', (req, res) => {
    res.end(`Will add the accordion: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/accordions', (req, res) => {
    res.end('PUT operation not supported on /accordions');
});

app.delete('/accordions', (req, res) => {
    res.end('Deleting all accordions');
});

app.get('/accordions/:accordionId', (req, res) => {
    res.end(`Will send details of the accordion: ${req.params.accordionId} to you`);
});

app.post('/accordions:accordionId', (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /accordions/${req.params.accordionId}`);
});

app.put('/accordions:accordionId', (req, res) => {
    res.write(`Updating the accordion: ${req.params.accordionId}\n`);
    res.end(`Will update the accordion: ${req.body.name} with description: ${req.body.description}`);
});

app.delete('/accordions/accordionId', (req, res) => {
    res.end(`Deleting accordion: ${req.params.accordionId}`);
})

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});