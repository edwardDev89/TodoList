import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../shared/models/todo.model'
import { TodoService } from '../shared/services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Inject something from parent component
  @Input() todoItem : TodoModel

  // emit something out to the parent component
  @Output() deleteTodoItem :EventEmitter<TodoModel> =  new EventEmitter();

  constructor(public todoService : TodoService) { }

  ngOnInit() {

  }

  //Set dynamic classes to slash through completed item
  setClass(){
    let classObj = {
      // todoItem : true,
      'completed' : this.todoItem.completed
    }

    return classObj
  }

  onTick(todoItem){
    todoItem.completed = !todoItem.completed

    //update completed status in server
    this.todoService.updateTodoItemStatus(todoItem).subscribe(
      todos => {
        console.log(todoItem)
      }
    );

  }

  onDelete(todoItem){
    this.deleteTodoItem.emit(todoItem)
  }

}
