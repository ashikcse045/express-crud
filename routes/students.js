import express from 'express'
import studentController from '../controllers/studentController.js'
const router = express.Router()

// router.get('/', studentController.index)
// router.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('hi');
// })

router.route('/')
    .get(studentController.index)
    .post(studentController.store)

router.route('/:id')
.get(studentController.show)
// .put(studentController.update)
export default router