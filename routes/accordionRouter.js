const express = require('express');
const accordionRouter = express.Router();

accordionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the accordions to you');
})
.post((req, res) => {
    res.end(`Will add the accordion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /accordions');
})
.delete((req, res) => {
    res.end('Deleting all accordions');
});

module.exports = accordionRouter;