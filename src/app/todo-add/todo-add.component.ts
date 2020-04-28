import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  title:string;

  @Output() addTodoItem : EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const todoItem = {
      title: this.title,
      completed: false
    }

    this.addTodoItem.emit(todoItem);
  }

}
