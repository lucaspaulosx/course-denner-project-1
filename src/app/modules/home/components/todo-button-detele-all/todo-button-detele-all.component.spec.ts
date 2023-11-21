import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeteleAllComponent } from './todo-button-detele-all.component';

describe('TodoButtonDeteleAllComponent', () => {
  let component: TodoButtonDeteleAllComponent;
  let fixture: ComponentFixture<TodoButtonDeteleAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoButtonDeteleAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoButtonDeteleAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
