import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StarRatingComponent } from 'ng-starrating';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { SortPipe } from './sort.pipe';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { movieDetailsReducer } from './app.reducers';
import { MoviesEffects } from './app.effects';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, StoreModule.forRoot(movieDetailsReducer),
  EffectsModule.forRoot([MoviesEffects])
   ],
  declarations: [ AppComponent, HelloComponent, StarRatingComponent, SortPipe ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
