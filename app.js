// modules
import express from "express";

//constanats
const app= new express();
const port= 3000;
const months=["January", "Feburary", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
const indexHead= todaysDate();

//constructors
function Tasks( title){
    this.title= title;
}
function Work( title){
    this.title= title;
}

function todaysDate(){
    var today= new Date();
    var day= days[today.getDay()];
    var month= months[today.getMonth()];
    var date= today.getDate();
    return day +", "+month+" "+date.toString();
}

// variables
var task=[new Tasks('Buy groceries'),new Tasks('Finish project'), new Tasks('Make Cake') ];
var work=[new Tasks('Coding'),new Tasks('Finish project'), new Tasks('Reading') ];

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));



//get "/"
app.get("/",(req,res)=>{
   
    res.render("index.ejs", {task,indexHead});
})

//get "/work"

app.get("/work",(req,res)=>{
   
    res.render("work.ejs", {work});
})

//post "/new-item"

app.post('/new-item', (req, res) => {
    const newItemText = req.body.text;
    task.push(new Tasks(newItemText));
    res.render("index.ejs", {task,indexHead});
  });

  app.post('/new-item-work', (req, res) => {
    const newItemText = req.body.text;
    work.push(new Work(newItemText));
    res.render("work.ejs", {work});
  });

//listen
app.listen(port,()=>{
    console.log(`Listening from port ${port}.`);
})