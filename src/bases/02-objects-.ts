

export const pokemonIds = [1, 20, 30, 34, 66];

interface pokemon {

    id: number;
    name: string;
    age?: number;

}

export const poke: pokemon = {
    id: 1,
    name: 'bul',
    age: 54,
}

export const charmander: pokemon = {
    id: 4,
    name: 'charak',
    age: 1
}

export const pokemons: pokemon[] = [];

pokemons.push(charmander, poke)

// console.log( charmander, poke )