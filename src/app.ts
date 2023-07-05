import express from "express";
import estudianteRouter from './routes/estudiante.route';

const app = express();

app.use(express.json());
app.use(estudianteRouter);

export default app;
