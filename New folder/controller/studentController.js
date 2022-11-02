import mongoose from 'mongoose'
import StudentModel from '../models/student.js'


class studentController {
//CRUD Controllers

static createDoc = async (req,res) => { //post
      try {
        const {name,age,fee} = req.body // get all data inside body by req.body and create JS object destructing
        const data = new StudentModel({  //modelName and insert data in model
                name:name,
                age:age,
                fee:fee,
        })
        const result = await data.save(); //saved inserted data
      res.status(201).send(result);

      } catch (error) {
        console.log(error);
      }
}


static getAllDoc = async (req,res) => {
        try {
        const result = await StudentModel.find(); //get all the collection inside DB
      res.send(result);
        } catch (error) {
                console.log(error);
              }
        }



static getSingleDocById = async (req,res) => {
        try {
        const result = await StudentModel.findById(req.params.id); //params get id by url provinding
        res.send(result);
                } catch (error) {
        console.log(error);
         }
                }



static updateDocById = async (req,res) => {
       try {
        const result = await StudentModel.findByIdAndUpdate(req.params.id , req.body)  // 1st parameter which id we will provide by url and 2nd parameter get request body data.
        res.send(result);
       } catch (error) {
        console.log(error);
       }
                 }  

static deleteDocById = async (req,res) => {
                 try {
                        const result = await StudentModel.findByIdAndDelete(req.params.id)
                        res.send(result);
                 } catch (error) {
                        console.log(error);
                 }
        }

}



export default studentController;