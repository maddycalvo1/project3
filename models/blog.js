const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    summary: { type: String, required: false },
    username: { type: String, required: false },
    title: { type: String, required: false },
    comment: { type: String, required: false },

    synopsis: String,
    date: { type: Date, default: Date.now },
    image: [{
      type: Schema.Types.ObjectId,
      ref: "Image"
     }],
    park: { 
      type: Schema.Types.ObjectId,
      ref: "Park"
     }
  });

  // how to pass in an object id correctly to fix error

  
  const Blog = mongoose.model("Blog", blogSchema);
  
  module.exports = Blog;