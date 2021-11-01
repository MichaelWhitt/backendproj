const express = require('express');
const pageRouter = express.Router();

pageRouter.route('/')
.all((req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res) => {
    res.end('Will send all the pages to you');
})

.post((req, res) => {
    res.end(`Will add the page: ${req.body.name} with description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /pages')
})
.delete((req, res) => {
    res.end('Deleting all pages')
});

pageRouter.route('/:pageId')
.all((req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
}).get((req, res) => {
    res.end(`Will send details of the page: ${req.params.pageId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /pages/${req.params.pageId}`);
})
.put((req, res) => {
    res.write(`Updating the page: ${req.params.pageId}\n`);
    res.end(`Will update the page: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting page: ${req.params.pageId}`);
})



module.exports = pageRouter;