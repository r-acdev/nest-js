
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getTasks() {
        return 'Obteniendo todas las tareas'
    }

    funcion() {
        return [1, 2, 3]
    }
}
