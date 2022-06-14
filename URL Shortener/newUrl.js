const mongoose = require("mongoose");
const short_id = require("shortid");

const newUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true,
    },
    new: {
        type: String,
        required: true,
        default: short_id.generate,
    },
});

module.exports = mongoose.model("newUrl", newUrlSchema);