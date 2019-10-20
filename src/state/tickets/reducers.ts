import { ITicketsState } from './contracts';
import { GET_SEARCH_ID_SUCCESS, GET_TICKETS_SUCCESS, SET_SORT, SET_FILTERS } from './actionTypes';

const initialState: ITicketsState = {
  tickets: [],
  search_id: null,
  sort: 'fast',
  filters: [],
  is_stopped: false
}

export default (state = initialState, action: any) : ITicketsState => {
  switch (action.type) {
    case GET_SEARCH_ID_SUCCESS:
      return {
        ...state,
        search_id : action.search_id
      };
    case GET_TICKETS_SUCCESS:
      return {
        ...state,
        tickets : action.tickets
      };
    case SET_SORT:
      return {
        ...state,
        sort : action.sort
      };
    case SET_FILTERS:
      return {
        ...state,
        filters : action.filters
      };
    default:
      return state
  }
};