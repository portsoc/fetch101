const express = require('express');
const app = express();

app.use(express.static('client'))

app.get('/add', (req, res) => {

    console.log(req.query);

    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const result = a+b;

    console.log( `Computing ${a} + ${b} = ${result}` );

    res.json(result);

});

app.listen(8888);
