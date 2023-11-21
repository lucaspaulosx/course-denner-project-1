import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeteleAllComponent } from './components/todo-button-detele-all/todo-button-detele-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, TodoButtonDeteleAllComponent, TodoInputAddItensComponent, TodoListComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
