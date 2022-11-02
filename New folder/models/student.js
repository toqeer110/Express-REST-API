import mongoose from 'mongoose';
import express from 'express'


const studentSchema = new mongoose.Schema({
        name:{type:String , required:true , trim:true},
        age:{type:Number , required:true , min:18 , max:60},
        fee:{type:mongoose.Decimal128 , required:true , validate: (value)=> value >= 5000.50}
})


//Model
const StudentModel =  mongoose.model("student",studentSchema) //collection name and schema name





export default StudentModel;




