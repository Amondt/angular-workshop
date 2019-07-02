import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TodosListComponent } from './todos/todos-list/todos-list.component'
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';

const routes: Routes = [
    { path: 'todos', component: TodosListComponent},
    { path: 'todos/:id', component: TodoDetailsComponent},
    { path: 'new', component: TodoFormComponent},
    { path: '', redirectTo: 'todos', pathMatch: 'full'},
    { path: '**', redirectTo: 'todos'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
