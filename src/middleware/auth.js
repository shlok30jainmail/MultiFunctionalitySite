const jwt = require("jsonwebtoken");
const Register = require("../models/register");

const auth = async (req, resp, next)=>{
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token,process.env.SECRET_KEY);
        console.log(verifyUser);

        const data = await Register.findOne({_id:verifyUser._id});
        console.log(data)
        next();
    } catch (error) {
        resp.status(404).json(error);
    }
}

module.exports = auth;