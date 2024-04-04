import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  describe('Checkbox', () => {
    it('native should be disabled', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const checkbox = compiled.querySelector('#native') as HTMLInputElement;
      expect(checkbox!.disabled).toBeTrue();
    });

    it('primeng should be disabled', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      const checkbox = compiled.querySelector('#primeng') as HTMLInputElement;
      expect(checkbox!.disabled).toBeTrue(); // Expected false to be true.
    });
  });
});
