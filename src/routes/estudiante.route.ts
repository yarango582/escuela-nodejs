import express from 'express';
import { getEstudiantes, postEstudiantes } from "../controllers/estudiantes.controller";

const estudianteRouter = express.Router();

estudianteRouter.get('/estudiantes', getEstudiantes);

estudianteRouter.post('/estudiantes', postEstudiantes);

export default estudianteRouter;