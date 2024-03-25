 
 
 export let name: string  = 'Fernando';

export const age: number =35;

export const isValid: boolean = true;

// console.log({ isValid });

name = 'melissa';

export const templateString = `Estos es un string multilinea
que puede tener 
"dobles
' simple
inyectar valores ${ name }
expresiones ${ 1+ 1}
booleanos ${ isValid }`

// console.log(templateString);

