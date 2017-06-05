
import Ember from 'ember';
let rentalhome = [{
    id: 'sample_1',
    title: 'BuildingOne',
    owner: 'Adam',
    city: 'San Francisco',
    description : 'one',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'

  }, {
    id: 'sample_2',
    title: 'BuildingTwo',
    owner: 'Bob',
    city: 'Seattle',
    description : 'two',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
  }, {
    id: 'sample_3',
    title: 'BuildingThree',
    owner: 'Charlie',
    city: 'Portland',
    description : 'three',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
  },{
      id: 'sample_4',
      title: 'BuildingFour',
      owner: 'David',
      city: 'Finland',
      description : 'four',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    }, {
      id: 'sample_5',
      title: 'BuildingFive',
      owner: 'Emica',
      city: 'Holland',
      description : 'five',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
    }, {
      id: 'sample_6',
      title: 'BuildingSix',
      owner: 'Frandis',
      city: 'Germany',
      description : 'six',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
    },
    {
      id: 'sample_7',
      title: 'BuildingSeven',
      owner: 'George',
      city: 'Mexico',
      description : 'seven',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    },
    {
      id: 'sample_8',
      title: 'BuildingEight',
      owner: 'Henry',
      city: 'France',
      description : 'eight',
      image:'../images/img1.jpg'
}];
export default Ember.Route.extend({
  model() {
          return rentalhome;
  }
});
