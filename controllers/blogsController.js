const { Park, BlogPost } = require("../models");
const db = require("../models");
const Blog = require("../models/blog");

// Defining methods for the parksController
module.exports = {
  findAll: function(req, res) {
    db.Blog
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Blog
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.BlogPost
      .create(req.body)
      // .then(dbModel => res.json(dbModel))
      .then((result) => {
        console.log('log: result ', result);
        Park.findOne({ name: result.park }, (err, park) => {
          if (park) {
            park.blog.push(result);
            park.save();
            res.json({message: "Blog successfully added to the park!"});
          }
        });
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Blog
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Blog
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};