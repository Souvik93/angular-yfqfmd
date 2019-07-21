import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StarRatingComponent } from 'ng-starrating';
import {HttpClientModule} from '@angular/common/http';
import { AppService } from './app.service';
import { SortPipe } from './sort.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, StarRatingComponent, SortPipe ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
