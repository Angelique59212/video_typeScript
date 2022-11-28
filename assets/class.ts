/* readOnly pour indiquer que le type  est en lecture seule */

function reverse<T>(arr: readonly T[]): T[] { /* spécifie que cette prop d'entrée ne peut pas être modifié */
    return [...arr].reverse();
}

/* class */

class A {
   private a = 3; /* modif devant pour spé sa visibilité */
}

const aInstancec = new A();

/* Possible de spé les prop dés la construction */

class B {
    constructor(
       public a: number
    ) {

    }
}

const bInstance = new B(5);
console.log(bInstance.a);

/* Possible aussi d'utiliser les generic par exple si on veut une class qui représente une collec d'éléments */

class Collection<T> {
    constructor (private items: T[]) {

    }

    add (item:T): this {
        this.items.push(item);
        return this;
    }

    first(): T | null {
        return this.items[0] || null;
    }
}

class Subscriber {
    on (this: HTMLInputElement, name : string, cb: Function) {
    }
}

const b = new Collection([1,2]);
const d = b.add(3);
const c = b.first();

/* Classe abstraite certaines méthodes ne vont pas être implémenter et devront être implémenter par less enfants */

abstract class Geometry {
    x = 0;
    y = 0;
    abstract surface (): number;
}

class Triangle extends Geometry {
    x = 2;
    y = 2;

    surface(): number {
        return 3;
    }
}

/* Methode static */

abstract class Geometry2 {
    static origin = {x : 0, y : 0};
}

Geometry2.origin;

/* en méthode privé */

class Geometry3 {
    static #origin : {x: number, y: number}

    static { /* definir les prop à la volé */
        Geometry3.#origin = {x: 0, y: 0}
    }
}

/* Pratique pour faire correspondre des classes différentes mais qui ont des méth identique */

class Geometry4 {
    static origin: {x:number, y: number} = {x: 0 , y : 0}

    constructor(x: number, y : number) {
    }
}

class Triangl {
    constructor(x: number, y : number) {
    }

    surface() {
        return 3 ;
    }
}

type InstantiableShape = {
    new (x: number, y:number): {
        surface : ()=> number
    }
}

function shapeGenerator(shapeType : InstantiableShape, x:number, y :number) {
    return new shapeType(x,y).surface;
}

shapeGenerator(Geometry4, 10, 20);
shapeGenerator(Triangl, 10,20);