import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DowntimesPage } from './downtimes.page';

describe('DowntimesPage', () => {
  let component: DowntimesPage;
  let fixture: ComponentFixture<DowntimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowntimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DowntimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
