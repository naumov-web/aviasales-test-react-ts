export interface IHandbookItem {
  id: number;
  name: string;
};

export interface ITransfersCount {
  name: string;
  items: Array<IHandbookItem>;
};

export interface IFiltersHandbook {
  transfers_count: ITransfersCount;
};