const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var uid=readline.question('Enter UserID:');
var password=readline.question('Enter Password:');

var sql="select * from login where userid=? and password=?";
var data=[uid,password]
var sql=mysql.format(sql,data);
con.query(sql,(err,result)=>{
  if(err) throw err;
  else
  {
    if(result.length>0)
   console.log("Login Success");
   else
    console.log("Login Fail");
  }
})
