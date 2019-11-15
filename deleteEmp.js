
const con=require('./DBConnection')
const mysql=require('mysql')
const readline=require('readline-sync');
var empid=readline.question('Enter Employee ID to detele:');

var sql="delete from employee where eid=?";
var data=[empid]
var sql=mysql.format(sql,data);
con.query(sql,(err)=>{
  if(err) throw err;
  else
  console.log("Data Deleted...");
})
