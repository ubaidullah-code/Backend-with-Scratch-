
export const logger = (req , res ,next)=>{
    console.log("hello form middleware")
    next()
}

let isLogin = false;
export const register = (req, res)=>{
    // let {email , password} = req.body;
    console.log(req.body)
    if(!email || !password){
        return res.status(400).json({message :"Invalid request"});
    }
    isLogin = true;
    res.status(200).json({message : "successfully register"})
}

export const authMiddleware = (req, res ,next)=>{
    if(!isLogin){
        res.status(400).json({message: "unauthorized"})
    }
    next();
}