import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';
import { HeaderComponent } from './header/header.component';

import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodoComponent,
    TodoDetailsComponent,
    TodoFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
