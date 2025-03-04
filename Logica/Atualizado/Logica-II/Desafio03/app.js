// 1
function calcularIMC(altura, peso){
    return peso / (altura * altura);
}

// 2
function fatorial(numero){
    let total = 1;
    let contador = 1;

    while(contador < numero){
        contador++;
        total = total * contador;
    }

    return total;
}

// 3
function converteDolar(valorReais){
    let valorDolar = 4.80;

    return valorReais / valorDolar;
}

// 4
function mostrarMedidasRetangulo(largura, altura){
    let perimetro = 2 * largura + 2 * altura;
    let area = altura * largura;

    alert(`Medidas: ${largura} x ${altura}`);
    alert(`Perímetro: ${perimetro}`);
    alert(`Área: ${area}`);
}

// 5
function mostrarMedidasCirculo(raio){
    let pi = 3.14;
    let perimetro = 2 * pi * raio;
    let area = pi * raio * raio;

    alert(`Raio: ${raio}`);
    alert(`Perímetro: ${perimetro}`);
    alert(`Área: ${area}`);
}

// 6
function mostrarTabuada(numero){
    let contador = 1;
    let maximo = 10;

    while(contador <= maximo){
        console.log(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
    }
}