const NEWS_VALUE = 100;
const MAX_WORD_LENGHT = 17;
const MIN_STRING_LENGHT = 3;
const MAX_STRING_LENGHT = 15;
const MIN_NEWS_LENGHT = 3;
const MAX_NEWS_LENGHT = 7;
const MAX_PARAGRAPH_VALUE = 3;
const START_DATE = new Date("2019-08-14");
const CHARS = 'abcdefghijklmnopqrstuvwxyz';

const randomWord = () => {
  const length = Math.ceil(Math.random() * MAX_WORD_LENGHT);
  let result = '';
  for (let i = length; i > 0; --i) result += CHARS[Math.floor(Math.random() * CHARS.length)];
  return result;
};

const randomNumber = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const capitalizeFirst = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const randomSentence = () => {
  const length = randomNumber(MIN_STRING_LENGHT, MAX_STRING_LENGHT);
  let result = capitalizeFirst(randomWord() + ' ');
  for (let i = length; i > 0; --i) result += randomWord() + ' ';
  return result.slice(0, -1) + '.';
};

const randomAnons = () => {
  const length = randomNumber(MIN_NEWS_LENGHT, MAX_NEWS_LENGHT);
  let result = '';
  for (let i = length; i > 0; --i) result += randomSentence();
  return result;
};

const randomText = () => {
  const length = randomNumber(1, MAX_PARAGRAPH_VALUE);
  let result = [];
  for (let i = length; i > 0; --i) result.push(randomAnons());
  return result;
};

const goodDateWithRandomHoursAndMinutes = (date) => {
  const hours = randomNumber(0, 23);
  const minutes = randomNumber(0, 59);
  return ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
    date.getFullYear() + " " + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);
};

const getDatesArray = (startDate) => {
    const result = [];
    let date = startDate;
    for (let d = 1; d <= NEWS_VALUE; d++) {
      date.setDate(date.getDate() + 1);
      result.unshift(goodDateWithRandomHoursAndMinutes(new Date(date)));
    }
    return result;
};
const datesArray = getDatesArray(START_DATE);

const CONTENT = [];
for (let id = 1; id <= NEWS_VALUE; id++) {
  CONTENT.push({
    id,
    date: datesArray[id - 1],
    header: randomSentence(),
    anons: randomAnons(),
    text: randomText(),
  });
}

export default CONTENT;
