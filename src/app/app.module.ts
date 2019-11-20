import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

// Routes

import { APPROUTING } from './app.routes';

// Angular material

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular maps

import { AgmCoreModule } from '@agm/core';

// Cookies

import { CookieService} from 'ngx-cookie-service' ;

@NgModule({

  entryComponents: [MapaEditarComponent],

  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MapaComponent,
    MapaEditarComponent,
  ],
  imports: [
    BrowserModule,
    APPROUTING,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDA-osiA0BQ___mpllSGSNvwQa8jN2ORfk'
    })

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
