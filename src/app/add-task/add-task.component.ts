import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  newTask: string | undefined;

  @Output()
  emitTask=new EventEmitter<string>();
  
  constructor(){}
  ngOnInit(){

  }
  add(){
    this.emitTask.emit(this.newTask);
    this.newTask='';
  }
}