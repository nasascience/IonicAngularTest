import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditskillsPage } from './editskills.page';

describe('EditskillsPage', () => {
  let component: EditskillsPage;
  let fixture: ComponentFixture<EditskillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditskillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditskillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
