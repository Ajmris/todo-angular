import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string='';
  tasksList: Array<string>=[];
  tasksDone: Array<string>=[];
  // W konstruktorze lub inicjalizacji komponentu
  constructor() {
    const storedTasks = localStorage.getItem('tasksList');
    if (storedTasks) {
      this.tasksList = JSON.parse(storedTasks);
    }
  }
  add(){
    this.tasksList.push(this.newTask);
    this.newTask='';
    localStorage.setItem('tasksList', JSON.stringify(this.tasksList));
  }
  remove(task: string){
    this.tasksList=this.tasksList.filter(e=>e !== task);
  }
  done(task: string){
    this.tasksDone.push(task);
    this.remove(task);
    console.log(this.tasksList);
  }
}