import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodDetailsComponent implements OnInit {
  details = [
    {


      'id': 1,
      name: 'Dosa',
      description: 'A dosa is a cooked flat thin layered rice batter, originating from South India, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram ground together in a fine, smooth batter with a dash of salt. Dosas are a typical part of the Southern Indian and Sri Lankan Tamil diets, but the dish is now popular all over the Indian subcontinent. Traditionally, dosas are served hot along with sambar and chutney. They can be consumed with idli podi as well',
      price: '5',
      img: '/assets/1.jfif'


    },

    {


      'id': 1,
      name: 'Dosa',
      description: 'A dosa is a cooked flat thin layered rice batter, originating from South India, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram ground together in a fine, smooth batter with a dash of salt. Dosas are a typical part of the Southern Indian and Sri Lankan Tamil diets, but the dish is now popular all over the Indian subcontinent. Traditionally, dosas are served hot along with sambar and chutney. They can be consumed with idli podi as well',
      price: '5',
      img: '/assets/2.jfif'


    },
    {


      'id': 1,
      name: 'Dosa',
      description: 'A dosa is a cooked flat thin layered rice batter, originating from South India, made from a fermented batter. It is somewhat similar to a crepe in appearance. Its main ingredients are rice and black gram ground together in a fine, smooth batter with a dash of salt. Dosas are a typical part of the Southern Indian and Sri Lankan Tamil diets, but the dish is now popular all over the Indian subcontinent. Traditionally, dosas are served hot along with sambar and chutney. They can be consumed with idli podi as well',
      price: '5',
      img: '/assets/download.jfif'


    },


    {


      'id': 2,
      name: 'Appam',
      description: 'Appam ஆப்பம் a type of pancake, originating from the Indian subcontinent, made with fermented rice batter and coconut milk. It is a common food in Kerala,[1][2][3][4][5] Tamil Nadu and Sri Lanka.[6] It is eaten most frequently for breakfast or dinner',
      price: '6',
      img: '/assets/appam.jfif'
    },
    {


      'id': 2,
      name: 'Appam',
      description: 'Appam ஆப்பம் a type of pancake, originating from the Indian subcontinent, made with fermented rice batter and coconut milk. It is a common food in Kerala, Tamil Nadu and Sri Lanka.It is eaten most frequently for breakfast or dinner',
      price: '6',
      img: '/assets/Appam1.jfif',
    },
    {


      'id': 2,
      name: 'Appam',
      description: 'Appam ஆப்பம் a type of pancake, originating from the Indian subcontinent, made with fermented rice batter and coconut milk. It is a common food in Kerala, Tamil Nadu and Sri Lanka. It is eaten most frequently for breakfast or dinner',
      price: '6',
      img: '/assets/Appam2.jfif',
    },






    {
      'id': 3,
      name: 'Puttu',
      description: 'Puttu (pronounced [ˈputtu]), or pittu (Malayalam: പുട്ട്; Tamil: புட்டு; Kannada: ಪುಟ್ಟು; Sinhala: පිට්ටු), is a breakfast dish eaten in Kerala, parts of Karnataka, and Sri Lanka. Puttu means "portioned" in Malayalam. It is made of steamed cylinders of ground rice layered with coconut, often with a sweet or savory filling on the inside. It is highly popular in the Indian state of Kerala as well as in many areas of Sri Lanka, where it is also known as pittu. Puttu is served with side dishes such as palm sugar or chickpea curry or banana. In Bhatkal Puttu is served with side dishes such as ghee and sugar or Paya.',
      price: '7',
      img: '/assets/puttu.jfif'
    },
    {
      'id': 3,
      name: 'Puttu',
      description: 'Puttu (pronounced [ˈputtu]), or pittu (Malayalam: പുട്ട്; Tamil: புட்டு; Kannada: ಪುಟ್ಟು; Sinhala: පිට්ටු), is a breakfast dish eaten in Kerala, parts of Karnataka, and Sri Lanka. Puttu means "portioned" in Malayalam. It is made of steamed cylinders of ground rice layered with coconut, often with a sweet or savory filling on the inside. It is highly popular in the Indian state of Kerala as well as in many areas of Sri Lanka, where it is also known as pittu. Puttu is served with side dishes such as palm sugar or chickpea curry or banana. In Bhatkal Puttu is served with side dishes such as ghee and sugar or Paya.',
      price: '7',
      img: '/assets/puttu1.jfif'
    },
    {
      'id': 3,
      name: 'Puttu',
      description: 'Puttu (pronounced [ˈputtu]), or pittu (Malayalam: പുട്ട്; Tamil: புட்டு; Kannada: ಪುಟ್ಟು; Sinhala: පිට්ටු), is a breakfast dish eaten in Kerala, parts of Karnataka, and Sri Lanka. Puttu means "portioned" in Malayalam. It is made of steamed cylinders of ground rice layered with coconut, often with a sweet or savory filling on the inside. It is highly popular in the Indian state of Kerala as well as in many areas of Sri Lanka, where it is also known as pittu. Puttu is served with side dishes such as palm sugar or chickpea curry or banana. In Bhatkal Puttu is served with side dishes such as ghee and sugar or Paya.',
      price: '7',
      img: '/assets/puttu3.jfif'
    },
    {
      'id': 4,
      name: 'Chappathi',
      description: 'Chapati (alternatively spelled chapatti, chappati, chapathi, or chappathi), (pronounced as IAST: capātī, capāṭī, cāpāṭi), also known as roti, rotli, safati, shabaati, phulka and (in the Maldives) roshi, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal, Bangladesh, Pakistan, Sri Lanka, East Africa and the Caribbean. Chapatis are made of whole wheat flour known as atta, mixed into dough with water, edible oil and optional salt in a mixing utensil called a parat, and is cooked on a tava (flat skillet)',
      price: '8',
      img: '/assets/chappathi.jfif'
    },
    {
      'id': 4,
      name: 'Chappathi',
      description: 'Chapati (alternatively spelled chapatti, chappati, chapathi, or chappathi), (pronounced as IAST: capātī, capāṭī, cāpāṭi), also known as roti, rotli, safati, shabaati, phulka and (in the Maldives) roshi, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal, Bangladesh, Pakistan, Sri Lanka, East Africa and the Caribbean Chapatis are made of whole wheat flour known as atta, mixed into dough with water, edible oil and optional salt in a mixing utensil called a parat, and is cooked on a tava (flat skillet)',
      price: '8',
      img: '/assets/chappathi1.jfif'
    },
    {
      'id': 4,
      name: 'Chappathi',
      description: 'Chapati (alternatively spelled chapatti, chappati, chapathi, or chappathi), (pronounced as IAST: capātī, capāṭī, cāpāṭi), also known as roti, rotli, safati, shabaati, phulka and (in the Maldives) roshi, is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal, Bangladesh, Pakistan, Sri Lanka, East Africa and the Caribbean. Chapatis are made of whole wheat flour known as atta, mixed into dough with water, edible oil and optional salt in a mixing utensil called a parat, and is cooked on a tava (flat skillet)',
      price: '8',
      img: '/assets/chappathi3.jfif'
    },
    {
      'id': 5,
      name: 'Poori',
      description: 'Puri (also spelled Poori) is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes',
      price: '6',
      img: '/assets/poori.jfif'
    },
    {
      'id': 5,
      name: 'Poori',
      description: 'Puri (also spelled Poori) is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes',
      price: '6',
      img: '/assets/poori1.jfif'
    },
    {
      'id': 5 ,
      name: 'Poori',
      description: 'Puri (also spelled Poori) is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes',
      price: '6',
      img: '/assets/poori2.jfif'
    },
    {
      'id': 6 ,
      name: 'Idli',
      description: 'Idli or idly (About this soundpronunciation (/ɪdliː/) are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in southern India and among Tamils in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice',
      price: '10',
      img: '/assets/idli.jpg'
    },
    {
      'id': 6 ,
      name: 'Idli',
      description: 'Idli or idly (About this soundpronunciation (/ɪdliː/) are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in southern India and among Tamils in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice',
      price: '10',
      img: '/assets/idli2.jfif'
    },
    {
      'id': 6 ,
      name: 'Idli',
      description: 'Idli or idly (About this soundpronunciation (/ɪdliː/) are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in southern India and among Tamils in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice',
      price: '10',
      img: '/assets/idli3.jfif'
    },


  ]








  constructor() { setTheme('bs4'); }

  ngOnInit() {
  }

}
