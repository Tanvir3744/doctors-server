const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

//middle ware to use
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('welcome to doctors server')
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})
