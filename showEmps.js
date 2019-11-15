const con=require('./DBConnection')

var sql="select * from employee";
con.query(sql,(err,result)=>{
  if(err) throw err;
  else
  {
   console.log(result);
  }
})
