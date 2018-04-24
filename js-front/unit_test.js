import calc from 'calc';

calc('+', 3,5);
calc('-', -3,15);

if (calc('+',3,5) !== 8) {
  console.log('Error');
}

// corner cases - пограничные случаи
calc('undefined', 3, 12); // NaN
calc('/', 8, 0); // Inf
calc('%', 8, 'string'); // Inf

// BEGIN (for loop)
export default (n, a, b) => {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % a === 0) {
      sum += a;
    }

    if (n % b === 0) {
      sum += b;
    }
  }

  return sum;
}
// END



// Алгоритм
// Задание начального состояния
// Проверка окончания процесса
// Получение нового состояния
// Повторение второго шага


Рекурсивный vs Итеративный

РП проще записать
РП не может быть эффективно реализован (отложенное вычисление, потребляет память)
ИП эффективно оптимизируется (Оптимизация хвостовой рекурсии)