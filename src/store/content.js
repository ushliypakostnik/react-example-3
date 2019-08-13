const NEWS_VALUE = 100;
const MAX_WORD_LENGHT = 17;
const MIN_STRING_LENGHT = 3;
const MAX_STRING_LENGHT = 15;
const MIN_NEWS_LENGHT = 5;
const MAX_NEWS_LENGHT = 10;
const CHARS = 'abcdefghijklmnopqrstuvwxyz';

const randomWord = () => {
  const length = Math.ceil(Math.random() * MAX_WORD_LENGHT);
  let result = '';
  for (let i = length; i > 0; --i) result += CHARS[Math.floor(Math.random() * CHARS.length)];
  return result;
}

const randomNumber = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

const capitalizeFirst = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const randomSentence = () => {
  const length = randomNumber(MIN_STRING_LENGHT, MAX_STRING_LENGHT);
  let result = capitalizeFirst(randomWord() + ' ');
  for (let i = length; i > 0; --i) result += randomWord() + ' ';
  return result.slice(0, -1) + '.';
}

const randomNews = () => {
  const length = randomNumber(MIN_NEWS_LENGHT, MAX_NEWS_LENGHT);
  let result = '';
  for (let i = length; i > 0; --i) result += randomSentence() + ' ';
  return result;
}

const CONTENT = [];
for (let id = 1; id <= NEWS_VALUE; id++) {
  CONTENT.push({
    id,
    header: randomSentence(),
    text: randomNews(),
  });
}

export default CONTENT;
