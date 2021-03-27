const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
});

const Park = mongoose.model("Park", bookSchema);

module.exports = Park;
