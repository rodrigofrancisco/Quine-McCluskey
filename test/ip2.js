function prueba2() {
  minterms = [1,2,3,4,5]
  let implicantes = [
    [1,3],
    [1,5],
    [2,3],
    [4,5]
  ];
  let ipe = [
    [2,3],
    [4,5]
  ];
  let nipe = [
    [1,3],
    [1,5]
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
}

function searchMinterm(arr,minterm) {
  for (t of arr)
    if (t == minterm)
      return true;
  return false
}
