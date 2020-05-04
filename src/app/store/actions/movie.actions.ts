import { MovieItem  } from './../models/movie-item.model';
import { Action  } from '@ngrx/store';


//Actions we can take, such as add or remove an item -> movie
export enum MovieActionTypes {

	ADD_ITEM = '[MOVIE] Add Item',
	REMOVE_ITEM = '[MOVIE] Remove Item',

}

//Action that adds an item
export class AddItemAction implements Action {

	readonly type = MovieActionTypes.ADD_ITEM;

	constructor(public payload: MovieItem) {}

}

//Action that removes an item
export class RemoveItemAction implements Action {

	readonly type = MovieActionTypes.REMOVE_ITEM;

	constructor(public payload: string) {}

}

//We export both actions to import later in the app.component.ts file
export type MovieAction = AddItemAction | RemoveItemAction;