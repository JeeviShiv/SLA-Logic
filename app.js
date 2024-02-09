const express = require('express');
const mongoose = require('mongoose');
var db = mongoose.connect("mongodb://localhost:27017/projects");
var path = require('path');
var bug = require('./Models/bugModel');
var helper = require('./helpers/helper');


const app = express();
const port = 4250;
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.set('views',path.join(__dirname,'src/views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("newbug",{helper:helper});
});
app.get('/success', (req,res)=>{
    res.render('success'); 
});
app.post('/addBug',(req,res)=>{
    bug.create(req.body).then((result)=>{
         res.redirect("/success");   
    });
});
app.get('/bugList',(req,res)=>{
    bug.find().then((result)=>{
         res.render('bugList',{data:result, helper:helper});
    }).catch(function(error){
        console.log('Error getting the data');
    }); 

});
app.listen(port,(err,res)=>{
    if(err) throw err;
    else console.log("Server running on port :"+port);
});