// temperatura da ceveja
const temp_pilsen = [0, 1, 2, 3, 4];
const temp_trigo = [5, 6];
const temp_ipa = [7, 8, 9, 10];
 
let cerveja = 'pilsen'; // ENTRADA DE DADOS
let graus = 0; // ENTRADA DE DADOS

function solucao() {

// busca array pilsen

if (cerveja === 'pilsen') 
{ const found = temp_pilsen.find(element => element === graus); 
  if (found === graus) {console.log('TEMPERATURA IDEAL');}
  else
  { if (found !== graus) {console.log('TEMPERATURA NAO IDEAL');} // se não..
 }
} 

// busca array trigo

if (cerveja === 'trigo') 
{ const found = temp_trigo.find(element => element === graus); 
  if (found === graus) {console.log('TEMPERATURA IDEAL');}
  else
  { if (found !== graus) {console.log('TEMPERATURA NAO IDEAL');} // se não..
 }
} 

// busca array ipa  
  
if (cerveja === 'ipa') 
{ const found = temp_ipa.find(element => element === graus); 
  if (found === graus) {console.log('TEMPERATURA IDEAL');}
  else
  { if (found !== graus) {console.log('TEMPERATURA NAO IDEAL');} // se não..
 }
} 
  
}
const event = solucao(); 
 