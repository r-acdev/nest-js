
import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
    title: string;
    status: boolean;
    id: number
}

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    //GET
    getTasks(){
        return this.tasks;
    }
    
    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id === id);
        // Condicion por si no retornar el id
        if(!taskFound) {
            return new NotFoundException(`Task with ${id} not found`)
        }

        return taskFound
    }

    //POST
    createTask(task: Task): Task {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
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
