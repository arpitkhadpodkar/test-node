const express = require('express'); //use require express
const app = express(); //use require express using express framework accessing
const mongoose = require('mongoose'); //use require mongoose
const bodyParser = require('body-parser'); //use require body-parser
//const apiRouter = require('./api/routes/index');  //use require router    


app.use(bodyParser.urlencoded({
    limit: '50mb', extended: true
}));
app.use(bodyParser.json({limit: '50mb'}));


/**
 * @Method : POST METHOD API CALL
 * @Params: name for storing
 * @Result: Result the user object
 */
app.post('/post', (req, res) => {
    var data = req.body;
    console.log(data.name);
    res.status(200).send({"result": data.name});
});

//Listen Port set runtime environment
app.listen('3000', () => console.log('Server started on: ' + '3000'));