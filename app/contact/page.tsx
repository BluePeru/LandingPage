"use client";

import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3b82f6" },
    error: { main: "#e63946" },
    text: { primary: "#f9fafb" },
  },
});

type ContactFormData = {
  nombre: string;
  correo: string;
  titulo: string;
  mensaje: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          time: new Date().toLocaleString(),
        }),
      });

      if (!response.ok) {
        alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
        return;
      }

      alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
      reset();
    } catch (error) {
      console.error("Error detallado:", error);
      alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <>
      <div className="aurora aurora-left"></div>
      <div className="aurora aurora-right"></div>

      <div className="floating-hexagons">
        <div className="hero-hex fh-4"></div>
        <div className="hero-hex fh-5"></div>
      </div>

      <section className="contact-section" id="contacto">
        <ThemeProvider theme={theme}>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className="contact-form"
          >
            <span className="contact-label">CONTACTO</span>

            <h2 className="contact-title">
              ¿Tienes alguna pregunta o comentario?
            </h2>

            <p className="contact-description">
              Escríbenos y te responderemos lo antes posible.
            </p>

            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="dense"
              {...register("nombre", {
                required: "El nombre es obligatorio",
              })}
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
            />

            <TextField
              label="Correo electrónico"
              type="email"
              variant="outlined"
              fullWidth
              margin="dense"
              {...register("correo", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de correo inválido",
                },
              })}
              error={!!errors.correo}
              helperText={errors.correo?.message}
            />

            <TextField
              label="Asunto"
              variant="outlined"
              fullWidth
              margin="dense"
              {...register("titulo", {
                required: "El asunto es obligatorio",
              })}
              error={!!errors.titulo}
              helperText={errors.titulo?.message}
            />

            <TextField
              label="Mensaje"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="dense"
              {...register("mensaje", {
                required: "El mensaje es obligatorio",
                minLength: {
                  value: 10,
                  message: "Debe tener al menos 10 caracteres",
                },
              })}
              error={!!errors.mensaje}
              helperText={errors.mensaje?.message}
            />

            <Button type="submit" variant="contained" fullWidth className="contact-button">
              Enviar mensaje
            </Button>
          </Box>
        </ThemeProvider>
      </section>
    </>
  );
}