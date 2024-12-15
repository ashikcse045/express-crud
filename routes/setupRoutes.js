import students from './students.js'
import product from './product.js';

const setupRoutes = (app) => {
    app.use('/students', students)
    app.use('/products', product)
}

export default setupRoutes;