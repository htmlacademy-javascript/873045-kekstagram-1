const photoParamsArray = [];

const userNames =
  [
    'Артём',
    'Кекс',
    'Саша',
    'Юля',
    'Лена',
  ];

const commentsMessage =
  [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];


const photoDescriprion =
  [
    'Закат на берегу океана',
    'Уютный кофейный уголок с книгой',
    'Радостный день на природе с семьей',
    'Городской пейзаж с высоты птичьего полета',
    'Восход солнца в горах'
  ];

// Генератор уникальных значений
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// Генератор повторяющихся значений
function getRandomDigits(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация id фото и url
const generatePhotoIdAndUrl = createRandomFromRangeGenerator(1, 25);


for (let i = 0; i < 15; i++) {
  const idAndUrl = generatePhotoIdAndUrl();
  const userPhotoParams = {
    id: idAndUrl,
    url: `photos/${idAndUrl}.jpg`,
    description: photoDescriprion[getRandomDigits(1, photoDescriprion.length - 1)],
    likes: getRandomDigits(1, 50)
  };

  const commentParams = {
    id: getRandomInteger(1, 25),
    avatar: `img/avatar-${getRandomDigits(1, 6)}.svg`,
    message: commentsMessage[getRandomDigits(0, commentsMessage.length - 1)],
    name: userNames[getRandomDigits(0, userNames.length - 1)]
  };

  photoParamsArray.push(userPhotoParams);
  photoParamsArray.push(commentParams);
}
