import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MovieReducer } from './store/reducers/movie.reducer';

import { NgpSortModule } from 'ngp-sort-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgpSortModule,
    FormsModule,    
    StoreModule.forRoot({
    		movie: MovieReducer

    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
