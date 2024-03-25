import axios from 'axios'
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon { 

     get imageUrl(): string {

          return `https://pokemon.com/${ this.id}.jpg`

     }
     // public id: number;
     // public name: string;

     constructor(
          
          public  id: number, 

          public name: string,
          
          // public  imageUrl: string,
          
          ){}

        scream() {
         
               console.log( `${this.name.toUpperCase()}!!!`);
               
          }

          speak() {
               console.log( `${this.name}`, `${this.name}`);
          }

         async getMoves(): Promise<Move[]> {

          //  const moves =10;
          const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4')
       
          //  console.log( data.moves );

           return data.moves;
               
          }

}

export const charmanderr = new Pokemon( 4,'charmander' )

// charmanderr.id =10;
// charmanderr.name = 'Mew';
// console.log(charmanderr.imageUrl)

// console.log(charmanderr.imageUrl);

// charmanderr.scream();
//  charmanderr.speak();

// console.log ( charmanderr.getMoves()  )

charmanderr.getMoves();
