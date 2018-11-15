"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var subject = require('../controllers/subject');
//GET REQUESTS
//get all the users
router.get('/api/todos', subject.listAllSubject);
//POST REQUESTS
//insert user
router.post('/api/', subject.insertSubject);
//UPDATE REQUESTS
//Añadir student de subject
router.post('/api/:subjectId', subject.updateSubject);
//UPDATE REQUESTS
//Borrar student de subject
router.post('/api/deleteStudentSubject/:subjectId', subject.updateDeleteSubject);
//DELETE REQUESTS
//delete user by id
router.delete('/api/:subjectId', subject.deleteSubject);
//GET REQUESTS -- NAME
//get students
router.get('/api/editSubject/:subjectName', subject.findByName);
//GET REQUESTS -- STUDIES
//get students
router.get('/api/editStudiesSubject/:subjectStudies', subject.findByStudies);
//GET REQUESTS -- QUADRI
//get students
router.get('/api/editQuadriSubject/:subjectQuadri', subject.findByQuadri);
//GET REQUESTS -- SORT
//get students
router.get('/api/sortTodos', subject.listSortSubject);
module.exports = router;
exports.default = router;
//# sourceMappingURL=subject.js.map