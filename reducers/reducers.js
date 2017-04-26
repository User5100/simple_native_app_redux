import { GET_GOALS, ADD_GOAL,
         SET_MODAL_VISIBILITY,
         SET_VISION_MODAL_VISIBILITY,
         GET_VISION,
         ADD_VISION } from '../actions';

const initialState = {
	goals: [ { name: 'A' },
	         { name: 'B' },
	         { name: 'C' },
	         { name: 'D' }
	       ],
	vision: [ { name: 'A' },
	          { name: 'B' },
	          { name: 'C' },
	          { name: 'D' }
	        ],
	modalVisibility: false,
	visionModalVisibility: false
}

export const reducer = (state = initialState, action) => {
	switch(action.type) {

    case ADD_GOAL: 
      return Object.assign({}, state, { goals: [...state.goals, action.payload] });

    case ADD_VISION:
    	return Object.assign({}, state, { vision: [...state.vision, action.payload] });

		case GET_GOALS: 
		  return Object.assign({}, state, action.payload);

		case GET_VISION:
		  return Object.assign({}, state, action.payload);

		case SET_MODAL_VISIBILITY:
		  return Object.assign({}, state, { modalVisibility: action.payload });

		case SET_VISION_MODAL_VISIBILITY:
		  return Object.assign({}, state, { visionModalVisibility: action.payload });

		default: return state;
	}
}