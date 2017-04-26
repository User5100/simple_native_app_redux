export const getGoals = () => (
  dispatch => (
    fetch('http://localhost:3000/goals', {
    	headers: {
    		'Accept': 'application/json'
    	}
    })  
    .then(res => res.json())
    .then(goals => dispatch({ type: 'GET_GOALS', payload: { goals } }))
    .catch(err => console.log(err))
  )
)

export const getVision = () => (
  dispatch => (
    fetch('http://localhost:3000/vision', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(vision => dispatch({ type: 'GET_VISION', payload: { vision } }))
    .catch(err => console.log(err))
  )
)

export const addGoal = (goal) => (
  dispatch => (
    fetch('http://localhost:3000/goals', {
      method: 'POST',
    	headers: {
    		'Content-Type': 'application/json',
    		'Accept': 'application/json'
    	},
    	body: JSON.stringify(goal)
    })
    .then(res => res.json())
    .then(goal => dispatch({
    	type: 'ADD_GOAL',
    	payload: goal
    }))
  )
)

export const addVision = (vision) => (
  dispatch => (
    fetch('http://localhost:3000/vision', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(vision)
    })
    .then(res => res.json())
    .then(goal => dispatch({
      type: 'ADD_VISION',
      payload: vision
    }))
  )
)

export const setModalVisibility = (isVisible) => (
  { type: 'SET_MODAL_VISIBILITY',
    payload: isVisible
  }
)

export const setVisionModalVisibility = (isVisible) => {
  console.log('EEE', isVisible)
  return { type: 'SET_VISION_MODAL_VISIBILITY',
    payload: isVisible
  }
}