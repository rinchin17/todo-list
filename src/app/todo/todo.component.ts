import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  job=[]
  myjob=''
  constructor() { }

  ngOnInit() {
   
  }
  addJob(){
    //const temp = myjob;
    this.job.push(this.myjob);
  }

}
