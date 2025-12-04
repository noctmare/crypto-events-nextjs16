export type EventItem = {
title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events: EventItem[] = [
    { image: '/images/event1.png',
    title: 'DavosWeb3',
    slug: 'davosweb3-eu-26',
    location: 'Davos, Switzerland',
    date: '2026-01-06',
    time: '10:00 AM - 07:00 PM'
  },
    { image: '/images/event2.png',
    title: 'NFT Paris',
    slug: 'nftparis-fr-26',
    location: 'Paris, France',
    date: '2026-01-15',
    time: '08:00 AM - 05:00 PM'
  },
    { image: '/images/event3.png',
    title: 'Consensus Hong Kong',
    slug: 'consensushk-hk-26',
    location: 'Hong Kong',
    date: '2026-02-01',
    time: '09:30 AM - 07:00 PM'
  },
    { image: '/images/event4.png',
    title: 'Bitcoin 2026',
    slug: 'btc26-u2-26',
    location: 'Las Vegas, United States',
    date: '2026-02-09',
    time: '10:00 AM - 07:00 PM'
  },
    { image: '/images/event5.png',
    title: 'BTC Prague',
    slug: 'btcpraue-cz-26',
    location: 'Prague, Czech',
    date: '2026-03-03',
    time: '09:00 AM - 07:00 PM'
  },
    { image: '/images/event6.png',
    title: 'WebX',
    slug: 'webx-jp-26',
    location: 'Tokyo, Japan',
    date: '2026-03-20',
    time: '10:30 AM - 08:00 PM'
  }
];