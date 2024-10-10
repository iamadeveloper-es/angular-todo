import { Component, ViewChild } from '@angular/core';
import { Task } from 'src/app/components/task/task.component';
import { TasksComponent } from 'src/app/components/tasks/tasks.component'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  @ViewChild(TasksComponent) tasksComponent!: TasksComponent;

  newTask: string = '';
  errorMssg: string = 'Introduce un dato que contenga al menos más de dos caracteres';
  showError: boolean = false;

  /**
   * Crea una nueva tarea
   * @return {Task} Nueva tarea
   */
  createNewTask(): Task{
    return {
      title: this.newTask,
      completed: false
    }
  };

  /**
   * Ejecuta el envío del formulario
   * OK -> Envía la info a través de @ViewChild y limpia la variable newTask
   * KO -> Gestiona el error
   * @param {Event} ev Evento recibido
   */
  onSubmit(ev: Event){
    ev.preventDefault()
    if(!!this.newTask && this.newTask.length > 2){
      this.tasksComponent.addTask(this.createNewTask())
      this.newTask = '';
    }
    else{
      this.showError = true
    }
  }
}
