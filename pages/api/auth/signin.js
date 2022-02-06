import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
dbConnect();
const KEY =
  "skkksjdueasheitjhdskjggjgjrandfjrybykdknrrbibdnjnsbufhrijgiosnfuhtuiojnsfhu";
const handler = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "No user found",
      });
    }

    if (user.password === password) {
      return res.json({
        token: jwt.sign(
          {
            username,
            password,
          },
          KEY
        ),
      });
    }

    return res.status(404).json({
      success: false,
      msg: "Wrong password",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
};

export default handler;
