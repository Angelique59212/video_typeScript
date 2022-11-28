/* unknown ne peut pas être utilisé avant d etre précisé */

function a(arg: unknown) {
    if (arg instanceof HTMLInputElement) {
        arg.value = 'Hello'
    }
}

/* un tuple distinction entre un tableau qui a une taille non défini et un tableau qui a
une taille fixe
 */
type ListItem = [string, number];

const a: ListItem = ['tomate', 2]; /* tableau de taille 2 */
const b: ListItem = ['banane', 3];

function merge<T extends unknown[], U extends unknown[]>(a:T, b:U) : [...T,...U ] {
    return [...a, ...b]
}

const c = merge(a,b)

    /* accéder à un index dans un tableau */
type ListItems = [string, number];

const e: ListItems = ['tomate', 2]
const f: ListItems = ['banane', 3];
const g: string[] = [] as string[];

console.log(a[0].toUpperCase());

/* Enum */

const enum STEPS {
    Intro,
    Selection,
    Panier,
    Paiement
}

let step : STEPS = STEPS.Selection;
function demo() {
    step = STEPS.Paiement;
}
