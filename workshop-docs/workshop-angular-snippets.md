Note 2019-07-02T14.29.39
========================

## Angular workshop snipets

#### app.component.html
```
/* to be filled */

<div class="container">
		<div class="row">
				<div class="col-md-8 offset-2">
						/* to be filled */
				</div>
		</div>
</div>
```

#### todo.model.ts
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

#### todos array examples
```
todos: Todo[] = [
    new Todo('My first todo', new Date(2019, 5, 30)),
    new Todo('My second todo', new Date(2019, 6, 2)),
    new Todo('My third todo', new Date(2019, 6, 5)),
    new Todo('My fourth todo', new Date(2019, 6, 7)),
]
```

#### todo-list.component.html
```
<h2 class="mt-3">Todos</h2>

<ul class="list-group">
    /* to be filled */
</ul>
```

#### index.html
```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
```

#### todo.component.html
```
<li
    /* to be filled */
>
    <small>
        {{ /* to be filled */ }}
    </small>

    <h5 
						class="check"
        /* to be filled */
    >/* to be filled */</h5>

    <i
        class="far fa-square check"
        /* to be filled */
    ></i>
    <i 
        class="far fa-check-square check"
        /* to be filled */
    ></i>

    <small
        class="delete"
        /* to be filled */
    >&#10007;</small>
</li>
```

#### todo.component.scss
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

#### todo.component.ts
```
getDiffOfDays = () => Math.ceil((this.todo.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
```

#### app-routing.module.ts
```
{ path: 'todos', component: TodosListComponent},
{ path: 'new', component: TodoFormComponent},
{ path: '', redirectTo: 'todos', pathMatch: 'full'},
{ path: '**', redirectTo: 'todos'}
```

#### header.component.html
```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" routerLink="todos">Todos</a>

    <ul class="navbar-nav ml-auto navbar-right">
    			<li class="nav-item">
            <a class="nav-link" /* to be filled */ routerLinkActive="active">Todos</a>
        </li>

        <li class="nav-item">
            <a class="nav-link" /* to be filled */ routerLinkActive="active">New todo</a>
        </li>
    </ul>
</nav>
```

#### todo-form.component.html
```
<h2 class="mt-3">New Todo</h2>

<form /* to be filled */ /* to be filled */>
    <div class="form-group">
        <label for="content">Content</label>
        <input
            type="text"
            id="content"
            class="form-control"
            /* to be filled */>
    </div>

    <div  class="form-group">
        <label for="date">Date</label>
        <input
            type="date"
            id="date"
            class="form-control"
            /* to be filled */>
    </div>

    <button 
        class="btn btn-primary"
        /* to be filled */
        type="submit">Save
    </button>
</form>
```