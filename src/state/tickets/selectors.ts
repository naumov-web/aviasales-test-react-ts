import { IState } from '../contracts';
import { ITicket } from '../../models/contracts/ITicket';
import { sortByField } from '../../helpers/sort';

export const getSearchId = (state: IState) : string | null => state.tickets.search_id;
export const getTickets = (state: IState) : Array<ITicket> => getTransformedTickets(state);
export const getSort = (state: IState) : string => state.tickets.sort;
export const getFilters = (state: IState) : Array<Number> => state.tickets.filters;

export const getTransformedTickets = (state: IState) : Array<ITicket> => {
  const filtered = filterByTransfersCount(state);

  if (state.tickets.sort === 'cheap') {
    return sortByField(
      filtered,
      'price',
      'asc'
    );
  }
  if (state.tickets.sort === 'fast') {

    return filtered.sort(
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

const filterByTransfersCount = (state : IState) : Array<ITicket> => 
  state.tickets.tickets.filter(
    (item : ITicket) => {

      const filters = state.tickets.filters;

      if (filters.indexOf(1) !== -1 || filters.length === 0) {
        return true;
      }

      let accepted = true;

      item.segments.forEach((segment) => {
        let stops_length = segment.stops.length;
        
        accepted = accepted && (filters.indexOf(stops_length + 2) !== -1);
      });

      return accepted;
    }
  );