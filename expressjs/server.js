import express from "express";

const app = express();
app.use(express.json())
// const logger = (req ,res,next)=>{
//     console.log("middleware run")
//     next()
// } 
// app.use(logger)

    // middleware
// const requestTime = function (req, res,next){
//     req.requestTime =  Date.now();
//     next()
// }
// app.use(requestTime)

// app.get('/',(req,res)=>{
//     // let responseSend = `<small>${ Date(req.requestTime)}</small>`
//     res.status(200).send(responseSend)
   
// })

// // static file check link with folder 
// // app.use("/static",express.static('public'));


// throw custom error

app.post("/register",(req,res)=>{
    let {password , email} = req?.body
    console.log(req.body)
    let num = Math.floor(Math.random()  * Number(password) )
    req.headers = {...req.headers,token: num}
    let header = req.headers
    console.log(header)
    res.status(200).send({email, password,token:num})
})

const middleware = (req,res,next)=>{
    const token = req?.headers['authorization'];
    console.log(req?.headers)
    if(!token)
    {
        return res.status(404).send("users doesn't authorized")
    }
    next()
}
app.use(middleware);

app.get('/get-access',(req,res)=>{
    res.send("get access")
})


app.listen(5000,()=>console.log("server is running!"));