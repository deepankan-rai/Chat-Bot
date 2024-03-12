

import app from "./app.js";
import { connectDB } from "./db/connection.js";

//connection and listeners
const PORT=process.env.PORT || 5000;


connectDB().then(()=>{
    app.listen(5000,()=>console.log('Server is running and Database is connected!'));

})
.catch((err)=>console.log(err));
