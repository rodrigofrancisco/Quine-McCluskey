function prueba2(implicantes,ipe,ips,minterms) {
  // let minterms1 = [1,2,3,4,5]
  // let minterms2 = [2,3,7,9,11,13]
  // let minterms3 = [0,1,3,7,8,9,11,15]
  // let minterms4 = [4,8,10,11,12,15]
  // let implicantes1 = [
  //   [1,3],
  //   [1,5],
  //   [2,3],
  //   [4,5]
  // ]
  // let implicantes2 = [
  //   [2,3,11],
  //   [3,7,11],
  //   [3,9,11],
  //   [9,11,13]
  //
  // ];
  // let implicantes3 = [
  //   [0,1,8,9],
  //   [1,3,9,11],
  //   [3,7,11,15]
  // ];
  // let ipe1 = [
  //   [2,3],
  //   [4,5]
  // ];
  // let ipe2 = [
  //   [2,3,11],
  //   [3,7,11],
  //   [9,11,13]
  // ];
  // let ipe3 = [
  //   [0,1,8,9],
  //   [3,7,11,15]
  // ];
  // let nipe1 = [
  //   [1,3],
  //   [1,5]
  // ];
  // let nipe2 = [
  //   [3,9,11]
  // ];
  // let nipe3 = [ [1,3,9,11] ];

  //minimizarmas(minterms,implicantes,ipe,nipe3)
  minimizarmas(implicantes,ipe,ips,minterms)

}

function minimizarmas(implicantes,ipe,nipe,minterms) {

  let cp_nipe = [];
  for (m of nipe) {
    cp_nipe.push(m.slice())
  }

  for (imp of ipe)
    for (a of imp)
      for (imp2 of nipe) {
          if(searchMinterm(imp2,a)) {
            //console.log("el ipe ",a,"esta en ",imp2);
            let index =imp2.indexOf(a)
             if (index > -1)
               imp2.splice(index, 1);
          }
      }

  console.log("nipe",nipe);

  /*
    SE ANALIZAN TRES CASO BASE PRINCIPALES

    * SI LONGITUD ES CERO (DE TODOS)

    * SI LONGITUD ES LA MISMA Y SUS ELEMENTOS SON IGUALES

    * SI LONGITUD ES DIF.
  */
  complete_solv = ipe
  solv1 = []

  if (!allarraysEmpty(nipe)) {
    repeatedT=repeatedElements(nipe)
    for (r of repeatedT)
      for (m of nipe)
        if (searchMinterm(m,r)){
          let index =m.indexOf(a)
           if (index > -1)
             m.splice(index, 1);
        }
    if (allarraysEmpty(nipe)){
      // regresar el que sea como la respuesta
      console.log("La minimizacion es el que sea!");
      solv1.push(cp_nipe[0])
    }else {
      for (let j = 0; j < nipe.length; j++)
        if (nipe[j].length > 0)
          solv1.push(cp_nipe[j])
    }
  }
  console.log("solv1!",solv1);

  for (s of solv1) {
    complete_solv.push(s)
  }

  console.log("solucion completa",complete_solv);
}

function repeatedElements(nipe) {
  all = []
  for (ar of nipe)
    for (a  of ar)
      all.push(a)
  console.log(all);
  let unique = [...new Set(all)];
  console.log("uniques",unique);

  contadores = []
  for (let i = 0; i < unique.length; i++)
    contadores.push(0)

  for (let i = 0; i < unique.length; i++)
    for (a  of all)
      if (unique[i] == a)
       contadores[i]++;

  repeated = []
  for (let i = 0; i < contadores.length; i++)
    if (contadores[i] > 1)
      repeated.push(unique[i])

  return repeated

}

function allarraysEmpty(nipe) {
  for (imp  of nipe)
    if (imp.length > 0)
      return false;
  return true;
}

function searchMinterm(arr,minterm) {
  for (t of arr)
    if (t == minterm)
      return true;
  return false
}

function allSameLen(arr) {
  lens = []
  for (a of arr)
    lens.push(a.length)

  let first = lens[0]
  for (let i = 1; i < lens.length; i++)
    if(first != lens[i])
      return false;

  return true;

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
