class Termino {

  constructor() {
    this.mp = [];
    this.fp = [];
    this.used = false;
  }

  add_mp(item){
    this.mp.push(item);
  }
  add_fp(item){
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

function diffsPotencia2(mp1,mp2) {
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

function searchForIPE(iterations) {
  let ipe = [];
  for (var it of iterations)
    for (var gp of it) if(gp !=null)
      for (var t of gp) if (!isInIPE(ipe,t) && !t.used)
          ipe.push(t)
  return ipe;
}

function isInIPE(ipe,t) {
  for (const tipe of ipe)
    if(tipe != null)
      if (JSON.stringify(tipe.mp) === JSON.stringify(t.mp))
        return true;
  return false;
}

function deleteDontCare(ipe,dontcare){
  var ipe_wdc = ipe.slice(0)

  for (var i = 0; i < dontcare.length; i++)
    for (let t of ipe_wdc)
      if(t.mp.indexOf(dontcare[i])!= -1)
        t.mp.splice( t.mp.indexOf(dontcare[i]), 1 );

  deleteEmptyTerms(ipe_wdc);

  return ipe_wdc;
}

function deleteEmptyTerms(ipe_wdc) {
  empty = []
  for (var i = 0; i < ipe_wdc.length; i++)
    if(ipe_wdc[i].mp.length == 0)
      empty.push(i)
  for (var i = 0; i < empty.length; i++)
    ipe_wdc.splice(empty[0],1);

}

/*Not working yet*/
function searchForIPS(ipe_wdc) {
  var ips = []

  for (var i = 0; i < ipe_wdc.length; i++)
    for (var j = 0; j < ipe_wdc.length; j++)
      if(i != j)
        for (var k = 0; k < ipe_wdc[i].mp.length; k++)
          for (var m = 0; m < ipe_wdc[j].mp.length; m++)
            if(ipe_wdc[i].mp[k] == ipe_wdc[j].mp[m])
              ipe_wdc[i].used = true;
}
