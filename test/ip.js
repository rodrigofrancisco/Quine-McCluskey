/*ESTA PRUEBA ES PAR SACAR LOS IMPLICANTES PRIMOS ESENCIALES
  ES LA ULTIMA PARTE DEL ALGORITMO DE QUINE McCluskey
*/
function prueba() {
  //minterms = [4,8,10,11,12,15]
  minterms = [1,2,3,4,5]
  // minterms = [0,1,3,7,8,9,11,15]
  let implicantes = [
    //[4,12],
    //[10,11,15],
    //[8,10,11],
    //[8,10,12]
    [1,3],
    [1,5],
    [2,3],
    [4,5]
    // [0,1,8,9],
    // [3,7,11,15],
    // [1,3,9,11]
  ];

  all = []
  contadores = []

  for (let i = 0; i < minterms.length; i++)
    contadores.push(0)

  for (ip of implicantes)
    for (i of ip)
      all.push(i)

  all.sort((a,b)=>a-b)

  for (let i = 0; i< minterms.length; i++)
    for (j of all)
      if (minterms[i] == j)
        contadores[i]++

  mint_esenciales = []
  for (let i = 0; i < contadores.length; i++)
    if (contadores[i] == 1)
      mint_esenciales.push(minterms[i])

  console.log("mines",mint_esenciales);

  ipe = []

  for (mt of mint_esenciales)
    for (let i = 0; i< implicantes.length; i++)
      if(searchMinterm(implicantes[i],mt))
        ipe.push(implicantes[i])

  console.log("ipe",ipe);


  ips = implicantes
  for (impl of ips)
    for (a  of ipe)
      if (arraysEqual(impl,a))
        //ips.push(a)
        ips.splice(ips.indexOf(impl))

  console.log("ips",ips);

  //prueba2(implicantes,ipe, ips,minterms)

}

function searchMinterm(arr,minterm) {
  for (t of arr)
    if (t == minterm)
      return true;
  return false
}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}
