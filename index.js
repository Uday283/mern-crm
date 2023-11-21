import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
// import session from 'express-session';n
import Routes from './routes/route.js';
import Connection from './database/db.js';
// import Connection1 from './database/db1.js';

// const EmployeeModel = require('./models/Employee.js')
import EmployeeModel from './models/Employee.js'
// import User from './schema/user-schema.js';
const app = express();


dotenv.config();
app.use(
    cors({
      origin: process.env.cros_url,
      credentials: true,
    })
  );
  
  // Add a session middleware
// app.use(
//     session({
//       secret: 'your-secret-key', // Use a secure secret key for production
//       resave: true,
//       saveUninitialized: true,
//     })
//   );

// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));





app.post('/login',(req,res)=> {
    console.log("Data recived");
    const {email, password} = req. body;
    EmployeeModel.findOne( {email: email})
    .then(user => {
        if(user) {
            console.log("user found");
            if(user.password===password){
                console.log("Password is correct");
                res.json("Success")
                // res.send("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else
        {
            res.json("No record exist")
        }
    })
})
app.post('/register',(req,res)=> {
    EmployeeModel.create(req.body)
    .then(user =>req.json(user))
    .catch(err => res.json(err))
})

app.use('/', Routes);


const PORT = process.env.PORT||8000;

Connection();
// Connection1();
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

