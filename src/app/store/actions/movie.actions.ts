import { MovieItem  } from './../models/movie-item.model';
import { Action  } from '@ngrx/store';

export enum MovieActionTypes {

	ADD_ITEM = '[MOVIE] Add Item',
	REMOVE_ITEM = '[MOVIE] Remove Item'

	/*
	ADD_ITEM_SUCCES = '[MOVIE] Add Item Success',
	ADD_ITEM_FAILURE = '[MOVIE] Add Item Failure',
	*/

}

export class AddItemAction implements Action {

	readonly type = MovieActionTypes.ADD_ITEM;

	constructor(public payload: MovieItem) {}

}

export class RemoveItemAction implements Action {

	readonly type = MovieActionTypes.REMOVE_ITEM;

	constructor(public payload: string) {}

}

//export class SortItemAction implements Action

export type MovieAction = AddItemAction | RemoveItemAction;