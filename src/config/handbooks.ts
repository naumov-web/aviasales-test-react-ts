import { IFiltersHandbook } from "./contracts/handbooks";

export const filters: IFiltersHandbook = {
  transfers_count : {
    name: 'Количество пересадок',
    items: [
      {
        id: 1,
        name: 'Все'
      },
      {
        id: 2,
        name: 'Без пересадок'
      },
      {
        id: 3,
        name: '1 пересадка'
      },
      {
        id: 4,
        name: '2 пересадки'
      },
      {
        id: 5,
        name: '3 пересадки'
      }
    ]
  }
}