//this is to allow to inject into any component constructor to use 
import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoURL:string = 'https://my-json-server.typicode.com/edwardDev89/FakeJsonDB/posts/';

  //todoURL:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodoList():Observable<TodoModel[]>{
    return this.http.get<TodoModel[]>(`${this.todoURL}${this.todosLimit}`);
  }

  
  deleteTodoItem(todoItem : TodoModel):Observable<TodoModel>{
    const url = `${this.todoURL}/${todoItem.id}`;
    return this.http.delete<TodoModel>(url, httpOptions);
  }

  addTodoItem(todoItem : TodoModel):Observable<TodoModel>{
    return this.http.post<TodoModel>(this.todoURL, todoItem, httpOptions);
  }

  updateTodoItemStatus(todoItem : TodoModel):Observable<Object>{
    const url = `${this.todoURL}/${todoItem.id}`;
    return this.http.put(url, todoItem, httpOptions);
  }

}
