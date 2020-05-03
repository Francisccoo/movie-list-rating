import { MovieItem  } from './../models/movie-item.model';
import { Action  } from '@ngrx/store';

export enum MovieActionTypes {

	ADD_ITEM = '[MOVIE] Add Item',
	REMOVE_ITEM = '[MOVIE] Remove Item',

}

export class AddItemAction implements Action {

	readonly type = MovieActionTypes.ADD_ITEM;

	constructor(public payload: MovieItem) {}

}

export class RemoveItemAction implements Action {

	readonly type = MovieActionTypes.REMOVE_ITEM;

	constructor(public payload: string) {}

}

export type MovieAction = AddItemAction | RemoveItemAction;