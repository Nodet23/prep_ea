/*var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = mongoose.model('Student');*/
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
const Student = mongoose.model.apply('Student');
/*var subject = mongoose.Schema({
    name: String,
    studentId: [{type:Schema.ObjectId, ref: 'Student'}],
    studies: String,
    quadri: String
},{collection:'subjects'});*/
const SubjectSchema = new Schema({
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

})

//module.exports=mongoose.model('Subject', SubjectSchema);
export default mongoose.model('Subject', SubjectSchema);