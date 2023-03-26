const { ObjectId } = require('mongoose').Types;
const { User, Thought, } = require('../models')

module.exports = {
    // get all users

    getUsers: async function getUsers(req, res) {
        try {
            const users = await User.find(
                
            )
            !users ? res.status(404).json('no users found') : res.status(200).json(users)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    //gets a single user and populates the thoughts and friends for that user
    getSingleUser: async function getSingleUser(req, res) {
        try {
            const user = await User.findById(req.params.id)
                .populate('thoughts')
                .populate('friends')
                .select('-__v')
            !user ? res.status(404).json('user not found') : res.status(200).json(user)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },

    //creates a new user 
    createUser: async function createUser(req, res) {
        try {
            const newUser = await User.create(req.body)
            res.status(200).json(newUser);
        }
        catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },

    updateUser: async function updateUser(req, res) {
        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { runValidators: true, new: true }
            )
            !updateUser ? res.status(404).json('user not found') : res.status(200).json(updateUser)
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    // delete user by id and delete all associated thoughts
    deleteUser: async function deleteUser(req, res) {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            !deletedUser 
            ? res.status(404).json("User not found")
            : await Thought.deleteMany({_id: { $in: deletedUser.thoughts}})
                ? res.status(200).json("User & thoughts successfully deleted")
                : res.status(500).json("Error deleting user's thoughts");
        } catch (err) {
            res.status(500).json(err);
        }
    },

    //add a new friend to a users friends list
    addFriend: async function addFriend(req, res) {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            )
            !user ? res.status(404).json('no users found') : res.status(200).json("new friend added to your account")
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    // delete a friend from a users friends list
    deleteFriend: async function deleteFriend(req, res) {
        try {
            const unFriend = await User.findByIdAndUpdate(
                req.params.userId,
                {$pull: { friends: req.params.friendId}},
                {new: true }
            )
            !unFriend ? res.status(404).json('user not found') : res.status(200).json(unFriend)
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
}