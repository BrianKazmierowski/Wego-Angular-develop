import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorneAlertAutorisationComponent } from './borne-alert-autorisation.component';

describe('BorneAlertAutorisationComponent', () => {
  let component: BorneAlertAutorisationComponent;
  let fixture: ComponentFixture<BorneAlertAutorisationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorneAlertAutorisationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorneAlertAutorisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
