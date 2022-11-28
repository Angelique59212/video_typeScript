/* Les interfaces permettent de définir le nom d'un objet */

/* Un type s'écrit toujours:
    type Point = {
    }
 */

/* Les interfaces s'écrivent comme une classe
    interface Point { ==> prop et type et méth
        x: number
        get (): number
    }

    les interfaces ne sont pas flexible et ne permettent pas de se baser sur les types primaires
    Une interface reste ouverte et peut être modifié plus tard

    type Point = {}
    type Point = {}
     Impossible d'appeler 2 fois pareil

    interface Point {
        x:number
    }

    interface Point {
        y:number
    }

    donc fusion
    const p: Point;
 */

interface Point {
    x: number;
    y: number;
}

class TwoDimensionPoint implements Point {
    x = 0;
    y = 0;
}

function draw (p:Point) {

}

draw(new TwoDimensionPoint());