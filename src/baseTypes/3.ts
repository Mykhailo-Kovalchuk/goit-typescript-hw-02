let some: unknown;
some = 'Text';
let str: string;
// str = some;   ----- безпосереднє присвоєння значення змінній як іншу змінну небезпечне, 
// тож без перевірки TS не пропустить, тому потрібна перевірка типу через typeof
if ( typeof some === "string") {
    str = some;
}


export {};