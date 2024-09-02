
const { auth, requiresAuth } = require('express-openid-connect');
const express = require('express');
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'cfEqTcl9Z6NPhiljqJMEM1e8VwXzRt9LdHfug7sM2JAmp73sD3P9KDUOUWfgDlGz',
  baseURL: 'http://localhost:3000',
  clientID: 'NHbgo0KZtpEhlArny49Sy6MqSqE29Q8T',
  issuerBaseURL: 'https://webweave.us.auth0.com'
};
app.set('view engine', 'ejs');
app.use(auth(config));

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/views/index.html');
});

app.get('/home',(req,res)=>{
  res.sendFile(__dirname+'/views/index.html');
});

app.get('/verify',(req,res)=>{
  res.sendFile(__dirname+'/views/verifyemail.html');
});


app.all('/h', (req, res) => {
  res.sendFile(__dirname+'/views/error.html');
});


app.get('/profiledetails',requiresAuth(),(req,res)=>{
  res.send(JSON.stringify(req.oidc.user));
})

app.get('/main',requiresAuth(),(req,res)=>{
  
  res.render(__dirname+'/views/main',{
    userProfile: req.oidc.user,
    title: 'Profile page'
  });
})


app.get('/courses',requiresAuth(),(req,res)=>{
  res.sendFile(__dirname+'/views/courses.html');
});

 app.use(express.static('assests'));
 app.use('/css',express.static(__dirname + 'assests/css'));
 app.use('/js',express.static(__dirname + 'assests/js'));
 app.use('/img',express.static(__dirname + 'assests/img'));
 


 app.use(express.static('routes'));
 app.use('/pages',express.static(__dirname+'routes/pages'));
 app.use('/css',express.static(__dirname+'routes/css'));
 
  const port = process.env.PORT || 3000;

var python =require('./assests/js/routes/python');
var web =require('./assests/js/routes/web');
var java =require('./assests/js/routes/java');
var c =require('./assests/js/routes/c');
var cplus =require('./assests/js/routes/cplus');
var dbms =require('./assests/js/routes/dbms');


app.use('/web-development',requiresAuth(),web);

app.use('/java',requiresAuth(),java);

app.use('/python',requiresAuth(),python);

app.use('/c',requiresAuth(),c);

app.use('/cplusplus',requiresAuth(),cplus);

app.use('/dbms',requiresAuth(),dbms);

app.listen(port,()=>{
	console.log(`app running ${port}`)
});

