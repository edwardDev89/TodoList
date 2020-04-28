import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../shared/models/todo.model'
import { TodoService } from '../shared/services/todo.service'

//===============================Parent Component===============================//

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList : TodoModel[]

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    
    this.todoService.getTodoList().subscribe(
      todos => {
        this.todoList = todos;
      }
    ); 
  }

  deleteTodoItem(todoItem:TodoModel){
    this.todoList =  this.todoList.filter(item => item.id != todoItem.id);
    this.todoService.deleteTodoItem(todoItem).subscribe();
  }

  addTodoItem(todoItem:TodoModel){
    this.todoList.push(todoItem);
    this.todoService.addTodoItem(todoItem).subscribe(
      // todoItem =>{
      //   this.todoList.push(todoItem);
      // }
    )
  }
}
