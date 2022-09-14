import * as mongoose from 'mongoose';


export const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    class_of: { type: String, required: true },
    faculty: { type: String, required: true },
    section: { type: String, required: true }, //could be even array ['a','b','c'] | 'a'
    year: { type: Number, default: Date().split(" ")[3] },
    students_enrolled: { type: Number , default: 0},
    created_by: {type: String, required: true},
    updated_by: {type: String, default: null},
    created_at: { type: String, default: Date() },
    updated_at: { type: String, default: '00:00:00' },
})

courseSchema.index({ class_of: 1, name: 1, section: 1 }, { unique: true })


export interface Courses {
    name: string;
    description: string;
    class_of: string;
    faculty: string;
    section: string;
    year: number;
    students_enrolled: number;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
}