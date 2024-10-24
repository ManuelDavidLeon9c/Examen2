function calculate(operacion) {
    var numero1 = parseFloat(document.getElementById('numero1').value) || 0;
    var numero2 = parseFloat(document.getElementById('numero2').value) || 0;
    var resultado = 0;

    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicar':
            resultado = numero1 * numero2;
            break;
        case 'dividir':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = ' Huevon no se puede por cero';
            }
            break;
        default:
            resultado ="no existe";
    }

    document.getElementById('resultado').value = resultado;
}
