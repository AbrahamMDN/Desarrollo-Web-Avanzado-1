// Centro de Comunicaciones

// Implementación del paquete Cowsay
const cowsay = require("cowsay");

// Importación del Registro de Planetas
const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas

planetas.forEach(planeta => {
  console.log(
    cowsay.say({
      text: `¡Planeta ${planeta.nombre} descubierto en ${planeta.descubiertoEn}!`,
      e: "oO",
      T: "U "
    })
  );

  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Imagen: ${planeta.imagen}`);
  console.log('--------------------------------------------------');
});