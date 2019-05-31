function quineMcCluskey(minterm,dontcare) {

  var iterations = getIterations(minterm,dontcare);

  ip = searchForIP(iterations);

  ip_wdc = deleteDontCare(ip,dontcare);
  console.log('sind',ip_wdc);

  /* Obtenemos lo implicantes primos esenciales */
  ipe = searchForIPE(ip_wdc,minterm);

  /* Se NIP se refiere al complemente de ipe, es decir, todo aquel
    implicante primo que no sea esencial  */
  nip = searchForNIP(ip_wdc,minterm,ipe)

  solution = getIPEyIPS(minterm,ip_wdc,ipe,nip)

}
