import * as mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    roll: { type: Number, required: true },
    class_of: { type: String, required: true },
    fathername: { type: String, required: true },
    mothername: { type: String, required: true },
    gender: { type: String, required: true },
    religion: { type: String, required: true },
    blood: { type: String, required: true },
    picture: { type: String, required: true },
    courses: { type: Array, default: [String] }, 
    login: { type: Object, default: {}, required: true},
    year: { type: Number, default: Date().split(" ")[3] },
    created_by: {type: String, required: true},
    // updated_by: {type: String, default: null},
    created_at: { type: String, default: Date() },
    updated_at: { type: String, default: '00:00:00' },
})

//studentSchema.index({ class_of: 1, name: 1, section: 1 }, { unique: true })


export interface Students {
    firstname: string;
    lastname: string;
    roll: number
    class_of: string
    fathername: string
    mothername: string
    gender: string
    religion: string
    blood: string
    picture: string
    courses: []
    login: object
    year: number
    created_by: string
    // updated_by: {type: String, default: null},
    created_at: string
    updated_at: string
}