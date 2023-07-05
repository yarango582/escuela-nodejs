import { Estudiante } from "../models/estudiante.model";

export class EstudianteRepository {

    private estudiantes: Estudiante[] = [{
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 20
    },
    {
        id: 2,
        nombre: 'Pedro',
        apellido: 'Gomez',
        edad: 30
    },
    {
        id: 3,
        nombre: 'Maria',
        apellido: 'Lopez',
        edad: 40
    }];

    getEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    insertEstudiante(estudiante: Estudiante): Estudiante {
        this.estudiantes.push(estudiante);
        return estudiante;
    }
}