/*ESTA PRUEBA ES PAR SACAR LOS IMPLICANTES PRIMOS ESENCIALES
  ES LA ULTIMA PARTE DEL ALGORITMO DE QUINE McCluskey
*/
function prueba() {
  let implicantes = [
    [4,12],
    [10,11,15],
    [8,10,11],
    [8,10,12]
  ];
  let indxipe = []
  //primero buscamos los implicantes primos esenciales
  for (let imp1 in implicantes) {
    flag = false;
    for (var imp2 in implicantes)
      //console.log("aar1",implicantes[imp1]);
      //console.log("aar2",implicantes[imp2]);
      if (!arraysEqual(implicantes[imp1],implicantes[imp2]))
        for (var i = 0; i < implicantes[imp2].length; i++)
          if(implicantes[imp1].includes(implicantes[imp2]))
            flag = true
    if(flag == false)
      indxipe.push(imp1)
  }
  console.log(indxipe)
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
