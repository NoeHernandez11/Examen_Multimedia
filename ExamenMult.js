
var input = document.getElementById('input');

function add(num) {
  if (num == 0) {
    if (input.value[input.value.length - 1] != '0' || input.value.length > 1) {
      input.value = input.value + num;
    }
  } else if (num == '.') {
    if (input.value[input.value.length - 1] != '.' && input.value != '') {
      input.value = input.value + num;
    }
  } else {
    input.value = input.value + num;
  }
}

function operacionFunction(operador) {
  operacion = operador;
  temporal = input.value;
  input.value = '';
}

function Calcular() {
    DeduccionInss.value =  input.value*0.07;
}
//antes anterior igual


