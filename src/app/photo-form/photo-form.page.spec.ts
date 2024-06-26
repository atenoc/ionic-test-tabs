import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoFormPage } from './photo-form.page';

describe('PhotoFormPage', () => {
  let component: PhotoFormPage;
  let fixture: ComponentFixture<PhotoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
