//var express = require('express');
//var router = express.Router();
//var mongoose = require('mongoose');
//var student = require('../controllers/student');

import { Router, Request, Response, NextFunction } from 'express';
import Actividad from '../models/student';
import { default_type } from 'mime';
import bodyParser = require('body-parser');

const Routes = new Router();
Routes.routes();

class  student{
    router = Router;
    this.routes;
}

//GET REQUESTS
//get all the users
router.get('/api/todos',student.listAllStudent);

//POST REQUESTS
//insert user
router.post('/api/', student.insertStudent);

//DELETE REQUESTS
//delete user by id
router.delete('/api/:studentId',student.deleteStudent);

//UPDATE REQUESTS
//update user by id
router.post('/api/edit/:studentId', student.updateStudent);

//GET REQUESTS
//get students
router.get('/api/:studentName',student.findByName);

module.exports=router;