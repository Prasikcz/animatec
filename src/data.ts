export const menu = [
    {
      id: 1,
      title: "Hlavní",
      listItems: [
        {
          id: 1,
          title: "Domů",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Můj profil",
          url: "/users/1",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Seznamy",
      listItems: [
        {
          id: 1,
          title: "Uživatelé",
          url: "/uzivatele",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Objednávky",
          url: "/objednavky",
          icon: "order.svg",
        },
      ],
    },
    {
      id: 3,
      title: "Údržba",
      listItems: [
        {
          id: 1,
          title: "Nastavení",
          url: "/test1",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Záloha",
          url: "/test2",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Statistika",
      listItems: [
        {
          id: 1,
          title: "Grafy",
          url: "/test3",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Logy",
          url: "/test4",
          icon: "log.svg",
        },
      ],
    },
  ];


 export const users = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: "text1@seznam.cz", phone: "777 888 999" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "text2@seznam.cz", phone: "777 888 998" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "text3@seznam.cz", phone: "777 888 997" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', email: "text4@seznam.cz", phone: "777 888 996" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: "text5@seznam.cz", phone: "777 888 995" },
    { id: 6, lastName: 'Melisandre', firstName: null, email: "text6@seznam.cz", phone: "777 888 994" },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: "text7@seznam.cz", phone: "777 888 993" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', email: "text8@seznam.cz" , phone: "777 888 992" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: "text9@seznam.cz" , phone: "777 888 991" },
];

export const orders = [
  { id: 1, orderNumber: 'FA00001', created: '2024-07-06', value: 548, state: "nová", userId: "1" },
  { id: 2, orderNumber: 'FA00002', created: '2024-07-06', value: 6488, state: "přijatá", userId: "1" },
  { id: 3, orderNumber: 'FA00003', created: '2024-07-06', value: 58988, state: "nová", userId: "1" },
  { id: 4, orderNumber: 'FA00004', created: '2024-07-06', value: 658, state: "vyřízeno", userId: "1" },
  { id: 5, orderNumber: 'FA00005', created: '2024-07-06', value: 968, state: "vyřízeno", userId: "1" },
  { id: 6, orderNumber: 'FA00006', created: '2024-07-06', value: 158, state: "vyřízeno", userId: "1" },
  { id: 7, orderNumber: 'FA00007', created: '2024-07-06', value: 5978, state: "nová", userId: "1" },
  { id: 8, orderNumber: 'FA00008', created: '2024-07-06', value: 1498, state: "přijatá", userId: "1" },
  { id: 9, orderNumber: 'FA00009', created: '2024-07-06', value: 35488, state: "přijatá", userId: "1" },
];