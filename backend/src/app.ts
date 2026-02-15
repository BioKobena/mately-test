import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import routes from "./routes/taskRoutes"


const app: Application = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    origin: "*"
}));


app.use("/", routes)

app.get('/api', (req: Request, res: Response) => {
    res.json({
        message: 'Bienvenue sur le serveur API',
        status: 'running',
    });
});

export default app