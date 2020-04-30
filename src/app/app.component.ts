import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';

import { MovieItem } from './store/models/movie-item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
movieItems: Observable<Array<MovieItem>>

  constructor(private store: Store<AppState>) { }  


  ngOnInit(): void {
 
  	this.movieItems = this.store.select(store => store.movie)

  }

  //title = 'ngrx-movie-list';

  
}

