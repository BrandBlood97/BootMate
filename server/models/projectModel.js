const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateFormat = require('../utils/dateFormat');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    baseLanguage: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    collab: {
        type: Boolean,
        default: true,
        required: true
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;