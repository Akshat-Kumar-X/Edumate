import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    subject: {
        type: String
    },
    experience: {
        type: Number
    },
    location: {
        type: String
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
})

const TeacherModel = mongoose.model('Teachers', TeacherSchema);
export default TeacherModel