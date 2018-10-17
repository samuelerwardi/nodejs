var db = require('../dbconnection');

var users={

getAll:function(callback){

return db.query("Select * from users",callback);

},
getById:function(id,callback){

    return db.query("select * from users where id=?",[id],callback);
},
add:function(users,callback){
   console.log("inside service");
   console.log(users.Id);
return db.query("Insert into users values(?,?,?)",[users.Id,users.Title,users.Status],callback);
//return db.query("insert into users(Id,Title,Status) values(?,?,?)",[users1.Id,users1.Title,users1.Status],callback);
},
delete:function(id,callback){
    return db.query("delete from users where id=?",[id],callback);
},
update:function(id,users,callback){
    return  db.query("update users set username = ?, where id=?",[users.username, id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from users where id in (?)",[delarr],callback);
}
};
module.exports=users;