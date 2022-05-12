const Course = require('../models/Course')

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => {
                res.render('courses/show', { course })
            })
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body
        console.log(formData)
        const course = new Course(formData)
        course.save()
            .then(res.redirect('/'))
            .catch(res.send('Create failed'))
    }
}

module.exports = new CourseController()