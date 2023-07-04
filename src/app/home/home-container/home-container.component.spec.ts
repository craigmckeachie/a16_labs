import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContainerComponent } from './home-container.component';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.debugElement.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    expect(h1.textContent).toEqual('');
  });

  it('changing title, updates h1', () => {
    const title = 'Home';
    component.title = title;
    expect(h1.textContent).not.toContain(title);
    fixture.detectChanges();
    expect(h1.textContent).toContain(title);
  });
});
