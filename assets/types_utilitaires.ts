class Poisson {

}

class Chat {

}

type AnimalOptions = {nager: any} | {sauter: any}
type AnimalFromOption<T> = T extends {nager: any} ? Poisson: Chat

function generator<T extends AnimalOptions>(options: T):AnimalFromOption<T>
{
    if ('nager' in options) {
        return new Poisson()
    } else {
        return new Chat();
    }
}

const h = generator({nager: 'aze'});