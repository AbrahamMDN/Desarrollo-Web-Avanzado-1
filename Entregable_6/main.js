// Importamos Zod
  const { z } = window.Zod;

  // Esquema para validar los datos del formulario
  const registerSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("El correo es inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  });

  document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    try {
      registerSchema.parse(formData);  // Validación con Zod
      document.getElementById("errors").textContent = "";
      alert("¡Registro exitoso!");
    } catch (error) {
      document.getElementById("errors").textContent =
        error.errors.map(e => e.message).join(", ");
    }
  });