import Category from '../models/category';
import SubCategory from '../models/subCategory';
import Business from '../models/business';
import InfoBubbles from '../models/homeInfoBubbles';

export const HOMEINFOBUBBLES = [
  new InfoBubbles
    ('01',
      'About\nthe island',
      'About the island',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
      'Generic information about the island',
    ),
  new InfoBubbles
    ('02',
      'Airport\ninfo.',
      'Airport information',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
      'All about getting through the Cancun airport'
    ),
  new InfoBubbles
    ('03',
      'Airport\ntransp.',
      'Airport transportation',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
      'Transportation from the airport to the ferry'
    ),
  new InfoBubbles
    ('04',
      'Ferry\nservice',
      'Ferry service',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
      'Ferry service to the island'
  ),
    new InfoBubbles
    ('05',
      'Hotel\ntransp.',
      'Hotel transportation',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
      'Transportation from the ferry to your hotel'
    )

];

const CATEGORIESINFODINING = [
  new InfoBubbles (
    '01', 'Dining 1', 'Dining 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
      'Dining 1 text'
  ),
  new InfoBubbles(
    '02', 'Dining 2', 'Dining 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Dining 2 text'
  ),
  new InfoBubbles (
    '03', 'Dining 3', 'Dining 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Dining 2 text'
  ),
  new InfoBubbles(
    '04', 'Dining 4', 'Dining 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Dining 2 text'
  ),
];

const CATEGORIESINFODRINKS = [
  new InfoBubbles (
    '01', 'Drinks 1', 'Drinks 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Drinks 2 text'
  ),
  new InfoBubbles (
    '02', 'Drinks 2', 'Drinks 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Drinks 2 text'
  ),
  new InfoBubbles (
    '03', 'Drinks 3', 'Drinks 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Drinks 2 text'
  ),
  new InfoBubbles (
    '04', 'Drinks 4', 'Drinks 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Drinks 2 text'
  )
];

const CATEGORIESINFOBEACH = [
  new InfoBubbles (
    '01', 'Beach 1', 'Beach 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Beach 1 text'
  ),
  new InfoBubbles (
    '02', 'Beach 2', 'Beach 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Beach 2 text'
  ),
  new InfoBubbles( 
    '03', 'Beach 3', 'Beach 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Beach 3 text'
  ),
  new InfoBubbles (
    '04', 'Beach 4', 'Beach 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Beach 4 text'
  )
];

const CATEGORIESINFOATTRACT = [
  new InfoBubbles (
    '01', 'Attract. 1', 'Attract. 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Attract. 1 text'
  ),
  new InfoBubbles (
    '02', 'Attract. 2', 'Attract. 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Attract. 2 text'
  ),
  new InfoBubbles (
    '03', 'Attract. 3', 'Attract. 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Attract. 3 text'
  ),
  new InfoBubbles (
    '04', 'Attract. 4', 'Attract. 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Attract. 4 text'
  )
];

const CATEGORIESINFOTOUR = [
  new InfoBubbles (
    '01', 'Tour 1', 'Tour 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Tour 1 text'
  ),
  new InfoBubbles (
    '02', 'Tour 2', 'Tour 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Tour 2 text'
  ),
  new InfoBubbles(
    '03', 'Tour 3', 'Tour 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Tour 3 text'
  ),
  new InfoBubbles(
    '04', 'Tour 4', 'Tour 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Tour 4 text'
  )
];

const CATEGORIESINFOSELFTOUR = [
  new InfoBubbles(
    '01', 'Self tour 1', 'Self tour 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Self tour 1 text'
),
  new InfoBubbles(
    '02', 'Self tour 2', 'Self tour 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Self tour 2 text'
),
  new InfoBubbles(
    '03', 'Self tour 3', 'Self tour 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Self tour 3 text'
),
  new InfoBubbles(
    '04', 'Self tour 4', 'Self tour 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Self tour 4 text'
)
];

const CATEGORIESINFOSHOP = [
  new InfoBubbles(
    '01', 'Shopping 1', 'Shopping 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Shopping 1 text'
),
  new InfoBubbles(
    '02', 'Shopping 2', 'Shopping 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Shopping 2 text'
),
  new InfoBubbles(
    '03', 'Shopping 3', 'Shopping 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Shopping 3 text'
),
  new InfoBubbles(
    '04', 'Shopping 4', 'Shopping 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Shopping 4 text'
)
];

const CATEGORIESINFOMED = [
  new InfoBubbles (
    '01', 'Medical 1', 'Medical 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Medical 1 text'
),
  new InfoBubbles (
    '02', 'Medical 2', 'Medical 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Medical 2 text'
),
  new InfoBubbles (
    '03', 'Medical 3', 'Medical 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Medical 3 text'
),
  new InfoBubbles (
    '04', 'Medical 4', 'Medical 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Medical 4 text'
)
];

const CATEGORIESINFOTRANSP = [
  new InfoBubbles(
    '01', 'Transportation 1', 'Transportation 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Transportation 1 text'
),
  new InfoBubbles(
    '02', 'Transportation 2', 'Transportation 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Transportation 2 text'
),
  new InfoBubbles(
    '03', 'Transportation 3', 'Transportation 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Transportation 3 text'
),
  new InfoBubbles(
    '04', 'Transportation 4', 'Transportation 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Transportation 4 text'
)
];

const CATEGORIESINFOSPA = [
  new InfoBubbles(
    '01', 'Spa 1', 'Spa 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Spa 1 text'
),
  new InfoBubbles(
    '02', 'Spa 2', 'Spa 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Spa 2 text'
),
  new InfoBubbles(
    '03', 'Spa 3', 'Spa 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Spa 3 text'
),
  new InfoBubbles(
    '04', 'Spa 4', 'Spa 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Spa 4 text'
)
];

const CATEGORIESINFOHOTEL = [
  new InfoBubbles(
    '01', 'Hotel 1', 'Hotel 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Hotel 1 text'
),
  new InfoBubbles(
    '02', 'Hotel 2', 'Hotel 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Hotel 2 text'
),
  new InfoBubbles(
    '03', 'Hotel 3', 'Hotel 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Hotel 3 text'
),
  new InfoBubbles(
    '04', 'Hotel 4', 'Hotel 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Hotel 4 text'
)
];
const CATEGORIESINFOSTREETS = [
  new InfoBubbles('01', 'Street 1', 'Street 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Street 1 text'
),
  new InfoBubbles('02', 'Street 2', 'Street 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Street 2 text'
),
  new InfoBubbles('03', 'Street 3', 'Street 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Street 3 text'
),
  new InfoBubbles (
    '04', 'Street 4', 'Street 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_1280.jpg',
    'Street 4 text'
)
];


// Created new array for categories and added category info to each category so that each item has its own category info section
export const CATEGORIESDATA = [
  { id: "01", categoryTitle: "Dining", count: "204", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFODINING },
  { id: "02", categoryTitle: "Drinks", count: "213", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFODRINKS },
  { id: "03", categoryTitle: "The Beach", count: "98", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOBEACH },
  { id: "04", categoryTitle: "Attractions", count: "241", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOATTRACT },
  { id: "05", categoryTitle: "Tours", count: "205", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOTOUR },
  { id: "06", categoryTitle: "Self-guided tours", count: "3", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOSELFTOUR },
  { id: "07", categoryTitle: "Shopping", count: "198", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOSHOP },
  { id: "08", categoryTitle: "Medical & emergency", count: "95", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOMED },
  { id: "09", categoryTitle: "Transportation", count: "103", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOTRANSP },
  { id: "10", categoryTitle: "Massage, spa, gym", count: "456", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOSPA },
  { id: "11", categoryTitle: "Accomodations", count: "352", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOHOTEL },
  { id: "12", categoryTitle: "Streets", count: "185", imageUrl: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg", categoryInfoData: CATEGORIESINFOSTREETS },
];
export const CATEGORIES = [
  new Category('01', 'Dining', '204', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('02', 'Drinks', '213', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('03', 'The beach', '98', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('04', 'Attractions', '241', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('05', 'Tours', '205', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('06', 'Self-guided tours', '3', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('07', 'Shopping', '198', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('08', 'Medical & emergency', '95', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('09', 'Transportation', '103', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('10', 'Massage, spa, gym', '456', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('11', 'Accommodations', '352', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new Category('12', 'Streets', '185', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg')
];

export const SUBCATEGORIES = [
  new SubCategory('101', '01', 'Breakfast', '75', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('102', '01', 'Lunch', '135', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('103', '01', 'Dinner', '180', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('104', '01', 'Taco carts', '46', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('105', '01', 'Dessert', '29', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('106', '01', 'Drinks', '75', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  
  new SubCategory('107', '02', 'RestoBars', '7', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('108', '02', 'Cantinas', '26', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('109', '02', 'Happy hour', '26', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),

  new SubCategory('110', '03', 'Island beaches', '28', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('111', '03', 'Beach clubs', '26', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  
  new SubCategory('112', '04', 'Murals', '109', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('113', '04', 'Signs', '25', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('114', '04', 'Statues', '41', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('115', '04', 'Architecture', '29', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('116', '04', 'Scenic', '53', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('117', '04', 'Churches', '14', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),

  new SubCategory('118', '05', 'Golf-cart', '1', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('119', '05', 'Downtown walking', '1', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('120', '05', 'Colonias walking', '1', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),

  new SubCategory('121', '06', 'Snorkeling', '156', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('122', '06', 'Scuba diving', '18', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('123', '06', 'Sightseeing', '18', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('124', '06', 'Boat', '156', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('125', '06', 'Contoy island', '47', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('126', '06', 'Mayan ruins', '6', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('127', '06', 'Whale shark', '42', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('128', '06', 'Fishing', '53', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('129', '06', 'Classes', '8', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('130', '06', 'Animals', '3', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),

  new SubCategory('131', '07', 'Groceries', '6', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('132', '07', 'Conv. stores', '145', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('133', '07', 'Supplies', '26', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('134', '07', 'Souvenirs', '104', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('135', '07', 'Pharmacy', '96', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  
  new SubCategory('136', '08', 'Doctors', '6', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('137', '08', 'Hospitals', '5', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('138', '08', 'Consular', '6', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('139', '08', 'Legal', '5', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('140', '08', 'Police', '3', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('141', '08', 'Assistance', '3', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  
  new SubCategory('142', '09', 'Taxi/bus', '9', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('143', '09', 'Airport transfer', '12', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('144', '09', 'Ferry/private shuttle', '16', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('145', '09', 'Golf cart/scooter', '28', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('146', '09', 'Bicycle', '8', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),

  new SubCategory('147', '10', 'Massage', '64', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('148', '10', 'Hair', '9', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('149', '10', 'Nails', '6', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('150', '10', 'Gyms', '3', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  
  new SubCategory('151', '11', 'Hotels', '132', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('152', '11', 'Rental property', '209', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('153', '11', 'Hostels', '35', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg'),
  new SubCategory('154', '11', 'All-inclusive', '6', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg')
];

export const BUSINESS = [
  new Business(
    '1001',
    ['101', '102', '103', '104', '105', '106'],
    'Amigos',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Downtown',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1002',
    ['101', '102', '103', '104', '105', '106'],
    "Angelo's",
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Downtown',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1003',
    ['101', '102', '103', '104', '105', '106'],
    'Agave',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Downtown',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1004',
    ['101', '102', '103', '104', '105', '106'],
    'Al Natural',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Downtown',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1005',
    ['101', '102', '103', '104', '105', '106'],
    'Asia Caribe',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Downtown',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1006',
    ['101', '102', '103', '104', '105', '106'],
    'Deisy y Raul El Charco',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Colonias',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
 ),
  new Business(
    '1007',
    ['101', '102', '103', '104', '105', '106'],
    'Delisias DL Deporte',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Downtown',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1008',
    ['101', '102', '103', '104', '105', '106'],
    'El Carrito (cart)',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Downtown',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
),
  new Business(
    '1009',
    ['101', '102', '103', '104', '105', '106'],
    'El Chefcito',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Colonias',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1010',
    ['101', '102', '103', '104', '105', '106'],
    'El Comojen',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
    new Business(
    '1011',
    ['107', '108'],
    'Beach 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
      new Business(
    '1012',
    ['107', '108'],
    'Beach 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
      new Business(
    '1013',
    ['107', '108'],
    'Beach 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
      new Business(
    '1014',
    ['107', '108'],
    'Beach 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),

  new Business(
    '1015',
    ['109', '110', '111', '112', '113', '114'],
    'Attraction 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1016',
    ['109', '110', '111', '112', '113', '114'],
    'Attraction 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),        
  new Business(
    '1017',
    ['109', '110', '111', '112', '113', '114'],
    'Attraction 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),        
  new Business(
    '1018',
    ['109', '110', '111', '112', '113', '114'],
    'Attraction 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),        
  new Business(
    '1019',
    ['115', '116', '117'],
    'Self-guided tour 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1020',
    ['115', '116', '117'],
    'Self-guided tour 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1021',
    ['115', '116', '117'],
    'Self-guided tour 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1022',
    ['118', '119', '120', '121', '122', '123', '124', '125', '126', '127'],
    'Attraction 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1023',
    ['118', '119', '120', '121', '122', '123', '124', '125', '126', '127'],
    'Attraction 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1024',
    ['118', '119', '120', '121', '122', '123', '124', '125', '126', '127'],
    'Attraction 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1025',
    ['118', '119', '120', '121', '122', '123', '124', '125', '126', '127'],
    'Attraction 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1026',
    ['128', '129', '130', '131', '132'],
    'Shopping 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1027',
    ['128', '129', '130', '131', '132'],
    'Shopping 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1028',
    ['128', '129', '130', '131', '132'],
    'Shopping 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1029',
    ['128', '129', '130', '131', '132'],
    'Shopping 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1030',
    ['133', '134', '135', '136', '137', '138'],
    'Emergency 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1031',
    ['133', '134', '135', '136', '137', '138'],
    'Emergency 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1032',
    ['133', '134', '135', '136', '137', '138'],
    'Emergency 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1033',
    ['133', '134', '135', '136', '137', '138'],
    'Emergency 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1034',
    ['139', '140', '141', '142', '143'],
    'Transportation 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1035',
    ['139', '140', '141', '142', '143'],
    'Transportation 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1036',
    ['139', '140', '141', '142', '143'],
    'Transportation 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1037',
    ['139', '140', '141', '142', '143'],
    'Transportation 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1038',
    ['144', '145', '146', '147'],
    'Massage/spa 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1039',
    ['144', '145', '146', '147'],
    'Massage/spa 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1040',
    ['144', '145', '146', '147'],
    'Massage/spa 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1041',
    ['144', '145', '146', '147'],
    'Massage/spa 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1042',
    ['148', '149', '150', '151'],
    'Accommodation 1',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1043',
    ['148', '149', '150', '151'],
    'Accommodation 2',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1044',
    ['148', '149', '150', '151'],
    'Accommodation 3',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),
  new Business(
    '1045',
    ['148', '149', '150', '151'],
    'Accommodation 4',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    'Bay view',
    'Open daily,',
    '9am–10pm',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  minim veniam, nisi ut aliquip ex ea commodo consequat.",
    'https://www.mapchickapps.com',
    'https://www.facebook.com/MapChickapps',
    'perrymex@gmail.com',
    '515-707-0514',
    '515-707-0514',
    'true',
    'false'
  ),


];
