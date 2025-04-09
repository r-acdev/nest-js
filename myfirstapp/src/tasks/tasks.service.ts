
import { Injectable } from '@nestjs/common';

// Sin el export no va a tomar en cuenta los valores a lo que vamos a tipar en la funcion
export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    getTasks(): User {
        return {
            name: 'Alejandro',
            age: 25
        }
    }

    createTask() {
        return 'Creando tarea'
    }

    updateTask() {
        return 'Actualizando tarea'
    }

    deleteTask() {
        return 'Eliminando tarea'
    }

    patchTask() {
            return 'Actualizando parcialmente tarea'
    }
}
