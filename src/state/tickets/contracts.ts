export interface ITicketsState {
  search_id: string | null;
  tickets: Array<Object>;
  is_stopped: boolean;
};

export interface ISearchIdRequest {
  type: string;
}

export interface ISearchIdSuccess {
  type: string;
}

export type TicketActionTypes = ISearchIdRequest | ISearchIdSuccess;