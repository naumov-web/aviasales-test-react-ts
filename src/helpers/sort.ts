import { ITicket } from "../models/contracts/ITicket";

export const sortByField = (items: Array<ITicket>, field : string, direction : string) => {

  const result = items.map(item => item);

  return result.sort((item1 : any, item2 : any) => {
    const multiplex = direction === 'asc' ? 1 : -1;

    return multiplex * (item1[field] > item2[field] ? 1 : - 1);
  });
}; 