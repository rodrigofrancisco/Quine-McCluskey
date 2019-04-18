function init() {
  const input_minterm = document.getElementById('minterminos').value;
  const input_dontcare = document.getElementById('dontcare').value;

  /*FALTA validar que los input solo contengan numeros y que esten sepa-
    rados por comas y   que NO se repitan los elementos
  */
  
  /*Los inputs los recibimos como string pero los guardamos como arrays y para ello separamos cada elemento y lo guardmos como number*/
  let minterm = input_minterm.split(",");
  let dontcare = input_dontcare.split(",");

  /*Iniciamos el Quine-McCluskey con un arreglo que contiene los minterminos y los dont care juntos.*/
  quineMcCluskey(minterm.concat(dontcare));

}
