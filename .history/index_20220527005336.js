const express = require('express');
const port = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to doctors server')
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})
