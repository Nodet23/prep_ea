"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
/*var mongoose = require('mongoose');

var student = mongoose.Schema({
    name: String,
    address: String,
    phone: { home: String, work: String }
},{collection:'students'});*/
var Schema = mongoose.Schema;
var StudentSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        required: true
    },
    address: {
        type: String,
        default: '',
        required: true
    },
    phone: [{
            home: String,
            work: String
        }]
});
//module.exports=mongoose.model('Student', student);
exports.default = mongoose.model('Student', StudentSchema);
//# sourceMappingURL=student.js.map