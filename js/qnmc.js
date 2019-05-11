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

function fp_equals(fp1,fp2) {
  for(let i = 0 ; i < fp1.length; i++)
    if(fp1[i] != fp2[i])
      return false;
  return true;
}

function diffPotencia2(mp1,mp2) {
  diff = []
  for (let i = 0; i < mp1.length; i++) {
    diff.push(mp2[i] - mp1[i])
    if (!esPotencia2(diff[i])) {
      return false;
    }
  }
  if(diff.every( (val, i, arr) => val === arr[0] ))
    return true;
  else
    return false;
}

function quineMcCluskey(terminos) {

  /* This are auxiliary arrays */
  var item = [];
  var buffer =[];

  /** Creating initial group */
  for(var i = 0; i< terminos.length; i++){
      let pos = contarUnos(terminos[i]);
      let t = new Termino();
      t.add_mp(terminos[i]);
      addTerm(t,item,pos);
  }
  console.log(item);

  /** Obtaining prime implicants */
  for(var i = 0 ; i < item.length-1 ; i++){
    if(item[i] != null){
      for( var j = 0 ; j < item[i].length ; j++ ){
        for(var k = 0 ; k < item[i+1].length; k++ ){
          let termino1 = item[i][j].mp[0];
          let termino2 = item[i+1][k].mp[0];
          let diff = termino2 - termino1;
          if(esPotencia2(diff)){
            let t = new Termino();
            t.add_mp(termino1);
            t.add_mp(termino2);
            t.add_fp(Math.abs(termino2-termino1));
            /* i is the position of new term in new iteration*/
            addTerm(t,buffer,i);
          }
        }
      }
    }
  }
  console.log(buffer);
  item =[]

  /** Obtaining prime implicants */
  for(var i = 0 ; i < buffer.length-1 ; i++){
    if(buffer[i] != null){
      for( var j = 0 ; j < buffer[i].length ; j++ ){
        for(var k = 0 ; k < buffer[i+1].length; k++ ){
          if (fp_equals(buffer[i][j].fp,buffer[i+1][k].fp)) {
            if (diffPotencia2(buffer[i][j].mp,buffer[i+1][k].mp)) {
              let t = new Termino();
              t.mp = buffer[i][j].mp.concat(buffer[i+1][k].mp)
              /* i is the position of new term in new iteration*/
              addTerm(t,item,i);
            }
          }
        }
      }
    }
  }
  console.log(item);

}
