import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";

dbConnect();
const KEY = 'skkksjdueasheitjhdskjggjgjrandfjrybykdknrrbibdnjnsbufhrijgiosnfuhtuiojnsfhu'
const login = async (req, res) => {
    if(!req.body){
        res.statusCode = 404
        return
    }
    const {username, password} = req.body;

    res.json({
        token: jwt.sign({
            username,
            password
        }),
        KEY
    })


}