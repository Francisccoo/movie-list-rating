import { MovieItem } from "../models/movie-item.model"
import { MovieAction, MovieActionTypes } from '../actions/movie.actions';

const initialState: Array<MovieItem> = [

	{
		id: '1',
		title: 'El guerrero nº13',
	},

	{
		id: '2',
		title: 'Cuando eramos soldados',
	},

	{
		id: '3',
		title: 'Mad Max',
	},

	{
		id: '4',
		title: 'Matrix',
	},

	{
		id: '5',
		title: 'Hellraiser',
	},

	{
		id: '6',
		title: 'Black Hawk derribado',
	},

	{
		id: '7',
		title: 'Hellraiser',
	},

	{
		id: '8',
		title: 'Rambo',
	},

	{
		id: '9',
		title: 'IT',
	},

	{
		id: '10',
		title: 'Alien, el octavo pasajero',
	},

];

export function MovieReducer(state: Array<MovieItem> = initialState, action: MovieAction) 

		{
			switch(action.type) {

				case MovieActionTypes.ADD_ITEM:
					return [...state, action.payload];
				default:
					return state;
			}

		}