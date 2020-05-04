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

//Reference of the JSON   
movieItems: Observable<Array<MovieItem>>

//Reference when we create/add a new movie
newMovieItem: MovieItem = { id: null, title: '', rate: null }

  constructor(private store: Store<AppState>) { }  

//When initialize the app, it shows a list of movies
  ngOnInit(): void {
 
  	this.movieItems = this.store.select(store => store.movie);

  	/*setTimeout(() => this.addItem(), 5000);*/

  	}

//Adding a new movie to the list
  addItem() {
  	
  	this.newMovieItem.id = uuid();

  	this.store.dispatch(new AddItemAction(this.newMovieItem)); //We're calling the add action from movie.actions.ts
  	
	 this.newMovieItem = { id: null, title: '', rate: null }
		
  }

//Removes a movie from the list
 removeItem(id: string) {
  	this.store.dispatch(new RemoveItemAction(id)); //We're calling the remove action from movie.actions.ts

  }

  
}

