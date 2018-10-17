var express = require('express');
var userModel = require('../models/UserModel');
var modules = {};

modules.index = function(req, res){
    console.log("index");
    var datas;
    if(req.params.id){
        userModel.getById(req.params.id, function(err, rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
    else{
        userModel.getAll(function(err, rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        })
    }
}

modules.create = function(req, res, next){
    console.log(req.app.locals.settings.views);
    res.render('users/form.jade', { title: 'Express' });
}

module.exports = modules;