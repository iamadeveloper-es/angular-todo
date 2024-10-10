/**
 * Componente que representa un listado de tareas
 */
import { Component, Input, SimpleChanges } from '@angular/core';
import { Task } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  // Recibimos la nueva tarea a través de @Input()
  @Input() newTask: Task = {}

  // Listado de tareas iniciales
  taskList: Array<Task> = [
    {
      title: 'Comprar alimentos para la semana',
      completed: false
    },
    {
      title: 'Terminar el informe del proyecto',
      completed: false
    },
    {
      title: 'Llamar al médico para agendar cita',
      completed: true
    },
    {
      title: 'Estudiar Angular y Testing',
      completed: false
    },
    {
      title: 'Organizar el escritorio de trabajo',
      completed: true
    }
  ];

  /**
   * Encuentra la tarea recibida por parámetro y devuelve el índice del array
   * @param {Task} task Tarea
   * @return {number} índice donde se encuentra la tarea
   */
  taskIndex(task: Task): number{
    return this.taskList.findIndex(item => item.title === task.title);
  }

  /**
   * Elimina la tarea recibida por parámetro de la lista
   * @param {Task} task Tarea recibida como evento
   */
  deleteItem(task: Task){
    console.log(task)
    const itemIndex = this.taskIndex(task);
    this.taskList.splice(itemIndex, 1)
  }

  /**
   * Añade una tarea al listado
   * @param {Task}  task Tarea
   */
  addTask(task: Task){
    this.taskList.push(task)
  }

  /**
   * Actualiza el estado de la tarea
   * @param ev Evento con los datos
   */
  updateCompleted(ev: any){
    const itemIndex = this.taskIndex(ev.task);
    this.taskList[itemIndex].completed = ev.isChecked
  }

  /**
   * Conforma una cadena con el formato n/n del conteo de las tareas completadas/total tareas
   * @return Cadena con el resultado
   */
  setCounter(): string{
    const completed = this.taskList.filter(item => item.completed).length
    return `${completed}/${this.taskList.length}`
  }
}
