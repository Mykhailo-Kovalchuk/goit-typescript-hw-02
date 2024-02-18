/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}
// Оскільки нам потрібні не всі поля, то ми можемо зробити їх необов`язковими через Partial
// Тоді TS не буде лаятись що ми не все використали
function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}
createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

export {};


//  Варінат 2, 
//просто в типі User вручну прописати необов`язкові поля.

// type User = {
//   name?: string;
//   surname?: string;
//   email?: string;
//   password?: string;
// }
// function createOrUpdateUser(initialValues: User) {
//   // Оновлення користувача
// }
// createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

// export {};