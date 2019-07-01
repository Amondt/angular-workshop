import { Injectable } from '@angular/core'
import { Todo } from '../models/todo.model'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    todosSubject = new Subject<any[]>()
    todos: Todo[] = [
        new Todo('My first todo', new Date(2019, 5, 30)),
        new Todo('My second todo', new Date(2019, 6, 2)),
        new Todo('My third todo', new Date(2019, 6, 5)),
        new Todo('My fourth todo', new Date(2019, 6, 7)),
    ]

    constructor() {
        console.log(this.todos)
    }

    emitSubject = () => this.todosSubject.next(this.todos)

    deleteTodo = (id) => {
        console.log('todo with id: ', id, ' deleted')
        this.todos = this.todos.filter(todo => todo.id !== id)
        this.emitSubject()
    }

    checkTodo = (id) => {
        console.log('todo with id: ', id, ' checked')
        this.todos.find(todo => todo.id === id ? todo.checked = !todo.checked : null)
        this.emitSubject()
    }
}
