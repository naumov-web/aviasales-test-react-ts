import { ITicketsState } from './contracts';
import { GET_SEARCH_ID_SUCCESS, GET_TICKETS_SUCCESS } from './actionTypes';

const initialState: ITicketsState = {
  tickets: [],
  search_id: null,
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
    default:
      return state
  }
};