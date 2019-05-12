function quineMcCluskey(terminos) {
  /* This are auxiliary arrays */
  var item = [];
  var iterations = [];
  var it = 0;
  var ipe = []
  var flag = false;

  /** Creating initial group */
  for(var i = 0; i< terminos.length; i++){
      let pos = contarUnos(terminos[i]);
      let t = new Termino();
      t.add_mp(terminos[i]);
      addTerm(t,item,pos);
  }
  iterations.push(item)
  //console.log(iterations[0]);

  while (!flag) {

    item = iterations[it];
    var buffer =[];

    /** Obtaining prime implicants */
    for(var i = 0 ; i < item.length-1 ; i++) if(item[i] != null)
      for( var j = 0 ; j < item[i].length ; j++ )
        for(var k = 0 ; k < item[i+1].length; k++ )
          if (fp_equals(item[i][j].fp,item[i+1][k].fp)
            && diffPotencia2(item[i][j].mp,item[i+1][k].mp)) {
            item[i][j].used = true;
            item[i+1][k].used = true;

            let t = new Termino();
            t.mp = item[i][j].mp.concat(item[i+1][k].mp)
            t.fp =item[i][j].fp.slice()
            t.add_fp(item[i+1][k].mp[0]-item[i][j].mp[0])
            t.mp.sort((a, b)=> a-b);
            t.fp.sort((a, b)=> a-b);
            /* i is the position of new term in new iteration*/
            addTerm(t,buffer,i);
          }
    if (buffer.length > 0) {
      iterations.push(buffer);
      it++;
      //console.log(iterations[it]);
    }else {
      flag = true;
    }
  }
  console.log(iterations);
}
