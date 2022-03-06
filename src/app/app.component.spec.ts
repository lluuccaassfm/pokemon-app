import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CartaPokemonService } from "./services/carta-pokemon.service";
import { SettingsService } from "./services/settings.service";
import { Interceptor } from "./shared/interceptors/interceptor";
import { LOCALE_ID } from "@angular/core";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule
      ],
      providers: [
        CartaPokemonService,
        SettingsService,
        { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
        { provide: LOCALE_ID, deps: [SettingsService], useFactory: (settingsService) => settingsService.getLocale() }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pokemon-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pokemon-app');
  });
});
