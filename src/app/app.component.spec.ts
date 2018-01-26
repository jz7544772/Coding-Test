import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';

/* Page Modules */
import { IndexModule } from './components/index/index.module'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ IndexModule, HttpModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
