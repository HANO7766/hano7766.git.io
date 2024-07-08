function encriptarTexto() {
    const input = document.getElementById('inputTexto').value;
    let encriptado = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputTexto').textContent = encriptado;
}

function desencriptarTexto() {
    const input = document.getElementById('inputTexto').value;
    let desencriptado = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputTexto').textContent = desencriptado;
}

// Ejemplo de desencriptación del texto dado
document.getElementById('inputTexto').value = 'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!';
desencriptarTexto();
