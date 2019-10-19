import { IState } from '../contracts';

export const getSearchId = (state : IState) : string | null => state.tickets.search_id;