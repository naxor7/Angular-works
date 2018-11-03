import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTypeBarComponent } from './chat-type-bar.component';

describe('ChatTypeBarComponent', () => {
  let component: ChatTypeBarComponent;
  let fixture: ComponentFixture<ChatTypeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTypeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTypeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
