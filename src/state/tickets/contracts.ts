import { ITicket } from "../../models/contracts/ITicket";

export interface ITicketsState {
  search_id: string | null;
  tickets: Array<ITicket>;
  sort: string;
  filters: Array<Number>;
  is_stopped: boolean;
};

export interface ISearchIdSuccess {
  type: string;
  search_id: string | null;
}

export interface ITicketsSuccess {
  type: string;
  tickets: Array<ITicket>;
}