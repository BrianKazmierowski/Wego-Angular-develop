import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorneAlertFinalisationComponent } from './borne-alert-finalisation.component';

describe('BorneAlertFinalisationComponent', () => {
  let component: BorneAlertFinalisationComponent;
  let fixture: ComponentFixture<BorneAlertFinalisationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorneAlertFinalisationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorneAlertFinalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
