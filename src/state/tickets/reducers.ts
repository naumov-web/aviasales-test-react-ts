import { ITicketsState, TicketActionTypes } from './contracts';

const initialState: ITicketsState = {
  tickets: [],
  search_id: null,
  is_stopped: false
}

export default (state = initialState, action: TicketActionTypes) : ITicketsState => {
  switch (action.type) {
    default:
      return state
  }
};