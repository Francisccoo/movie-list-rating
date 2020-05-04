import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//We added this module to get access to elements of the ngrx/store module
import { StoreModule } from '@ngrx/store';

import { MovieReducer } from './store/reducers/movie.reducer';

//We added this module to sort the elements of the list
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
