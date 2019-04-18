class Termino {
  constructor(match_pair,fp,used) {
    this.match_pair = match_pair;
    this.fp = fp;
    this.used = used;
  }

  addMatchPair(item){
    this.match_pair.push(item);
  }
  addFp(item){
    this.fp.push(item);
  }
}

function quineMcCluskey(terminos) {
  let t1 = new Termino([1,2],[1],false);
  t1.addMatchPair(3);
  alert(t1.match_pair);
}
