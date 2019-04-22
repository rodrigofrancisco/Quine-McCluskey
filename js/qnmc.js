function quineMcCluskey(terminos) {
  var terms = [] // sera un arreglo de grupos de terminos

  /************* CREANDO LOS GRUPOS INICIALES *******************/
  for (var i = 0; i < terminos.length; i++) {
    let pos = contarUnos(terminos[i])

    console.log("i: "+i+" pos= "+pos+"  termino:"+terminos[i]);//quitar

    if(terms[pos] == null){
      terms[pos]=[]
      let t = new Termino()
      t.addMatchPair(terminos[i])
      terms[pos].push(t)
    }else {
      let t = new Termino()
      t.addMatchPair(terminos[i])
      terms[pos].push(t)
    }
    console.log("terms: ",terms) //quitar
  }

  /* Obteniendo implicantes primos */
  var tmp_terms = []

  for (var i = 0; i < terms.length-1; i++) {
    if( terms[i] != null){
      for (var j = 0; j < terms[i].length; j++) {
        let diff = terms[i+1][j].match_pair[0]-terms[i][j].match_pair[0];
        if (esPotencia2(diff)) {
          //unir los terminos
        }
      }
    }
  }




}
