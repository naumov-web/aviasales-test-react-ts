import { ITicket } from '../models/contracts/ITicket';

export const tickets : Array<ITicket> = [
  {
    price: 13400,
    carrier: 'S7',
    logo_url: 'http://pics.avs.io/99/36/S7.png',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2019-10-01 18:30:00',
        stops: ['HKG', 'JNB'],
        duration: 30000
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2019-10-10 18:30:00',
        stops: ['HKG'],
        duration: 36000
      }
    ]
  },
  {
    price: 17600,
    carrier: 'AF',
    logo_url: 'http://pics.avs.io/99/36/AF.png',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2019-10-01 17:30:00',
        stops: ['HKG', 'JNB'],
        duration: 29000
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2019-10-10 20:30:00',
        stops: ['HKG'],
        duration: 37000
      }
    ]
  }
];