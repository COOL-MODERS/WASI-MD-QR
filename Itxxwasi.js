const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./wasiqr'),
    code = require('./pairwasi');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/wasiqr', server);
app.use('/code', code);
app.use('/pairwasi',async (req, res, next) => {
res.sendFile(__path + '/pairwasi.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/wasipage.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Don't Forgot To Give Star

 Server running on http://localhost:` + PORT)
})

module.exports = app