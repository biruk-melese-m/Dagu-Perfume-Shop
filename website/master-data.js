const ADDIS_SEFERS = [
  "Abado", "Abware", "Addis Ketema", "Addis Sefer (Lideta)", "Addisu Gebeya", "Addisu Sefer (Saris)", "Adwa Dildiy", "Afencho Ber", "Akaki", "Akaki Kaliti", "Alem Bank", "Alem Bekagn", "Alem Gena (Addis edge)", "Ambo Road", "Amist Kilo", "Anbessa Garage", "Anfo", "Arada", "Arat Kilo", "Askola", "Atekelet Tera", "Awtobis Tera", "Ayat", "Ayat Condominium", "Ayer Tena", "Ayertena Mazoria",
  "Bambis", "Beherawi", "Belgium", "Besrate Gebriel", "Bethel", "Bethel Condominium", "Bole", "Bole Atlas", "Bole Arabsa", "Bole Arabsa Condominium", "Bole Bulbula", "Bole Japan", "Bole Michael", "Bole Medhanialem", "Bole Rwanda", "Bulgaria", "Buna Board",
  "CMC", "CMC Condominium", "Coca", "China Tera", "Chirkos (Cherkos)",
  "Datsun Sefer", "Dembel Area", "Dorze Sefer", "Dubai Tera",
  "Edna Mall Area", "Enkulal Fabrika", "Entoto", "Eri Bekentu", "Ethiopia Hotel Area",
  "Ferensay Legasion", "Figa", "Furi (Expansion Area)",
  "Garment", "Gebriel", "Gedam Sefer", "Gerji", "Gerji Condominium", "Gerji Mebrat Hail", "Ginfle", "Gofa", "Gofa Camp", "Gofa Mazoria", "Gola Sefer", "Gotera", "Gotera Condominium", "Goro", "Gurd Shola (Goro Shola)", "Gullele",
  "Hana Mariam", "Haya Arat (24)", "Hayahulet (22)", "Hayat", "Hayat Condominium", "Hayat Hospital Area",
  "Jackros", "Jackros Condominium", "Jan Meda", "Jemo", "Jemo 1", "Jemo 2", "Jemo 3", "Jemo 4", "Jemo 5", "Jemo Condominium", "Jemo Michael",
  "Kaliti", "Kara Kore", "Kazanchis", "Kebena", "Kechene", "Kera", "Kera Mazoria", "Kirkos", "Kochi Gebeya", "Kolfe", "Kotebe", "Kotebe Condominium", "Kotebe Gebriel", "Koye Feche", "Koye Feche Condominium",
  "Lafto", "Lafto Condominium", "Lebu", "Lebu Mebrat", "Lebu Rail Station", "Legahar (La Gare)", "Lideta", "Lideta Coca",
  "Mebrathail", "Megenagna", "Mekanisa", "Mekanisa Abo", "Mekanisa Condominium", "Mehandis Sefer", "Mexico", "Meskel Flower", "Meskel Square", "Minalesh Tera", "Merkato", "Medhanialem (Merkato)",
  "Nefas Silk", "Nifas Silk Lafto",
  "Piazza (Piassa)", "Police College Area",
  "Riche", "Ruanda (Rwanda Area)",
  "Salite Mihret", "Saris", "Saris Abo", "Sebategna", "Sengatera", "Serategna Sefer", "Shiro Meda", "Shola", "Shola Condominium", "Sidist Kilo", "Silte Sefer", "Somale Tera", "Summit", "Summit Condominium", "Saris Addis Sefer",
  "Tafo", "Tafo Lebu", "Talian Sefer", "Teklehaimanot", "Tikur Anbessa", "Tor Hailoch", "Tor Hailoch Condominium", "Tulu Dimtu", "Tulu Dimtu Condominium",
  "Urael",
  "Wello Sefer", "Wereda 01 Area", "Wereda 02 Area", "Wingate", "Wube Berha",
  "Yeka", "Yeka Abado", "Yeka Condominium", "Yerer", "Yosef"
];
const SEFER_DELIVERY_TIMES = {
  // SECTION 1 — CENTRAL CORE (2AM - 4AM)
  "Arada": "2AM - 4AM", "Addis Ketema": "2AM - 4AM", "Piazza (Piassa)": "2AM - 4AM", "Datsun Sefer": "2AM - 4AM",
  "Serategna Sefer": "2AM - 4AM", "Talian Sefer": "2AM - 4AM", "Gedam Sefer": "2AM - 4AM", "Wube Berha": "2AM - 4AM",
  "Legahar (La Gare)": "2AM - 4AM", "Mexico": "2AM - 4AM", "Meskel Square": "2AM - 4AM", "Meskel Flower": "2AM - 4AM",
  "Kazanchis": "2AM - 4AM", "Urael": "2AM - 4AM", "Sengatera": "2AM - 4AM", "Beherawi": "2AM - 4AM", "Bambis": "2AM - 4AM",
  "Awtobis Tera": "2AM - 4AM", "Merkato": "2AM - 4AM", "Dubai Tera": "2AM - 4AM", "Somale Tera": "2AM - 4AM",
  "Kochi Gebeya": "2AM - 4AM", "Atekelet Tera": "2AM - 4AM", "Teklehaimanot": "2AM - 4AM", "Kera": "2AM - 4AM",
  "Kera Mazoria": "2AM - 4AM", "Sebategna": "2AM - 4AM", "Tor Hailoch": "2AM - 4AM", "Tikur Anbessa": "2AM - 4AM",
  "Sidist Kilo": "2AM - 4AM", "Amist Kilo": "2AM - 4AM", "Jan Meda": "2AM - 4AM", "Shiro Meda": "2AM - 4AM",
  "Kirkos": "2AM - 4AM", "Chirkos (Cherkos)": "2AM - 4AM", "Lideta": "2AM - 4AM", "Lideta Coca": "2AM - 4AM",
  "Addis Sefer (Lideta)": "2AM - 4AM", "Gola Sefer": "2AM - 4AM", "Silte Sefer": "2AM - 4AM", "Coca": "2AM - 4AM",

  // SECTION 2 — EAST CORRIDOR (4AM - 6AM)
  "Bole": "4AM - 6AM", "Bole Atlas": "4AM - 6AM", "Bole Medhanialem": "4AM - 6AM", "Edna Mall Area": "4AM - 6AM",
  "Bole Michael": "4AM - 6AM", "Bole Japan": "4AM - 6AM", "Bole Rwanda": "4AM - 6AM", "Bole Arabsa": "4AM - 6AM",
  "Bole Arabsa Condominium": "4AM - 6AM", "Gerji": "4AM - 6AM", "Gerji Condominium": "4AM - 6AM", "Gerji Mebrat Hail": "4AM - 6AM",
  "Hayahulet (22)": "4AM - 6AM", "Haya Arat (24)": "4AM - 6AM", "Megenagna": "4AM - 6AM", "Gurd Shola (Goro Shola)": "4AM - 6AM",
  "Goro": "4AM - 6AM", "CMC": "4AM - 6AM", "CMC Condominium": "4AM - 6AM", "Ayat": "4AM - 6AM", "Ayat Condominium": "4AM - 6AM",
  "Yeka": "4AM - 6AM", "Yeka Abado": "4AM - 6AM", "Yeka Condominium": "4AM - 6AM", "Jackros": "4AM - 6AM",
  "Jackros Condominium": "4AM - 6AM", "Kotebe": "4AM - 6AM", "Kotebe Condominium": "4AM - 6AM", "Kotebe Gebriel": "4AM - 6AM",
  "Summit": "4AM - 6AM", "Summit Condominium": "4AM - 6AM", "Figa": "4AM - 6AM", "Ferensay Legasion": "4AM - 6AM",
  "Hayat": "4AM - 6AM", "Hayat Condominium": "4AM - 6AM", "Bulgaria": "4AM - 6AM",

  // SECTION 3 — SOUTH & SOUTH-WEST (8AM - 10AM)
  "Saris": "8AM - 10AM", "Saris Abo": "8AM - 10AM", "Saris Addis Sefer": "8AM - 10AM", "Gotera": "8AM - 10AM",
  "Gotera Condominium": "8AM - 10AM", "Mekanisa": "8AM - 10AM", "Mekanisa Abo": "8AM - 10AM", "Mekanisa Condominium": "8AM - 10AM",
  "Lafto": "8AM - 10AM", "Lafto Condominium": "8AM - 10AM", "Nifas Silk Lafto": "8AM - 10AM", "Nefas Silk": "8AM - 10AM",
  "Hana Mariam": "8AM - 10AM", "Gofa": "8AM - 10AM", "Gofa Camp": "8AM - 10AM", "Gofa Mazoria": "8AM - 10AM",
  "Jemo": "8AM - 10AM", "Jemo 1": "8AM - 10AM", "Jemo 2": "8AM - 10AM", "Jemo 3": "8AM - 10AM", "Jemo 4": "8AM - 10AM",
  "Jemo 5": "8AM - 10AM", "Jemo Condominium": "8AM - 10AM", "Jemo Michael": "8AM - 10AM", "Bethel": "8AM - 10AM",
  "Bethel Condominium": "8AM - 10AM", "Kolfe": "8AM - 10AM", "Mehandis Sefer": "8AM - 10AM", "Lebu": "8AM - 10AM",
  "Lebu Mebrat": "8AM - 10AM", "Lebu Rail Station": "8AM - 10AM", "Tafo Lebu": "8AM - 10AM", "Tulu Dimtu": "8AM - 10AM",
  "Tulu Dimtu Condominium": "8AM - 10AM", "Akaki": "8AM - 10AM", "Akaki Kaliti": "8AM - 10AM", "Kaliti": "8AM - 10AM",
  "Koye Feche": "8AM - 10AM", "Koye Feche Condominium": "8AM - 10AM", "Garment": "8AM - 10AM", "Ayer Tena": "8AM - 10AM",
  "Ayertena Mazoria": "8AM - 10AM", "Riche": "8AM - 10AM", "Yosef": "8AM - 10AM",

  // SECTION 4 — NORTH & NORTH-WEST (10AM - 12AM)
  "Entoto": "10AM - 12AM", "Gullele": "10AM - 12AM", "Abado": "10AM - 12AM", "Addisu Gebeya": "10AM - 12AM",
  "Wingate": "10AM - 12AM", "Enkulal Fabrika": "10AM - 12AM", "Askola": "10AM - 12AM", "Kechene": "10AM - 12AM",
  "Kebena": "10AM - 12AM", "Belgium": "10AM - 12AM", "Shola": "10AM - 12AM", "Shola Condominium": "10AM - 12AM",
  "Yerer": "10AM - 12AM", "Tafo": "10AM - 12AM", "Furi": "10AM - 12AM", "Alem Bank": "10AM - 12AM",
  "Alem Bekagn": "10AM - 12AM", "Anfo": "10AM - 12AM", "Ginfle": "10AM - 12AM"
};

const POPULAR_IDS = {
  "sec-latest": [
    3,
    11,
    13,
    16,
    55,
    745,
    740,
    741,
    742,
    6,
    7,
    51,
    29,
    752,
    768,
    128,
    12,
    10,
    9,
    5,
    2,
    21,
    1,
    8,
    4,
    15,
    14,
    17,
    30,
    769,
    756,
    18,
    19,
    20,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    52,
    53,
    54,
    56,
    57,
    58,
    59,
    60,
    61
  ],
  "sec-favorites": [
    172,
    189,
    182,
    207,
    174,
    212,
    58,
    72,
    233,
    396,
    68,
    32,
    117,
    128,
    102,
    215,
    56,
    187,
    62,
    374,
    116,
    98,
    145,
    137,
    106,
    3,
    162,
    68,
    59,
    95,
    67,
    98,
    3,
    85,
    183,
    29,
    71,
    140,
    88,
    95
  ],
  "sec-kings": [
    172,
    189,
    174,
    212,
    58,
    72,
    233,
    396,
    117,
    102,
    99,
    135,
    3,
    81,
    100,
    171,
    266,
    297,
    333,
    138,
    195,
    55,
    105,
    61
  ],
  "sec-queens": [
    215,
    56,
    187,
    62,
    374,
    116,
    145,
    137,
    106,
    3,
    162,
    59,
    95,
    7,
    97,
    104,
    5,
    71,
    127,
    70,
    32,
    46,
    91,
    48,
    20,
    130,
    167,
    223,
    401,
    267,
    82,
    123,
    13,
    113,
    165
  ],
  "sec-unisex": [
    3,
    85,
    183,
    29,
    140,
    88,
    50,
    81,
    167
  ],
  "sec-oud": [
    15,
    25,
    26,
    33
  ],
  "sec-fresh": [
    40,
    16,
    19,
    9
  ],
  "sec-sweet": [
    6,
    27,
    323,
    161,
    4,
    2
  ],
  "sec-designer": [
    43,
    51,
    42
  ],
  "sec-sets": [
    41
  ],
  "sec-doj": [
    15,
    73,
    235
  ],
  "sec-shaik": [
    501, 502, 503, 504, 505, 506, 507, 508, 509, 510,
    511, 512, 513, 514, 515, 516, 517, 518, 519, 520,
    521, 522, 523, 524, 525, 526, 527, 528, 529, 530,
    531, 532, 533, 534, 535, 536, 537, 538, 539, 540,
    541, 542, 543, 544, 545, 546, 547, 548, 549, 550,
    551, 552, 553, 554, 555, 556, 557, 558, 559, 560,
    561, 562, 563, 564, 565, 566, 567, 568, 569, 570,
    571, 572, 573, 574, 575, 576, 577, 578, 579, 580,
    581, 582, 583, 584, 585, 586, 587, 588, 589, 590,
    591, 592, 593, 594, 595, 596, 597, 598, 599, 600
  ]
};






const ALL = [
  {
    "no": 1,
    "brand": "EXCLUSIVE",
    "name": "Mahir Legacy Hair Mist",
    "vibe": "Mahir Legacy Hair Mist is a subtle fragrance specifically designed for use on hair and adds a tou...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2800",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_317@17-01-2025_00-50-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_317@17-01-2025_00-50-02_thumb.jpg"
    ]
  },
  {
    "no": 2,
    "brand": "AMEER",
    "name": "Men’s Black",
    "vibe": "Light jasmine spice with soft warmth for an easy daily scent. Suggests: for home, for errands, for casual use.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_318@17-01-2025_01-10-09_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_318@17-01-2025_01-10-09_thumb.jpg"
    ]
  },
  {
    "no": 3,
    "brand": "LATTAFA",
    "name": "Khamrah",
    "vibe": "Rich cinnamon, dates, and vanilla create a sweet and bold gourmand scent. Suggests: for winter, for cozy settings, for sweet lovers.",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_319@17-01-2025_09-15-55_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_319@17-01-2025_09-15-55_thumb.jpg"
    ]
  },
  {
    "no": 4,
    "brand": "LATTAFA",
    "name": "Khamrah",
    "vibe": "Lattafa Khamrah is a luxurious oriental spicy unisex perfume that combines precious spices, the w...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_320@17-01-2025_09-15-55_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_320@17-01-2025_09-15-55_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_512@06-05-2025_03-29-51_thumb.jpg"
    ]
  },
  {
    "no": 5,
    "brand": "RAVE",
    "name": "Now Women / Now-Pink",
    "vibe": "Cotton-candy sweetness with light fruity tones for a playful vibe. Suggests: for casual wear, for youthful settings.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3300",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_334@23-01-2025_01-47-54_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_334@23-01-2025_01-47-54_thumb.jpg"
    ]
  },
  {
    "no": 6,
    "brand": "RAVE",
    "name": "Now Is A Fragrance",
    "vibe": "RAVE NOW WOMEN is a fragrance for women an irresistible fragrance that captivates all age groups ...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3300",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_335@23-01-2025_01-47-54_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_335@23-01-2025_01-47-54_thumb.jpg"
    ]
  },
  {
    "no": 7,
    "brand": "LATTAFA",
    "name": "Yara Orange",
    "vibe": "Fresh citrus burst with soft sweetness for an easy refreshing fragrance. Suggests: for daytime, for summer, for simple daily wear.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_336@24-01-2025_06-05-45_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_336@24-01-2025_06-05-45_thumb.jpg"
    ]
  },
  {
    "no": 8,
    "brand": "LATTAFA",
    "name": "Mayar Pink",
    "vibe": "Sweet fruity-floral blend with strong projection and modern appeal. Suggests: for social settings, for daytime, for standout wear.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_337@24-01-2025_06-05-45_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_337@24-01-2025_06-05-45_thumb.jpg"
    ]
  },
  {
    "no": 9,
    "brand": "EXCLUSIVE",
    "name": "Khaltaat Al Arabian Royal",
    "vibe": "Khaltaat Al Arabian Royal Blend is A splendid apple/peach pie. It&apos;s sweet(almost gourmand), ...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_338@25-01-2025_02-18-58_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_338@25-01-2025_02-18-58_thumb.jpg"
    ]
  },
  {
    "no": 10,
    "brand": "EXCLUSIVE",
    "name": "Mousuf De Rich Smell",
    "vibe": "Mousuf Eau de Parfum Rich smell and long lasting fragrance; Top Notes Chocolate and Grape; Heart ...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "1999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_339@28-01-2025_00-38-08_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_339@28-01-2025_00-38-08_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_340@28-01-2025_00-38-08_thumb.jpg"
    ]
  },
  {
    "no": 12,
    "brand": "LATTAFA",
    "name": "Wajood By Lattafa A",
    "vibe": "Wajood by Lattafa A bold masculine fragrance with marine freshness, vetiver depth, and warm amber...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_341@28-01-2025_00-41-56_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_341@28-01-2025_00-41-56_thumb.jpg"
    ]
  },
  {
    "no": 13,
    "brand": "LATTAFA",
    "name": "Maahir Eau de Parfum",
    "vibe": "Sweet spicy bold fragrance with strong projection. Suggests: for daily confident wear.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2800",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_342@29-01-2025_02-15-39_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_342@29-01-2025_02-15-39_thumb.jpg"
    ]
  },
  {
    "no": 14,
    "brand": "LATTAFA",
    "name": "Lattafa Maahir Fresh Hair Mist",
    "vibe": "Lattafa Maahir Fresh Hair Mist perfume is an Amber Floral hairfragrance for women and men. Hair P...",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2800",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_343@29-01-2025_02-15-39_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_343@29-01-2025_02-15-39_thumb.jpg"
    ]
  },
  {
    "no": 15,
    "brand": "DOJ EXCLUSIVES",
    "name": "MFK Grand Soir Intense Match",
    "vibe": "Resinous amber with deep smooth warmth. Suggests: for regal elegance, formal evenings.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "4999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_344@29-01-2025_02-19-30_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_344@29-01-2025_02-19-30_thumb.jpg"
    ]
  },
  {
    "no": 16,
    "brand": "EXCLUSIVE",
    "name": "Naturals Unrefined African Shea",
    "vibe": "Naturals Unrefined African Shea Butter and African Black Soap Pure, Raw, Grade A, Vegan, &amp; Or...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "1999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_348@31-01-2025_02-08-53_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_348@31-01-2025_02-08-53_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_349@31-01-2025_02-08-53_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_350@31-01-2025_02-08-53_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_351@31-01-2025_02-08-54_thumb.jpg"
    ]
  },
  {
    "no": 20,
    "brand": "INTENSE",
    "name": "Pink",
    "vibe": "Rich tuberose floral with strong projection and bold presence. Suggests: for evening wear, for events, for standout style.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "1599",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_352@31-01-2025_02-09-15_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_352@31-01-2025_02-09-15_thumb.jpg"
    ]
  },
  {
    "no": 21,
    "brand": "EXCLUSIVE",
    "name": "Intense Pink Opens With",
    "vibe": "Intense Pink opens with spicy notes of rum, cardamom, cinnamon, and resin which then turns into a...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "1599",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_353@31-01-2025_02-09-15_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_353@31-01-2025_02-09-15_thumb.jpg"
    ]
  },
  {
    "no": 22,
    "brand": "EXCLUSIVE",
    "name": "Cetaphil Intensive Moisturizing Cream",
    "vibe": "Cetaphil intensive moisturizing cream is a rich hydrating cream, specially designed to provide mo...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-other"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "453",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_354@31-01-2025_02-09-43_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_354@31-01-2025_02-09-43_thumb.jpg"
    ]
  },
  {
    "no": 23,
    "brand": "EXCLUSIVE",
    "name": "Centella Products A Serum-Like",
    "vibe": "Centella products A serum like chemical sunscreen that is super lightweight, hydrating, and quick...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-other"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3499",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_355@04-02-2025_00-51-57_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_355@04-02-2025_00-51-57_thumb.jpg"
    ]
  },
  {
    "no": 24,
    "brand": "BADE'E",
    "name": "Al Oud Noble Blush",
    "vibe": "Soft marshmallow sweetness with powdery rose for a gentle feminine feel. Suggests: for spring, for casual wear, for relaxing days.",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_356@04-02-2025_00-54-39_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_356@04-02-2025_00-54-39_thumb.jpg"
    ]
  },
  {
    "no": 25,
    "brand": "EXCLUSIVE",
    "name": "Bade E Al Oud",
    "vibe": "Bade’e Al Oud A rich, smoky blend of oud, saffron, and lavender, layered with warm patchouli and ...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_357@04-02-2025_00-54-39_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_357@04-02-2025_00-54-39_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_358@04-02-2025_00-54-39_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_359@04-02-2025_00-54-39_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_360@04-02-2025_00-54-39_thumb.jpg"
    ]
  },
  {
    "no": 29,
    "brand": "MAISON ALHAMBRA",
    "name": "Fabulo Intense",
    "vibe": "Creamy almond with smooth luxurious feel. Suggests: for refined upscale occasions.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "4999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_361@04-02-2025_00-56-43_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_361@04-02-2025_00-56-43_thumb.jpg"
    ]
  },
  {
    "no": 30,
    "brand": "LATTAFA",
    "name": "Al Qiam Silver",
    "vibe": "Bright citrus-ginger freshness with clean sharp edge. Suggests: for outdoor daytime, fresh confidence.",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_362@05-02-2025_00-59-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_362@05-02-2025_00-59-37_thumb.jpg"
    ]
  },
  {
    "no": 31,
    "brand": "LATTAFA",
    "name": "Rouat Al Oud",
    "vibe": "Floral oud with smooth romantic tone. Suggests: for elegant romantic settings.",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_363@05-02-2025_00-59-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_363@05-02-2025_00-59-37_thumb.jpg"
    ]
  },
  {
    "no": 32,
    "brand": "AFNAN",
    "name": "Supremacy Not Only Intense",
    "vibe": "Strong fruity smoky powerhouse with beast performance. Suggests: for signature scent, maximum projection.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_364@05-02-2025_00-59-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_364@05-02-2025_00-59-37_thumb.jpg"
    ]
  },
  {
    "no": 33,
    "brand": "AFNAN",
    "name": "Am By Afnan Is",
    "vibe": "am by Afnan is a fragrance for women &amp; man. Top notes are Lemon, Mandarin Orange, Cardamom an...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_365@05-02-2025_00-59-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_365@05-02-2025_00-59-37_thumb.jpg"
    ]
  },
  {
    "no": 34,
    "brand": "EXCLUSIVE",
    "name": "Made With Pure Cocoa",
    "vibe": "Made with pure cocoa, this gel oil for body promotes a natural glow. Helps revitalize dull lookin...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "1800",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_366@07-02-2025_00-51-23_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_366@07-02-2025_00-51-23_thumb.jpg"
    ]
  },
  {
    "no": 35,
    "brand": "EXCLUSIVE",
    "name": "Effective A Niacinamide-Based Serum",
    "vibe": "effective!!A Niacinamide based serum that corrects dark spots and improves uneven skin tone. With...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-other"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_367@07-02-2025_00-55-38_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_367@07-02-2025_00-55-38_thumb.jpg"
    ]
  },
  {
    "no": 36,
    "brand": "EXCLUSIVE",
    "name": "Effective",
    "vibe": "effective!! A Niacinamide based serum that corrects dark spots and improves uneven skin tone. Wit...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_368@07-02-2025_00-55-38_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_368@07-02-2025_00-55-38_thumb.jpg"
    ]
  },
  {
    "no": 37,
    "brand": "EXCLUSIVE",
    "name": "Wajood Is A Really",
    "vibe": "Wajood is a really unique scent! It&apos;s fresh and aquatic at first, thanks to the sea notes an...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_369@07-02-2025_00-57-14_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_369@07-02-2025_00-57-14_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_370@07-02-2025_00-57-14_thumb.jpg"
    ]
  },
  {
    "no": 39,
    "brand": "LATTAFA",
    "name": "Rouge Red",
    "vibe": "Airy sweet amber inspired by Baccarat Rouge with strong projection. Suggests: for signature scent, for elegance, for daily luxury.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_371@10-02-2025_08-23-42_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_371@10-02-2025_08-23-42_thumb.jpg"
    ]
  },
  {
    "no": 40,
    "brand": "LATTAFA",
    "name": "Rogue White",
    "vibe": "Fruity sweet and musky scent inspired by Erba Pura style. Suggests: for bold wear, for casual settings, for attention.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_372@10-02-2025_08-23-42_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_372@10-02-2025_08-23-42_thumb.jpg"
    ]
  },
  {
    "no": 41,
    "brand": "LATTAFA",
    "name": "Ra Apos Ed Luxe",
    "vibe": "Ra&apos;ed Luxe by Lattafa Perfumes is a Oriental Spicy fragrance for women and men. Ra&apos;ed L...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_373@10-02-2025_08-27-04_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_373@10-02-2025_08-27-04_thumb.jpg"
    ]
  },
  {
    "no": 42,
    "brand": "LATTAFA",
    "name": "Ra Ed Luxe By",
    "vibe": "Ra'ed Luxe by Lattafa Perfumes is a Oriental Spicy fragrance for women and men. Ra'ed Luxe was la...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_374@10-02-2025_08-27-04_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_374@10-02-2025_08-27-04_thumb.jpg"
    ]
  },
  {
    "no": 43,
    "brand": "AFNAN",
    "name": "9pm",
    "vibe": "Adds pineapple freshness to the sweet woody base for versatility. Suggests: for everyday, for casual outings, for social settings.",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_375@11-02-2025_01-07-13_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_375@11-02-2025_01-07-13_thumb.jpg"
    ]
  },
  {
    "no": 44,
    "brand": "AFNAN",
    "name": "Pm By Afnan Is",
    "vibe": "pm by Afnan is a Oriental Vanilla fragrance for men. pm was launched in . Top notes are Apple, Ci...",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_376@11-02-2025_01-07-13_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_376@11-02-2025_01-07-13_thumb.jpg"
    ]
  },
  {
    "no": 45,
    "brand": "EXCLUSIVE",
    "name": "Cantu Shea Butter Shampoo",
    "vibe": "Cantu Shea Butter Shampoo Removes heavy buildup in hair and scalp while the unique formula promot...",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-other"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2499",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_377@11-02-2025_01-17-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_377@11-02-2025_01-17-02_thumb.jpg"
    ]
  },
  {
    "no": 46,
    "brand": "MAISON ALHAMBRA",
    "name": "Lovely Cherie",
    "vibe": "Cherry and almond combine for a sweet and slightly tart scent. Suggests: for dates, for casual outings, for chic wear.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_379@12-02-2025_01-38-15_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_379@12-02-2025_01-38-15_thumb.jpg"
    ]
  },
  {
    "no": 47,
    "brand": "LATTAFA",
    "name": "Qimmah By Lattafa Perfumes",
    "vibe": "Qimmah for Women by Lattafa Perfumes is a fragrance for women. Size ml Price Br 📍 @dagu_perfume 📱...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_380@12-02-2025_01-38-15_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_380@12-02-2025_01-38-15_thumb.jpg"
    ]
  },
  {
    "no": 48,
    "brand": "UNKNOWN",
    "name": "Perla",
    "vibe": "Sweet berry and vanilla blend with a classic feminine touch. Suggests: for daily wear, for traditional style.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_381@13-02-2025_00-58-33_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_381@13-02-2025_00-58-33_thumb.jpg"
    ]
  },
  {
    "no": 49,
    "brand": "EXCLUSIVE",
    "name": "Perla Is A Unique",
    "vibe": "Perla is A unique blend with top notes of Apple and Berry, heart notes of Lily, Orchid, Green, an...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_382@13-02-2025_00-58-34_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_382@13-02-2025_00-58-34_thumb.jpg"
    ]
  },
  {
    "no": 50,
    "brand": "LATTAFA",
    "name": "Qaed Al Fursan Unlimited",
    "vibe": "Creamy tropical fruits blended with soft woods for a smooth scent. Suggests: for vacations, for daytime, for fresh vibes.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_383@13-02-2025_01-00-57_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_383@13-02-2025_01-00-57_thumb.jpg"
    ]
  },
  {
    "no": 51,
    "brand": "EXCLUSIVE",
    "name": "Qaed Al Fursan Unlimited",
    "vibe": "Qaed Al Fursan Unlimited Incredible blend of fresh, sweet, and tropical pineapple, balanced perfe...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_384@13-02-2025_01-00-57_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_384@13-02-2025_01-00-57_thumb.jpg"
    ]
  },
  {
    "no": 52,
    "brand": "PASSION",
    "name": "Perfume for Men",
    "vibe": "Bright citrus lemon freshness with energetic and uplifting tone. Suggests: for summer, for quick refresh, for everyday.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3800",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_385@13-02-2025_01-03-30_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_385@13-02-2025_01-03-30_thumb.jpg"
    ]
  },
  {
    "no": 53,
    "brand": "EXCLUSIVE",
    "name": "Passion Perfume Opens With",
    "vibe": "Passion Perfume for Men opens with a captivating burst of top notes that sparkle with vitality. C...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3800",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_386@13-02-2025_01-03-30_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_386@13-02-2025_01-03-30_thumb.jpg"
    ]
  },
  {
    "no": 54,
    "brand": "EXCLUSIVE",
    "name": "Ikt Hair Wax Stick",
    "vibe": "IKT HAIR WAX STICK The rich castor oil in the hair wax stick can softens and adds shine to the ha...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-other"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "1799",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_387@16-02-2025_15-16-50_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_387@16-02-2025_15-16-50_thumb.jpg"
    ]
  },
  {
    "no": 55,
    "brand": "LATTAFA",
    "name": "Perfume Confidential Platinum De",
    "vibe": "Fresh green notes with patchouli create a clean aquatic-woody feel. Suggests: for casual wear, for light office use.",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_388@18-02-2025_13-37-26_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_388@18-02-2025_13-37-26_thumb.jpg"
    ]
  },
  {
    "no": 56,
    "brand": "NOVA VARIANT",
    "name": "9 – Chanel Bleu",
    "vibe": "Classic woody citrus with smooth refinement. Suggests: for everyday signature scent.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_389@18-02-2025_13-41-44_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_389@18-02-2025_13-41-44_thumb.jpg"
    ]
  },
  {
    "no": 57,
    "brand": "YVES SAINT LAURENT",
    "name": "Libre EDP",
    "vibe": "Richer version with vanilla and warmth for a deeper feminine scent. Suggests: for evenings, for winter, for formal settings.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_390@18-02-2025_13-41-44_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_390@18-02-2025_13-41-44_thumb.jpg"
    ]
  },
  {
    "no": 58,
    "brand": "NOVA VARIANT",
    "name": "Lost Cherry Form",
    "vibe": "Sweet cherry and almond with rich syrupy depth. Suggests: for dates, for standout wear.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_391@18-02-2025_13-48-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_391@18-02-2025_13-48-49_thumb.jpg"
    ]
  },
  {
    "no": 59,
    "brand": "LATTAFA",
    "name": "Haya",
    "vibe": "Fresh pink florals with light sweetness for a soft feminine feel. Suggests: for spring, for daily wear, for joyful moods.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_392@18-02-2025_13-59-53_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_392@18-02-2025_13-59-53_thumb.jpg"
    ]
  },
  {
    "no": 60,
    "brand": "LATTAFA",
    "name": "Haya Lattafa Is An",
    "vibe": "Haya Lattafa is an oriental floral fragrance, with a unique combination of rose, jasmine, vanilla...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_393@18-02-2025_14-11-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_393@18-02-2025_14-11-02_thumb.jpg"
    ]
  },
  {
    "no": 61,
    "brand": "AL",
    "name": "Dirgham Limited Edition",
    "vibe": "Sweet florals with tropical brightness for a smooth relaxed vibe. Suggests: for casual days, for outings, for holidays.",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_394@18-02-2025_14-11-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_394@18-02-2025_14-11-02_thumb.jpg"
    ]
  },
  {
    "no": 62,
    "brand": "DIOR",
    "name": "Hypnotic Poison",
    "vibe": "Sweet almond and vanilla create a deep, cozy and sensual scent. Suggests: for cold weather, for intimate settings, for evenings.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "u",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_395@24-02-2025_14-46-39_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_395@24-02-2025_14-46-39_thumb.jpg"
    ]
  },
  {
    "no": 63,
    "brand": "EXCLUSIVE",
    "name": "Audacious Confident And Powerful",
    "vibe": "Audacious, confident and powerful, this signature fragrance from The House of Creed has been deli...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "u",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_396@25-02-2025_01-46-07_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_396@25-02-2025_01-46-07_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_458@14-04-2025_00-52-04_thumb.jpg"
    ]
  },
  {
    "no": 64,
    "brand": "PACO RABANNE",
    "name": "1 Million",
    "vibe": "Sweet spicy leather-inspired scent with bold projection. Suggests: for casual wear, for attention.",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_397@25-02-2025_01-48-01_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_397@25-02-2025_01-48-01_thumb.jpg"
    ]
  },
  {
    "no": 65,
    "brand": "LATTAFA",
    "name": "Perfume Confidential Platinum De",
    "vibe": "Perfume Confidential Platinum Eau de Parfum by Lattafa Perfumes skilfully combines silky citrus f...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_388@18-02-2025_13-37-26_thumb (1).jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_388@18-02-2025_13-37-26_thumb (1).jpg"
    ]
  },
  {
    "no": 66,
    "brand": "SHAIK VARIANT",
    "name": "TF Ombre Leather Replica",
    "vibe": "Strong leather scent with bold and rugged character. Suggests: for statement wear, for bold style.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_399@27-02-2025_23-47-50_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_399@27-02-2025_23-47-50_thumb.jpg"
    ]
  },
  {
    "no": 67,
    "brand": "GRIS",
    "name": "Dior",
    "vibe": "Refined bergamot and oakmoss create a smooth, elegant and balanced scent. Suggests: for formal wear, for tailored outfits, for elegant settings.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_400@27-02-2025_23-47-50_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_400@27-02-2025_23-47-50_thumb.jpg"
    ]
  },
  {
    "no": 68,
    "brand": "ARMAF",
    "name": "Club De Nuit Women",
    "vibe": "Fresh citrus and florals with a musky base for a mature elegant scent. Suggests: for office, for formal settings, for daily elegance.",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_401@27-02-2025_23-54-11_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_401@27-02-2025_23-54-11_thumb.jpg"
    ]
  },
  {
    "no": 69,
    "brand": "EXCLUSIVE",
    "name": "Pm Rebel A Fragrance",
    "vibe": "PM Rebel, a fragrance that adds a new dimension to the iconic Collection. This exquisite creation...",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_402@27-02-2025_23-54-11_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_402@27-02-2025_23-54-11_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_557@10-06-2025_08-02-18_thumb.jpg"
    ]
  },
  {
    "no": 70,
    "brand": "LAILA",
    "name": "Emper",
    "vibe": "Cool fresh florals inspired by nature with a clean airy feel. Suggests: for outdoor days, for fresh vibes, for active wear.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_403@05-03-2025_02-28-10_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_403@05-03-2025_02-28-10_thumb.jpg"
    ]
  },
  {
    "no": 71,
    "brand": "AFNAN",
    "name": "9AM Original",
    "vibe": "Fresh apple and citrus create a clean and uplifting daily scent. Suggests: for work, for daytime, for fresh starts.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_404@05-03-2025_07-33-09_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_404@05-03-2025_07-33-09_thumb.jpg"
    ]
  },
  {
    "no": 72,
    "brand": "RALPH LAUREN",
    "name": "Polo Blue",
    "vibe": "Fresh aquatic notes with melon and suede for a light, airy feel. Suggests: for gym, for summer, for vacations.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_405@06-03-2025_00-30-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_405@06-03-2025_00-30-17_thumb.jpg"
    ]
  },
  {
    "no": 73,
    "brand": "DOJ EXCLUSIVES",
    "name": "Le Labo Fireside Form",
    "vibe": "Warm marshmallow spice with soft smoky undertone. Suggests: for cozy winter nights, relaxed comfort.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_406@06-03-2025_00-33-30_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_406@06-03-2025_00-33-30_thumb.jpg"
    ]
  },
  {
    "no": 74,
    "brand": "YVES SAINT LAURENT",
    "name": "Y Eau de Parfum",
    "vibe": "A fresh garden scent is ready and waiting in a bottle of Lattafa Fakhar Perfume. Enjoy the notes ...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_408@06-03-2025_02-30-41_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_408@06-03-2025_02-30-41_thumb.jpg"
    ]
  },
  {
    "no": 75,
    "brand": "LATTAFA",
    "name": "A Fresh Garden Scent",
    "vibe": "A fresh garden scent is ready and waiting in a bottle of Lattafa Fakhar Perfume. Enjoy the notes ...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_409@06-03-2025_02-30-41_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_409@06-03-2025_02-30-41_thumb.jpg"
    ]
  },
  {
    "no": 76,
    "brand": "MISS",
    "name": "Dior Tester",
    "vibe": "Soft floral bouquet with delicate sweetness and romantic character. Suggests: for weddings, for dates, for everyday elegance.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_411@06-03-2025_02-57-16_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_411@06-03-2025_02-57-16_thumb.jpg"
    ]
  },
  {
    "no": 77,
    "brand": "LATTAFA",
    "name": "Liam Grey",
    "vibe": "Woody metallic freshness with a modern clean masculine tone. Suggests: for office, for formal wear, for daily use.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_412@06-03-2025_02-58-20_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_412@06-03-2025_02-58-20_thumb.jpg"
    ]
  },
  {
    "no": 78,
    "brand": "LATTAFA",
    "name": "Liam By Lattafa Perfumes",
    "vibe": "Liam by Lattafa Perfumes is a fragrance for women and men. A sophisticated blend of exotic spices...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_413@06-03-2025_02-58-20_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_413@06-03-2025_02-58-20_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_433@12-03-2025_01-46-15_thumb.jpg"
    ]
  },
  {
    "no": 79,
    "brand": "EXCLUSIVE",
    "name": "The Sweetness Is Balance",
    "vibe": "The sweetness is balance with a warmth. A masculine scent that includes sage, vanilla, tobacco, T...",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_414@06-03-2025_03-13-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_414@06-03-2025_03-13-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_415@06-03-2025_03-13-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_444@26-03-2025_03-56-40_thumb.jpg"
    ]
  },
  {
    "no": 81,
    "brand": "LATTAFA",
    "name": "Ramz Silver",
    "vibe": "Mint, pear, and vanilla create a playful and youthful sweet scent. Suggests: for young wearers, for social settings, for casual outings.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_416@06-03-2025_03-24-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_416@06-03-2025_03-24-02_thumb.jpg"
    ]
  },
  {
    "no": 82,
    "brand": "LATTAFA",
    "name": "Oud Najdia",
    "vibe": "Spicy woody powerhouse with bold intensity. Suggests: for strong winter presence.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_418@08-03-2025_00-13-40_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_418@08-03-2025_00-13-40_thumb.jpg"
    ]
  },
  {
    "no": 83,
    "brand": "YVES SAINT LAURENT",
    "name": "Libre EDP",
    "vibe": "YSL LIBRE TESTER This oriental fougere fragrance has a blend of mandarian orange, lavender, jasmi...",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_390@18-02-2025_13-41-44_thumb (1).jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_390@18-02-2025_13-41-44_thumb (1).jpg"
    ]
  },
  {
    "no": 84,
    "brand": "SHAIK VARIANT",
    "name": "121 – Bvlgari Aqua Dupe",
    "vibe": "Salty marine freshness with clean aquatic tone. Suggests: for gym, summer wear.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_420@08-03-2025_00-16-30_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_420@08-03-2025_00-16-30_thumb.jpg"
    ]
  },
  {
    "no": 85,
    "brand": "LATTAFA",
    "name": "Khamrah",
    "vibe": "Adds deep coffee notes to the sweet Khamrah base for extra richness. Suggests: for cafes, for dates, for cozy evenings.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_421@10-03-2025_01-59-59_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_421@10-03-2025_01-59-59_thumb.jpg"
    ]
  },
  {
    "no": 86,
    "brand": "EXCLUSIVE",
    "name": "Now-Pink Playful Blend Of",
    "vibe": "Now Pink Playful blend of fruity notes, sweet florals, and warm undertones. The dynamic opening o...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3300",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_426@10-03-2025_02-04-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_426@10-03-2025_02-04-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_427@10-03-2025_02-04-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_457@14-04-2025_00-51-10_thumb.jpg"
    ]
  },
  {
    "no": 88,
    "brand": "LATTAFA",
    "name": "Nebras",
    "vibe": "Cocoa and vanilla create a warm creamy gourmand fragrance. Suggests: for winter, for cozy nights, for comfort wear.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_428@11-03-2025_02-18-31_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_428@11-03-2025_02-18-31_thumb.jpg"
    ]
  },
  {
    "no": 89,
    "brand": "LATTAFA",
    "name": "Nebras By Lattafa -",
    "vibe": "Nebras by Lattafa Immerse yourself in a world where the whisper of chocolate, velvety vanilla and...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_429@11-03-2025_02-18-31_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_429@11-03-2025_02-18-31_thumb.jpg"
    ]
  },
  {
    "no": 90,
    "brand": "EXCLUSIVE",
    "name": "Blue Magic Conditioner Hair",
    "vibe": "Blue Magic Conditioner/Hair Dress is carefully formulated to provide long lasting and effective h...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "1800",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_430@12-03-2025_01-33-13_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_430@12-03-2025_01-33-13_thumb.jpg"
    ]
  },
  {
    "no": 91,
    "brand": "SHALIS",
    "name": "Pink by Remy Marquis",
    "vibe": "Light lavender freshness with a soft clean floral feel. Suggests: for daily wear, for simple freshness.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_431@12-03-2025_01-34-55_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_431@12-03-2025_01-34-55_thumb.jpg"
    ]
  },
  {
    "no": 92,
    "brand": "EXCLUSIVE",
    "name": "Shalis Pink By Remy",
    "vibe": "Shalis pink by Remy Marquis is a Floral Fruity fragrance for women. Top notes are Fruity Notes, C...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_432@12-03-2025_01-34-55_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_432@12-03-2025_01-34-55_thumb.jpg"
    ]
  },
  {
    "no": 94,
    "brand": "EXCLUSIVE",
    "name": "Pm Is A Sweet",
    "vibe": "PM is A sweet, fruity, and seductive blend of apple, cinnamon, and vanilla, balanced with smooth ...",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_434@12-03-2025_01-48-07_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_434@12-03-2025_01-48-07_thumb.jpg"
    ]
  },
  {
    "no": 95,
    "brand": "MAISON ALHAMBRA",
    "name": "Philos Messenger",
    "vibe": "Spicy aquatic blend with a refined and upscale feel. Suggests: for work, for signature wear, for professional use.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "4999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_435@12-03-2025_01-53-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_435@12-03-2025_01-53-37_thumb.jpg"
    ]
  },
  {
    "no": 96,
    "brand": "MAISON ALHAMBRA",
    "name": "La Voie",
    "vibe": "Bright white florals with warmth create a radiant feminine scent. Suggests: for summer, for outings, for daytime elegance.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "4999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_436@12-03-2025_01-53-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_436@12-03-2025_01-53-37_thumb.jpg"
    ]
  },
  {
    "no": 97,
    "brand": "LATTAFA",
    "name": "Cocktail Intense",
    "vibe": "Boozy cinnamon and vanilla inspired by Angel’s Share with rich warmth. Suggests: for winter, for festive settings, for comfort wear.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_437@12-03-2025_01-57-45_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_437@12-03-2025_01-57-45_thumb.jpg"
    ]
  },
  {
    "no": 98,
    "brand": "CALVIN KLEIN",
    "name": "Obsession",
    "vibe": "Warm amber and spices deliver a classic vintage masculine profile. Suggests: for winter, for nostalgic wear, for classic style.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_441@17-03-2025_02-24-05_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_441@17-03-2025_02-24-05_thumb.jpg"
    ]
  },
  {
    "no": 99,
    "brand": "LATTAFA",
    "name": "The Kingdom",
    "vibe": "Sweet tonka, tobacco, and sage create a rich, warm and addictive scent profile. Suggests: for dates, for dinners, for holidays.",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_442@22-03-2025_05-17-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_442@22-03-2025_05-17-02_thumb.jpg"
    ]
  },
  {
    "no": 100,
    "brand": "AFNAN",
    "name": "Turathi Brown",
    "vibe": "Oud and patchouli form a deep, dark and luxurious scent profile. Suggests: for elegant wear, for night settings, for strong presence.",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_443@22-03-2025_05-22-03_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_443@22-03-2025_05-22-03_thumb.jpg"
    ]
  },
  {
    "no": 102,
    "brand": "LATTAFA",
    "name": "Asad",
    "vibe": "Lavender and pink pepper over amber sweetness for a smooth profile. Suggests: for dates, for dinners, for elegant nights.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_445@26-03-2025_04-33-50_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_445@26-03-2025_04-33-50_thumb.jpg"
    ]
  },
  {
    "no": 103,
    "brand": "LATTAFA",
    "name": "Saheb Woody Notes Balanced",
    "vibe": "SAHEB LATTAFA woody notes, balanced by an astonishing citric touch. The uniqueness of this fragra...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_446@01-04-2025_03-11-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_446@01-04-2025_03-11-49_thumb.jpg"
    ]
  },
  {
    "no": 104,
    "brand": "LATTAFA",
    "name": "Her Confession",
    "vibe": "Sweet vanilla and soft musk create a warm seductive scent. Suggests: for evenings, for cozy settings, for dates.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_447@03-04-2025_01-41-14_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_447@03-04-2025_01-41-14_thumb.jpg"
    ]
  },
  {
    "no": 105,
    "brand": "LATTAFA",
    "name": "His Confession",
    "vibe": "Spicy herbs with sweet resin base create a mysterious masculine aura. Suggests: for evenings, for close encounters, for dates.",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_448@03-04-2025_01-41-23_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_448@03-04-2025_01-41-23_thumb.jpg"
    ]
  },
  {
    "no": 106,
    "brand": "LATTAFA",
    "name": "Yara Moisturizing Lotion",
    "vibe": "Soft creamy sweetness with smooth skin scent. Suggests: for layering with perfumes.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "N/A",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_449@04-04-2025_03-26-14_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_449@04-04-2025_03-26-14_thumb.jpg"
    ]
  },
  {
    "no": 107,
    "brand": "LATTAFA",
    "name": "Asad",
    "vibe": "Asad Bourbon It opens with vibrant top notes of pink pepper, soothing lavender, and juicy mirabel...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_450@07-04-2025_02-14-56_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_450@07-04-2025_02-14-56_thumb.jpg"
    ]
  },
  {
    "no": 108,
    "brand": "EXCLUSIVE",
    "name": "Woody Floral Spicy Fragrance",
    "vibe": "Woody floral spicy fragrance for men. · Warm notes of cinnamon, vanilla, and amber. · Bold and ma...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_451@07-04-2025_02-31-23_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_451@07-04-2025_02-31-23_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_452@07-04-2025_02-31-23_thumb.jpg"
    ]
  },
  {
    "no": 110,
    "brand": "EXCLUSIVE",
    "name": "It Opens With Bergamot",
    "vibe": "It opens with bergamot and mandarin, evolving into warm amber and woody accords. The bold base of...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_453@11-04-2025_03-15-47_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_453@11-04-2025_03-15-47_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_454@11-04-2025_03-15-47_thumb.jpg"
    ]
  },
  {
    "no": 112,
    "brand": "LATTAFA",
    "name": "Confidential Platinum",
    "vibe": "Fresh green notes with patchouli create a clean aquatic-woody feel. Suggests: for casual wear, for light office use.",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_455@11-04-2025_03-19-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_455@11-04-2025_03-19-37_thumb.jpg"
    ]
  },
  {
    "no": 113,
    "brand": "LATTAFA",
    "name": "Ana Abiyedh Poudree",
    "vibe": "Clean powdery soft sweetness with elegant finish. Suggests: for subtle classy daily wear.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_456@11-04-2025_03-38-01_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_456@11-04-2025_03-38-01_thumb.jpg"
    ]
  },
  {
    "no": 116,
    "brand": "DOLCE & GABBANA",
    "name": "Devotion",
    "vibe": "Sweet dessert-like citrus and vanilla create a delicious gourmand feel. Suggests: for weekends, for casual outings, for fun wear.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "8000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_459@15-04-2025_05-37-15_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_459@15-04-2025_05-37-15_thumb.jpg"
    ]
  },
  {
    "no": 117,
    "brand": "RASASI",
    "name": "Hawas for Him",
    "vibe": "Sweet aquatic freshness with cinnamon and marine notes, very energetic. Suggests: for summer, for gym, for beach days.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_460@15-04-2025_05-40-32_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_460@15-04-2025_05-40-32_thumb.jpg"
    ]
  },
  {
    "no": 118,
    "brand": "LATTAFA",
    "name": "Ajwad By Lattafa Perfumes",
    "vibe": "Ajwad by Lattafa Perfumes is a Woody Aromatic fragrance for women and men.It has a sweet, elegant...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_461@16-04-2025_02-01-51_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_461@16-04-2025_02-01-51_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_462@16-04-2025_02-01-51_thumb.jpg"
    ]
  },
  {
    "no": 120,
    "brand": "EXCLUSIVE",
    "name": "Am Dive Super Fresh",
    "vibe": "AM Dive Super fresh and easy to wear. Opens with a nice citrusy blast, kinda like a mix of lemon ...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_463@17-04-2025_06-46-32_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_463@17-04-2025_06-46-32_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_464@17-04-2025_06-46-32_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_465@17-04-2025_07-23-53_thumb.jpg"
    ]
  },
  {
    "no": 123,
    "brand": "LATTAFA",
    "name": "Opulent Oud",
    "vibe": "Saffron-heavy oud with luxurious richness. Suggests: for traditional events, bold statements.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "5000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_466@17-04-2025_07-23-53_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_466@17-04-2025_07-23-53_thumb.jpg"
    ]
  },
  {
    "no": 124,
    "brand": "BURBERRY",
    "name": "Goddess",
    "vibe": "Rich vanilla with soft aromatics for a warm and comforting scent. Suggests: for daily wear, for cozy settings.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_467@17-04-2025_07-24-59_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_467@17-04-2025_07-24-59_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1042@13-02-2026_07-33-51_thumb.jpg"
    ]
  },
  {
    "no": 125,
    "brand": "EXCLUSIVE",
    "name": "Mens Deodorant Stick Roll",
    "vibe": "Mens Deodorant Stick Roll On is a powerful antiperspirant that provides up to hours of protection...",
    "sections": [
      "sec-kings",
      "sec-fresh",
      "sec-other"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "1200",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_472@17-04-2025_07-33-15_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_472@17-04-2025_07-33-15_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_473@17-04-2025_07-33-15_thumb.jpg"
    ]
  },
  {
    "no": 127,
    "brand": "LATTAFA",
    "name": "Hayaati Florence",
    "vibe": "Fruity nectarine with soft florals for a bright feminine scent. Suggests: for spring, for daytime outings, for casual wear.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_477@17-04-2025_08-17-43_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_477@17-04-2025_08-17-43_thumb.jpg"
    ]
  },
  {
    "no": 128,
    "brand": "LATTAFA",
    "name": "Fakhar Rose",
    "vibe": "Sweet floral candy tones with strong projection and playful vibe. Suggests: for social settings, for evenings, for fun wear.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "5999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_479@22-04-2025_05-57-24_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_479@22-04-2025_05-57-24_thumb.jpg"
    ]
  },
  {
    "no": 129,
    "brand": "EPIC",
    "name": "Adventure",
    "vibe": "Green forest notes and patchouli create a fresh outdoorsy feel. Suggests: for hiking, for daytime, for casual wear.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_480@22-04-2025_06-34-56_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_480@22-04-2025_06-34-56_thumb.jpg"
    ]
  },
  {
    "no": 130,
    "brand": "AFNAN",
    "name": "Souvenir Blooming Bliss",
    "vibe": "Elegant floral musk with soft oriental warmth and depth. Suggests: for formal wear, for dates, for confident presence.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "14000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_481@23-04-2025_02-53-58_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_481@23-04-2025_02-53-58_thumb.jpg"
    ]
  },
  {
    "no": 131,
    "brand": "AFNAN",
    "name": "Afnan Souvenir Blooming Bliss",
    "vibe": "Souvenir Blooming Bliss by Afnan is a Oriental Vanilla fragrance for women. It’s a feminine flora...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "14000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_482@23-04-2025_02-53-58_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_482@23-04-2025_02-53-58_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_483@23-04-2025_02-53-58_thumb.jpg"
    ]
  },
  {
    "no": 133,
    "brand": "LATTAFA",
    "name": "With Its Long-Lasting Formula",
    "vibe": "With its long lasting formula, Lattafa Najdia is perfect for daytime wear, making it an ideal cho...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_484@24-04-2025_01-02-24_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_484@24-04-2025_01-02-24_thumb.jpg"
    ]
  },
  {
    "no": 134,
    "brand": "LATTAFA",
    "name": "Mahir Legacy Lattafa Strong",
    "vibe": "Mahir Legacy Lattafa strong &amp; long lasting performance ⋅ The fragrance opens with a burst of ...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-sets"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_485@24-04-2025_01-02-39_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_485@24-04-2025_01-02-39_thumb.jpg"
    ]
  },
  {
    "no": 135,
    "brand": "LATTAFA",
    "name": "Glacier Ultra",
    "vibe": "Fresh mint and vanilla blend with spices for a balanced cool-warm effect. Suggests: for fall weather, for office, for dates.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_486@24-04-2025_01-02-48_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_486@24-04-2025_01-02-48_thumb.jpg"
    ]
  },
  {
    "no": 136,
    "brand": "EXCLUSIVE",
    "name": "Glacier Ultra This Perfume",
    "vibe": "Glacier Ultra For Men This perfume opens with a bold and spicy combination of pepper and cinnamon...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_487@24-04-2025_01-02-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_487@24-04-2025_01-02-49_thumb.jpg"
    ]
  },
  {
    "no": 137,
    "brand": "LATTAFA",
    "name": "Yara Tous",
    "vibe": "Mango and coconut create a tropical creamy and sunny fragrance. Suggests: for summer, for vacations, for beach days.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_488@25-04-2025_09-14-16_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_488@25-04-2025_09-14-16_thumb.jpg"
    ]
  },
  {
    "no": 138,
    "brand": "FRENCH AVENUE",
    "name": "Tobacco D'Feu",
    "vibe": "Strong tobacco and smoky warmth create a bold mature scent. Suggests: for winter, for formal wear, for confident presence.",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "12000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_489@26-04-2025_02-47-48_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_489@26-04-2025_02-47-48_thumb.jpg"
    ]
  },
  {
    "no": 139,
    "brand": "FRENCH AVENUE",
    "name": "Liquid Brun",
    "vibe": "Cinnamon, orange blossom, and creamy vanilla create a luxurious gourmand scent. Suggests: for winter, for dates, for fine dining.",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "12000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_490@26-04-2025_02-47-48_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_490@26-04-2025_02-47-48_thumb.jpg"
    ]
  },
  {
    "no": 140,
    "brand": "LATTAFA",
    "name": "Oud For Glory Amethyst Variant 2",
    "vibe": "Warm sweet oud with smooth balanced depth. Suggests: for unique night wear.",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_491@26-04-2025_04-06-01_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_491@26-04-2025_04-06-01_thumb.jpg"
    ]
  },
  {
    "no": 141,
    "brand": "LATTAFA",
    "name": "Lattafa Bade E Al",
    "vibe": "Lattafa Bade'e Al Oud Noble Blush for Unisex Eau de parfum Spray . oz ml. With a top note of deli...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_492@26-04-2025_04-06-01_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_492@26-04-2025_04-06-01_thumb.jpg"
    ]
  },
  {
    "no": 142,
    "brand": "LATTAFA",
    "name": "Fakhar Black",
    "vibe": "A fresh garden scent is ready and waiting in a bottle of Lattafa Fakhar Perfume.Fakhar Black is c...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_498@30-04-2025_03-13-44_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_498@30-04-2025_03-13-44_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_499@30-04-2025_03-13-44_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_500@30-04-2025_03-13-44_thumb.jpg"
    ]
  },
  {
    "no": 145,
    "brand": "LATTAFA",
    "name": "Eclaire",
    "vibe": "Banana-caramel sweetness blended with soft cream for a playful gourmand vibe. Suggests: for everyday, for cafes, for casual outings.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_501@01-05-2025_03-26-55_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_501@01-05-2025_03-26-55_thumb.jpg"
    ]
  },
  {
    "no": 146,
    "brand": "AFNAN",
    "name": "9AM Dive",
    "vibe": "Minty aquatic freshness with a crisp and cooling effect. Suggests: for summer, for daily wear, for hot weather.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_502@02-05-2025_05-37-08_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_502@02-05-2025_05-37-08_thumb.jpg"
    ]
  },
  {
    "no": 147,
    "brand": "AFNAN",
    "name": "Afnan Am Dive Is",
    "vibe": "Afnan AM Dive is a fragrance that blends aquatic, aromatic, and fresh notes with a hint of sweetn...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_503@02-05-2025_05-37-08_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_503@02-05-2025_05-37-08_thumb.jpg"
    ]
  },
  {
    "no": 148,
    "brand": "LATTAFA",
    "name": "Lattafa Pride Art of Nature I (Plum/Fig)",
    "vibe": "Lattafa Pride Art of Nature I is a versatile unisex fragrance that seamlessly blends bold and ref...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "12000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_504@03-05-2025_05-31-24_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_504@03-05-2025_05-31-24_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_505@03-05-2025_05-31-24_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_506@03-05-2025_05-31-24_thumb.jpg"
    ]
  },
  {
    "no": 151,
    "brand": "EXCLUSIVE",
    "name": "A Fragrance That Encapsulates",
    "vibe": "A fragrance that encapsulates the essence of a warrior, embodying strength, resilience, and the d...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_507@03-05-2025_07-51-24_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_507@03-05-2025_07-51-24_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_508@03-05-2025_07-51-24_thumb.jpg"
    ]
  },
  {
    "no": 153,
    "brand": "AL HARAMAIN",
    "name": "Amber Oud Blue Edition",
    "vibe": "Fresh spicy woody aquatic with a clean professional style. Suggests: for office, for daytime, for versatile wear.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "14999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_509@05-05-2025_04-02-34_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_509@05-05-2025_04-02-34_thumb.jpg"
    ]
  },
  {
    "no": 154,
    "brand": "AL HARAMAIN",
    "name": "Amber Oud By Al",
    "vibe": "Amber Oud by Al Haramain Perfumes is a Oriental Woody fragrance for women and men. Top notes are ...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "14999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_510@05-05-2025_04-02-34_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_510@05-05-2025_04-02-34_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_511@05-05-2025_04-02-34_thumb.jpg"
    ]
  },
  {
    "no": 157,
    "brand": "EXCLUSIVE",
    "name": "Hair Mist Maahir Ml",
    "vibe": "? 👩‍🦳👱‍♀️👱‍♂️Hair Mist Maahir ml Lattafa.This resin is known for its warm, rich, and woody scent,...",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-sets"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "2200",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_513@07-05-2025_04-10-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_513@07-05-2025_04-10-49_thumb.jpg"
    ]
  },
  {
    "no": 158,
    "brand": "EXCLUSIVE",
    "name": "Hair Mist Maahir Ml",
    "vibe": "? 👩‍🦳👱‍♀️👱‍♂️ Hair Mist Maahir ml Lattafa.This resin is known for its warm, rich, and woody scent...",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-sets"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "2200",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_514@07-05-2025_04-10-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_514@07-05-2025_04-10-49_thumb.jpg"
    ]
  },
  {
    "no": 159,
    "brand": "EXCLUSIVE",
    "name": "Souvenir Blooming Bliss Is",
    "vibe": "Souvenir Blooming Bliss is a feminine floral, fruity scent with an amber, vanilla, musk base. The...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "14000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_515@07-05-2025_04-16-40_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_515@07-05-2025_04-16-40_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_516@07-05-2025_04-16-40_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_517@07-05-2025_04-16-40_thumb.jpg"
    ]
  },
  {
    "no": 162,
    "brand": "LATTAFA",
    "name": "Bint Hooran",
    "vibe": "Rich sweet florals with depth for a bold feminine presence. Suggests: for dates, for evenings, for confident wear.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_518@08-05-2025_08-06-12_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_518@08-05-2025_08-06-12_thumb.jpg"
    ]
  },
  {
    "no": 163,
    "brand": "EXCLUSIVE",
    "name": "Lail Maleki Top Notes",
    "vibe": "Lail Maleki Top notes are Fruity Notes, Spicy Notes and Citruses; middle notes are Jasmine, Honey...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_519@09-05-2025_05-30-53_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_519@09-05-2025_05-30-53_thumb.jpg"
    ]
  },
  {
    "no": 164,
    "brand": "EXCLUSIVE",
    "name": "A Captivating Mix Of",
    "vibe": "A captivating mix of cinnamon, orange blossom, grey amber, and sandalwood in this men&apos;s perf...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_520@13-05-2025_12-36-03_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_520@13-05-2025_12-36-03_thumb.jpg"
    ]
  },
  {
    "no": 165,
    "brand": "KHULOOD",
    "name": "le Falcone",
    "vibe": "Heavy niche blend with intense rich complexity. Suggests: for royal luxury aura, bold statement wear.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_521@15-05-2025_00-58-07_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_521@15-05-2025_00-58-07_thumb.jpg"
    ]
  },
  {
    "no": 166,
    "brand": "EXCLUSIVE",
    "name": "Khulood Le Falcone Is",
    "vibe": "Khulood le falcone\" is a niche perfume It is an Extrait de Parfum, a concentrated fragrance that ...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_522@15-05-2025_00-58-07_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_522@15-05-2025_00-58-07_thumb.jpg"
    ]
  },
  {
    "no": 167,
    "brand": "ZIMAYA",
    "name": "Night Shadow",
    "vibe": "Dark incense and woods create a mysterious and deep fragrance. Suggests: for evenings, for some mystery, for bold presence.",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_523@16-05-2025_05-42-28_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_523@16-05-2025_05-42-28_thumb.jpg"
    ]
  },
  {
    "no": 168,
    "brand": "ZIMAYA",
    "name": "Zimaya Amber Is Great",
    "vibe": "Zimaya Amber Is Great is a unisex fragrance, often described as sensual and enticing with a long ...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_524@16-05-2025_05-42-29_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_524@16-05-2025_05-42-29_thumb.jpg"
    ]
  },
  {
    "no": 169,
    "brand": "EXCLUSIVE",
    "name": "Bint Hooran Quot Is",
    "vibe": "Bint Hooran&quot; is a perfume by Ard Al Zaafaran, known for its oriental, sensual, and feminine ...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_525@20-05-2025_01-32-41_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_525@20-05-2025_01-32-41_thumb.jpg"
    ]
  },
  {
    "no": 170,
    "brand": "EXCLUSIVE",
    "name": "Bint Hooran Is A",
    "vibe": "Bint Hooran\" is a perfume by Ard Al Zaafaran, known for its oriental, sensual, and feminine fragr...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_526@20-05-2025_01-32-41_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_526@20-05-2025_01-32-41_thumb.jpg"
    ]
  },
  {
    "no": 171,
    "brand": "RASASI",
    "name": "Hawas for Him",
    "vibe": "Spicy woods layered over sweet aquatic notes for a bold modern twist. Suggests: for daytime confidence, for evening wear, for gym.",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_528@23-05-2025_07-40-01_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_528@23-05-2025_07-40-01_thumb.jpg"
    ]
  },
  {
    "no": 172,
    "brand": "DIOR",
    "name": "Sauvage Eau de Parfum",
    "vibe": "Fresh bergamot with smooth amber and vanilla, creating a clean yet bold masculine trail. Suggests: for everyday, for work, for evening wear.",
    "sections": [
      "sec-kings",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "32500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_529@24-05-2025_02-11-33_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_529@24-05-2025_02-11-33_thumb.jpg"
    ]
  },
  {
    "no": 173,
    "brand": "DIOR",
    "name": "Sauvage Elixir",
    "vibe": "Deep spicy woody scent with strong masculine presence. Suggests: for evenings, for mature wear.",
    "sections": [
      "sec-kings",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "32500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_530@24-05-2025_02-11-33_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_530@24-05-2025_02-11-33_thumb.jpg"
    ]
  },
  {
    "no": 174,
    "brand": "VERSACE",
    "name": "Eros Parfum",
    "vibe": "Mint, citrus, and vanilla create a fresh yet sweet energetic fragrance. Suggests: for social settings, for dates, for confident wear.",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "23000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_531@24-05-2025_05-41-52_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_531@24-05-2025_05-41-52_thumb.jpg"
    ]
  },
  {
    "no": 175,
    "brand": "VERSACE",
    "name": "Eros Parfum",
    "vibe": "Versace Eros Parfum is a fragrance of contrasts. Sparkling citrus notes of mandarin and lemon. Ma...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "23000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_532@24-05-2025_05-41-52_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_532@24-05-2025_05-41-52_thumb.jpg"
    ]
  },
  {
    "no": 176,
    "brand": "DIOR",
    "name": "Sauvage",
    "vibe": "Sauvage Eau de Parfum The men&apos;s fragrance with notes of fresh bergamot and ambery vanilla.Ma...",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "31000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_533@26-05-2025_06-56-33_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_533@26-05-2025_06-56-33_thumb.jpg"
    ]
  },
  {
    "no": 177,
    "brand": "YVES SAINT LAURENT",
    "name": "Libre EDP",
    "vibe": "Libre Eau de Parfum is a bold, floral perfume for women. A statement feminine fragrance for those...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "25000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_534@27-05-2025_11-18-53_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_534@27-05-2025_11-18-53_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_535@27-05-2025_11-18-53_thumb.jpg"
    ]
  },
  {
    "no": 179,
    "brand": "LATTAFA",
    "name": "Mahir Legacy Lattafa Size",
    "vibe": "Mahir Legacy Lattafa 🔥 Size mlPrice Br📍 @dagu_perfume📱https //www.tiktok.com/@dagu_perfume?_t= if...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "7000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_536@28-05-2025_03-58-29_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_536@28-05-2025_03-58-29_thumb.jpg"
    ]
  },
  {
    "no": 180,
    "brand": "LATTAFA",
    "name": "Nebras By Lattafa Perfumes",
    "vibe": "Nebras by Lattafa Perfumes is a Oriental Vanilla fragrance for women and men.Size mlPrice Br📍 @da...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_537@29-05-2025_05-35-26_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_537@29-05-2025_05-35-26_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_538@29-05-2025_05-35-26_thumb.jpg"
    ]
  },
  {
    "no": 182,
    "brand": "ARMANI",
    "name": "Stronger With You Absolutely",
    "vibe": "Richer version with rum and vanilla, deeper and more luxurious sweetness. Suggests: for cold weather, for special occasions, for dates.",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "27000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_539@29-05-2025_12-41-58_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_539@29-05-2025_12-41-58_thumb.jpg"
    ]
  },
  {
    "no": 183,
    "brand": "LATTAFA",
    "name": "Khamrah",
    "vibe": "Less sweet version with smoky and woody depth for a stronger profile. Suggests: for evenings, for bold wear, for mature taste.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_540@01-06-2025_12-19-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_540@01-06-2025_12-19-35_thumb.jpg"
    ]
  },
  {
    "no": 184,
    "brand": "LATTAFA",
    "name": "Khamrah",
    "vibe": "Khamrah Dukhan ( 🔥)The burning composition of pimento, tobacco, and amber creates a fragrance tha...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_541@01-06-2025_12-19-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_541@01-06-2025_12-19-35_thumb.jpg"
    ]
  },
  {
    "no": 185,
    "brand": "BILLIE EILISH",
    "name": "Eilish Eau de Parfum",
    "vibe": "Warm vanilla and sugar create a soft, cozy and comforting scent. Suggests: for evenings, for relaxing, for winter.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "20000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_542@02-06-2025_02-27-09_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_542@02-06-2025_02-27-09_thumb.jpg"
    ]
  },
  {
    "no": 186,
    "brand": "BILLIE EILISH",
    "name": "Eilish Eau de Parfum",
    "vibe": "Eilish Eau de Parfum is a captivating Amber Gourmand fragrance featuring notes of sugared petals,...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "20000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_543@02-06-2025_02-27-09_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_543@02-06-2025_02-27-09_thumb.jpg"
    ]
  },
  {
    "no": 187,
    "brand": "TOM FORD",
    "name": "Black Orchid",
    "vibe": "Dark floral with truffle and spice creating a deep mysterious fragrance. Suggests: for evening wear, for bold personalities, for luxury presence.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "27500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_544@05-06-2025_08-39-50_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_544@05-06-2025_08-39-50_thumb.jpg"
    ]
  },
  {
    "no": 188,
    "brand": "SHAIK VARIANT",
    "name": "TF Black Orchid Dark Profile",
    "vibe": "Dark floral with earthy spice for a mysterious deep scent. Suggests: for evenings, for bold personalities.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "27500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_545@05-06-2025_08-39-50_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_545@05-06-2025_08-39-50_thumb.jpg"
    ]
  },
  {
    "no": 189,
    "brand": "JEAN PAUL GAULTIER",
    "name": "Le Male Le Parfum",
    "vibe": "Warm cardamom and iris create a smooth, refined and elegant masculine feel. Suggests: for work, for dates, for everyday.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "29999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_546@06-06-2025_06-03-23_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_546@06-06-2025_06-03-23_thumb.jpg"
    ]
  },
  {
    "no": 190,
    "brand": "JEAN PAUL GAULTIER",
    "name": "Le Male Elixir",
    "vibe": "Jean Paul Gaultier Le Male Elixir The scent is warm and welcoming,with hints of a sweet musk smel...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "29999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_547@06-06-2025_06-03-23_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_547@06-06-2025_06-03-23_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_567@28-06-2025_07-19-49_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_568@28-06-2025_07-19-49_thumb.jpg"
    ]
  },
  {
    "no": 191,
    "brand": "EXCLUSIVE",
    "name": "This Fragrance Is Warm",
    "vibe": "This fragrance is warm and crystalline thanks to the amber, sweet and almost chocolatey thanks to...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_548@07-06-2025_07-02-05_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_548@07-06-2025_07-02-05_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_549@07-06-2025_07-02-05_thumb.jpg"
    ]
  },
  {
    "no": 193,
    "brand": "NOVA VARIANT",
    "name": "10 – TF Tobacco Vanille DNA",
    "vibe": "Warm tobacco vanilla spice with deep richness. Suggests: for cold nights, luxury vibe.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "2999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_550@08-06-2025_08-27-08_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_550@08-06-2025_08-27-08_thumb.jpg"
    ]
  },
  {
    "no": 194,
    "brand": "EXCLUSIVE",
    "name": "Original Nova Perfumes",
    "vibe": "Original Nova perfumes ✓They are original dupes for original designer perfumes ✓They also smell t...",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "2999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_551@08-06-2025_08-27-08_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_551@08-06-2025_08-27-08_thumb.jpg"
    ]
  },
  {
    "no": 195,
    "brand": "LATTAFA",
    "name": "Maahir Legacy Silver",
    "vibe": "Minty grapefruit freshness with airy woods for a cooling effect. Suggests: for gym, for summer, for outdoor activities.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "7000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_552@08-06-2025_08-47-27_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_552@08-06-2025_08-47-27_thumb.jpg"
    ]
  },
  {
    "no": 196,
    "brand": "EXCLUSIVE",
    "name": "A Boozy Cinnamon Plum",
    "vibe": "A Boozy cinnamon plum with a woody spine, sprinkled with a smidge of iris, and lathered in a Tonk...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "4999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_553@09-06-2025_08-26-22_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_553@09-06-2025_08-26-22_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_554@09-06-2025_08-26-22_thumb.jpg"
    ]
  },
  {
    "no": 198,
    "brand": "EXCLUSIVE",
    "name": "Recognizable By Its Signature",
    "vibe": "Recognizable by its signature composition, Million draws you in with top notes of bracing citruse...",
    "sections": [
      "sec-unisex",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "u",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "21000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_555@09-06-2025_09-45-12_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_555@09-06-2025_09-45-12_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_556@09-06-2025_09-45-12_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_579@07-07-2025_01-52-53_thumb.jpg"
    ]
  },
  {
    "no": 201,
    "brand": "EXCLUSIVE",
    "name": "Rogue Lattafa Size Mlprice",
    "vibe": "( ) Rogue Lattafa !! Size mlPrice Br📍 @dagu_perfume📱https //www.tiktok.com/@dagu_perfume?_t= ifdA...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_558@11-06-2025_01-29-08_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_558@11-06-2025_01-29-08_thumb.jpg"
    ]
  },
  {
    "no": 202,
    "brand": "EXCLUSIVE",
    "name": "Playful Blend Of Fruity",
    "vibe": "Playful blend of fruity notes, sweet florals, and warm undertones. The dynamic opening of red fru...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "3300",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_559@11-06-2025_01-35-20_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_559@11-06-2025_01-35-20_thumb.jpg"
    ]
  },
  {
    "no": 203,
    "brand": "LATTAFA",
    "name": "Lattafa Afeef De Is",
    "vibe": "Lattafa Afeef Eau de Parfum is a versatile fragrance crafted for everyone, delivering a harmoniou...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_560@12-06-2025_02-52-22_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_560@12-06-2025_02-52-22_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_561@12-06-2025_02-52-22_thumb.jpg"
    ]
  },
  {
    "no": 205,
    "brand": "EXCLUSIVE",
    "name": "Woody Spicy And Sweet",
    "vibe": "Woody, spicy and sweet that create a unique and seductive aroma. The initial notes are a combinat...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "7000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_562@22-06-2025_23-34-30_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_562@22-06-2025_23-34-30_thumb.jpg"
    ]
  },
  {
    "no": 206,
    "brand": "EXCLUSIVE",
    "name": "It Apos S Luxurious",
    "vibe": "it&apos;s luxurious and rich in aroma. This perfume presents a unique blend of classic spices and...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_563@22-06-2025_23-34-31_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_563@22-06-2025_23-34-31_thumb.jpg"
    ]
  },
  {
    "no": 207,
    "brand": "VALENTINO",
    "name": "Uomo Born in Roma Intense",
    "vibe": "Vanilla sweetness meets smoky vetiver for a modern, sensual scent. Suggests: for evening dates, for winter, for social events.",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "28000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_564@27-06-2025_03-21-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_564@27-06-2025_03-21-17_thumb.jpg"
    ]
  },
  {
    "no": 208,
    "brand": "EXCLUSIVE",
    "name": "The Base Notes Of",
    "vibe": "The base notes of musk, vanilla, galbanum, and petitgrain anchor the fragrance, adding a touch of...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "14999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_565@27-06-2025_07-00-42_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_565@27-06-2025_07-00-42_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_566@27-06-2025_07-00-43_thumb.jpg"
    ]
  },
  {
    "no": 212,
    "brand": "GIORGIO ARMANI",
    "name": "Armani Code Profumo",
    "vibe": "Creamy amber, leather, and sweetness combine for a seductive signature. Suggests: for formal events, for dates, for elegant evenings.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "24500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_573@30-06-2025_03-37-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_573@30-06-2025_03-37-02_thumb.jpg"
    ]
  },
  {
    "no": 213,
    "brand": "VERSACE",
    "name": "Eros Flame",
    "vibe": "Spicy citrus and warm woods add depth to the classic Eros DNA. Suggests: for everyday, for winter, for special occasions.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "24500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_574@30-06-2025_03-37-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_574@30-06-2025_03-37-02_thumb.jpg"
    ]
  },
  {
    "no": 214,
    "brand": "EXCLUSIVE",
    "name": "Bold Unisex Amber Woody",
    "vibe": "Bold, unisex amber woody fragrance. It opens with a rich burst of saffron and nutmeg, giving it a...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_575@02-07-2025_03-39-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_575@02-07-2025_03-39-17_thumb.jpg"
    ]
  },
  {
    "no": 215,
    "brand": "CHANEL",
    "name": "Coco Mademoiselle",
    "vibe": "Fresh orange and soft rose blend into a clean elegant floral scent. Suggests: for daily wear, for elegance, for spring dates.",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "33500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_576@02-07-2025_04-36-25_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_576@02-07-2025_04-36-25_thumb.jpg"
    ]
  },
  {
    "no": 216,
    "brand": "CHANEL",
    "name": "Blue De De Pour",
    "vibe": "BLUE DE CHANEL EAU DE PARFUM POUR HOMME is a woody aromatic fragrance for men An ode to masculine...",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "33500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_577@02-07-2025_04-36-25_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_577@02-07-2025_04-36-25_thumb.jpg"
    ]
  },
  {
    "no": 217,
    "brand": "EXCLUSIVE",
    "name": "His Confession A Bold",
    "vibe": "His Confession A bold and captivating fragrance that embodies modern masculinity. A refreshing an...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_578@07-07-2025_01-40-18_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_578@07-07-2025_01-40-18_thumb.jpg"
    ]
  },
  {
    "no": 219,
    "brand": "VALENTINO",
    "name": "Valentino Uomo Born in Roma Intense",
    "vibe": "Valentino Uomo Born in Roma Intense is a woody vetiver aromatic fragrance. The scent of this Born...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody",
      "sec-designer"
    ],
    "g": "u",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "28000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_580@07-07-2025_09-16-10_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_580@07-07-2025_09-16-10_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_581@07-07-2025_09-16-11_thumb.jpg"
    ]
  },
  {
    "no": 221,
    "brand": "MAISON ALHAMBRA",
    "name": "Maison Alhambra Apos S",
    "vibe": "Maison Alhambra&apos;s Philos Messenger is a unisex Eau de Parfum known for its sophisticated and...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_585@10-07-2025_02-08-51_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_585@10-07-2025_02-08-51_thumb.jpg"
    ]
  },
  {
    "no": 222,
    "brand": "BILLIE EILISH",
    "name": "Eilish Eau de Parfum",
    "vibe": "Eilish Eau de Parfum The fragrance is an amber gourmand, aiming to be warm, inviting, and comfort...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "21000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_586@10-07-2025_02-18-09_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_586@10-07-2025_02-18-09_thumb.jpg"
    ]
  },
  {
    "no": 223,
    "brand": "AMARAN",
    "name": "Funoon Beauty",
    "vibe": "Fruity candy notes with musk and patchouli for a playful scent. Suggests: for dates, for fun outings, for youthful wear.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_587@12-07-2025_02-07-12_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_587@12-07-2025_02-07-12_thumb.jpg"
    ]
  },
  {
    "no": 224,
    "brand": "EXCLUSIVE",
    "name": "Funoon Beauty By Amaran",
    "vibe": "Funoon Beauty by Amaran is a Floral Fruity fragrance for women. Top notes are Strawberry, Peach a...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "7999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_588@12-07-2025_02-07-12_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_588@12-07-2025_02-07-12_thumb.jpg"
    ]
  },
  {
    "no": 225,
    "brand": "LATTAFA",
    "name": "Maahir Black Edition",
    "vibe": "Dark smoky intense scent with bold and rugged character. Suggests: for evenings, for strong presence, for winter.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_589@12-07-2025_02-16-14_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_589@12-07-2025_02-16-14_thumb.jpg"
    ]
  },
  {
    "no": 226,
    "brand": "LATTAFA",
    "name": "Lattafa Maahir Black Edition (Smoky)",
    "vibe": "Maahir Black Edition by Lattafa Perfumes is a Oriental Spicy fragrance for women and men.Top note...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_590@14-07-2025_05-19-10_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_590@14-07-2025_05-19-10_thumb.jpg"
    ]
  },
  {
    "no": 227,
    "brand": "EXCLUSIVE",
    "name": "The Bold Base Of",
    "vibe": "The bold base of musk and patchouli enhances its refined masculinity. A vibrant and invigorating ...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_591@14-07-2025_05-19-10_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_591@14-07-2025_05-19-10_thumb.jpg"
    ]
  },
  {
    "no": 228,
    "brand": "EXCLUSIVE",
    "name": "They Open With A",
    "vibe": "They open with a combination of raspberry and fresh, sparkling rose petal. Next, geranium and amb...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "8000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_592@17-07-2025_05-59-28_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_592@17-07-2025_05-59-28_thumb.jpg"
    ]
  },
  {
    "no": 229,
    "brand": "LATTAFA",
    "name": "Lattafa Ana Abiyedh Leather",
    "vibe": "Ana Abiyedh Lattafa A soothing, harmonious perfume with amber, saffron and ambergris. The top not...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_593@18-07-2025_09-16-16_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_593@18-07-2025_09-16-16_thumb.jpg"
    ]
  },
  {
    "no": 230,
    "brand": "EXCLUSIVE",
    "name": "Tomford The Dramatic Black",
    "vibe": "Tomford The dramatic Black Orchid Eau De Parfum opens with aphrodisiac black truffle and narcotic...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "31500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_594@21-07-2025_02-33-32_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_594@21-07-2025_02-33-32_thumb.jpg"
    ]
  },
  {
    "no": 231,
    "brand": "YVES SAINT LAURENT",
    "name": "Y Eau de Parfum",
    "vibe": "The Eau de Parfum is the iconic Y signature. YSL Y is A fresh, compliment getter, long lasting sc...",
    "sections": [
      "sec-kings",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "29000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_595@22-07-2025_03-53-08_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_595@22-07-2025_03-53-08_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_596@22-07-2025_03-53-08_thumb.jpg"
    ]
  },
  {
    "no": 233,
    "brand": "NOVA VARIANT",
    "name": "CK Euphoria Match",
    "vibe": "Fruity floral with a warm sensual undertone. Suggests: for evenings, for casual wear.",
    "sections": [
      "sec-kings",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "22000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_597@24-07-2025_03-54-45_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_597@24-07-2025_03-54-45_thumb.jpg"
    ]
  },
  {
    "no": 234,
    "brand": "EXCLUSIVE",
    "name": "The Fragrance Is Described",
    "vibe": "The fragrance is described as a sweet, fruity, and warm scent, suitable for both daytime and even...",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "8000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_598@25-07-2025_02-59-22_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_598@25-07-2025_02-59-22_thumb.jpg"
    ]
  },
  {
    "no": 235,
    "brand": "DOJ EXCLUSIVES",
    "name": "6 – JPG La Belle DNA",
    "vibe": "Rich fruity sweetness with seductive depth. Suggests: for romantic evenings.",
    "sections": [
      "sec-queens",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_843@12-11-2025_01-15-31_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_843@12-11-2025_01-15-31_thumb.jpg"
    ]
  },
  {
    "no": 236,
    "brand": "EXCLUSIVE",
    "name": "An Irresistible Oriental Perfume",
    "vibe": "An irresistible oriental perfume that is generous with its charms and very suitable for the eveni...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_844@13-11-2025_00-50-54_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_844@13-11-2025_00-50-54_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_845@13-11-2025_00-50-55_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_846@13-11-2025_02-26-27_thumb.jpg"
    ]
  },
  {
    "no": 239,
    "brand": "EXCLUSIVE",
    "name": "The Scent Opens With",
    "vibe": "The scent opens with a bold blend of spicy pepper and citrus, leading into a heart of smoky incen...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_848@15-11-2025_02-24-06_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_848@15-11-2025_02-24-06_thumb.jpg"
    ]
  },
  {
    "no": 240,
    "brand": "EXCLUSIVE",
    "name": "Vanilla Voyage Is A",
    "vibe": "Vanilla Voyage is a warm, creamy vanilla fragrance with rich caramel and honey notes, while Vanil...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody",
      "sec-queens",
      "sec-sets"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "12000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_850@18-11-2025_00-37-51_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_850@18-11-2025_00-37-51_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1022@10-02-2026_02-33-05_thumb.jpg"
    ]
  },
  {
    "no": 241,
    "brand": "AFNAN",
    "name": "Afnan Supermacycollectors Editionknown Its",
    "vibe": "Afnan SupermacyCollectors Editionknown for its fruity, smoky scent profile often compared to high...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "14999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_851@19-11-2025_05-33-57_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_851@19-11-2025_05-33-57_thumb.jpg"
    ]
  },
  {
    "no": 242,
    "brand": "AFNAN",
    "name": "Supremacy Purple",
    "vibe": "Dark fruity sweetness with depth and bold feminine character. Suggests: for evenings, for elegant wear, for strong presence.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "14999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_852@19-11-2025_05-33-57_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_852@19-11-2025_05-33-57_thumb.jpg"
    ]
  },
  {
    "no": 243,
    "brand": "EXCLUSIVE",
    "name": "An Intense Sensual And",
    "vibe": "An intense, sensual, and addictive men&apos;s fragrance featuring notes of rum, lavender, vanilla...",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "27999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_853@19-11-2025_05-40-13_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_853@19-11-2025_05-40-13_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_854@19-11-2025_05-40-13_thumb.jpg"
    ]
  },
  {
    "no": 245,
    "brand": "EXCLUSIVE",
    "name": "Smooth Spices Woody Parfums",
    "vibe": "smooth , spices, woody Parfums de Marly&apos;s Althair Le Falconé Al Majd !!Size mlExtrait de par...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_508@03-05-2025_07-51-24_thumb (1).jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_508@03-05-2025_07-51-24_thumb (1).jpg"
    ]
  },
  {
    "no": 246,
    "brand": "BURBERRY",
    "name": "Hero Eau de Parfum",
    "vibe": "Woody fresh scent with light citrus and clean structure. Suggests: for office, for daily wear.",
    "sections": [
      "sec-kings",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "22000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_597@24-07-2025_03-54-45_thumb (1).jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos/photo_597@24-07-2025_03-54-45_thumb (1).jpg"
    ]
  },
  {
    "no": 247,
    "brand": "EXCLUSIVE",
    "name": "The Name Itself The",
    "vibe": "The name itself — The Joyful — speaks to a bright, uplifting emotion.fruity + floral + gourmand, ...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "8999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_875@24-11-2025_12-19-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_875@24-11-2025_12-19-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_876@24-11-2025_12-19-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_877@24-11-2025_12-19-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_878@24-11-2025_12-19-35_thumb.jpg"
    ]
  },
  {
    "no": 251,
    "brand": "EXCLUSIVE",
    "name": "A Mix Of Juicy",
    "vibe": "A mix of juicy fruit + floral + clean musky woods.Azure Royal smells like a bright, sweet pear or...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "8999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_879@25-11-2025_01-37-19_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_879@25-11-2025_01-37-19_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_880@25-11-2025_01-37-19_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_881@25-11-2025_01-37-19_thumb.jpg"
    ]
  },
  {
    "no": 254,
    "brand": "EXCLUSIVE",
    "name": "Size Mlprice - Dagu_Perfume",
    "vibe": "Size mlPrice Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_882@25-11-2025_01-38-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_882@25-11-2025_01-38-17_thumb.jpg"
    ]
  },
  {
    "no": 255,
    "brand": "EXCLUSIVE",
    "name": "Size Ml",
    "vibe": "Size ml Price Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_883@25-11-2025_01-38-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_883@25-11-2025_01-38-17_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_884@25-11-2025_01-38-17_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_885@25-11-2025_01-38-17_thumb.jpg"
    ]
  },
  {
    "no": 258,
    "brand": "EXCLUSIVE",
    "name": "Smelling Like Creamy Vanilla",
    "vibe": "smelling like creamy vanilla whipped cream, buttery shortbread cookies, and a drizzle of caramel....",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh",
      "sec-other"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_888@26-11-2025_01-31-06_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_888@26-11-2025_01-31-06_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_889@26-11-2025_01-31-06_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_890@26-11-2025_01-31-06_thumb.jpg"
    ]
  },
  {
    "no": 261,
    "brand": "EXCLUSIVE",
    "name": "Dubai Usa Woody Base",
    "vibe": "Dubai USA 🇺🇸 !! Woody Base, radiant floral fruity Size mlPrice , Br @dagu_perfume",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "12999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_891@27-11-2025_03-43-48_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_891@27-11-2025_03-43-48_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_892@27-11-2025_03-43-48_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_893@27-11-2025_03-43-49_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_894@27-11-2025_03-43-49_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_895@27-11-2025_03-43-49_thumb.jpg"
    ]
  },
  {
    "no": 266,
    "brand": "RASASI",
    "name": "Hawas for Him",
    "vibe": "Clean neroli, tea, and florals give a fresh out-of-shower luxury feel. Suggests: for everyday, for clean outfits, for light settings.",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_896@29-11-2025_06-36-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_896@29-11-2025_06-36-35_thumb.jpg"
    ]
  },
  {
    "no": 267,
    "brand": "LATTAFA",
    "name": "Victoria",
    "vibe": "Creamy lemon dessert scent with rich sweet gourmand profile. Suggests: for sweet lovers, for casual wear, for comfort.",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_897@02-12-2025_01-40-22_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_897@02-12-2025_01-40-22_thumb.jpg"
    ]
  },
  {
    "no": 268,
    "brand": "LATTAFA",
    "name": "Victoria Lattafa A Sweet",
    "vibe": "Victoria Lattafa a sweet, creamy lemon meringue pie with a subtle floral heart. Size ml Price , B...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_898@02-12-2025_01-40-22_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_898@02-12-2025_01-40-22_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_899@02-12-2025_01-40-22_thumb.jpg"
    ]
  },
  {
    "no": 270,
    "brand": "EXCLUSIVE",
    "name": "Fresh Clean And Elegant",
    "vibe": "🔥Fresh, clean, and elegant ! A blend of refreshing citrus, soothing green tea, and a warm, woody ...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "13000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_900@02-12-2025_01-50-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_900@02-12-2025_01-50-35_thumb.jpg"
    ]
  },
  {
    "no": 271,
    "brand": "EXCLUSIVE",
    "name": "Fresh Clean And Elegant",
    "vibe": "🔥 Fresh, clean, and elegant ! A blend of refreshing citrus, soothing green tea, and a warm, woody...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "13000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_901@02-12-2025_01-50-35_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_901@02-12-2025_01-50-35_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_902@02-12-2025_01-50-35_thumb.jpg"
    ]
  },
  {
    "no": 273,
    "brand": "EXCLUSIVE",
    "name": "Luscious Warm And Comforting",
    "vibe": "luscious, warm, and comforting gourmand scent that primarily smells of caramel, butter, vanilla, ...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_903@03-12-2025_02-24-07_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_903@03-12-2025_02-24-07_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_904@03-12-2025_02-24-07_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_905@03-12-2025_02-24-07_thumb.jpg"
    ]
  },
  {
    "no": 276,
    "brand": "EXCLUSIVE",
    "name": "The Founder A Feeling",
    "vibe": "The Founder — a feeling of ancient luxury and high status opulence, power, and authority! The Joy...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "8999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_906@08-12-2025_02-31-24_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_906@08-12-2025_02-31-24_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_907@08-12-2025_02-31-24_thumb.jpg"
    ]
  },
  {
    "no": 278,
    "brand": "EXCLUSIVE",
    "name": "Island Khadlaj Fresh Citrusy",
    "vibe": "Island Khadlaj 🏝️ fresh, citrusy, and musky scent profile, inspired by the serenity of a tropical...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_911@10-12-2025_01-00-31_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_911@10-12-2025_01-00-31_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_912@10-12-2025_01-00-31_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_913@10-12-2025_01-00-31_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_914@10-12-2025_01-00-31_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_915@10-12-2025_01-00-31_thumb.jpg"
    ]
  },
  {
    "no": 283,
    "brand": "LATTAFA",
    "name": "Asad",
    "vibe": "woody profile Dinner Date Asad Bourbon Size mlPrice Br @dagu_perfume",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "7000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_916@11-12-2025_02-15-45_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_916@11-12-2025_02-15-45_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_917@11-12-2025_02-15-45_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_918@11-12-2025_02-15-45_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_919@11-12-2025_02-15-45_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_920@11-12-2025_02-15-45_thumb.jpg"
    ]
  },
  {
    "no": 288,
    "brand": "EXCLUSIVE",
    "name": "Her Confession Is A",
    "vibe": "Her Confession is a rich, feminine Eau de Parfum that balances spicy, floral, and warm gourmand n...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_921@11-12-2025_13-37-36_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_921@11-12-2025_13-37-36_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_922@11-12-2025_13-37-36_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_923@11-12-2025_13-37-36_thumb.jpg"
    ]
  },
  {
    "no": 291,
    "brand": "EXCLUSIVE",
    "name": "Charismatic Confident And Masculine",
    "vibe": "Charismatic, confident, and masculine, often associated with a &quot;vanilla pastry&quot; or &quo...",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "27999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_924@13-12-2025_00-42-22_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_924@13-12-2025_00-42-22_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_925@13-12-2025_00-42-22_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_926@13-12-2025_00-42-22_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_927@13-12-2025_00-42-22_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_924@13-12-2025_00-42-22_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_925@13-12-2025_00-42-22_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_926@13-12-2025_00-42-22_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_927@13-12-2025_00-42-22_thumb (1).jpg"
    ]
  },
  {
    "no": 295,
    "brand": "EXCLUSIVE",
    "name": "Woody-Aromatic Ginger Bergamot Cardamom",
    "vibe": "Woody Aromatic ? ginger, bergamot, cardamom, blackcurrant, rose, vanilla, sandalwood patchouli Sp...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_928@17-12-2025_03-25-38_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_928@17-12-2025_03-25-38_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_929@17-12-2025_03-25-38_thumb.jpg"
    ]
  },
  {
    "no": 297,
    "brand": "RASASI",
    "name": "Hawas for Him",
    "vibe": "Tropical fruity notes with woody base designed for bright sunny vibes. Suggests: for beach trips, for poolside, for daytime outings.",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_930@18-12-2025_02-21-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_930@18-12-2025_02-21-17_thumb.jpg"
    ]
  },
  {
    "no": 298,
    "brand": "LATTAFA",
    "name": "Lail Maleki Lattafa Is",
    "vibe": "+ ??Lail Maleki Lattafa is a sweet, spicy, and woody oriental fragrance with fruity openings (cit...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_931@22-12-2025_03-15-14_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_931@22-12-2025_03-15-14_thumb.jpg"
    ]
  },
  {
    "no": 299,
    "brand": "LATTAFA",
    "name": "Lail Maleki Lattafa Is",
    "vibe": "+ ?? Lail Maleki Lattafa is a sweet, spicy, and woody oriental fragrance with fruity openings (ci...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "6500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_932@22-12-2025_03-15-14_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_932@22-12-2025_03-15-14_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_933@22-12-2025_03-15-14_thumb.jpg"
    ]
  },
  {
    "no": 301,
    "brand": "EXCLUSIVE",
    "name": "Vanilla Amber Spicy Rich",
    "vibe": "Vanilla, Amber Spicy, Rich Tobacco, Black Pepper Cinnamon !!Made in France 🇫🇷 Size mlPrice , Br @...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "27999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_934@23-12-2025_01-23-01_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_934@23-12-2025_01-23-01_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_935@23-12-2025_01-23-01_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_936@23-12-2025_01-23-01_thumb.jpg"
    ]
  },
  {
    "no": 304,
    "brand": "EXCLUSIVE",
    "name": "Stronger With You Mandarin",
    "vibe": "Stronger With You PARFUM Mandarin Pink Pepper Vanilla Bourbon and a soft, velvety Leather accord ...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "29999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_937@25-12-2025_01-11-01_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_937@25-12-2025_01-11-01_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_938@25-12-2025_01-11-01_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_939@25-12-2025_01-11-01_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_940@25-12-2025_01-11-01_thumb.jpg"
    ]
  },
  {
    "no": 308,
    "brand": "OLYMPUS",
    "name": "Blossom Perfumed Spray",
    "vibe": "Fresh fruity-floral mist with light and airy sweetness. Suggests: for hot weather, for body spray, for casual use.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_941@26-12-2025_02-43-16_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_941@26-12-2025_02-43-16_thumb.jpg"
    ]
  },
  {
    "no": 309,
    "brand": "EXCLUSIVE",
    "name": "Vanilla Cinnamon Orange Blossom",
    "vibe": "Vanilla, Cinnamon Orange Blossom !! Size ml Price , Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_942@26-12-2025_02-43-16_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_942@26-12-2025_02-43-16_thumb.jpg"
    ]
  },
  {
    "no": 310,
    "brand": "EXCLUSIVE",
    "name": "Recognized As A Quot",
    "vibe": "Recognized as a &quot;hybrid ,&quot; blending the DNA of two famous fragrances Dior Sauvage ...",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_943@27-12-2025_03-48-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_943@27-12-2025_03-48-49_thumb.jpg"
    ]
  },
  {
    "no": 311,
    "brand": "DIOR",
    "name": "Recognized As A Hybrid",
    "vibe": "Recognized as a \"hybrid ,\" blending the DNA of two famous fragrances Dior Sauvage + Creed Av...",
    "sections": [
      "sec-kings",
      "sec-oud",
      "sec-fresh",
      "sec-woody",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_944@27-12-2025_03-48-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_944@27-12-2025_03-48-49_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_945@27-12-2025_03-48-49_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_946@27-12-2025_03-48-49_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_947@27-12-2025_03-48-49_thumb.jpg"
    ]
  },
  {
    "no": 315,
    "brand": "EXCLUSIVE",
    "name": "Seductive High Class Standard",
    "vibe": "Seductive High Class Standard Performance Modest Deux AfnanA profile of dark chocolate covered be...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "14999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_948@27-12-2025_04-04-47_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_948@27-12-2025_04-04-47_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_949@27-12-2025_04-04-47_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_950@27-12-2025_04-04-48_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_951@27-12-2025_04-04-48_thumb.jpg"
    ]
  },
  {
    "no": 319,
    "brand": "EXCLUSIVE",
    "name": "Ml Perfume Ml Shower",
    "vibe": "+ ml perfume + ml Shower Gel Price , Br @dagu_perfume🔠🔠🔠🔠🔠🔠🔠 🔠🔠🔠🔠🔠🔠🔠🔠",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "3999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_952@29-12-2025_00-51-25_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_952@29-12-2025_00-51-25_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_953@29-12-2025_00-51-25_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_954@29-12-2025_00-51-25_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_955@29-12-2025_00-51-25_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_956@29-12-2025_00-51-25_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_957@29-12-2025_00-51-25_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_952@29-12-2025_00-51-25_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_953@29-12-2025_00-51-25_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_954@29-12-2025_00-51-25_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_955@29-12-2025_00-51-25_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_956@29-12-2025_00-51-25_thumb (1).jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_957@29-12-2025_00-51-25_thumb (1).jpg"
    ]
  },
  {
    "no": 325,
    "brand": "EXCLUSIVE",
    "name": "Ck Obsession Since Its",
    "vibe": "CK OBSESSION Since , Its deep amber spicy profile is meant to be provocative and seductive, captu...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_958@31-12-2025_01-59-41_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_958@31-12-2025_01-59-41_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_959@31-12-2025_01-59-41_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_960@31-12-2025_01-59-41_thumb.jpg"
    ]
  },
  {
    "no": 328,
    "brand": "LATTAFA",
    "name": "Lattafa Nasmaat Smells Like",
    "vibe": "Lattafa Nasmaat smells like a fruity, floral, and creamy gourmand scent, opening with bright blac...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-sets"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "10999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_964@03-01-2026_07-41-10_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_964@03-01-2026_07-41-10_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_965@03-01-2026_07-41-10_thumb.jpg"
    ]
  },
  {
    "no": 330,
    "brand": "EXCLUSIVE",
    "name": "It Is A Powerful",
    "vibe": "It is a powerful, sweet, and warm oriental fragrance designed for men. Reviewers describe Armaf C...",
    "sections": [
      "sec-kings",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_970@10-01-2026_02-40-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_970@10-01-2026_02-40-37_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_971@10-01-2026_02-40-37_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_972@10-01-2026_02-40-37_thumb.jpg"
    ]
  },
  {
    "no": 333,
    "brand": "LATTAFA",
    "name": "Asad",
    "vibe": "Spicy tropical freshness over aquatic base inspired by Invictus style. Suggests: for hot weather, for sports, for active days.",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_977@21-01-2026_01-32-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_977@21-01-2026_01-32-02_thumb.jpg"
    ]
  },
  {
    "no": 334,
    "brand": "LATTAFA",
    "name": "Asad",
    "vibe": "Asad Zanzibar Limited Edition Aromatic, amber scent, offering a blend of fresh marine notes and w...",
    "sections": [
      "sec-kings",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_978@21-01-2026_01-32-02_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_978@21-01-2026_01-32-02_thumb.jpg"
    ]
  },
  {
    "no": 335,
    "brand": "EXCLUSIVE",
    "name": "Oud Aquatic Freshness Floral",
    "vibe": "Oud Aquatic Freshness, floral, Oriental Base Notes Oud, Incense Spice 🤑 Size mlPrice , Br @dagu_p...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "9000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_979@21-01-2026_01-32-33_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_979@21-01-2026_01-32-33_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_980@21-01-2026_01-32-33_thumb.jpg"
    ]
  },
  {
    "no": 337,
    "brand": "EXCLUSIVE",
    "name": "Made In Uae Fragrance",
    "vibe": "Made in UAE 🇦🇪 fragrance that offers a playful, indulgent, and sweet aroma It’s inviting, and mem...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "6999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_981@23-01-2026_03-02-53_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_981@23-01-2026_03-02-53_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_982@23-01-2026_03-02-54_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_983@23-01-2026_03-02-54_thumb.jpg"
    ]
  },
  {
    "no": 344,
    "brand": "EXCLUSIVE",
    "name": "Ml Size Ml -",
    "vibe": "ml 👟⛸️ + 👏Size ml Price , Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_996@27-01-2026_08-56-48_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_996@27-01-2026_08-56-48_thumb.jpg"
    ]
  },
  {
    "no": 345,
    "brand": "EXCLUSIVE",
    "name": "Size Ml",
    "vibe": "ml 👟⛸️ + 👏 Size ml Price , Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_997@27-01-2026_08-56-48_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_997@27-01-2026_08-56-48_thumb.jpg"
    ]
  },
  {
    "no": 346,
    "brand": "YVES SAINT LAURENT",
    "name": "Libre EDP",
    "vibe": "Tharwah Gold cited as a high quality dupe for YSL Libre Intense, though reviewers often note it i...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_998@29-01-2026_01-07-34_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_998@29-01-2026_01-07-34_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_999@29-01-2026_01-07-34_thumb.jpg"
    ]
  },
  {
    "no": 354,
    "brand": "RAYHAAN",
    "name": "Lion",
    "vibe": "Dense spices and leather create a bold and commanding scent. Suggests: for events, for dates, for strong presence.",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1006@29-01-2026_23-40-32_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1006@29-01-2026_23-40-32_thumb.jpg"
    ]
  },
  {
    "no": 355,
    "brand": "RAYHAAN",
    "name": "Rayhaan Lion Is A",
    "vibe": "? Rayhaan Lion is a bold, long lasting known for its sweet, spicy, and woody scent profile. Size ...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1007@29-01-2026_23-40-32_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1007@29-01-2026_23-40-32_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1008@29-01-2026_23-40-32_thumb.jpg"
    ]
  },
  {
    "no": 357,
    "brand": "EXCLUSIVE",
    "name": "Island Vanilla Dunes Is",
    "vibe": "🔥🔥Island Vanilla Dunes is warm, spicy notes with creamy vanilla and a rich, gourmand base.Liquid ...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1009@30-01-2026_11-02-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1009@30-01-2026_11-02-49_thumb.jpg"
    ]
  },
  {
    "no": 358,
    "brand": "EXCLUSIVE",
    "name": "Island Vanilla Dunes Is",
    "vibe": "🔥🔥 Island Vanilla Dunes is warm, spicy notes with creamy vanilla and a rich, gourmand base. Liqui...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1010@30-01-2026_11-02-49_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1010@30-01-2026_11-02-49_thumb.jpg"
    ]
  },
  {
    "no": 359,
    "brand": "EXCLUSIVE",
    "name": "Rich Boozy Plum And",
    "vibe": "Rich, boozy plum and creamy coconut, balanced by a sweet vanilla and musk base.Size mlPrice , Br ...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1011@02-02-2026_01-26-23_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1011@02-02-2026_01-26-23_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1012@02-02-2026_01-26-23_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1013@02-02-2026_01-26-23_thumb.jpg"
    ]
  },
  {
    "no": 362,
    "brand": "YVES SAINT LAURENT",
    "name": "Y Eau de Parfum",
    "vibe": "Clean fresh metallic citrus with woody undertones. Suggests: for work, for daytime, for daily use.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1014@03-02-2026_07-02-12_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1014@03-02-2026_07-02-12_thumb.jpg"
    ]
  },
  {
    "no": 363,
    "brand": "EXCLUSIVE",
    "name": "Amber Vanilla Jpg Ultra",
    "vibe": "Amber Vanilla JPG ULTRA MALE Dupe 🔥 Size ml Price , Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "4500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1015@03-02-2026_07-02-12_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1015@03-02-2026_07-02-12_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1016@03-02-2026_07-02-12_thumb.jpg"
    ]
  },
  {
    "no": 365,
    "brand": "LATTAFA",
    "name": "Eclair Banoffi Lattafa Notes",
    "vibe": "Eclair Banoffi Lattafa ! notes of banana cream, vanilla, and praline, designed to be a sweet, cre...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1017@06-02-2026_08-43-37_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1017@06-02-2026_08-43-37_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1018@06-02-2026_08-43-37_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1019@06-02-2026_08-43-37_thumb.jpg"
    ]
  },
  {
    "no": 368,
    "brand": "ARMAF",
    "name": "Club De Nuit Intense Man",
    "vibe": "Club De Nuit Intense Woman bold, sophisticated chypre floral fragrance that combines prominent no...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1020@09-02-2026_07-31-11_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1020@09-02-2026_07-31-11_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1021@09-02-2026_07-31-11_thumb.jpg"
    ]
  },
  {
    "no": 371,
    "brand": "JEAN PAUL GAULTIER",
    "name": "Le Male Le Parfum",
    "vibe": "Jean Paul Gaultier Le Male Le Parfum is an amber woody fragrance characterized by its warm, spicy...",
    "sections": [
      "sec-queens",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "31999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1025@12-02-2026_13-41-20_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1025@12-02-2026_13-41-20_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1026@12-02-2026_13-41-20_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1027@12-02-2026_13-41-20_thumb.jpg"
    ]
  },
  {
    "no": 375,
    "brand": "BURBERRY",
    "name": "Goddess",
    "vibe": "Burberry Goddess is a unique gourmand aromatic fragrance for women, celebrated for its \"triple va...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "w",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "29999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1043@13-02-2026_07-33-51_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1043@13-02-2026_07-33-51_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1044@13-02-2026_07-33-51_thumb.jpg"
    ]
  },
  {
    "no": 377,
    "brand": "EXCLUSIVE",
    "name": "A Mix Of Warm",
    "vibe": "A mix of warm vanilla, creamy jasmine, and fresh neroli bud with an added mossy, woody depth.Size...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-sweet",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet",
      "oud"
    ],
    "price": "26999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1045@14-02-2026_11-32-06_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1045@14-02-2026_11-32-06_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1046@14-02-2026_11-32-06_thumb.jpg"
    ]
  },
  {
    "no": 379,
    "brand": "CREED",
    "name": "Aventus",
    "vibe": "Grapefruit and woods create a deeper and warmer Aventus-style profile. Suggests: for special occasions, for evenings, for formal settings.",
    "sections": [
      "sec-kings",
      "sec-fresh",
      "sec-designer"
    ],
    "g": "m",
    "size": "100ml",
    "orig": true,
    "tags": [
      "fresh"
    ],
    "price": "12000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1055@18-02-2026_00-44-50_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1055@18-02-2026_00-44-50_thumb.jpg"
    ]
  },
  {
    "no": 380,
    "brand": "EXCLUSIVE",
    "name": "A Sophisticated Blend Of",
    "vibe": "A sophisticated blend of warm spices, aromatic lavender, and sweet vanilla. It&apos;s described a...",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "31999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1056@19-02-2026_01-29-11_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1056@19-02-2026_01-29-11_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1057@19-02-2026_01-29-11_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1058@19-02-2026_01-29-11_thumb.jpg"
    ]
  },
  {
    "no": 383,
    "brand": "LATTAFA",
    "name": "Maahir Legacy Silver",
    "vibe": "Maahir Legacy Silver BottleVibe Fresh, clean, sharp, and, in some cases, compared to a &quot;mint...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1075@24-02-2026_01-13-24_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1075@24-02-2026_01-13-24_thumb.jpg"
    ]
  },
  {
    "no": 384,
    "brand": "LATTAFA",
    "name": "Maahir Legacy Silver",
    "vibe": "Maahir Legacy Silver Bottle Vibe Fresh, clean, sharp, and, in some cases, compared to a \"minty sp...",
    "sections": [
      "sec-unisex",
      "sec-oud",
      "sec-fresh",
      "sec-woody"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "oud"
    ],
    "price": "7500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1076@24-02-2026_01-13-24_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1076@24-02-2026_01-13-24_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1077@24-02-2026_01-13-24_thumb.jpg"
    ]
  },
  {
    "no": 386,
    "brand": "EXCLUSIVE",
    "name": "His Confession Is A",
    "vibe": "His Confession is a masculine, spicy gourmand with iris, vanilla, and incense.Her Confession is a...",
    "sections": [
      "sec-queens",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "9999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1078@26-02-2026_00-19-21_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1078@26-02-2026_00-19-21_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1079@26-02-2026_00-19-21_thumb.jpg"
    ]
  },
  {
    "no": 388,
    "brand": "EXCLUSIVE",
    "name": "Saheb Perfume Celebrated As",
    "vibe": "SAHEB perfume celebrated as affordable luxury that offers high end performance and presentation c...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "5500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1080@28-02-2026_00-00-03_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1080@28-02-2026_00-00-03_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1081@28-02-2026_00-00-03_thumb.jpg"
    ]
  },
  {
    "no": 390,
    "brand": "EXCLUSIVE",
    "name": "Lv Imagination Size Mlprice",
    "vibe": "!! LV Imagination 💪🏾💪🏾Size mlPrice , Br📍 @dagu_perfume📱https //www.tiktok.com/@dagu_perfume?_t= i...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1087@04-03-2026_05-03-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1087@04-03-2026_05-03-17_thumb.jpg"
    ]
  },
  {
    "no": 391,
    "brand": "EXCLUSIVE",
    "name": "Lv Imagination",
    "vibe": "!! LV Imagination 💪🏾💪🏾 Size ml Price , Br 📍 @dagu_perfume 📱https //www.tiktok.com/@dagu_perfume?_...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1088@04-03-2026_05-03-17_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1088@04-03-2026_05-03-17_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1089@04-03-2026_05-03-17_thumb.jpg"
    ]
  },
  {
    "no": 393,
    "brand": "EXCLUSIVE",
    "name": "Siruini Mouth Is A",
    "vibe": "Siruini mouth spray is a ml, portable, probiotic powered, and fruity breath freshener (mint, peac...",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1090@06-03-2026_12-17-29_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1090@06-03-2026_12-17-29_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1091@06-03-2026_12-17-29_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1092@06-03-2026_12-17-29_thumb.jpg"
    ]
  },
  {
    "no": 396,
    "brand": "VIKTOR&ROLF",
    "name": "Spicebomb Extreme",
    "vibe": "Tobacco, cinnamon, and vanilla create a powerful and warm spicy scent. Suggests: for winter, for evening wear, for strong presence.",
    "sections": [
      "sec-unisex",
      "sec-sweet",
      "sec-fresh"
    ],
    "g": "m",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "27000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1109@16-03-2026_03-36-21_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1109@16-03-2026_03-36-21_thumb.jpg"
    ]
  },
  {
    "no": 397,
    "brand": "EXCLUSIVE",
    "name": "Size Mlprice - Dagu_Perfume",
    "vibe": "Size mlPrice , Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1110@18-03-2026_02-57-42_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1110@18-03-2026_02-57-42_thumb.jpg"
    ]
  },
  {
    "no": 398,
    "brand": "EXCLUSIVE",
    "name": "Size Ml",
    "vibe": "Size ml Price , Br @dagu_perfume",
    "sections": [
      "sec-unisex",
      "sec-fresh"
    ],
    "g": "u",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11999",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1111@18-03-2026_02-57-43_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1111@18-03-2026_02-57-43_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1112@18-03-2026_02-57-43_thumb.jpg",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1113@18-03-2026_02-57-43_thumb.jpg"
    ]
  },
  {
    "no": 401,
    "brand": "LATTAFA",
    "name": "Layaan",
    "vibe": "Elegant gardenia and lily with soft woody undertones. Suggests: for work, for refined wear, for clean elegance.",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1114@19-03-2026_05-59-16_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1114@19-03-2026_05-59-16_thumb.jpg"
    ]
  },
  {
    "no": 402,
    "brand": "LATTAFA",
    "name": "Layaan Lattafa Elegant Fresh",
    "vibe": "“Layaan Lattafa” Elegant, Fresh, elegant fruity floral with juicy green pear and mandarin opening...",
    "sections": [
      "sec-queens",
      "sec-fresh"
    ],
    "g": "w",
    "size": "100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "11000",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1115@19-03-2026_05-59-16_thumb.jpg",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/289b2c513a6195ba82b9175006a48600519edc07/Perfume Photos 1/photo_1115@19-03-2026_05-59-16_thumb.jpg"
    ]
  },
  {
    "no": 501,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 138 – Aventus Clone",
    "vibe": "Smoky pineapple freshness with woody depth. Clean masculine dominance with fruity opening. Strong projection, signature everyday luxury scent. Suggests: Strong projection, signature everyday luxury scent.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 502,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 199 – Baccarat Rouge 540 Clone",
    "vibe": "Transparent sugary amber with airy sweetness. Radiant, addictive, and ultra-modern luxury vibe. Leaves a strong, long-lasting elegant trail. Suggests: Leaves a strong, long-lasting elegant trail.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 503,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 146 – Versace Eros Clone",
    "vibe": "Sweet vanilla mint with loud youthful energy. Fresh opening with warm seductive dry down. Perfect for clubbing and attention grabbing. Suggests: Perfect for clubbing and attention grabbing.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 504,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 147 – Dior Sauvage Elixir Clone",
    "vibe": "Dark spicy lavender with extreme power. Rich, masculine, and bold evening presence. Very strong projection and long-lasting scent. Suggests: Very strong projection and long-lasting scent.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 505,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 24 – Invictus Clone",
    "vibe": "Fresh marine sweetness with sporty vibe. Bright citrus mixed with sweet amber base. Perfect for gym, casual, and daily wear. Suggests: Perfect for gym, casual, and daily wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 506,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 195 – Bleu de Chanel Clone",
    "vibe": "Clean citrus woods with smooth elegance. Balanced fresh and woody professional scent. Perfect signature for office and daily use. Suggests: Perfect signature for office and daily use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 507,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 145 – Ombre Leather Clone",
    "vibe": "Dark leather with smoky masculine edge. Smooth, rich, and slightly sweet undertone. Best for night wear and confident aura. Suggests: Best for night wear and confident aura.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 508,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 143 – The One (D&G) Clone",
    "vibe": "Warm tobacco amber with romantic feel. Soft spicy sweetness and smooth depth. Perfect for dates and intimate settings. Suggests: Perfect for dates and intimate settings.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 509,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 144 – Stronger With You Clone",
    "vibe": "Sweet chestnut vanilla with warm spice. Modern youthful and cozy fragrance. Perfect for winter and relationships. Suggests: Perfect for winter and relationships.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 510,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 153 – Lost Cherry Clone",
    "vibe": "Sweet cherry almond syrupy richness. Deep gourmand with luxurious sweetness. Perfect for night, dates, and standout scent. Suggests: Perfect for night, dates, and standout scent.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 511,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 141 – Black Opium Clone",
    "vibe": "Sweet coffee vanilla feminine richness. Dark gourmand with addictive sweetness. Perfect for nightlife and winter. Suggests: Perfect for nightlife and winter.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 512,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 152 – Good Girl Clone",
    "vibe": "Floral creamy sweetness with cocoa base. Elegant feminine and seductive tone. Perfect for parties and special occasions. Suggests: Perfect for parties and special occasions.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 513,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 193 – La Belle Clone",
    "vibe": "Juicy pear vanilla sweet sensual scent. Deep fruity gourmand with smooth warmth. Perfect for romantic nights. Suggests: Perfect for romantic nights.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 514,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 194 – L’Interdit Clone",
    "vibe": "White floral with dark sweet undertone. Elegant, strong, and slightly mysterious. Perfect for evening classy wear. Suggests: Perfect for evening classy wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 515,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 121 – Erba Pura Clone",
    "vibe": "Bright fruity explosion with musky base. Extremely loud and long-lasting sweetness. Perfect for hot weather and attention. Suggests: Perfect for hot weather and attention.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 516,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 167 – Baccarat Rouge Variant",
    "vibe": "Airy burnt sugar with woody amber feel. Clean luxurious and addictive scent trail. Perfect for elite signature scent. Suggests: Perfect for elite signature scent.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 517,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 173 – Erba Pura Variant",
    "vibe": "Hyper fruity candy-like projection beast. Bright citrus mixed with creamy musk. Perfect for loud summer presence. Suggests: Perfect for loud summer presence.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 518,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 175 – Good Girl Gone Bad Clone",
    "vibe": "Floral fruity creamy soft sweetness. Elegant niche feminine fragrance style. Perfect for soft luxury wear. Suggests: Perfect for soft luxury wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 519,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 181 – Morning Musks Clone",
    "vibe": "Clean musky fresh soft skin scent. Very smooth and minimalistic profile. Perfect for daily subtle elegance. Suggests: Perfect for daily subtle elegance.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 520,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 185 – Vodka on the Rocks Clone",
    "vibe": "Cold metallic citrus with woody freshness. Unique icy and refreshing composition. Perfect for modern clean aesthetic. Suggests: Perfect for modern clean aesthetic.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 521,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 197 – Tobacco Vanille Clone",
    "vibe": "Heavy sweet tobacco with spicy vanilla. Warm, bold, and luxurious winter scent. Perfect for night and strong presence. Suggests: Perfect for night and strong presence.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 522,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 169 – Bal d’Afrique Clone",
    "vibe": "Citrus woody with creamy sweetness. Elegant niche bright and smooth vibe. Perfect for stylish daily wear. Suggests: Perfect for stylish daily wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 523,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 164 – Molecule 01 Clone",
    "vibe": "Minimal woody ISO E super scent. Clean, airy, and skin-like projection. Perfect for layering or subtle wear. Suggests: Perfect for layering or subtle wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 524,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 166 – Molecule 02 Clone",
    "vibe": "Ambergris fresh aquatic clean scent. Light, smooth, and very modern smell. Perfect for fresh minimalist lovers. Suggests: Perfect for fresh minimalist lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 525,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 236 – Black Afgano Clone",
    "vibe": "Dark resinous smoky deep intensity. Strong niche bold and mysterious aura. Perfect for winter nights. Suggests: Perfect for winter nights.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 526,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 151 – Mukhallat Clone",
    "vibe": "Sweet fruity vanilla with creamy base. Middle Eastern rich gourmand style. Perfect for luxury sweet lovers. Suggests: Perfect for luxury sweet lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 527,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 149 – Intense Cafe Clone",
    "vibe": "Coffee rose with sweet vanilla base. Warm cozy and slightly floral scent. Perfect for winter and evening wear. Suggests: Perfect for winter and evening wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 528,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 153 – Orange Flowers Clone",
    "vibe": "Fresh floral citrus soft sweetness. Light, elegant, and clean feminine vibe. Perfect for daily wear. Suggests: Perfect for daily wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 529,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 145 – Fruits of the Musk Clone",
    "vibe": "Fruity musky clean soft sweetness. Fresh and slightly creamy scent profile. Perfect for casual clean vibe. Suggests: Perfect for casual clean vibe.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 530,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 147 – Greyland Clone",
    "vibe": "Woody spicy aromatic masculine scent. Clean yet slightly dark composition. Perfect for mature daily use. Suggests: Perfect for mature daily use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 531,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 89 – Black Orchid Clone",
    "vibe": "Dark chocolate floral spicy richness. Heavy, mysterious, and luxurious scent. Perfect for bold evening presence. Suggests: Perfect for bold evening presence.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 532,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 165 – Fleur Narcotique Clone",
    "vibe": "Fresh fruity floral airy sweetness. Soft luxurious and very addictive scent. Perfect for everyday elegance. Suggests: Perfect for everyday elegance.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 533,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 203 – Kirke Clone",
    "vibe": "Fruity musky tropical sweetness. Very loud and attention grabbing scent. Perfect for summer standout use. Suggests: Perfect for summer standout use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 534,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 205 – Andromeda Clone",
    "vibe": "Bright fruity creamy smooth blend. Elegant niche feminine leaning scent. Perfect for luxury daytime wear. Suggests: Perfect for luxury daytime wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 535,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 221 – Black Phantom Clone",
    "vibe": "Dark rum chocolate coffee richness. Heavy gourmand deep luxurious scent. Perfect for night and winter. Suggests: Perfect for night and winter.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 536,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 223 – Intoxicated Clone",
    "vibe": "Spicy coffee cardamom rich blend. Warm, bold, and addictive profile. Perfect for unique niche lovers. Suggests: Perfect for unique niche lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 537,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 225 – Kabul Oud Clone",
    "vibe": "Oud spicy woody strong intensity. Traditional Middle Eastern richness. Perfect for cultural bold wear. Suggests: Perfect for cultural bold wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 538,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 233 – Cedre Atlas Clone",
    "vibe": "Dry woody citrus fresh elegance. Clean niche minimalistic composition. Perfect for professional use. Suggests: Perfect for professional use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 539,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 235 – More Than Words Clone",
    "vibe": "Sweet fruity oud deep richness. Complex niche storytelling fragrance. Perfect for artistic personalities. Suggests: Perfect for artistic personalities.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 540,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 237 – Shaik Lion Special",
    "vibe": "Heavy woody spicy strong masculine. Bold and intense presence scent. Perfect for dominance aura. Suggests: Perfect for dominance aura.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 541,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 239 – Shaik Mustang Special",
    "vibe": "Warm spicy woody energetic profile. Masculine and slightly sweet vibe. Perfect for daily confident wear. Suggests: Perfect for daily confident wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 542,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 245 – Sospiro Soprano Clone",
    "vibe": "Fruity floral powdery richness. Elegant niche sweet composition. Perfect for classy occasions. Suggests: Perfect for classy occasions.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 543,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 214 – Pretty Fruity Clone",
    "vibe": "Bright fruity playful sweetness. Light and cheerful scent profile. Perfect for casual use. Suggests: Perfect for casual use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 544,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 216 – Chocolate Greedy Clone",
    "vibe": "Pure chocolate vanilla dessert scent. Extremely sweet gourmand fragrance. Perfect for cozy winter nights. Suggests: Perfect for cozy winter nights.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 545,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 218 – Wild Pears Clone",
    "vibe": "Fresh juicy pear fruity brightness. Light and clean sweet freshness. Perfect for summer daytime. Suggests: Perfect for summer daytime.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 546,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 219 – Sugar Clone",
    "vibe": "Pure sugary sweet candy scent. Very simple but addictive sweetness. Perfect for sweet lovers. Suggests: Perfect for sweet lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 547,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 211 – Gold Leather Clone",
    "vibe": "Leather citrus warm elegance. Balanced masculine luxury profile. Perfect for formal wear. Suggests: Perfect for formal wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 548,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 187 – Chanel Paris Biarritz Clone",
    "vibe": "Fresh citrus marine clean scent. Light and airy beach vibe. Perfect for summer use. Suggests: Perfect for summer use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 549,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 189 – Chanel Deauville Clone",
    "vibe": "Green citrus woody freshness. Elegant and natural scent profile. Perfect for daytime wear. Suggests: Perfect for daytime wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 550,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 191 – Chanel Venise Clone",
    "vibe": "Soft floral citrus powdery scent. Smooth and refined feminine vibe. Perfect for classy casual use. Suggests: Perfect for classy casual use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 551,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 54 – Dior J’adore Clone",
    "vibe": "Bright floral jasmine with soft fruity sweetness. Elegant, feminine, and timeless luxury scent. Perfect for classy daytime and events. Suggests: Perfect for classy daytime and events.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 552,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 134 – La Vie Est Belle Clone",
    "vibe": "Sweet iris praline with creamy vanilla base. Rich, feminine, and highly addictive scent. Perfect for compliments and daily wear. Suggests: Perfect for compliments and daily wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 553,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 136 – Hypnotic Poison Clone",
    "vibe": "Vanilla almond creamy deep sweetness. Warm, seductive, and slightly mysterious. Perfect for night and romantic settings. Suggests: Perfect for night and romantic settings.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 554,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 148 – Lady Million Clone",
    "vibe": "Sweet honey floral with citrus sparkle. Bright, bold, and attention grabbing scent. Perfect for parties and nightlife. Suggests: Perfect for parties and nightlife.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 555,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 242 – Alien Clone",
    "vibe": "White floral jasmine with amber depth. Strong, radiant, and unique aura. Perfect for evening and signature scent. Suggests: Perfect for evening and signature scent.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 556,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 246 – Black Opium Intense Clone",
    "vibe": "Dark coffee vanilla with deeper richness. More powerful and sweeter than original. Perfect for cold nights and parties. Suggests: Perfect for cold nights and parties.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 557,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 121X – Erba Pura Intense",
    "vibe": "Hyper fruity musky explosive sweetness. Even louder and longer lasting profile. Perfect for extreme projection lovers. Suggests: Perfect for extreme projection lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 558,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 138X – Aventus Intense",
    "vibe": "Smokier pineapple with stronger woods. More masculine and deeper version. Perfect for signature dominance scent. Suggests: Perfect for signature dominance scent.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 559,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 199X – Baccarat Extract Clone",
    "vibe": "Denser sugar amber woody richness. More powerful and long-lasting version. Perfect for elite luxury impression. Suggests: Perfect for elite luxury impression.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 560,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 146X – Eros Flame Clone",
    "vibe": "Spicy citrus with warm vanilla base. More mature and intense than Eros. Perfect for night and winter use. Suggests: Perfect for night and winter use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 561,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 147X – Sauvage EDT Clone",
    "vibe": "Fresh bergamot with peppery spice. Clean, sharp, and very versatile scent. Perfect for everyday and office wear. Suggests: Perfect for everyday and office wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 562,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 195X – Bleu de Chanel Parfum",
    "vibe": "Deeper woody citrus smooth blend. More refined and elegant version. Perfect for formal and signature use. Suggests: Perfect for formal and signature use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 563,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 145X – Ombre Leather Intense",
    "vibe": "Richer leather with smoky depth. Stronger and more rugged profile. Perfect for bold masculine presence. Suggests: Perfect for bold masculine presence.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 564,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 143X – The One Intense",
    "vibe": "Darker tobacco with deeper sweetness. More seductive and long-lasting version. Perfect for romantic nights. Suggests: Perfect for romantic nights.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 565,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 144X – Stronger With You Intensely",
    "vibe": "Sweeter vanilla caramel with spice. Warmer and richer than original. Perfect for winter and cozy vibes. Suggests: Perfect for winter and cozy vibes.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 566,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 167X – Baccarat Air Variant",
    "vibe": "Lighter airy sugary woody scent. More subtle but still addictive. Perfect for daily elegant wear. Suggests: Perfect for daily elegant wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 567,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 173X – Fruity Candy Variant",
    "vibe": "Super bright candy-like fruity explosion. Extremely playful and loud scent. Perfect for summer fun vibe. Suggests: Perfect for summer fun vibe.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 568,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 181X – Musky Clean Intense",
    "vibe": "Soft skin-like musk with stronger base. Very smooth and comforting scent. Perfect for subtle signature use. Suggests: Perfect for subtle signature use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 569,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 185X – Icy Fresh Variant",
    "vibe": "Cold citrus metallic sharp freshness. Refreshing and modern clean vibe. Perfect for heat and daytime. Suggests: Perfect for heat and daytime.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 570,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 197X – Tobacco Vanilla Intense",
    "vibe": "Heavier tobacco with deeper sweetness. Warm, thick, and luxurious profile. Perfect for winter nights. Suggests: Perfect for winter nights.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 571,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 169X – Bal d’Afrique Intense",
    "vibe": "Creamier citrus with stronger woods. Smooth, elegant, and niche quality. Perfect for stylish everyday wear. Suggests: Perfect for stylish everyday wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 572,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 164X – Molecule Wood Boost",
    "vibe": "Stronger woody skin scent effect. Minimal yet very attractive aura. Perfect for layering and daily use. Suggests: Perfect for layering and daily use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 573,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 166X – Molecule Amber Boost",
    "vibe": "Clean ambergris with stronger projection. Smooth and modern fresh scent. Perfect for clean signature scent. Suggests: Perfect for clean signature scent.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 574,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 236X – Black Afgano Intense",
    "vibe": "Darker resin with deeper smokiness. Extremely bold and niche profile. Perfect for night dominance. Suggests: Perfect for night dominance.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 575,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 151X – Mukhallat Intense",
    "vibe": "Sweeter creamy fruity richness. More powerful Middle Eastern vibe. Perfect for sweet luxury lovers. Suggests: Perfect for sweet luxury lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 576,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 149X – Intense Cafe Extreme",
    "vibe": "Stronger coffee with thicker vanilla. Warmer and more addictive profile. Perfect for winter and dates. Suggests: Perfect for winter and dates.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 577,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 165X – Fleur Narcotique Intense",
    "vibe": "More fruity floral richness. Louder and longer lasting scent. Perfect for daily elegance. Suggests: Perfect for daily elegance.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 578,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 203X – Kirke Intense",
    "vibe": "Stronger tropical fruit sweetness. Extremely loud and attention grabbing. Perfect for summer standout. Suggests: Perfect for summer standout.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 579,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 205X – Andromeda Intense",
    "vibe": "Creamier fruity blend with depth. More luxurious niche feel. Perfect for classy daytime. Suggests: Perfect for classy daytime.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 580,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 221X – Black Phantom Intense",
    "vibe": "Heavier chocolate rum richness. Darker and more gourmand profile. Perfect for night wear. Suggests: Perfect for night wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 581,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 223X – Intoxicated Intense",
    "vibe": "Stronger spice and coffee mix. Warmer and richer composition. Perfect for niche lovers. Suggests: Perfect for niche lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 582,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 225X – Oud Intense Variant",
    "vibe": "Heavier oud with spicy woods. Deep traditional Middle Eastern scent. Perfect for bold wear. Suggests: Perfect for bold wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 583,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 233X – Cedre Atlas Intense",
    "vibe": "Stronger woody citrus dryness. More masculine and refined. Perfect for office and formal. Suggests: Perfect for office and formal.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 584,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 235X – More Than Words Intense",
    "vibe": "Richer fruity oud sweetness. More complex and artistic scent. Perfect for unique personalities. Suggests: Perfect for unique personalities.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "oud",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 585,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 237X – Lion Extreme",
    "vibe": "Heavier woody spice dominance. Stronger masculine energy. Perfect for bold presence. Suggests: Perfect for bold presence.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 586,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 239X – Mustang Extreme",
    "vibe": "Warmer spicy woody profile. More intense and energetic feel. Perfect for confident daily wear. Suggests: Perfect for confident daily wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 587,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 245X – Soprano Intense",
    "vibe": "Richer fruity floral powder blend. More elegant and long-lasting. Perfect for formal occasions. Suggests: Perfect for formal occasions.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 588,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 214X – Fruity Blast Intense",
    "vibe": "Stronger juicy fruit sweetness. Brighter and more playful scent. Perfect for casual fun use. Suggests: Perfect for casual fun use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 589,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 216X – Chocolate Extreme",
    "vibe": "Deeper chocolate vanilla dessert scent. Very sweet and heavy gourmand. Perfect for cozy nights. Suggests: Perfect for cozy nights.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 590,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 218X – Pear Intense",
    "vibe": "Stronger juicy pear freshness. More vibrant and clean sweetness. Perfect for summer wear. Suggests: Perfect for summer wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 591,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 219X – Sugar Extreme",
    "vibe": "Ultra sweet candy-like scent. Very simple but strong sweetness. Perfect for sweet lovers. Suggests: Perfect for sweet lovers.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 592,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 211X – Leather Gold Intense",
    "vibe": "Stronger leather with warm spice. More luxurious masculine feel. Perfect for formal nights. Suggests: Perfect for formal nights.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 593,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 187X – Biarritz Intense",
    "vibe": "Stronger citrus marine freshness. More vibrant and clean scent. Perfect for beach vibe. Suggests: Perfect for beach vibe.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 594,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 189X – Deauville Intense",
    "vibe": "Richer green citrus woody blend. More elegant and long-lasting. Perfect for daily wear. Suggests: Perfect for daily wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh",
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 595,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 191X – Venise Intense",
    "vibe": "Stronger floral citrus powder scent. More refined feminine profile. Perfect for classy occasions. Suggests: Perfect for classy occasions.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 596,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 300 – Random Fresh Blend",
    "vibe": "Generic citrus aquatic freshness. Clean, simple, and easy to wear. Perfect for daily casual use. Suggests: Perfect for daily casual use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 597,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 301 – Sweet Generic Blend",
    "vibe": "Basic sweet vanilla fruity scent. Soft and simple composition. Perfect for beginners. Suggests: Perfect for beginners.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 598,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 302 – Woody Generic Blend",
    "vibe": "Dry woody masculine scent. Simple and slightly warm profile. Perfect for office wear. Suggests: Perfect for office wear.",
    "sections": [
      "sec-boutique"
    ],
    "g": "m",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "woody"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  },
  {
    "no": 599,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 303 – Floral Generic Blend",
    "vibe": "Light floral sweet scent. Soft and feminine character. Perfect for daily use. Suggests: Perfect for daily use.",
    "sections": [
      "sec-boutique"
    ],
    "g": "w",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "sweet"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich.jfif"
    ]
  },
  {
    "no": 600,
    "brand": "SHAIK VARIANT",
    "name": "Shaik 304 – Musky Generic Blend",
    "vibe": "Clean musk skin-like scent. Very light and subtle profile. Perfect for layering. Suggests: Perfect for layering.",
    "sections": [
      "sec-boutique"
    ],
    "g": "u",
    "size": "50ml / 100ml",
    "orig": false,
    "tags": [
      "fresh"
    ],
    "price": "2500",
    "image": "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
    "images": [
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202_thumb.jfif",
      "https://raw.githubusercontent.com/biruk-melese-m/Dagu-Perfume-Shop/375dd93108cd01e360b65eb6bc4075ac392392fe/Perfume%20Photos/Shaik%20Rich%202.jfif"
    ]
  }
];







if (typeof module !== "undefined") module.exports = ALL;