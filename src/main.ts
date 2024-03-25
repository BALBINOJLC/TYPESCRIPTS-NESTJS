import { name, age} from './bases/01-types.ts'
 import { charmander, poke } from './bases/02-objects-.ts'

import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { pokemonIds } from './bases/02-objects-.ts'
import { charmanderr } from './bases/03-classes.ts'
import { charmanderrrr } from './bases/04-inyec.ts'
import { charmander5 } from './bases/05-decorators.ts'
import { charmander6 } from './bases/06-decoratorsw.ts'

charmanderr //03-class

charmander //02-class

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${name} 
  ${age} 
  ${ pokemonIds.join(',')} 

  ${charmanderr.name}
<hr>

   ${[ poke.name, poke.id] } 
  <a href="https://vitejs.dev" target="_blank" >
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${charmanderr.name} + ${charmanderrrr.name} + ${charmander5.name} + ${charmander6.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
