const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  category: { 
    type: String, 
    required: true, 
    enum: ["Fancy Saree", "Lehenga", "Silk Saree", "Gown", "Crop Top", "Suit", "Mens Wear"] 
  },
  image: { type: String, required: true }, // Cloudinary URL
  description: { type: String, default: "A testament to Arinya Shree craftsmanship." },
  details: { type: [String], default: [] },
  sku: { type: String },
  isArrival: { type: Boolean, default: true },
  isExclusive: { type: Boolean, default: false },
  stock: { type: Number, default: 10 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
