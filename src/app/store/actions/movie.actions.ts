import { MovieItem  } from './../models/movie-item.model';
import { Action  } from '@ngrx/store';

export enum MovieActionTypes {

	ADD_ITEM = '[MOVIE] Add Item',

	/*
	ADD_ITEM_SUCCES = '[MOVIE] Add Item Success',
	ADD_ITEM_FAILURE = '[MOVIE] Add Item Failure',
	*/

}

export class AddItemAction implements Action {

	readonly type = MovieActionTypes.ADD_ITEM;

	constructor(public payload: MovieItem) {}

}

export type MovieAction = AddItemAction;