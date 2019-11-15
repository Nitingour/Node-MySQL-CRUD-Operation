
const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');

var empid=readline.question('Enter Employee ID:');
var name=readline.question('Enter Employee Updated Name:');
var salary=readline.question('Enter Employee Updated Salary:');
var address=readline.question('Enter Employee  Updated Address:');

var sql="update Employee set ename=?,salary=?,address=? where eid=?";
var data=[name,salary,address,empid]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
  if(err) throw err;
  else
  console.log("Data updated...");
})
