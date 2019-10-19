import { Dispatch } from "redux";
import { getSearchIdRequest, getTicketsRequest } from '../../libs/apis/tickets';
import { createSearchIdSuccessAction, createTicketsSuccessAction } from './actionCreators';

export const apiLoadTickets = async (dispatch : Dispatch, search_id: string | null) => {
  try {
    if (!search_id) {
      const search_response = await getSearchIdRequest();
      search_id = search_response.data.searchId;
    }

    const tickets_response = await getTicketsRequest(search_id || '');
    
    dispatch(createTicketsSuccessAction(tickets_response.data.tickets));
    dispatch(createSearchIdSuccessAction(search_id));
  } catch (e) {

  }
}