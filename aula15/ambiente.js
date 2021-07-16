   /* let num = [1,3,6,5,2]
    num.sort()
    console.log(num)
    console.log(`Nosso vetor tem ${num.length} posições` )*/
  
      let valores = [1,3,6,6,5,]
   /* for(let pos=0; pos < valores.length; pos++){
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

    }
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}