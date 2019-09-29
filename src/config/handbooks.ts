import { IFiltersHandbook } from "./contracts/IFilterHandbook";
import { ISortingHandbook } from "./contracts/ISortingHandbook";

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

export const sorting : ISortingHandbook = {
  selectors: [
    {
      value: 'cheap',
      name: 'Самый дешевый'
    },
    {
      value: 'fast',
      name: 'Самый быстрый'
    }
  ]
};