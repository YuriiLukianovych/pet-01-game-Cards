const wrap = document.querySelector('.wrapper');
const cards = document.querySelectorAll('.card');

// КОНСТАНТЫ
const COLORS = ['tomato', 'pink', 'green', 'yellow']; // цвета для пар карточек
const N = cards.length; //количество карточек в игре

let colorsForCards; // массив выбраннных рандомно и тасовыных цветов для карточек

//получить цвета для каждой пары карточек:
colorsForCards = new Array(N / COLORS.length).fill(COLORS).flat();
console.log(colorsForCards);
// функция тасования массива Фишера-Йетса
function shuffle(arr) {
   for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
      //   [arr[i], arr[j]] = [arr[j], arr[i]];
   }
}

shuffle(colorsForCards); // тасование, чтобы цвета карточек были в произвольном порядке

cards.forEach((el, i) => {
   el.classList.add(`${colorsForCards[i]}`);
   //    console.log(el);
});

// =========================== ЛОГИКА ПРОГРАММЫ ====================

wrap.addEventListener('click', e => {
   if (!e.target.classList.contains('card')) {
      return false;
   }
   e.target.classList.toggle('hidden');
});
