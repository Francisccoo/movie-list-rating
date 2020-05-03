import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './store/models/app-state.model';
import { Observable } from 'rxjs';

import { v4 as uuid } from 'uuid';

import { MovieItem } from './store/models/movie-item.model';
import { AddItemAction } from './store/actions/movie.actions';
import { RemoveItemAction } from './store/actions/movie.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
movieItems: Observable<Array<MovieItem>>


newMovieItem: MovieItem = { id: null, title: '', rate: null }

  constructor(private store: Store<AppState>) { }  


  ngOnInit(): void {
 
  	this.movieItems = this.store.select(store => store.movie);

  	//setTimeout(() => this.addItem(), 5000);

  	}

  addItem() {

  	
  	this.newMovieItem.id = uuid();

  	this.store.dispatch(new AddItemAction(this.newMovieItem));
  	
	this.newMovieItem = { id: null, title: '', rate: null }
		
  }


 removeItem(id: string) {
  	this.store.dispatch(new RemoveItemAction(id));

  }

  
}

