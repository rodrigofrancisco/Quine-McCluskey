function prueba2() {
  //minterms = [1,2,3,4,5]
  //minterms = [2,3,7,9,11,13]
  minterms = [0,1,3,7,8,9,11,15]
  let implicantes = [
    // [1,3],
    // [1,5],
    // [2,3],
    // [4,5]
    // [2,3,11],
    // [3,7,11],
    // [3,9,11],
    // [9,11,13]
    [0,1,8,9],
    [1,3,8,11],
    [3,7,11,15]
  ];
  let ipe = [
    // [2,3],
    // [4,5]
    // [2,3,11],
    // [3,7,11]
    [0,1,8,9],
    [3,7,11,15]
  ];
  let nipe = [
    // [1,3],
    // [1,5]
    // [3,9,11],
    // [9,11,13]
    [1,3,9,11]
  ];

  for (imp  of ipe)
    for (a  of imp)
      for (imp2 of nipe) {
          if(searchMinterm(imp2,a)) {
            //console.log("el ipe ",a,"esta en ",imp2);
            let index =imp2.indexOf(a)
             if (index > -1)
               imp2.splice(index, 1);
          }
      }

  console.log(nipe);

  /*
    SE ANALIZAN TRES CASO BASE PRINCIPALES

    * SI LONGITUD ES CERO (DE TODOS)

    * SI LONGITUD ES LA MISMA Y SUS ELEMENTOS SON IGUALES

    * SI LONGITUD ES DIF.
  */


  let allEmpty = true
  for (imp  of nipe)
    if (imp.length > 0)
      allEmpty = false

  if (allEmpty) {
    console.log("hasta aqui acaba el algoritmo, regresar ipe[]");
  }
  else {
    
  }



}

function searchMinterm(arr,minterm) {
  for (t of arr)
    if (t == minterm)
      return true;
  return false
}
