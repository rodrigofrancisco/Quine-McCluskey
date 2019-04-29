function addTerm(t,item,pos){
  if(item[pos] == null){
    /*This array is were our terms with 
    n numbers of one are saved*/
    item[pos] = [];
    item[pos].push(t)
  }else{
      item[pos].push(t)
  }
}

function quineMcCluskey(terminos) {

  var iterations = [];

  /* This are auxiliary arrays */
  var item = [];

  /** Creating initial group */
  for(var i = 0; i< terminos.length; i++){
      let pos = contarUnos(terminos[i]);
      let t = new Termino();
      t.addMatchPair(terminos[i]);
      addTerm(t,item,pos);
  }
  iterations.push(item);
  console.log(iterations);

  /* Clear array 'cause is saved in iterations */
  item = [];
 
  /** Obtaining prime implicants */
  for(var i = 0 ; i < iterations[0].length-1 ; i++){
    if(iterations[0][i] != null){
      for( var j = 0 ; j < iterations[0][i].length ; j++ ){
        for(var k = 0 ; k < iterations[0][i+1].length; k++ ){
          let termino1 = iterations[0][i][j].match_pair[0];
          let termino2 = iterations[0][i+1][k].match_pair[0];
          console.log("termino1: ",termino1);
          console.log("termino2: ",termino2);
          let diff = termino2 - termino1;
          if(esPotencia2(diff)){
            let t = new Termino();
            t.addMatchPair(termino1);
            t.addMatchPair(termino2);
            t.addFp(Math.abs(termino2-termino1));
            /* i is the position of new term in new iteration*/
            addTerm(t,item,i);
          }  
        }
      }
    }
  }
  iterations.push(item)
  console.log(iterations[1])

}
