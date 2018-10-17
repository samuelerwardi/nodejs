var express = require('express');
var router = express.Router();
var Task=require('../models/UserModel');

router.get('/:id?',function(req,res,next){

if(req.params.id){
    Task.getById(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Task.getAll(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});

module.exports = router;