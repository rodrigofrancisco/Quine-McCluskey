function quineMcCluskey(minterm,dontcare) {

  var iterations = getIterations(minterm,dontcare);

  ip = searchForIP(iterations);

  ip_wdc = deleteDontCare(ip,dontcare);
  console.log('sind',ip_wdc);

  searchForIPS(ip_wdc,minterm);

}
