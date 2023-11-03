function calcularPromedio() {
    // Obtener los valores de las calificaciones ingresadas por el usuario
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);

    // Calcular el promedio
    const promedio = (grade1 + grade2) / 2;

    // Mostrar el resultado en la página
    document.getElementById('result').textContent = promedio.toFixed(2);
}
