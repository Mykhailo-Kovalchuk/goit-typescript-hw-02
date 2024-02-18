/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

// Pick — це утилітний тип у TypeScript, що дозволяє вам обрати набір властивостей з існуючого типу 
// і створити новий тип на основі цих властивостей (фактично з переліку властивостей Типу який 
// буде прототипом взяти необїідні властивосі і створити їх в новому типі).
// Так би це виглядало, якби я створював їх окремо на основі AllType
// type BottomObj = Pick<AllType, "position" | "weight">;
// type TopObj = Pick<AllType, "name" | "color">


function compare (
  top: Pick<AllType, "name" | "color">,  
bottom: Pick<AllType, "position" | "weight">): AllType {
  
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};