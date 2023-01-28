const express = require ("express");
const bodyParser = require ("body-parser");
const date = require(__dirname+"/date");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

const items=["Buy Food", "Cook Food", "Eat Food"];
const workItems =[];


//Home route
app.get("/", function(req,res){

    const day =date.getDate(); // module assigned as date above and wnted function used as wanted

    res.render("list",{
        listTitle:day,
        newListItems:items 
    });   
});

//posting items to home route todo list
/*app.post("/", function(req,res){
    const item= req.body.newItem;
    items.push(item);
    res.redirect("/");
});
*/

//implementing work route with same template
app.get("/work", function(req,res){
    res.render("list",{
        listTitle:"Work List",
        newListItems:workItems
    })

});


app.post("/",function(req,res){

    const item =req.body.newItem;

    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/about", function (req,res){

    res.render("about");
});





app.listen(3000, function(){
    console.log("Server Running on 3000");
});

