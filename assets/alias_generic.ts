/* Alias */

type User = {firstname: string, lastname: string};
type DateString = string;
type Id = string | number;
type Identity<ArgType> = (arg: ArgType) => ArgType;

/* typr qui dépend d'un autre nottament avec les clés */

type P = keyof User; /* l'ensemble des clés */

/* Type qui hérite d'un autre type avec une clé prédéfini */

type Username = User ['firstname']; /* correspond à la propriété */

/* type of qui permet d'extraire un type à partir de qqc qui existe */

const user3 = {
    firstname: 'John',
    lastname : 'Die',
    age : 32
}

type User2 = typeof user3; /* utile pour créer des types à la voléé à partir de la déf d'un objet */

const a : string = 'Hello World';
const n : number = 3;
const b : boolean = true;
const d : null = null;
const date: DateString = 'string';
const arr : any[] = ['aze', 'aze', 3];
const user : User =  {firstname:'John', lastname:'Doe'};

 /*ou va avoir plusieurs clés */
const user2 : {firstname: string, [key:string]:string} = {firstname:'John', lastname:'Doe'};

 /* Objet de type spécifique */
const date1 :Date = new Date();

/* fonction */
const cb: (e:MouseEvent)=> void  = (e: MouseEvent): number=> {
    return 3
}

/* Generic */

function identity<ArgType>(arg:ArgType) : ArgType {
    return arg;
}

const  aa = identity<number>(3);

    /* autre exemple avec un array */

function first<Type> (arg : Type[]):Type {
    return arg[0];
}

const bb = first(['aze', 'cze', 'bze']);

    /* aussi utilisé sur les functions natives */
const compteur = document.querySelector<HTMLButtonElement>('#compteur');

    /* Array */
const dd: Array<string |number> = ['aze', 'zec', 3];

    /* Les contraintes permet de forcer le type du generic et de s'assurer que l'on a quelque chose de correct  */

function consoleSize<Type extends {length: number}>(arg: Type) : Type {
    console.log(arg.length);
    return arg
}

const abb = consoleSize(['3', 2]);