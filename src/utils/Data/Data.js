export const cities = [
  {
    city: "Слов'янськ",
    cityLatin: "Slavyansk",
    address: "Автовокзал, ул. Центральная, 47",
  },
  {
    city: "Краматорськ",
    cityLatin: "Kramatorsk",
    address: 'Остановка "Супермаркет Еко-маркет" (парковка), бул.',
  },
  {
    city: "Дружківка",
    cityLatin: "Druzhkivka",
    address: 'Автовокзал, ул. Олекси Тихого, 231',
  },
  {
    city: "Костянтинівка",
    cityLatin: "Kostyantynivka",
    address: 'пр-т Ломоносова, 123а',
  },
  {
    city: "Покровськ",
    cityLatin: "Pokrovsk",
    address: 'Автобусная остановка, ул. Свободы, 1, "АТБ" маркет',
  },
  {
    city: "Дніпро",
    cityLatin: "Dnipro",
    address: 'Ж/Д вокзал, площадь Вокзальная, 11',
  },
  {
    city: "Суми",
    cityLatin: "Sumy",
    address: 'Автобусная остановка ТЦ "Киев", ул. Кооперативная, 1',
  },
  {
    city: "Ромни",
    cityLatin: "Romny",
    address: 'Торговый центр "Терем"',
  },
  {
    city: "Лохвиця",
    cityLatin: "Lokhvitsa",
    address: 'ул. Тараса Шевченка, 6б',
  },
  {
    city: "Лубни",
    cityLatin: "Lubny",
    address: 'Ж/Д вокзал, пл. Вокзальная',
  },
  {
    city: "Полтава",
    cityLatin: "Poltava",
    address: 'Автобусная остановка, ул. Европейская, 187А, "McDonalds"',
  },
  {
    city: "Київ",
    cityLatin: "Kyiv",
    address: 'Ж/Д Вокзал, Вокзальная площадь, 1',
  },
];

export const routes =[
  {
    routeID: 15374,
    map: 'SL-DN',
    fork: [
      [
        {
          number: 7,
          city: "Kyiv",
          arrival: "19:30",
          departure: "null"
        },
      ],
      [
        {
          number: 7,
          city: "Poltava",
          arrival: "17:00",
          departure: "17:00",
          dispatchDays: ["Вт.", "Пт."]
        },
        {
          number: 8,
          city: "Lubny",
          arrival: "18:40",
          departure: "18:40",
          dispatchDays: ["Вт.", "Пт."]
        },
        {
          number: 9,
          city: "Lokhvitsa",
          arrival: "19:40",
          departure: "19:40",
          dispatchDays: ["Вт.", "Пт."]
        },
        {
          number: 10,
          city: "Romny",
          arrival: "20:30",
          departure: "20:30",
          dispatchDays: ["Вт.", "Пт."]
        },
        {
          number: 11,
          city: "Sumy",
          arrival: "22:00",
          departure: null,
          dispatchDays: ["Вт.", "Пт."]
        },
      ]
    ],
    stations: [
      {
        number: 1,
        city: "Slavyansk",
        arrival: null,
        departure: "6:45"
      },
      {
        number: 2,
        city: "Kramatorsk",
        arrival: "07:20",
        departure: "07:20"
      },
      {
        number: 3,
        city: "Druzhkivka",
        arrival: "07:40",
        departure: "07:40"
      },
      {
        number: 4,
        city: "Kostyantynivka",
        arrival: "08:00",
        departure: "08:00"
      },
      {
        number: 5,
        city: "Pokrovsk",
        arrival: "09:00",
        departure: "09:00"
      },
      {
        number: 6,
        city: "Dnipro",
        arrival: "12:00",
        departure: "12:00",
        transfer: true
      },
    ],
    priceFull: 600
  },
  {
    routeID: 15375,
    map: 'SL-SM',
    stations: [
      {
        number: 1,
        city: "Sumy",
        arrival: null,
        departure: "4:30",
        dispatchDays: ["Вт.", "Пт."]
      },
      {
        number: 2,
        city: "Romny",
        arrival: "5:30",
        departure: "5:30",
        dispatchDays: ["Вт.", "Пт."]
      },
      {
        number: 3,
        city: "Lokhvitsa",
        arrival: "6:00",
        departure: "6:00",
        dispatchDays: ["Вт.", "Пт."]
      },
      {
        number: 4,
        city: "Lubny",
        arrival: "7:00",
        departure: "7:00",
        dispatchDays: ["Вт.", "Пт."]
      },
      {
        number: 5,
        city: "Poltava",
        arrival: "9:00",
        departure: "9:00",
        dispatchDays: ["Вт.", "Пт."]
      },
      {
        number: 6,
        city: "Dnipro",
        arrival: "12:00",
        departure: "12:30",
        transfer: true
      },
      {
        number: 7,
        city: "Pokrovsk",
        arrival: "15:00",
        departure: "15:00"
      },
      {
        number: 8,
        city: "Kostyantynivka",
        arrival: "16:00",
        departure: "16:00"
      },
      {
        number: 9,
        city: "Druzhkivka",
        arrival: "16:20",
        departure: "16:20"
      },
      {
        number: 10,
        city: "Kramatorsk",
        arrival: "16:40",
        departure: "16:40"
      },
      {
        number: 11,
        city: "Slavyansk",
        arrival: "17:00",
        departure: null
      },
    ],
    priceFull: 2000
  },
  {
    routeID: 15172,
    map: 'SL-DN',
    stations: [
      {
        number: 1,
        city: "Slavyansk",
        arrival: null,
        departure: "8:00"
      },
      {
        number: 2,
        city: "Kramatorsk",
        arrival: "8:30",
        departure: "8:30"
      },
      {
        number: 3,
        city: "Druzhkivka",
        arrival: "8:45",
        departure: "8:45"
      },
      {
        number: 4,
        city: "Kostyantynivka",
        arrival: "9:00",
        departure: "9:00"
      },
      {
        number: 5,
        city: "Pokrovsk",
        arrival: "10:00",
        departure: "10:00"
      },
      {
        number: 6,
        city: "Dnipro",
        arrival:" 12:30",
        departure: null,
      },
    ],
    priceFull: 600
  },
  {
    routeID: 15650,
    map: 'SL-DN',
    stations: [
      {
        number: 1,
        city: "Dnipro",
        arrival: null,
        departure: "10:00",
      },
      {
        number: 2,
        city: "Pokrovsk",
        arrival: "12:30",
        departure: "12:30"
      },
      {
        number: 3,
        city: "Kostyantynivka",
        arrival: "13:30",
        departure: "13:30"
      },
      {
        number: 4,
        city: "Druzhkivka",
        arrival: "13:50",
        departure: "13:50"
      },
      {
        number: 5,
        city: "Kramatorsk",
        arrival: "14:10",
        departure: "14:10"
      },
      {
        number: 6,
        city: "Slavyansk",
        arrival: "14:30",
        departure: null
      },
    ],
    priceFull: 600
  },
  {
    routeID: 14899,
    map: 'SL-KY',
    stations: [
      {
        number: 1,
        city: "Slavyansk",
        arrival: null,
        departure: "12:30"
      },
      {
        number: 2,
        city: "Kramatorsk",
        arrival: "12:50",
        departure: "13:00"
      },
      {
        number: 3,
        city: "Druzhkivka",
        arrival: "13:20",
        departure: "13:20"
      },
      {
        number: 4,
        city: "Kostyantynivka",
        arrival: "13:50",
        departure: "14:00"
      },
      {
        number: 5,
        city: "Pokrovsk",
        arrival: "15:00",
        departure: "15:00"
      },
      {
        number: 6,
        city: "Dnipro",
        arrival: "18:00",
        departure: "22:00",
        transfer: true
      },
      {
        number: 7,
        city: "Kyiv",
        arrival: "5:30",
        departure: null,
      },
    ],
    priceFull: 1500
  },
  {
    routeID: 15651,
    map: 'SL-KY',
    stations: [
      {
        number: 1,
        city: "Slavyansk",
        arrival: null,
        departure: "16:00"
      },
      {
        number: 2,
        city: "Kramatorsk",
        arrival: "16:30",
        departure: "16:30"
      },
      {
        number: 3,
        city: "Druzhkivka",
        arrival: "16:45",
        departure: "16:45"
      },
      {
        number: 4,
        city: "Kostyantynivka",
        arrival: "17:00",
        departure: "17:00"
      },
      {
        number: 5,
        city: "Pokrovsk",
        arrival: "18:00",
        departure: "18:00"
      },
      {
        number: 6,
        city: "Dnipro",
        arrival: "21:00",
        departure: "22:00",
        transfer: true
      },
      {
        number: 7,
        city: "Kyiv",
        arrival: "5:30",
        departure: null,
      },
    ],
    priceFull: 1500
  },
  {
    routeID: 14898,
    map: 'SL-KY',
    stations: [
      {
        number: 1,
        city: "Kyiv",
        arrival: null,
        departure: "22:00",
      },
      {
        number: 2,
        city: "Dnipro",
        arrival: "5:30",
        departure: "07:00",
        transfer: true
      },
      {
        number: 3,
        city: "Pokrovsk",
        arrival: "9:30",
        departure: "9:30"
      },
      {
        number: 4,
        city: "Kostyantynivka",
        arrival: "10:30",
        departure: "10:30"
      },
      {
        number: 5,
        city: "Druzhkivka",
        arrival: "10:45",
        departure: "10:45"
      },
      {
        number: 6,
        city: "Kramatorsk",
        arrival: "11:00",
        departure: "11:00"
      },
      {
        number: 7,
        city: "Slavyansk",
        arrival: "11:30",
        departure: null
      },
    ],
    priceFull: 1500
  },
];

export const prices = {
  "Слов'янськ": {
    "Слов'янськ": false,
    "Краматорськ": 400,
    "Дружківка": 400,
    "Костянтинівка": 400,
    "Покровськ": 400,
    "Дніпро": 600,
    "Київ": 1500,
    "Полтава": 1500,
    "Лубни": 2000,
    "Лохвиця": 2000,
    "Ромни": 2000,
    "Суми": 2000,
  },
  "Краматорськ": {
    "Слов'янськ": 400,
    "Краматорськ": false,
    "Дружківка": 300,
    "Костянтинівка": 300,
    "Покровськ": 300,
    "Дніпро": 600,
    "Київ": 1500,
    "Полтава": 1500,
    "Лубни": 2000,
    "Лохвиця": 2000,
    "Ромни": 2000,
    "Суми": 2000,
  },
  "Дружківка": {
    "Слов'янськ": 400,
    "Краматорськ": 300,
    "Дружківка": false,
    "Костянтинівка": 300,
    "Покровськ": 300,
    "Дніпро": 600,
    "Київ": 1500,
    "Полтава": 1500,
    "Лубни": 2000,
    "Лохвиця": 2000,
    "Ромни": 2000,
    "Суми": 2000,
  },
  "Костянтинівка": {
    "Слов'янськ": 400,
    "Краматорськ": 300,
    "Дружківка": 300,
    "Костянтинівка": false,
    "Покровськ": 250,
    "Дніпро": 600,
    "Київ": 1500,
    "Полтава": 1500,
    "Лубни": 2000,
    "Лохвиця": 2000,
    "Ромни": 2000,
    "Суми": 2000,
  },
  "Покровськ": {
    "Слов'янськ": 400,
    "Краматорськ": 300,
    "Дружківка": 300,
    "Костянтинівка": 250,
    "Покровськ": false,
    "Дніпро": 500,
    "Київ": 1300,
    "Полтава": 1500,
    "Лубни": 2000,
    "Лохвиця": 2000,
    "Ромни": 2000,
    "Суми": 2000,
  },
  "Дніпро": {
    "Слов'янськ": 600,
    "Краматорськ": 600,
    "Дружківка": 600,
    "Костянтинівка": 600,
    "Покровськ": 500,
    "Дніпро": false,
    "Київ": false,
    "Полтава": 1500,
    "Лубни": false,
    "Лохвиця": false,
    "Ромни": false,
    "Суми": false,
  },
  "Київ": {
    "Слов'янськ": 1500,
    "Краматорськ": 1500,
    "Дружківка": 1500,
    "Костянтинівка": 1500,
    "Покровськ": 1300,
    "Дніпро": false,
    "Київ": false,
    "Полтава": false,
    "Лубни": false,
    "Лохвиця": false,
    "Ромни": false,
    "Суми": false,
  },
  "Полтава": {
    "Слов'янськ": 1500,
    "Краматорськ": 1500,
    "Дружківка": 1500,
    "Костянтинівка": 1500,
    "Покровськ": 1500,
    "Дніпро": false,
    "Київ": false,
    "Полтава": false,
    "Лубни": false,
    "Лохвиця": false,
    "Ромни": false,
    "Суми": false,
  },
  "Лубни": {
    "Слов'янськ": 2000,
    "Краматорськ": 2000,
    "Дружківка": 2000,
    "Костянтинівка": 2000,
    "Покровськ": 2000,
    "Дніпро": false,
    "Київ": false,
    "Полтава": false,
    "Лубни": false,
    "Лохвиця": false,
    "Ромни": false,
    "Суми": false,
  },
  "Лохвиця": {
    "Слов'янськ": 2000,
    "Краматорськ": 2000,
    "Дружківка": 2000,
    "Костянтинівка": 2000,
    "Покровськ": 2000,
    "Дніпро": false,
    "Київ": false,
    "Полтава": false,
    "Лубни": false,
    "Лохвиця": false,
    "Ромни": false,
    "Суми": false,
  },
  "Ромни": {
    "Слов'янськ": 2000,
    "Краматорськ": 2000,
    "Дружківка": 2000,
    "Костянтинівка": 2000,
    "Покровськ": 2000,
    "Дніпро": false,
    "Київ": false,
    "Полтава": false,
    "Лубни": false,
    "Лохвиця": false,
    "Ромни": false,
    "Суми": false,
  },
  "Суми": {
    "Слов'янськ": 2000,
    "Краматорськ": 2000,
    "Дружківка": 2000,
    "Костянтинівка": 2000,
    "Покровськ": 2000,
    "Дніпро": false,
    "Київ": false,
    "Полтава": false,
    "Лубни": false,
    "Лохвиця": false,
    "Ромни": false,
    "Суми": false,
  },
};




// const numberOfSeatsArr = [
//   {label: 1, key: 1},
//   {label: 2, key: 2},
//   {label: 3, key: 3}
// ];


// const citiesToSelect = [
//   {label: "Слов'янськ", key: "Слов'янськ-0"},
//   {label: 'Краматорськ', key: 'Краматорськ-1'},
//   {label: 'Дружківка', key: 'Дружківка-2'}
// ];
