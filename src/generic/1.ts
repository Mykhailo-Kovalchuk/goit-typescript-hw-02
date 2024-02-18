/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

// Варіант 1 з конспекту
// const promise: Promise<(number | string)[]> = new Promise((resolve) => {
//   return resolve(['Text', 50])
// })

// promise.then((data) => {
//     console.log(data);
//   });


// Варіант 2 з прикоаду. 
function getPromise(): Promise<(string | number)[]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then((data) => {
  console.log(data);
});

export {};
 
// В обох випадкаїх ми кажемо, що функція поверне Проміс який буде масивом, 
// в якому значення можуть бути рядками або числами.



// Варіант 3 - додатково запропоновайний ші при перевірці моїх попередніх варіантів.
// Як на мене менш зрозумілий і читабельний.

// function getPromise<T>(): Promise<T> {
//   return new Promise((resolve) => {
//     resolve(['Text', 50] as unknown as T);
//   });
// }

// getPromise<Array<string | number>>()
// .then((data) => {
//   console.log(data); // тепер data має тип Array<string | number>
// });

// export {};