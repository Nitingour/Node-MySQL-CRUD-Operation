
const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var empid=readline.question('Enter Employee ID:');
var name=readline.question('Enter Employee Name:');
var salary=readline.question('Enter Employee Salary:');
var address=readline.question('Enter Employee Address:');

var sql="insert into employee values(?,?,?,?)";
var data=[empid,name,salary,address]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
  if(err) throw err;
  else
  console.log("Data inserted...");
})
