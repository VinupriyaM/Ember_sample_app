
import Ember from 'ember';
let rentalhome = [{
    id: 'sample_1',
    title: 'Christ Statue',
    place: 'Brazil',
    image: '../images/img2.jpg'

  }, {
    id: 'sample_2',
    title: 'Great Wall Of China',
    place: 'China',
    image: '../images/img4.jpg'
  }, {
    id: 'sample_3',
    title: 'The Colosseum',
    place: 'Italy',
    image: '../images/img3.jpg'
  },{
      id: 'sample_4',
      title: 'Macchu Picchu',
      place: 'Peru',
      image: '../images/img6.jpg'
    }, {
      id: 'sample_5',
      title: 'Chichen Itza',
      place: 'Mexico',
      image: '../images/img5.jpg'
    }, {
      id: 'sample_6',
      title: 'Taj Mahal',
      place: 'India',
      image: '../images/img9.jpg'
    },
    {
      id: 'sample_7',
      title: 'Petra',
      place: 'Jordan',
      image: '../images/img7.jpg'
    },
    {
      id: 'sample_8',
      title: 'Kheops-Pyramid',
      place: 'Egypt',
      image:'../images/img1.jpg'
}];
export default Ember.Route.extend({
  model() {
          return rentalhome;
  }
});
