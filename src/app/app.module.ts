import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartaPokemonService } from "./services/carta-pokemon.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { Interceptor } from "./shared/interceptors/interceptor";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SettingsService } from "./services/settings.service";

@NgModule({
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
  bootstrap: [AppComponent]
})
export class AppModule { }
