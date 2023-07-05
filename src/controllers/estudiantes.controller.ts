import { Request, Response } from "express";
import { EstudianteRepository } from "../repositories/estudiante.repository";


const estudianteRepository = new EstudianteRepository();

const getEstudiantes = (req: Request, res: Response) => {
    res.send(estudianteRepository.getEstudiantes());
}

const postEstudiantes = (req: Request, res: Response) => {
    const { body } = req;
    const {id, nombre, apellido, edad} = body;
    const estudiante = {
        id,
        nombre,
        apellido,
        edad
    }
    estudianteRepository.insertEstudiante(estudiante);
    res.send(estudiante);
}


export {
    getEstudiantes,
    postEstudiantes,
}