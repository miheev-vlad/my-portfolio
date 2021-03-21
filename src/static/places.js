const places = [
  {
    title: 'Urban Renew App',
    demo: 'https://urban-app-a085c.web.app',
    description:
      "The application allows you to view proposals for improving the urban environment. You can leave your suggestion. To do this, you must enter the application if you have an account, if not, register.",
    imageUrl: process.env.PUBLIC_URL + '/assets/app1.jpg',
    time: 1500,
  },
  {
    title: 'City Improvement App',
    demo: 'https://city-app-project.herokuapp.com/',
    description:
      'The application allows you to view, comment and support suggestions for improving the urban environment. You can create and delete your suggestions. Using the application involves creating a profile.',
    imageUrl: process.env.PUBLIC_URL + '/assets/app2.jpg',
    time: 1500,
  },
  {
    title: 'Laptop Market App',
    demo: 'https://laptop-market.herokuapp.com/',
    description:
      `The application allows you to view product information. Add or remove goods from the cart, change the quantity. Checkout requires authorization. The data of the generated order is sent to the buyer's mail.`,
    imageUrl: process.env.PUBLIC_URL + '/assets/app3.jpg',
    time: 1500,
  },
  {
    title: 'ProgBook Chat App',
    demo: 'https://vigorous-wescoff-baaab2.netlify.app',
    description:
      'The application allows you to create posts about programming books. Posts can be liked and comments. You can delete your posts. To do this, you must enter the application if you have an account, if not, register.',
    imageUrl: process.env.PUBLIC_URL + '/assets/app4.jpg',
    time: 1500,
  }
];

export default places;
