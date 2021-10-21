
export const initialState = {
    data: '',
    loading: false,
    error: ''
  }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {...state, loading: true}
    case 'FETCH_SUCCESS':
      return {...state, loading: false, data: action.payload }
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload }

    default:
      return state;
  }
}

// const action = {
//     type: 'START',
//     payload: 'data'
// }
