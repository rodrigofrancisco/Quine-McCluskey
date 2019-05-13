function init() {
  const input_minterm = document.getElementById('minterminos').value;
  const input_dontcare = document.getElementById('dontcare').value;

  /*FALTA validar que los input solo contengan numeros y que esten sepa-
    rados por comas y   que NO se repitan los elementos y que No esten vacias
  */

  /*Los inputs los recibimos como string pero los guardamos como arrays y para ello separamos cada elemento y lo guardmos como number*/
  let minterm = []
  let dontcare = []

  if (input_minterm.length != 0 )
    minterm = input_minterm.split(",").map(Number);

  if (input_dontcare.length != 0)
    dontcare = input_dontcare.split(",").map(Number);

  /*Iniciamos el Quine-McCluskey con un arreglo que contiene los minterminos y
    los dont care juntos ya que el método sabe que hacer */
  if(minterm.length > 0)
    quineMcCluskey(minterm,dontcare);
  else alert("Debe haber por lo menos 1 término");

}
