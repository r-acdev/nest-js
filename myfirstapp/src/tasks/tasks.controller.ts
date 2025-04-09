
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')

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

    @Get()
    getAllTasks () {
        return this.taskServices.getTasks();
    }

    @Post()
    createTask() {
        return this.taskServices.createTask();
    }

    @Put() // {title: 'Primera tarea', status: false} -> {title: tarea actualizada, status: true}
    updateTask() {
        return this.taskServices.updateTask();
    }

    @Delete()
    deleteTask() {
        return this.taskServices.deleteTask();
    }

    @Patch() // {title: 'Primera tarea', status: false} -> {status:true}
    patchTask() {
        return this.taskServices.patchTask();
    }
}
