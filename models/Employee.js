import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const EmployeeSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor",
    },
});

const EmployeeModel = model("admin", EmployeeSchema);
export default EmployeeModel;
