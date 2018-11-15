"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = mongoose.model('Student');*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Student = mongoose.model.apply('Student');
/*var subject = mongoose.Schema({
    name: String,
    studentId: [{type:Schema.ObjectId, ref: 'Student'}],
    studies: String,
    quadri: String
},{collection:'subjects'});*/
var SubjectSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        required: true
    },
    studies: {
        type: String,
        default: '',
        required: true
    },
    quadri: {
        type: String,
        default: '',
        required: true
    },
    studentId: [{
            type: Schema.Types.ObjectId, ref: 'Student'
        }]
});
//module.exports=mongoose.model('Subject', SubjectSchema);
exports.default = mongoose.model('Subject', SubjectSchema);
//# sourceMappingURL=subject.js.map