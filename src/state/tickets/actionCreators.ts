import { GET_SEARCH_ID_SUCCESS, GET_TICKETS_SUCCESS } from './actionTypes';
import { ITicket } from '../../models/contracts/ITicket';

export const createSearchIdSuccessAction = (search_id : string | null) => ({
  type: GET_SEARCH_ID_SUCCESS,
  search_id
});

export const createTicketsSuccessAction = (tickets : Array<ITicket>) => ({
  type: GET_TICKETS_SUCCESS,
  tickets
});