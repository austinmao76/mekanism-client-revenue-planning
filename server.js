import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

//db and authenticate
import connectDB from './db/connect.js'

//routers

import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.get('/', (req, res) => {
	res.send('welcome')
})

app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL)
		app.listen(port, () => {
			console.log(`server is listening on port ${port}...`)
		})
	} catch (error) {
		console.log(error)
	}
}

start()
