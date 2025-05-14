const express = require("express")
const PORT = 5000
const app = express();

app.use(express.json());

app.post('/login',(res,req)=>{
    const{Email,password}=req.body
    if (!Email){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if (!password){
        return res.status(400).json({error:"Password cannot be empty"})
    }
    return res.set("Login sucessful")
})

app.listen(PORT,()=>{
    console.log("server running sucessfully")
})