/**
 * Toggles the visibility of the responsive menu.
 */
function toggleRespMenu() {
  document.getElementById('resp-menu').classList.toggle('resp-menu-closed');
}

/**
 * Displays an alert if the entered value for "Zimtschnecken mit Frischkäse-Glasur" is invalid.
 */
function alertAmountZimtschneckenMitFrischkäseGlasur() {
  const enteredValue = document.getElementById('amount').value.trim();
  const alertElement = document.getElementById('alert');
  alertElement.classList.add('displayNone');
  if (enteredValue === "" || enteredValue < 1 || enteredValue > 20) {
    alertElement.classList.remove('displayNone');
  }
}

/**
 * Calculates the ingredient amounts for "Zimtschnecken mit Frischkäse-Glasur" based on the entered portions.
 */
function amountCalculatorZimtschneckenMitFrischkäseGlasur() {
  let portions = document.getElementById('amount').value;
  if (portions >= 1 && portions <= 20) {
    document.getElementById('milch').innerHTML = portions * 200;
    document.getElementById('butterTeig').innerHTML = portions * 50;
    document.getElementById('mehl').innerHTML = portions * 450;
    document.getElementById('salz').innerHTML = portions * 0.5;
    document.getElementById('zucker').innerHTML = portions * 70;
    document.getElementById('eier').innerHTML = portions * 1;
    document.getElementById('würfelFrischhefe').innerHTML = portions * 1;
    document.getElementById('butter').innerHTML = portions * 50;
    document.getElementById('zuckerBrauner').innerHTML = portions * 130;
    document.getElementById('zimt').innerHTML = portions * 2;
    document.getElementById('frischkäse').innerHTML = portions * 100;
    document.getElementById('butterGlasur').innerHTML = portions * 30;
    document.getElementById('puderzucker').innerHTML = portions * 100;
    document.getElementById('tropfenVanillearoma').innerHTML = portions * 4;
  }
}

/**
 * Displays an alert if the entered value for "Griechisches Moussaka" is invalid.
 */
function calculateAmountGriechischesMoussaka() {
  const enteredValue = document.getElementById('amount').value.trim();
  const alertElement = document.getElementById('alert');
  alertElement.classList.add('displayNone');
  if (enteredValue === "" || enteredValue < 1 || enteredValue > 20) {
    alertElement.classList.remove('displayNone');
  }
}

/**
 * Calculates the ingredient amounts for "Griechisches Moussaka" based on the entered portions.
 */
function amountCalculatorGriechischesMoussaka() {
  let portions = document.getElementById('amount').value;
  if (portions >= 1 && portions <= 20) {
    document.getElementById('auberginenPeter').innerHTML = portions * 0.5;
    document.getElementById('hackfleischPeter').innerHTML = portions * 125;
    document.getElementById('zwiebelPeter').innerHTML = portions * 0.25;
    document.getElementById('knoblauchPeter').innerHTML = portions * 0.5;
    document.getElementById('tomatenPeter').innerHTML = portions * 100;
    document.getElementById('tomatenmarkPeter').innerHTML = portions * 0.5;
    document.getElementById('zimtPeter').innerHTML = portions * 0.25;
    document.getElementById('oreganoPeter').innerHTML = portions * 0.25;
    document.getElementById('butterPeter').innerHTML = portions * 12.5;
    document.getElementById('mehlPeter').innerHTML = portions * 12.5;
    document.getElementById('milchPeter').innerHTML = portions * 125;
    document.getElementById('eierPeter').innerHTML = portions * 0.25;
    document.getElementById('parmesanPeter').innerHTML = portions * 50;
  }
}

/**
 * Displays an alert if the entered value for "Tomatiger Linsendal" is invalid.
 */
function calculateAmountTomatigerLinsendal() {
  const enteredValue = document.getElementById('amount').value.trim();
  const alertElement = document.getElementById('alert');
  alertElement.classList.add('displayNone');
  if (enteredValue === "" || enteredValue < 1 || enteredValue > 20) {
    alertElement.classList.remove('displayNone');
  }
}

/**
 * Calculates the ingredient amounts for "Tomatiger Linsendal" based on the entered portions.
 */
function amountCalculatorTomatigerLinsendal() {
  let portions = document.getElementById('amount').value;
  if (portions >= 1 && portions <= 20) {
    document.getElementById('roteLinsenFinn').innerHTML = portions * 150;
    document.getElementById('zwiebelFinn').innerHTML = portions * 1;
    document.getElementById('knoblauchFinn').innerHTML = portions * 1;
    document.getElementById('ingwerFinn').innerHTML = portions * 2;
    document.getElementById('kokosmilchFinn').innerHTML = portions * 200;
    document.getElementById('tomatenmarkFinn').innerHTML = portions * 20;
    document.getElementById('kokosölFinn').innerHTML = portions * 20;
    document.getElementById('korianderFinn').innerHTML = portions * 1;
    document.getElementById('kreuzkümmelFinn').innerHTML = portions * 0.5;
    document.getElementById('kurkumaFinn').innerHTML = portions * 0.5;
    document.getElementById('gemüsebrüheFinn').innerHTML = portions * 250;
  }
}

/**
 * Displays an alert if the entered value for "Rendang" is invalid.
 */
function calculateAmountRendang() {
  const enteredValue = document.getElementById('amount').value.trim();
  const alertElement = document.getElementById('alert');
  alertElement.classList.add('displayNone');
  if (enteredValue === "" || enteredValue < 1 || enteredValue > 20) {
    alertElement.classList.remove('displayNone');
  }
}

/**
 * Calculates the ingredient amounts for "Rendang" based on the entered portions.
 */
function amountCalculatorRendang() {
  let portions = document.getElementById('amount').value;
  if (portions >= 1 && portions <= 20) {
    document.getElementById('gulaschArnesto').innerHTML = portions * 150;
    document.getElementById('zwiebelArnesto').innerHTML = portions * 0.25;
    document.getElementById('knoblauchArnesto').innerHTML = portions * 0.5;
    document.getElementById('sambalOelekArnesto').innerHTML = portions * 0.25;
    document.getElementById('galgantArnesto').innerHTML = portions * 0.25;
    document.getElementById('ingwerArnesto').innerHTML = portions * 0.25;
    document.getElementById('kurkumaArnesto').innerHTML = portions * 0.125;
    document.getElementById('kokosölArnesto').innerHTML = portions * 100;
    document.getElementById('zitronengrasArnesto').innerHTML = portions * 0.25;
    document.getElementById('Lorbeerblätter').innerHTML = portions * 0.5;
    document.getElementById('kaffirLimettenblätterArnesto').innerHTML = portions * 1;
  }
}