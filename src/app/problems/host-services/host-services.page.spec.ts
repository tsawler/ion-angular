import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HostServicesPage } from './host-services.page';

describe('HostServicesPage', () => {
  let component: HostServicesPage;
  let fixture: ComponentFixture<HostServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HostServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
