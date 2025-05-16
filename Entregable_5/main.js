// Registro de personas para eventos futuros de la empresa

    document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      const archivoInput = document.getElementById('archivo');

      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      // Validación de fecha (Para eventos futuros de la empresa)
      const fechaSeleccionada = new Date(fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0); // Para eliminar la hora y comparar solo fechas
      if (fechaSeleccionada < hoy) {
        alert('La fecha del evento no puede ser anterior a la del día de registro');
        return;
    }

    // Validación de hora (Entre 07:00 y 22:00)
    const [horaSeleccionada, minutoSeleccionado] = hora.split(':').map(Number);if (horaSeleccionada < 7 || horaSeleccionada > 22) {
        alert('La hora debe estar entre las 07:00 y las 22:00.');
        return;
    }

    // Validación del archivo (Si aplica)
    if (archivoInput.files.length > 0) {
        const archivo = archivoInput.files[0];
        const tiposPermitidos = ['application/pdf', 'image/jpeg', 'image/png'];
        const maxSize = 2 * 1024 * 1024; // 2 MB

        if (!tiposPermitidos.includes(archivo.type)) {
            alert('Solo se permiten archivos PDF o imágenes (JPG, PNG).');return;
        }
        
        if (archivo.size > maxSize) {
            alert('El archivo no debe superar los 2MB.');
            return;
        }
    }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });