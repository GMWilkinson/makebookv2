const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Book = require('../models/book');
const User = require('../models/user');
const Page = require('../models/page');

const userIds = [
  '5be9860fcb16d525543ceda1'
];
const userData = [{
  _id: userIds[0],
  username: 'Grant',
  email: 'g@g',
  password: 'pass',
  image: 'https://amac.us/wp-content/uploads/2013/12/1920x1080-funny-giraffe-desktop-wallpapers-free-download-backgrounds.jpg'
}, {
  _id: userIds[1],
  username: 'Bob',
  email: 'b@b',
  password: 'pass'
}];

const bookIds = [
  '5be9860fcb16d525543beda1',
  '5be9860fcb16d525543beda2',
  '5be9860fcb16d525543beda3',
  '5be9860fcb16d525543beda4'
];

const pageIds = [
  '5be9860fcb16d525543aeda1',
  '5be9860fcb16d525543aeda2',
  '5be9860fcb16d525543aeda3',
  '5be9860fcb16d525543aeda4',
  '5be9860fcb16d525543aeda5',
  '5be9860fcb16d525543aeda6',
  '5be9860fcb16d525543aeda7',
  '5be9860fcb16d525543aeda8',
  '5be9860fcb16d525543aeda9',
  '5be9860fcb16d525543feda8',
  '5be9860fcb16d525543feda9',
  '5be9860fcb16d525543deda1',
  '5be9860fcb16d525543deda2',
  '5be9860fcb16d525543deda3',
  '5be9860fcb16d525543deda4',
  '5be9860fcb16d525543deda5',
  '5be9860fcb16d525543deda6',
  '5be9860fcb16d525543deda7'
];

const bookData = [{
  _id: bookIds[0],
  isCompleted: false,
  title: 'Uncompleted Book',
  author: 'Grant',
  blurb: 'This is an unfinished book example, in the future this will be a tutorial on how to make a book yourself.',
  image: 'https://boxshot.com/boxshot/gallery/3d-ebook-cover/book-10.png'
}, {
  _id: bookIds[1],
  isCompleted: true,
  title: 'WDI 37',
  author: 'Bob',
  blurb: 'This is a short example story that I made to take up some space.',
  image: 'https://i.pinimg.com/originals/6a/5a/f0/6a5af02950db36b62e18773bb1adbf18.jpg'
}];

const pageData = [{
  _id: pageIds[0],
  isFirstPage: true,
  book: bookIds[0],
  text: 'This is the first page.',
  choices: [{
    text: 'Go to second page.',
    nextPage: pageIds[1]
  }, {
    text: 'Go to the third page.',
    nextPage: pageIds[2]
  }]
}, {
  _id: pageIds[1],
  book: bookIds[0],
  isFirstPage: false,
  text: 'This is the second page.',
  choices: [{
    text: 'Go to the third page.',
    nextPage: pageIds[2]
  }, {
    text: 'Go to the fourth page.',
    nextPage: pageIds[3]
  }, {
    text: 'Go back to the start, ie: you died!',
    nextPage: pageIds[0]
  }]
}, {
  _id: pageIds[2],
  book: bookIds[0],
  isFirstPage: false,
  text: 'This is the third page',
  choices: [{
    text: 'Go to the second page.',
    nextPage: pageIds[1]
  }, {
    text: 'Go to the fourth page',
    nextPage: pageIds[3]
  }]
}, {
  _id: pageIds[3],
  book: bookIds[0],
  isFirstPage: false,
  text: 'This is the fourth page. There are no more pages after this. You would have to create more pages and attach them.',
  choices: [{
    text: 'Take back to the start. Dead again!',
    nextPage: pageIds[0]
  }, {
    text: 'This will need to be attached to another page!',
    nextPage: pageIds[2]
  }]
}, {
  _id: pageIds[11],
  isFirstPage: true,
  book: bookIds[1],
  text: 'You\'ve just woken up, you forgot to set your alarm last night and you have to leave for college in five minutes. You rush around your house like a bewildered chipmunk trying to find some clean underwear. Suddenly it dawns on you, you have to leave or you\'ll be late for stand-up. Do you...',
  choices: [{
    text: 'Sod it! You can get the next train, and I\'m hungry anyway.',
    nextPage: pageIds[12]
  }, {
    text: 'Stick on some trousers and leave',
    nextPage: pageIds[13]
  }]
}, {
  _id: pageIds[12],
  book: bookIds[1],
  isFirstPage: false,
  text: 'You are full up and managed to find some clean pants in the drawer. You are running late but maybe if the wind is in your favour you can make it on time? Doubtful of your chances, you run out of the front door and across the road...',
  choices: [{
    text: 'And.....',
    nextPage: pageIds[15]
  }]
}, {
  _id: pageIds[13],
  book: bookIds[1],
  isFirstPage: false,
  text: 'You get to the station on time. The train is crammed with sheeple. No point giving in now, you take a run up and jam yourself into the tiniest gap. After an excruciating journey of armpits and bad breath you make it to Whitechapel Station. You have plenty of time to walk, but the District line will take you closer...',
  choices: [{
    text: 'Can\'t be bothered to walk. You can handle more squeezage.',
    nextPage: pageIds[14]
  }, {
    text: 'You\'ve got ages. The walk is\'nt far.',
    nextPage: pageIds[16]
  }]
}, {
  _id: pageIds[14],
  book: bookIds[1],
  isFirstPage: false,
  text: 'You have been suffocated by a huge walrus of a man\'s unwashed pits... Bad way to go.',
  choices: [{
    text: 'Return to start',
    nextPage: pageIds[11]
  }]
}, {
  _id: pageIds[15],
  book: bookIds[1],
  isFirstPage: false,
  text: 'Get hit by a bus! Ouch, you died!',
  choices: [{
    text: 'Go back to the start.',
    nextPage: pageIds[11]
  }]
}, {
  _id: pageIds[16],
  book: bookIds[1],
  isFirstPage: false,
  text: 'The walk is quite nice and helps you wake up enough that class today doesn\'t seem like such a daunting prospect. You reach GA and go upstairs, the time is 0956(project week). Do you...',
  choices: [{
    text: 'Go into class?',
    nextPage: pageIds[17]
  }, {
    text: 'Run outside for a quick smoke?',
    nextPage: pageIds[15]
  }]
}, {
  _id: pageIds[17],
  book: bookIds[1],
  isFirstPage: false,
  text: 'A sea of tired, project weary faces greet you. Rob comes in and the clank of twenty cups of coffee hitting the table in unison signals that it is time for stand-up, time to air your joys or woes, wins or losses. Either way, you have been chosen... What you talk about?',
  choices: []
}];

mongoose.connect(dbURI);
Book.collection.drop();
User.collection.drop();
Page.collection.drop();

Book.create(bookData)
  .then(books => {
    console.log(`${books.length} books created`);
    return Page.create(pageData);
  })
  .then(pages => {
    console.log(`${pages.length} pages created`);
    return User.create(userData);
  })
  .then(users => {
    console.log(`${users.length} users created`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
