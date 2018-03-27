/*
!!! 1. Создайте объект keyTrainer, содержащий свойство chars, значением которого будет массив символов алфавита.
chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
!!! 2. Добавьте свойство charCount и метод setCharCount. Метод делает запрос через prompt о количестве символов, которые пользователь должен будет набрать.
3. Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным числом. Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).
!!! 4. Создайте свойство task и метод createTask, который создает массив длинной в charCount и заполняет его случайными буквами из массива chars.
!!! 5. Создайте метод startTask, который с помощью prompt выводит строку из массива task и просит набрать эту строку в этом же prompt сообщении.
!!! 6. Результат, полученный методом startTask запишите в свойство userInput и затем сравните строки userInput и task посимвольно. Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.
!!! 7. Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.
!!! 8. Все свойства и методы должны быть внутри одного объекта keyTrainer, но вызов по очереди всех методов поместите внутри функции run и затем вызовите эту функцию.
*/

// Task 1
const keyTrainer = {
  chars: [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ],
  // Task 2
  charCount: '',
  setCharCount: function(a) {
    this.charCount = a;
    const char = prompt(`Enter ${this.charCount} symbols`, '');
    if (char.length === this.charCount) {
      console.log('OK');
    } else {
      console.log('K.O.');
    }
  },
  // Task 3
  checkPositiveInteger: function() {},

  // Task 4
  task: [],
  createTask: function(max) {
    for (let i = 0; i < this.charCount; i++) {
      const a = Math.floor(Math.random() * max);
      this.task.push(this.chars[a]);
    }
    console.log('this.task - ', this.task);
  },
  // Task 5
  startTask: function() {
    const taskRndChars = prompt(`Repeat this => ${this.task} <= pls`, '');
    const x = taskRndChars.split('');
    // Task 6
    this.userInput = x;
    this.userInput.map((item, idx) => {
      if (item != this.task[idx]) {
        this.userErrors++;
        console.log(`You made ${this.userErrors} mistakes. Try again`);
      } else {
        this.userErrors = 0;
        // Task 7
        console.log('Congratulations');
      }
    });
    // if (this.userErrors > 0) {
    //   console.log(`You made ${this.userErrors} mistakes. Try again`);
    // }
  },
  // Task 6
  userInput: [],
  userErrors: [],
};

const run = () => {
  keyTrainer.setCharCount(3);
  keyTrainer.createTask(keyTrainer.chars.length);
  keyTrainer.startTask();
};

run();
