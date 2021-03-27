const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    summary: { type: String, required: true },
    username: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now },
    // picture: {type: }
    park: { type: String }
  });


  
  const Blog = mongoose.model("Blog", blogSchema);
  
  module.exports = Blog;