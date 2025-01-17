import { AppComponent } from './app.component';
import {TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  it('should create the app', () => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        imports: [RouterTestingModule]
      }
    });
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
