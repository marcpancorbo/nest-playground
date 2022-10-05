import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nest-angular';
  cats$: Observable<any>;
  constructor(private todosService: TodosService) {}
  ngOnInit(): void {
    this.cats$ = this.todosService.getTodos();
  }
}
