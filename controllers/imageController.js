const db = require("../models");
const Blog = require("../models/blog");

// Defining methods for the parksController
module.exports = {
  findAll: function(req, res) {
    db.Image
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Image
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Image
        .create(req.body)
    //   .then(dbModel => res.json(dbModel))
        .then((result) => {
            Blog.findById({ _id: params.id }, (err, blog) => {
            if (blog) {
                blog.image.push(result);
                blog.save();
                console.log(json({message: "File successfully added to the Blog!"}));
            }
            });
        })
        .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Image
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};