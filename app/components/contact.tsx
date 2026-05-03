import { TextField, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
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
  mensaje: string;
  titulo: string; // asunto obligatorio
  time: Date;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
  emailjs.send(
    "service_f89ilps",
    "template_9slgh3g",
    {
      name: data.nombre,       // mapear a name
    email: data.correo,
    message: data.mensaje,   // mapear a message
    title: data.titulo,
    time: new Date().toLocaleString()
    },
    "sP4XZg1c-m-pXYRyU"
  )
  .then(() => {
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
    reset();
  })
  .catch((error) => {
    console.error("Error detallado:", error);
    alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
  });
};


  return (
    <section className="contact-section" id="contacto">
      <div className="aurora aurora-left"></div>
      <div className="aurora aurora-right"></div>

      <div className="floating-hexagons">
        <div className="hero-hex fh-4"></div>
        <div className="hero-hex fh-5"></div>
      </div>

      <ThemeProvider theme={theme}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: 480,
            margin: "0 auto",
            padding: 3,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 2,
            boxShadow: "0 0 20px rgba(59,130,246,0.4)",
            backdropFilter: "blur(6px)",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#3b82f6" }}>
            ¿Tienes alguna pregunta o comentario? ¡Escríbenos!
          </h2>

          {/* Nombre */}
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("nombre", { required: "El nombre es obligatorio" })}
            error={!!errors.nombre}
            helperText={errors.nombre?.message}
          />

          {/* Correo */}
          <TextField
            label="Correo electrónico"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
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

          {/* Asunto (title) */}
          <TextField
            label="Asunto"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("titulo", { required: "El asunto es obligatorio" })}
            error={!!errors.titulo}
            helperText={errors.titulo?.message}
          />

          {/* Mensaje */}
          <TextField
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              minLength: { value: 10, message: "Debe tener al menos 10 caracteres" },
            })}
            error={!!errors.mensaje}
            helperText={errors.mensaje?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, #3b82f6, #2563eb)",
            }}
          >
            Enviar
          </Button>
        </Box>
      </ThemeProvider>
    </section>
  );
}
