const express = require('express');
 var router = express.Router();
 
 router.get('/',(req,res)=>{
	 res.sendFile(__dirname+'/pages/java.html');
 })

 router.get('/videos',(req,res)=>{
	res.send("JAVA Videos");
 })

 router.get('/material',(req,res)=>{
	res.send("JAVA MATERIALS");
 })

 router.get('/examples',(req,res)=>{
	res.send("JAVA EXAMPLES");
 })


 
 module.exports = router;
