import mongoose from "mongoose"

const CustomerSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true, unique: true},
    address: {
        address1: String,
        address2: String,
        district: String,
        province: String,
        postcode: String,
        location: {
            lat: Number,
            lot: Number
        }
    },
    phone: { type: String },
    active: { type: Boolean, default: true }
},{timestamps: true})

const Customer = mongoose.model("Customer", CustomerSchema)

export default Customer





//name, email, address, phone, active