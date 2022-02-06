import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";

dbConnect();
const handler = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
};

export default handler;
