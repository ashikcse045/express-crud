import { join } from 'path'

const index = (req, res) => {
    const indexFile = join(process.cwd(), 'views', 'index.html');
    return res.sendFile(indexFile)
}

const store = (req, res) => {
    if(!req.body.name) {
        res.status(400).json({
            status: 'error',
            message: 'Validation error: "name" field is required'
        })
    }

    res.status(201).json({
        status: 'success',
        message: 'User created successfully',
    });
}

const show = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'user data found',
        data: {
            name: 'Ashik',
            id: req.params.id,
        }
    })
}

export default {
    index,
    store,
    show,
}