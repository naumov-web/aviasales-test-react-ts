import { ITicketSegment } from './ITicketSegment';

export interface ITicket {
  price: number;
  carrier: string;
  logo_url: string;
  segments: Array<ITicketSegment>;
};