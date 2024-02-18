/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };


// Record<K, T> — це утилітний тип, що дозволяє створювати типи із заздалегідь відомими властивостями.
//  Це дуже корисно, коли вам потрібно створити об'єкт із певними ключами та значеннями, типи яких ви заздалегідь знаєте.
// Принцип роботи Record наступний: ви вказуєте набір ключів K і тип T, який буде присвоєно кожному з цих ключів. 

export const RoleDescription: Record<UserRole, string> = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
}


export {};