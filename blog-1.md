1) The significance of union and intersection types in Typescript.
===> ##intersection: It's a type of typescript. '&' this is the symbol of intersection. 
By which we can combine multiple types(which are in different interfaces) in one type. No need to write same type from scratch.
 Ex: interface A {
    name: string;
}

interface A {
    age: number;
}

type C = A & B;
    
// now
// type C = {
//     name: string;
//     age: number;
//   }

##union: It's a type of typescript. '|' this is the symbol of union. 
By which we can set multiple types for one property. It's needed when the type of any property can be multiple.
Ex: type add = {
a: number | string;
b: number | string;
}

const sum = (args: add): number | string => {
return args.a + args.b;
}

const val: add = {
a: 10,
b: 20
}

sum(val);
