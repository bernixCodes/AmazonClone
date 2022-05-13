import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req,res) =>{
    res.json('Hello amazone clone');
});

app.post('/', (req,res) =>{
    console.log(req.body.name);
})

app.listen(3000, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected')
    }
})