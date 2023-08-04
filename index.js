import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const dataToday=[];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date=new Date();
const day=weekday[date.getDay()];
const month=months[date.getMonth()];

app.get("/",(req,res)=>{
    
    res.render("index.ejs",{
        currDay : day,
        currMonth : month,
        currDate : date.getDate()
    })
})

app.post("/",(req,res)=>{
    
    dataToday.push({
        task : req.body.newItem
    })
    res.render("index.ejs",{
        currDay : day,
        currMonth : month,
        currDate : date.getDate(),
        list : dataToday
    });
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})