const express = require('express')
const app = express()

app.use(express.static('ndoe'))





app.listen(80, () => {
    console.log('http://127.0.0.1');

})