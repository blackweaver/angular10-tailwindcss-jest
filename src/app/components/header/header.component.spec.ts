import { HeaderComponent } from './header.component';
import { async, TestBed } from '@angular/core/testing';

describe('HeaderComponent', () => {
    let fixture: any;
    let header: HeaderComponent;
    let component: any;
    beforeEach(async(() => {
        header = new HeaderComponent();
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.debugElement.compoentInstance;
    }));

    describe('Setup component', () => {
        it('Should be initialized', () => {
            expect(header.currentYear).toEqual(new Date().getFullYear());
            expect(fixture).toBeTruthy();
            fixture.detectChanges();
            const compiled = fixture.debugElement.nativeElement;
            const h1 = compiled.querySelector('h1');
            expect(h1.textContent).toContain('TRUE LOAD TIME');
        });
    });

});
