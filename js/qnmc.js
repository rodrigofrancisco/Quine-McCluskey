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

function contarUnos(numero) {
  var contador = 0;
  while (numero) {
    numero &= (numero-1);
    contador++;
  }
  return contador;
}

function quineMcCluskey(terminos) {
  var terms = [] // sera un arreglo de grupos de terminos
                    // dependiendo su numero de unos
  for (var i = 0; i < terminos.length; i++) {
    let pos = contarUnos(terminos[i])
    document.getElementById('solved').innerHTML+="i: "+i+" pos= "+pos+"  termino:"+terminos[i]+"<br>"

    if(terms[pos] == null){
      terms[pos]=[]
      terms[pos].push(terminos[i])
    }else {
      terms[pos].push(terminos[i])
    }
    console.log(terms)
  }
  for (var i = 0; i < terms.length; i++) {
    if (terms[i] != null) {
      for (var j = 0; j < terms[i].length; j++) {
        document.getElementById('solved').innerHTML += "terms["+i+"]["+j+"]: "+terms[i][j]+"<br>"
      }
    }
  }
}
