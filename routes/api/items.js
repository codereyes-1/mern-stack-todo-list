const express = require('express');
const router = express.Router();

// Item Model exit api, router folder, into models/Item
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
//@access Public
//Item.find is mongoose function. fetch from db, gives the items and does something. body parser
// this action will fetch all items from DB. returns a promise. do .then do with the items. sort, res.json, pass in items.
router.get('/', (req, res) => {
 Item.find()
    .sort({ date: -1 })
     .then(items => res.json(items))
})

// @route POST api/items
// @desc Create item
// @access Public
// gives back item saving, we want res.json(item) spit out item in json
router.post('/', (req, res) => {
    const newItem = new Item ({
    name: req.body.name
    })
    newItem.save().then(item => res.json(item));
})

// @route DELETE api/items
// @desc DELETE item
// @access Public
// findbyID mongoose method, req.params.id will fetch it from URI. gives promise back item searching for. set arrow function to remove it. item.remove() this wil give promise. .then() put in call back function to res.json. your choice what to return. {success: true} so find by id then delete and return a confirmation.
router
 .delete('/:id', (req, res) => {
   Item.findById(req.params.id).then(item =>
   item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});
// On postman, make delete request to http://localhost:5000/api/items/ the id number of the item in the database.


// OR no other file will read what's in here. export default is ES6, for babel. below is alt
module.exports = router;

// will be using create react app cli to generate the application.