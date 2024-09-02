const express = require('express');
 var router = express.Router();

 router.get('/',(req,res)=>{
	res.sendFile(__dirname+'/pages/web.html');
 })

 router.get('/videos',(req,res)=>{
	res.send("Web Development Videos");
 })

 router.get('/material',(req,res)=>{
	res.send("Web Development MATERIALS");
 })

 router.get('/examples',(req,res)=>{
	res.send("Web Development EXAMPLES");
 })

 module.exports = router;
