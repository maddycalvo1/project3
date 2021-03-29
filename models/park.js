const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  blogs: [{
    type: Schema.Types.ObjectId,
    ref: "Blog"
  }]
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;
