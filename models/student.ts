import * as mongoose from 'mongoose';
/*var mongoose = require('mongoose');

var student = mongoose.Schema({
    name: String,
    address: String,
    phone: { home: String, work: String }
},{collection:'students'});*/


const Schema = mongoose.Schema;

const StudentSchema = new Schema({
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
export default mongoose.model('Student', StudentSchema);
