import { IState } from '../contracts';
import { ITicket } from '../../models/contracts/ITicket';
import { sortByField } from '../../helpers/sort';

export const getSearchId = (state: IState) : string | null => state.tickets.search_id;
export const getTickets = (state: IState) : Array<ITicket> => getTransformedTickets(state);
export const getSort = (state: IState) : string => state.tickets.sort;
export const getFilters = (state: IState) : Array<Number> => state.tickets.filters;

export const getTransformedTickets = (state: IState) : Array<ITicket> => {
  if (state.tickets.sort === 'cheap') {
    return sortByField(
      state.tickets.tickets,
      'price',
      'asc'
    );
  }
  if (state.tickets.sort === 'fast') {

    const result = state.tickets.tickets.map(item => item);

    return result.sort(
      (item1 : ITicket, item2 : ITicket) => {
        return getAvgDuration(item1) > getAvgDuration(item2) ? 1 : -1;
      }
    );
  }
  return [];
};

const getAvgDuration = (ticket : ITicket) : Number => {
  var sum = 0;
  for(let i = 0; i < ticket.segments.length; i++) {
    sum += ticket.segments[i].duration;
  }

  return sum / ticket.segments.length;
};