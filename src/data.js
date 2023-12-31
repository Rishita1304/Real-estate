// import house images
import House1 from './assets/img/houses/house1lg.png';
import House2 from './assets/img/houses/house2lg.png';
import House3 from './assets/img/houses/house3lg.png';
import House4 from './assets/img/houses/house4lg.png';
import House5 from './assets/img/houses/house5lg.png';
import House6 from './assets/img/houses/house6lg.png';
import House7 from './assets/img/houses/house7lg.png';
import House8 from './assets/img/houses/house8lg.png';
import House9 from './assets/img/houses/house9lg.png';
import House10 from './assets/img/houses/house10lg.png';
import House11 from './assets/img/houses/house11lg.png';
import House12 from './assets/img/houses/house12lg.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1lg.png';
import Apartment2 from './assets/img/apartments/a2lg.png';
import Apartment3 from './assets/img/apartments/a3lg.png';
import Apartment4 from './assets/img/apartments/a4lg.png';
import Apartment5 from './assets/img/apartments/a5lg.png';
import Apartment6 from './assets/img/apartments/a6lg.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';


export const housesData = [
    {
      id: 1,
      type: 'House',
      listingDate: '2023-08-01',
      name: 'Luxurious Villa with a View',
      description:
        'Experience the epitome of luxury living in this splendid 6-bedroom villa. Nestled in the heart of Mumbai, this property offers breathtaking views of the city skyline. The meticulously designed interiors feature spacious living areas, high-end finishes, and modern amenities. With 3 bathrooms, a sprawling 4200 sq ft floor plan, and a construction year of 2016, this villa provides a perfect blend of comfort and style. Priced at ₹1,10,000, it is truly a dream home. Contact our agent, Patricia Tullert, at 0123 456 78910 for more details.',
      image: House1,
      imageLg: House1Lg,
      country: 'India',
      address: '7240C Argyle St. Lawndale, Mumbai, MH 400001',
      bedrooms: '6',
      bathrooms: '3',
      surface: '4200 sq ft',
      year: '2016',
      price: '1,10,000',
      agent: {
        image: Agent1,
        name: 'Patricia Tullert',
        phone: '0123 456 78910',
      },
    },
  
  {
    id: 2,
    type: 'House',
    listingDate: '2023-08-05',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 38,
    type: 'Villa',
    listingDate: '2023-08-20',
    name: 'Secluded Hillside Retreat',
    description:
      'Escape to tranquility with this exclusive 4-bedroom villa tucked away in the lush hills of Goa. Embrace the serenity of nature in this luxurious retreat with 4 bathrooms, a sprawling 5000 sq ft space, and panoramic views of the surrounding landscape. Built in 2018, this villa is a masterpiece of elegance and comfort. Priced at ₹2,50,000, its a rare gem for those seeking a private haven. Contact our agent, Sofia Gomes, at 0123 456 78910 for more information.',
    image: House3,
    imageLg: House3Lg,
    country: 'India',
    address: '12 Hillside Drive, Goa, GA 403001',
    bedrooms: '4',
    bathrooms: '4',
    surface: '5000 sq ft',
    year: '2018',
    price: '2,50,000',
    agent: {
      image: Agent3,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    listingDate: '2023-08-01',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'Villa',
    listingDate: '2023-08-05',
    name: 'Majestic Heights Villa',
    description:
      'Escape to tranquility with this exclusive 4-bedroom villa tucked away in the lush hills of Goa. Embrace the serenity of nature in this luxurious retreat with 4 bathrooms, a sprawling 5000 sq ft space, and panoramic views of the surrounding landscape. Built in 2018, this villa is a masterpiece of elegance and comfort. Priced at ₹2,50,000, its a rare gem for those seeking a private haven. Contact our agent, Sofia Gomes, at 0123 456 78910 for more information.',
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'Villa',
    listingDate: '2023-08-10' ,
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartment',
    listingDate: '2023-08-01',
    name: 'Apartment 1',
    description:
      'Escape to tranquility with this exclusive 4-bedroom villa tucked away in the lush hills of Goa. Embrace the serenity of nature in this luxurious retreat with 4 bathrooms, a sprawling 5000 sq ft space, and panoramic views of the surrounding landscape. Built in 2018, this villa is a masterpiece of elegance and comfort. Priced at ₹2,50,000, its a rare gem for those seeking a private haven. Contact our agent, Sofia Gomes, at 0123 456 78910 for more information.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '200000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartment',
    listingDate: '2023-08-05',
    name: 'Blissful Meadows Estate',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '130000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 19,
    type: 'Apartment',
    listingDate: '2023-08-15',
    name: 'City Center Apartment Oasis',
    description:
      'Discover urban living at its finest with this stylish 2-bedroom apartment. Located in the heart of Delhi, this property offers convenience and modern amenities. The spacious 1200 sq ft layout, 1 bathroom, and a view of the city make it an ideal residence. Built in 2012, this apartment is priced at ₹2,00,000. Reach out to our agent, Jawhar Shamil Naser, at 0123 456 78910 for further details.',
    image: Apartment1,
    imageLg: Apartment1,
    country: 'India',
    address: '15 Connaught Place, Delhi, DL 110001',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '2,00,000',
    agent: {
      image: Agent1,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    listingDate: '2023-08-01',
    name: 'Harmony Towers',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    listingDate: '2023-08-05',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    listingDate: '2023-08-01' ,
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    listingDate: '2023-08-01',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    listingDate: '2023-08-05',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    listingDate: '2023-08-01' ,
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '181000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartment',
    listingDate: '2023-08-01',
    name: 'Apartment 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '210000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartment',
    listingDate: '2023-08-01',
    name: 'Apartment 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '160000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartment',
    listingDate: '2023-08-01' ,
    name: 'Apartment 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '170000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
