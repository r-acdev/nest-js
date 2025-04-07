
import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})

export class TasksController {

    //Primera forma de importarlo
    // taskServices: TasksService;

    // constructor(taskServices: TasksService) {
    //     this.taskServices = taskServices
    // }

    //Segunda forma de importalo (Mejor practica)

    constructor(private taskServices: TasksService) {
        this.taskServices = taskServices
    }

    @Get('/tasks')
    getAllTasks () {
        return this.taskServices.getTasks();
    }
}
