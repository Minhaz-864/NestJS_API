import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'Master' },
  last_log: {type: String, default: '00:00:00'},
  created_at: { type: String, default: Date() },
  updated_at: { type: String, default: '00:00:00' },
});

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  last_log: string;
  created_at: string;
  updated_at: string;
}
