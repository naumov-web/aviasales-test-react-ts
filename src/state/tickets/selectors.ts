import { IState } from '../contracts';
import { ITicket } from '../../models/contracts/ITicket';

export const getSearchId = (state : IState) : string | null => state.tickets.search_id;
export const getTickets = (state: IState) : Array<ITicket> => state.tickets.tickets;