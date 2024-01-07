const express = require("express");
const app = express();
const port =process.env.PORT || 8080;
const path = require("path");

//to set view engine ejs
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
//set path for post method
app.use(express.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    let {thala} = req.body;
    let result = thalaFunction(thala);
    if(result === "success"){
        res.render("success.ejs");
    }else{
       res.render("failure.ejs");
    }
    

})
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

//function section
function thalaFunction(value){
    if(value == 7){
        return "success";
    }
    if(value.length == 7){
        return "success";
    }else{
        return "failure";
    }
}