const router = require('express').Router();
const {
getThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought,
addReaction,

} = require('../../controllers/thoughtsController');

router.route('/')
.get(getThoughts)
.post(createThought)

router.route('/:id')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)

router.route('/thoughtId/reactions')
.post(addReaction)
.delete(deleteReaction)

module.exports = router;