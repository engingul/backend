var mongoose = require("mongoose");

// Saatlerin tutulduğu şema
var hour = new mongoose.Schema({
    days: { type: String, required: true },
    open: String,
    close: String,
    kapali: { type: Boolean, required: false }
});

// Yorumların tutulduğu şema
var comment = new mongoose.Schema({
    autor: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

// Mekanların tutulduğu şema
var venue = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    rating: { type: Number, min: 0, max: 5, default: 0 },
    coordinates: { type: Number, index: "2dsphere" },
    foodanddrink: [String],
    hours: [hour],
    comments: [comment]
});

mongoose.model("venue", venue, "venues");
