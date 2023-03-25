const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts: async function getThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            !thoughts ? res.status(404).json('can not find thoughts') : res.status(200).json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }

    },

    //get thought by ID
    getSingleThought: async function getSingleThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.id)
            !thought ? res.status(404).json('thought does not exist') : res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //create a thought
    createThought: async function createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)
            const user = await User.findById(req.body.userId)
            //dot notation to push the thoughts id into the users thoughts array field
            user.thoughts.push(newThought._id)
            await user.save();
            res.status(200).json(newThought);
        } catch (err) {
            res.status(500).json(err)
        }
    }

}