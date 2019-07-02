Note 2019-07-02T08.47.31
========================
# Angular getting started workshop

## Intro

- angular intro (1 min)
- goal -> Display app: to get to it: 

![Capture du 2019-07-02 10-56-46](file://media/1894875642.png)

	* structure of the project / components expl
	* bases:
		- extrapolation > __{{ }}__
		- controller to view: vars > __[]__ / view to controller: event > __()__
		- pipes (__date__)
		- directives (__*ngFor__, __ngIf__)
		- __@Input__ (__@Output__ exists)
	* services (observable / model)
	* routing
	* forms (template / reactive) + Validators
	* firebase bd connect
	* build / deploy on firebase

## Settup the project

1. `sudo npm install -g @angular/cli`
2. `ng new todo-list-app --style=scss --skip-tests=true`
3. `npm install bootstrap jquery popper.js --save`

![install-bootstrap-angular](file://media/1918621958.png)

4. `ng serve -o`

(+ explain files)

## Todo-list / Todo 

- components generate (todo-list / todo / header)

### app
```
<app-header></app-header>

<div class="container">
		<div class="row">
				<div class="col-md-8 offset-2">
						<app-todo-list></app-todo-list>
				</div>
		</div>
</div>
```

### todo model

```
export class Todo {
		id: number
		content: string
		date: Date
		checked: boolean
		
		constructor (
		    content: string,
		    date: Date
		) {
		    this.content = content
		    this.date = date
		    this.id = Date.now() + Math.ceil(Math.random() * 1000000)
		    this.checked = false
		}
}
```

### todo-list
```
todos: Todo[] = [
    new Todo('My first todo', new Date(2019, 5, 30)),
    new Todo('My second todo', new Date(2019, 6, 2)),
    new Todo('My third todo', new Date(2019, 6, 5)),
    new Todo('My fourth todo', new Date(2019, 6, 7)),
]
```

```
<h2 class="mt-3">Todos</h2>

<ul class="list-group">
    <app-todo
        *ngFor="let todo of todos"
        [todo]="todo"
    ></app-todo>
</ul>
```

### todo

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
```

```
<li
    [ngClass]="{
        'my-1': true,
        'list-group-item': true,
        'list-group-item-danger': getDiffOfDays() < 0,
        'list-group-item-warning': (getDiffOfDays() >= 0 && getDiffOfDays() <= 2),
        'list-group-item-success': getDiffOfDays() > 2
    }"
>
    <small>
        {{ todo.date | date: 'fullDate' }}
    </small>

    <h5 
        [ngStyle]="todo.checked ? { 'text-decoration': 'line-through' } : ''"
        class="check"
        (click)="onCheckTodo()"
    >{{ todo.content }}</h5>

    <i
        class="far fa-square check"
        *ngIf="!todo.checked"
        (click)="onCheckTodo()"
    ></i>
    <i 
        class="far fa-check-square check"
        *ngIf="todo.checked"
        (click)="onCheckTodo()"
    ></i>

    <small
        class="delete"
        (click)="onDeleteTodo()"
    >&#10007;</small>
</li>
```

```
li {
    user-select: none;
    min-height: 85px;
}
small {
    float: right;
    color: #555;
}
.delete {
    font-size: 1.5rem;
}
.delete:hover {
    cursor: pointer;
}
.check:hover {
    cursor: pointer;
}
```

```
getDiffOfDays = () => Math.ceil((this.todo.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
onDeleteTodo = () => console.log('delete: ', this.todo.id)
onCheckTodo = () => console.log('check: ', this.todo.id)
```

### Service todos

	`ng g s services/todos`

- copy todos from todos-list

```
todosSubject = new Subject<any[]>()
emitSubject = () => this.todosSubject.next(this.todos)
```

```
deleteTodo = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.emitSubject()
}

checkTodo = (id: number) => {
    this.todos.find(todo => todo.id === id ? todo.checked = !todo.checked : null)
    this.emitSubject()
}
```

### Todo-list

- remove array data from todos
- `todosSubscription: Subscription`
```
this.todosSubscription = this.todosService.todosSubject.subscribe((todos: Todo[]) => this.todos = todos)
this.todosService.emitSubject()
```

### Todo

- change delete / checked methods
```
onDeleteTodo = () => this.todosService.deleteTodo(this.todo.id)
onCheckTodo = () => this.todosService.checkTodo(this.todo.id)
```

### Router

`ng g c todos/todo-form`
```
{ path: 'todos', component: TodosListComponent},
{ path: 'new', component: TodoFormComponent},
{ path: '', redirectTo: 'todos', pathMatch: 'full'},
{ path: '**', redirectTo: 'todos'}
```
- router-outlet > app component

### Header
```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" routerLink="todos">Todos</a>

    <ul class="navbar-nav ml-auto navbar-right">
    			<li class="nav-item">
            <a class="nav-link" routerLink="todos" routerLinkActive="active">Todos</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" routerLink="new" routerLinkActive="active">New todo</a>
        </li>
    </ul>
</nav>
```

### Form

- addTodo method in todos service
```
addTodo = (todo:Todo) => {
    this.todos.push(todo)
    this.emitSubject()
}
```

- import reactive forms module in app module
```
<h2 class="mt-3">New Todo</h2>

<form [formGroup]="todoForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
        <label for="content">Content</label>
        <input
            type="text"
            id="content"
            class="form-control"
            formControlName="content">
    </div>

    <div  class="form-group">
        <label for="date">Date</label>
        <input
            type="date"
            id="date"
            class="form-control"
            formControlName="date">
    </div>

    <button 
        class="btn btn-primary"
        [disabled]="todoForm.invalid"
        type="submit">Save
    </button>
</form>
```
- import FormBuilder, FormGroup, Validators
```
ngOnInit() {
    this.todoForm = this.formBuilder.group({
        content: ['', Validators.required],
        date: ['', Validators.required]
    })
}

onSubmit = () => {
    this.todosService.addTodo(new Todo(
        this.todoForm.get('content').value,
        new Date(this.todoForm.get('date').value)
    ))
    this.router.navigate(['todos'])
}
```