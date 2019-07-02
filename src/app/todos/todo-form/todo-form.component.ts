import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TodoService } from '../../services/todo.service'
import { Todo } from '../../models/todo.model'
import { Router } from '@angular/router'

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

    todoForm: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private todoService: TodoService,
        private router: Router
    ) { }

    ngOnInit() {
        this.todoForm = this.formBuilder.group({
            content: ['', Validators.required],
            date: ['', Validators.required]
        })
    }

    onSubmit = () => {
        this.todoService.addTodo(new Todo(
            this.todoForm.get('content').value,
            new Date(this.todoForm.get('date').value)
        ))
        this.router.navigate(['todos'])
    }
}
