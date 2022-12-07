const express = require('express');
const instructorRouter = express.Router();

instructorRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the instructors to you');
})
.post((req, res) => {
    res.end(`Will add the instructor: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /instructors');
})
.delete((req, res) => {
    res.end('Deleting all instructors');
});

module.exports = instructorRouter;