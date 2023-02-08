const CustomerPost = (req, res)=>{
    res.json({message: "Customer Post"})
} 
//GET 
const CustomerGet = (req, res)=>{
    res.json({message: "Customer Get"})
} 
//PUT 
const CustomerPut = (req, res)=>{
    res.json({message: "Customer Put"})
} 
//DELETE
const CustomerDelete = (req, res)=>{
    res.json({message: "Customer Delete"})
} 

export {CustomerPost, CustomerGet, CustomerPut, CustomerDelete }

