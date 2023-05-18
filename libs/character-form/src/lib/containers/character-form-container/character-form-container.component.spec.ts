import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFormContainerComponent } from './character-form-container.component';

describe('CharacterFormContainerComponent', () => {
  let component: CharacterFormContainerComponent;
  let fixture: ComponentFixture<CharacterFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterFormContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
