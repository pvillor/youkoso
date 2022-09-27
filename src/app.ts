import express, { Request, Response, NextFunction } from 'express'
import { AppError } from './errors/appError'
import contactRoutes from './routes/contact.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())

app.use(userRoutes)
app.use(contactRoutes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(3000)