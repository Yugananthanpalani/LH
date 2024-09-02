const express = require('express');
 var router = express.Router();

 router.get('/',(req,res)=>{
	res.sendFile(__dirname+'/pages/python.html');
 })

 router.get('/videos',(req,res)=>{
	res.send("python Videos");
 })

 router.get('/material',(req,res)=>{
	res.send("python MATERIALS");
 })

 router.get('/examples',(req,res)=>{
	res.send("python EXAMPLES");
 })

 module.exports = router;
