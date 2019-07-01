import { Component, OnInit, Input } from '@angular/core'
import { TodoService } from '../../services/todo.service'

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    @Input() todo

    constructor(
        private todoService: TodoService
    ) { }

    ngOnInit() {
        console.log(this.getDiffOfDays())
    }

    getDiffOfDays = () => Math.ceil((this.todo.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))

    onDeleteTodo = () => this.todoService.deleteTodo(this.todo.id)

    onCheckTodo = () => this.todoService.checkTodo(this.todo.id)
}
