require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/user',  (req, res) => {
  res.json('get User')
});

app.post('/user',  (req, res) => {
    let body = req.body;
    if(body.name != undefined) {
        res.json({body})
    } else {
        res.status(400).json({
            ok: false,
            msg:'Name is required'
        })
    }
});

app.put('/user/:id',  (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/user',  (req, res) => {
    res.json('delete User')
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT);
});
