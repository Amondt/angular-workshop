import { Component, OnInit } from '@angular/core'
import { Todo } from '../../models/todo.model'
import { TodoService } from '../../services/todo.service'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

    todosSubscription: Subscription
    todos: Todo[]

    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit() {
        this.todosSubscription = this.todoService.todosSubject.subscribe(
            (todos: Todo[]) => this.todos = todos
        )
        this.todoService.emitSubject()
    }

}
