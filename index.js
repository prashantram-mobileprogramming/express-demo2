
const port = (process.env.PORT||3000); 

const express = require('express');
const app = express();

app.use(express.static("./public"));

const morgan = require('morgan');
app.use(morgan('short'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.post("/api/:year/:id",(req,res)=>{
    const output = [];
    output[0] = req.params;
    output[1] = req.query;
    output[2] = req.body;

    res.status(200).send(output);
    //res.json(output);
    //res.end();
    //res.sendStatus(200);

});

app.post("/adduser/",(req,res)=>{

    res.status(200).json(req.params);
    //res.sendStatus(200);
    //res.end();
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});