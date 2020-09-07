import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditworkExperiencePage } from './editwork-experience.page';

describe('EditworkExperiencePage', () => {
  let component: EditworkExperiencePage;
  let fixture: ComponentFixture<EditworkExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditworkExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditworkExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
