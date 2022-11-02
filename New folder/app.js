import express from 'express'
import bodyParser from 'body-parser'
import connectdb from './db/connectDB.js'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || "4000"


const DATABASE_URL = "mongodb://localhost:27017";


app.use(bodyParser.urlencoded({
        extended: true
}));
app.use(express.static('public'));
app.use(express.json())


app.use('/student' , web )


 
connectdb(DATABASE_URL);






app.listen(port, () => {
        console.log(`server live on port no:${port}`)
});