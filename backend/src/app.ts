import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/api', (req: Request, res: Response) => {
    res.json({
        message: 'Bienvenue sur le serveur API',
        status: 'running',
    });
});

export default app