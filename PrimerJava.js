// Selección de elementos del DOM
// Selecciona la pantalla y todos los botones
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Añadir eventos a los botones
// Itera sobre cada botón y añade un listener para el evento 'click'
botones.forEach((boton) => {
  // Cuando se hace clic en un botón, se ejecuta esta función
  // addEventListener es una forma de manejar eventos en JavaScript
  boton.addEventListener("click", () => {
    // Obtener el texto del botón presionado
    // textContent obtiene el contenido de texto del elemento
    const botonApretado = boton.textContent;

    if (boton.id === "c") {
      // Si se presiona 'C', limpiar la pantalla
      pantalla.textContent = "0";
      return;
    }

    if (boton.id === "borrar") {
      // Si se presiona '←', eliminar el último carácter
      //textContent.length obtiene la longitud del contenido de texto
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error"
      ) {
        // Si solo queda un carácter, reiniciar a '0'
        pantalla.textContent = "0";
      } else {
        // Eliminar el último carácter
        // slice(0, -1) obtiene una subcadena desde el inicio hasta el penúltimo carácter
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      //return para salir de la función y no ejecutar el código siguiente
      return;
    }
    if (boton.id === "igual") {
      try {
        // Evaluar la expresión matemática en la pantalla
        // Usar eval con precaución, ya que puede ejecutar código arbitrario
        //
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error";
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});
