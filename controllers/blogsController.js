const { Park, BlogPost } = require("../models");
const db = require("../models");

// Defining methods for the parksController
module.exports = {
  findAll: function(req, res) {
    db.BlogPost
      .find({place_id: req.body.place_id})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.BlogPost
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
        // Park.findOne({ name: result.park }, (err, park) => {
        //   if (park) {
        //     park.blog.push(result);
        //     park.save();
        //     res.json({message: "Blog successfully added to the park!"});
        //   }
        // });
        res.json(result);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.BlogPost
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.BlogPost
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};