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

  deleteItem(){
    // console.log(this.task)
    this.selectedTaskEvent.emit(this.task);
  }

  toggleCompleted(ev: any){
    this.taskCompletedEvent.emit({
      task: this.task,
      isChecked: ev?.target?.checked
    });
  }
}
