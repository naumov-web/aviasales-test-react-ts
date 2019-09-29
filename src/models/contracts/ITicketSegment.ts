export interface ITicketSegment {
  origin: string;
  destination: string;
  date: string;
  stops: Array<string>;
  duration: number;
};