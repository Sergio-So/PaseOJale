function calcularPromedioPonderado() {
    const notas = document.querySelectorAll('.nota');
    const pesos = document.querySelectorAll('.peso');

    let sumaNotas = 0;
    let sumaPesos = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = parseFloat(notas[i].value);
        const peso = parseFloat(pesos[i].value);

        if (!isNaN(nota) && !isNaN(peso)) {
            sumaNotas += nota * peso;
            sumaPesos += peso;
        }
    }

    if (sumaPesos > 0) {
        const promedioPonderado = sumaNotas / sumaPesos;
        document.getElementById('result').textContent = `Promedio Ponderado: ${promedioPonderado.toFixed(2)}`;
        
        for (let i = 0; i < notas.length; i++) {
            const nota = parseFloat(notas[i].value);
            const peso = parseFloat(pesos[i].value);

            if (!isNaN(nota) && !isNaN(peso)) {
                const puntajeObtenido = (nota * peso) / sumaPesos;
                document.getElementById(`puntaje${i + 1}`).textContent = `Puntaje Obtenido para Nota ${i + 1}: ${puntajeObtenido.toFixed(2)}`;
            }
        }
    } else {
        document.getElementById('result').textContent = 'Ingrese notas y pesos válidos';
    }
}
