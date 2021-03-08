'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mangas', [{
      title: 'Gyo',
      img: 'https://i.ytimg.com/vi/ChvlGUzRpyA/maxresdefault.jpg',
      description: 'Something is rotten in Okinawa...the floating stench of death hangs over the island..What is it? A strange, legged fish appears on the scene.',
      author: 'Junji Itou',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Solo Leveling',
      img: 'https://ggwp.id/media/wp-content/uploads/2020/04/solo-leveling-5.jpg',
      description: '10 years ago, after “the Gate” that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate.',
      author: '	Sung-Lak Jang',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Kimetsu No Yaiba',
      img: 'https://www.shareitnow.net/wp-content/uploads/2020/04/Kimetsu-no-Yaiba-Demon-slayer-chapter-203.jpg',
      description: 'One day, Tanjiro ventures off to another town to sell charcoal. When he gets home the following day, a terrible tragedy awaits him.',
      author: 'Gotouge Koyoharu',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'One Piece',
      img: 'https://cdn2.tstatic.net/jakarta/foto/bank/images/cover-komik-one-piece-91.jpg',
      description: 'One Piece follows the adventurous and funny story of Monkey D. Luffy. As a boy, Luffy has always wanted to be the Pirate King. His body obtained the properties of rubber after eating a Devil Fruit.',
      author: 'Oda Eiichiro',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Uzumaki',
      img: 'https://thebusyotaku.files.wordpress.com/2018/11/uzumaki31.png?w=656',
      description: 'Their town is haunted not by a person or being but by a pattern: uzumaki, the spiral, the hypnotic secret shape of the world.',
      author: 'Junji Itou',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mangas', null, {});
  }
};
