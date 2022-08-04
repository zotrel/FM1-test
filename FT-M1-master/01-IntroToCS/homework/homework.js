'use strict'

function BinarioADecimal(num) {
  const array = num.toString().split("").reverse().join("");
// array = array.parseInt();
//    console.log(array);
   let array2 = 0;
   for (let i = 0; i < array.length; i++) {
        
        array2 += (array[i]*(Math.pow(2,[i])));    
       

   }
   return array2



}

function DecimalABinario(num) {
 let dec = [];
 let resto = 0;
 while (num > 0){
     resto = num % 2;
     num =Math.floor(num/2)
     dec.unshift(resto);
 }     
 let result =  dec.join("");
 return result;


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}