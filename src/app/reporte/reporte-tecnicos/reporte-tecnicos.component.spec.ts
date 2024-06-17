import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTecnicosComponent } from './reporte-tecnicos.component';

describe('ReporteTecnicosComponent', () => {
  let component: ReporteTecnicosComponent;
  let fixture: ComponentFixture<ReporteTecnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteTecnicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
