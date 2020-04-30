import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
//import { StoreReducer } from './store/reducers/movie.reducer';
import { MovieReducer } from './store/reducers/movie.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
    		movie: MovieReducer

    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
