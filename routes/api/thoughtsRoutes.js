const router = require('express').Router();
const {
getThoughts,
getSingleThought,
createThought,

} = require('../../controllers/thoughtsController');

router.route('/')
.get(getThoughts)
.post(createThought)

router.route('/:id')
.get(getSingleThought)


module.exports = router;