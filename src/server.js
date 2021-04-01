const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res, next) => {
    console.log('root route has been accessed');
    res.send('root route has been accessed')
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
})