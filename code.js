const buttons = [];
const images = [
    'over-reach boots', 'halter', 'stirrups', 'bridle', 'head piece', 'noseband', 'tree', 'curb',
    'browband', 'helmet', 'chehk piece', 'rein', 'girth', 'stirrup leather',
    'saddle', 'lead rope', 'snaffle', 'horse rug', 'boots', 'saddlepad', 'bandages', 'whip', 'lunge',
    'saddlecloth', 'brush', 'hoof peak brush', 'horseshoe'
];
const BUTTONS_AMOUNT = 4;
const name = prompt('Как тебя зовут?');
//Ищем счетчики
const correctCounter = document.querySelector('#correct');
const wrongCounter = document.querySelector('#wrong');
//Ищем картинку
const img = document.querySelector('img');
const path = 'assets/';
const imgFormat = 'jpeg';
let correctAnswers = 0;
let wrongAnswers = 0;
let init = true;
let correctAnswer = '';
let message = '';

//Создаем функции
class Util {
    static randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    static shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
}

//Добавляем к кнопке номер
for (let i = 1; i <= 4; i++) {
    buttons.push(document.querySelector('#btn_' + i));
}

mainFlow();

//Перемешиваем массив с названиями и выводим значение кнопок
function mainFlow() {
    Util.shuffle(images);
    img.src = path + images[0] + '.' + imgFormat;
    const buttonsValues = images.slice(0, BUTTONS_AMOUNT);
    Util.shuffle(buttonsValues);
    correctAnswer = images[0];

    console.log(buttonsValues, correctAnswer);
    buttonsValues.forEach(
        (value, index) => {buttons[index].textContent = value;}
    );

    if (!init) return;

let a = 0;
//Проверка и изменение счета
    buttons.forEach((btn) => {
        console.log(1)
        btn.addEventListener('click', () => {
            console.log(btn.textContent, correctAnswer);
            if (btn.textContent === correctAnswer) {
                correctCounter.textContent = ++correctAnswers;
                a++;
            } else {
                wrongCounter.textContent = ++wrongAnswers;
                a++;
            }

            init = false;
            mainFlow();
            
            //Окончание игры
            if(a >= 15) {
                alert('Молодец, ' + name + '! Ты отвел(а) правильно на ' + correctAnswers + ' вопросов из 15.');

                if(correctAnswers <= 5) {
                    message = 'Тебе еще многое предстоит выучить!';
                } else if(correctAnswers <= 10 || correctAnswer > 5) {
                message = 'Ого, а ты уже что-то да знаешь!';
                } else {
                    message = 'Ничего себе! Для тебя есть что-то невозможное?!';
                }

                alert(message);
                alert('Обнови страницу чтобы начать сначала :3');
            }
        });
    });
}