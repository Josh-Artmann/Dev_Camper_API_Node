const express = require('express')
const {getBootcamp,
    getBootcamps,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius
} = require('../controllers/bootcamps')


//  Include other resource routers
const courseRouter = require('./courses')


const router = express.Router()


// reoute into other resource routers
router.use('/:bootcampId/courses', courseRouter)
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp)

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)


module.exports = router