import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdithobbiesPage } from './edithobbies.page';

describe('EdithobbiesPage', () => {
  let component: EdithobbiesPage;
  let fixture: ComponentFixture<EdithobbiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithobbiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdithobbiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
