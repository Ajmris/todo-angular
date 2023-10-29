import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasksList: Array<string>=[];
  tasksDone: Array<string>=[];
  // W konstruktorze lub inicjalizacji komponentu
  constructor() {
    const storedTasks = localStorage.getItem('tasksList');
    if (storedTasks) {
      this.tasksList = JSON.parse(storedTasks);
    }
  }
  ngOnInit(): void {
    this.tasksList=['Sprzątanie kuwety', 'Nauka Angulara', 'Podlewanie kwiatów', 'Zakupy'];
  }
  private updateLocalStorage() {
    localStorage.setItem('tasksList', JSON.stringify(this.tasksList));
  }
  add(task: string){
    this.tasksList.push(task);
    this.updateLocalStorage();
  }
  remove(task: string){
    this.tasksList=this.tasksList.filter(e=>e !== task);
    this.updateLocalStorage();
  }
  done(task: string){
    this.tasksDone.push(task);
    this.remove(task);
  }
}