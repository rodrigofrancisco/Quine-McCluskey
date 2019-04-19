class Termino {
  constructor() {
    this.match_pair = [];
    this.fp = [];
    this.used = false;
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

function esPotencia2(n) {
	return n && (n & (n - 1)) === 0;
}
