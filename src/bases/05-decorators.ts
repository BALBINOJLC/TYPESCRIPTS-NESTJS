

class NewPokemon  {

    constructor (

        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`No quiero!!`)
    }

    speak() {
        console.log(`NO QUIERO HABLAR!!`)
    }

}




const MyDecorator = () => {
    return (target: Function) =>{
    //   console.log(target)
    return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {

    constructor (

        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`${this.name.toLocaleUpperCase()}!!`)
    }

    speak() {
        console.log(`${this.name}, ${this.name}!`)
    }
}


export const charmander5 = new Pokemon (4,'Charmander');

charmander5.scream();
charmander5.speak();