import mongoose from 'mongoose'



const connectdb = async (DATABASE_URL) => {
        try {
                const OPTIONS_DB = {

                 dbName: 'schooldb',
                }

              await mongoose.connect(DATABASE_URL, OPTIONS_DB);
                console.log("Connected successfully");
        } catch (err) {
                console.log(err);
        }
}




export default connectdb;