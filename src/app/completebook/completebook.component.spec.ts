import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletebookComponent } from './completebook.component';

describe('CompletebookComponent', () => {
  let component: CompletebookComponent;
  let fixture: ComponentFixture<CompletebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
