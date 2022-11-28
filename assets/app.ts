import './styles/style.scss';

// /*Typer */
// const a : string = 'Hello World';
// const n : number = 3;
// const b : boolean = true;
// const d : null = null;
// const arr : any[] = ['aze', 'aze', 3];
// const user : {firstname: string, lastname?: string} = {firstname:'John', lastname:'Doe'};
//
//  /*ou va avoir plusieurs clés */
// const user : {firstname: string, [key:string]:string} = {firstname:'John', lastname:'Doe'};
//
//  /* Objet de type spécifique */
// const date :Date = new Date();
//
// /* fonction */
// const cb: (e:MouseEvent)=> void  = (e: MouseEvent): number=> {
//     return 3
// }
//
// function printId(id: number | string): void {
//     console.log(id.toString());
// }


const compteur = document.querySelector('#compteur');

let i = 0 ;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
}

if (compteur) {
    compteur.addEventListener('click', increment)
}

/* On peut avoir du narrowing grâce à typeof */

function printId(id:string | number) {
    if (typeof id == "number") {
        console.log((id*3).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}

function example(a:string |boolean, b: string | number |boolean) {
    if (a==b) {
        a
    }
}

/* aussi capable de faire du narrowing grâce à instance of */

function exampleTwo(a: string |Date) {
    if (a  instanceof Date) {
        a
    }
}

/* tableau */

function exampleThree(a: string | string[]) {
    if (Array.isArray(a)) {
        return a[0]
    }
    return
}

/* fonction spécifique qui nous appartient pour le narrowing */

function isDate(a: any): a is Date {
    return a instanceof Date
}


