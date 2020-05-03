import { MovieItem } from "../models/movie-item.model"
import { MovieAction, MovieActionTypes } from '../actions/movie.actions';

const initialState: Array<MovieItem> = [

	{
		id: '1',
		title: 'El guerrero nº13',
		rate: 6,
	},

	{
		id: '2',
		title: 'Cuando eramos soldados',
		rate: 5,
	},

	{
		id: '3',
		title: 'Mad Max',
		rate: 7,
	},

	{
		id: '4',
		title: 'Matrix',
		rate: 9,
	},

	{
		id: '5',
		title: 'Hellraiser',
		rate: 4,
	},

	{
		id: '6',
		title: 'Black Hawk derribado',
		rate: 6,
	},

	{
		id: '7',
		title: 'Misery',
		rate: 6,
	},

	{
		id: '8',
		title: 'Rambo',
		rate: 6,
	},

	{
		id: '9',
		title: 'IT',
		rate: 7,
	},

	{
		id: '10',
		title: 'Alien, el octavo pasajero',
		rate: 8,
	},

];

export function MovieReducer(state: Array<MovieItem> = initialState, action: MovieAction) 

		{
			switch(action.type) {
				case MovieActionTypes.ADD_ITEM:
					return [...state, action.payload];
				case MovieActionTypes.REMOVE_ITEM:
					return state.filter(item => item.id !== action.payload);				
				default:
					return state;
			}

		}