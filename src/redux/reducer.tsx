import * as actionTypes from './actions'

const initialState = {

  search: '',
  data: null,
  heroes: [],
  hero_id: null, 
  hero_info: '',
  offset: 0,
}

const reducer = (state = initialState, action: { type: any; heroes: { offset: number; results: ConcatArray<never> }; id: any; hero_info: any }) => {
    switch (action.type) {
      
        case actionTypes.GET_HEROES: 
          return {
            ...state,
            offset: action.heroes.offset + 10,
            heroes: state.heroes.concat(action.heroes.results),
          }
        
        case actionTypes.INIT_HERO_ID:
          return {
            ...state,
            hero_id: action.id,
          }
        
        case actionTypes.GET_HERO_INFO:
          return {
            ...state,
            hero_info: action.hero_info,
          }
        case actionTypes.REFRESH_HERO_INFO:
          return {
            ...state,
            hero_info: '',
          }

        
      // case actionTypes.FILTER_BY_VALUE:
      //   return {
      //     ...state,
      //     search: action.text,
      //   };
       
      default:
        return state;
      }
}
export default reducer