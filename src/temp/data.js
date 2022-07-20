import imageOne from './images/image-01.jpg';
import imageTwo from './images/image-02.jpg';
import imageThree from './images/image-03.jpg';
import imageFour from './images/image-04.jpg';
import imageFive from './images/image-05.jpg';

const searchData = [
  {
    id: 1,
    title: 'Everyone Needs a Special \'Sit Spot\' in Nature Nature Nature Nature Nature',
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the '
      + 'idea of having a special "sit spot" has stuck with me. This advice, which Louv '
      + 'attributes to nature educator Jon Young, is for both adults and children to find a spot '
      + 'in nature – it could be anywhere, from an urban backyard to a nearby forest – and to '
      + 'spend time in it, sitting quietly.',
    date: 'November 4, 2020',
    source: 'Treehugger',
    link: 'https://www.treehugger.com/special-sit-spot-nature-5085811',
    image: imageOne,
  },
  {
    id: 2,
    title: 'Nature makes you better',
    text: 'We all know how good nature can make us feel. We have known it for millennia: the '
      + 'sound of the ocean, the scents of a forest, the way dappled sunlight dances through '
      + 'leaves.',
    date: 'February 19, 2019',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/travel/article/partner-content-nature-makes-you-better',
    image: imageTwo,
  },
  {
    id: 3,
    title: 'Grand Teton Renews Historic Crest Trail',
    text: '“The linking together of the Cascade and Death Canyon trails, at their heads, took '
      + 'place on October 1, 1933, and marked the first step in the realization of a plan whereby '
      + 'the hiker will be enabled to visit that most fascinating region…',
    date: 'October 19, 2020',
    source: 'National Parks Traveler',
    link: 'https://www.nationalparkstraveler.org/2020/10/grand-teton-renews-historic-crest-trail',
    image: imageThree,
  },
];

const savedData = [
  {
    keyword: 'Nature',
    ...searchData[0],
  },
  {
    keyword: 'Nature',
    ...searchData[1],
  },
  {
    id: 4,
    keyword: 'Yellowstone',
    title: 'Nostalgic Photos of Tourists in U.S. National Parks',
    text: 'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and '
      + 'conservation photographers who just completed a project and book they call their love '
      + 'letter to nature. "Project WILD" features images and videos from their 25 expeditions '
      + 'on all seven continents over five years.',
    date: 'October 19, 2020',
    source: 'National Geographic',
    link: 'https://www.nationalgeographic.com/travel/article/sightseer-american-tourists-in-national-parks',
    image: imageFour,
  },
  {
    keyword: 'Parks',
    ...searchData[2],
  },
  {
    id: 5,
    keyword: 'Photography',
    title: 'Scientists Don\'t Know Why Polaris Is So Weird',
    text: 'Humans have long relied on the starry sky to push into new frontiers, sail to the '
      + 'very edge of the world and find their way back home again. Even animals look to the '
      + 'stars to guide them.',
    date: 'March 16, 2020',
    source: 'Treehugger',
    link: 'https://www.treehugger.com/polaris-north-star-facts-how-big-far-4859425',
    image: imageFive,
  },
];

export {
  searchData,
  savedData,
};
