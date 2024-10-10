/**
 * Componente que representa una tarea
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface Task{
  title?: string,
  completed?: boolean
};

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task = {};
  @Output() selectedTaskEvent = new EventEmitter<Task>();
  @Output() taskCompletedEvent = new EventEmitter<{task: Task, isChecked: boolean}>();

  /**
   * Emite evento al padre para borrar la tarea seleccionada
   */
  deleteItem(){
    // console.log(this.task)
    this.selectedTaskEvent.emit(this.task);
  }

  /**
   * Emite evento al padre para cambiar el estado de la tarea
   * @param ev Evento con los parámetros
   */
  toggleCompleted(ev: any){
    this.taskCompletedEvent.emit({
      task: this.task,
      isChecked: ev?.target?.checked
    });
  }
}
