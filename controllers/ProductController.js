import Product from "../models/Product.js";

// POST เขียนข้อมูลลง DB  Rest ==> Create SQL ===> INSERT INTO
const ProductPost = async (req, res) => {
  try {
    const { name, unit, price, inStock } = req.body;
    // many create  await Proudct.insertMany([{},{},{},{},{},{},{},{},{}])
    await Product.create({
      name,
      unit,
      price,
      inStock,
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  } catch (err) {
    res.status(500).json({ message: err });
  }

  // 1. รับข้อมูลจาก req
  // 2. สร้างข้อมูลผ่าน model
  // 3. save
  // try {
  //     try {
  //         const { name, unit, price, inStock } = req.body;
  //         const product = await Product({
  //             name,unit, price, inStock
  //         })
  //         const result = await product.save();
  //         res.status(201).json(result);
  //     } catch (err) {
  //        res.status(400).json({message: err})
  //     }
  // } catch (err) {
  //     res.status(500).json({message: err});
  // }
};

// GET อ่านข้อมูลจาก DB Rest ==> Read, SQL ===> SELECT FROM WHERE
const ProductGetAll = async (req, res) => {
  try {
    //====> all []
    await Product.find({})
      .select({name: 1, price: 1})
      .then((result) => {
        if (!result)
          return res.status(404).json({ message: "Product not found" });
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const ProductGetOne = async (req, res) => {
  try {
    const { id } = req.params;
    // findById using for Object ID
    await Product.findById(id)
      .then((result) => {
        if (!result) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// PUT/PATCH แก้ไขข้อมูล  Rest ==> Update, SQL ===> UPDATE SET WHERE
const ProductPut = async (req, res) => {
  try {
    const { id } = req.params; // for find Product
    const { name, unit, price, inStock } = req.body;
   await Product.findByIdAndUpdate(
      id,
      {
        name,
        unit,
        price,
        inStock,
      },
      { new: true }
    ).then((result)=>{
        if (!result) return res.status(404).json({ message: "Product not found for Update" });
        res.status(200).json(result);
    }).catch();
    
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// DELETE ลบข้อมูล Rest ==> Delete , SQL ===> DELETE FROM WHERE
const ProductDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id)
    .then((result)=>{
        if (!result) return res.status(404).json({ message: "Product not Found for Delete" });
        res.status(200).json({ message: "Product Delete Success" });
    }).catch((err)=>{
        res.status(400).json({ message: err });
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export { ProductPost, ProductGetAll, ProductPut, ProductDelete, ProductGetOne };
