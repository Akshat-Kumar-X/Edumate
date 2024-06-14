import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import TeacherModel from './models/Tecaher.model.js'
import StudentModel from './models/Student.model.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

await mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Database Connected.'))
    .catch((err) => console.log(err.message))

app.post('/api/teacher-register', (req, res) => {
    TeacherModel.create(req.body)
        .then(teacher => res.json(teacher))
        .catch(() => res.json('User not created'))

})

app.post('/api/teacher-login', async (req, res) => {
    const { email, password } = req.body;
    const user = await TeacherModel.findOne({ email : email })
    if (user) {
        if (user.password === password) {
            res.json("Success");
        } else {
            res.json("Wrong email or password");
        }
    } else {
        res.json("User not found");
    }
})

app.post('/api/student-register', (req, res) => {
    StudentModel.create(req.body)
        .then(student => res.json(student))
        .catch(() => res.json('User not created'))
})

app.post('/api/student-login', async (req, res) => {
    const { email, password } = req.body;
    const user = await StudentModel.findOne({ email : email })
    if (user) {
        if (user.password === password) {
            res.json("Success");
        } else {
            res.json("Wrong email or password");
        }
    } else {
        res.json("User not found");
    }
})

app.listen(3000, () => {
    console.log('Server Running.')
})