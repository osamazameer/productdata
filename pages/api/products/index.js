import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product";

dbConnect();

const handler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case "GET":
        try {
          const products = await Product.find({});
          res.status(200).json({
            success: true,
            data: products,
          });
        } catch (error) {
          res.status(400).json({
            success: false,
          });
        }
        break;
      case "POST":
        try {
          const product = await Product.create(req.body);
          res.status(201).json({ success: true, data: product });
        } catch (error) {
          res.status(400).json({
            success: false,
          });
        }
    }
  } catch (error) {
    console.log(error);
    // res.status(500).json({
    //   error,
    // });
  }
};

export default handler;
