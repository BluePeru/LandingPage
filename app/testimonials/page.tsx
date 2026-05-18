"use client";

import { supabase } from "../lib/supabaseClient";
import {
  TextField,
  Button,
  Box,
  Typography,
  Drawer,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { clearSavedSession } from "../lib/sessionStorage";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#3b82f6" },
    error: { main: "#e63946" },
    text: { primary: "#f9fafb" },
  },
});

type FeedbackFormData = {
  mensaje: string;
};

type Feedback = {
  id: string;
  comment: string;
  created_at: string;
  likes: number;
};

export default function TestimonialsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormData>();

  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [openAuthDrawer, setOpenAuthDrawer] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const fetchFeedbacks = async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select(`
        id,
        comment,
        created_at,
        feedback_likes(count)
      `);

    if (error) {
      console.error("Error al cargar feedbacks:", error.message);
      return;
    }

    type RawFeedback = {
      id: string;
      comment: string;
      created_at: string;
      feedback_likes: { count: number }[];
    };

    const mapped: Feedback[] = (data as RawFeedback[]).map((fb) => ({
      id: fb.id,
      comment: fb.comment,
      created_at: fb.created_at,
      likes: fb.feedback_likes[0]?.count || 0,
    }));

    setFeedbacks(mapped);
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    fetchFeedbacks();
  }, 0);

  const loadUserTimer = setTimeout(() => {
    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserEmail(user?.email ?? null);
    };

    loadUser();
  }, 0);

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setUserEmail(session?.user?.email ?? null);
  });

  return () => {
    clearTimeout(timer);
    clearTimeout(loadUserTimer);
    subscription.unsubscribe();
  };
}, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    clearSavedSession();
    setUserEmail(null);
    setOpenAuthDrawer(false);
  };

  const handleLike = async (id: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setOpenAuthDrawer(true);
      return;
    }

    const { error } = await supabase.from("feedback_likes").insert({
      feedback_id: id,
      user_id: user.id,
    });

    if (error) {
      console.error("Error al dar like:", error.message);
    } else {
      fetchFeedbacks();
    }
  };

  const onSubmit = async (data: FeedbackFormData) => {
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setOpenAuthDrawer(true);
        return;
      }

      const { error } = await supabase.from("feedback").insert([
        {
          user_id: user.id,
          comment: data.mensaje,
          created_at: new Date(),
        },
      ]);

      if (error) {
        alert("Error al enviar el feedback. Inténtalo de nuevo.");
      } else {
        alert("¡Gracias por tu feedback!");
        reset();
        fetchFeedbacks();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section section-testimonials" id="testimonials">
      <div className="section-inner testimonials-inner">
        <span className="section-label">TESTIMONIOS</span>

        <h2 className="section-heading">
          Personas que ya confían en <span className="serif-accent">Blue</span>
        </h2>

        <p className="section-description">
          Opiniones de usuarios que probaron la app y valoran una forma más rápida,
          colaborativa y responsable de mantenerse informados.
        </p>

        <div className="testimonials-layout">
          <div className="testimonials-comments">
            <div className="testimonials-block-header">
              <span className="testimonials-kicker">Comunidad</span>
              <h3>Comentarios recientes</h3>
              <p>Lee las experiencias compartidas por otros usuarios.</p>
            </div>

            <div className="comments-container">
              {feedbacks.slice(0, visibleCount).map((fb) => (
                <article key={fb.id} className="comment-card">
                  <div className="comment-avatar">
                    {fb.comment.charAt(0).toUpperCase()}
                  </div>

                  <div className="comment-content">
                    <div className="comment-top">
                      <h4>Usuario Blue</h4>
                      <span>{new Date(fb.created_at).toLocaleDateString()}</span>
                    </div>

                    <p>{fb.comment}</p>

                    <button
                      type="button"
                      className="comment-like"
                      onClick={() => handleLike(fb.id)}
                    >
                      <ThumbUpIcon fontSize="small" />
                      <span>{fb.likes} Me gusta</span>
                    </button>
                  </div>
                </article>
              ))}

              {feedbacks.length === 0 && (
                <div className="comments-empty">
                  Aún no hay comentarios. Sé la primera persona en dejar uno.
                </div>
              )}
            </div>

            <div className="comments-actions">
              {visibleCount < feedbacks.length && (
                <Button
                  variant="outlined"
                  onClick={() => setVisibleCount(visibleCount + 2)}
                >
                  Mostrar más
                </Button>
              )}

              {visibleCount > 3 && (
                <Button variant="outlined" onClick={() => setVisibleCount(3)}>
                  Mostrar menos
                </Button>
              )}
            </div>
          </div>

          <ThemeProvider theme={theme}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              className="testimonial-form-card"
            >
              <div className="testimonial-form-header">
                <div>
                  <span className="testimonials-kicker">Participa</span>
                  <h3>Deja tu testimonio</h3>
                </div>

                <button
                  type="button"
                  className="testimonial-account-btn"
                  onClick={() => setOpenAuthDrawer(true)}
                >
                  {userEmail ? "Mi cuenta" : "Participar"}
                </button>
              </div>

              <p>
                Comparte tu experiencia usando Blue. Para publicar tu comentario debes
                iniciar sesión.
              </p>

              <TextField
                className="testimonial-field"
                label="Mensaje"
                multiline
                rows={4}
                fullWidth
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

              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="testimonial-button"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar feedback"}
              </Button>
            </Box>
          </ThemeProvider>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={openAuthDrawer}
        onClose={() => setOpenAuthDrawer(false)}
      >
        <Box className="auth-drawer">
          <span className="auth-drawer-label">
            {userEmail ? "CUENTA ACTIVA" : "PARTICIPA"}
          </span>

          <Typography component="h2" className="auth-drawer-title">
            {userEmail ? "Tu sesión" : "Únete a los testimonios"}
          </Typography>

          <p className="auth-drawer-description">
            {userEmail
              ? "Ya puedes publicar testimonios y participar en la comunidad de Blue."
              : "Inicia sesión o crea una cuenta para dejar tu experiencia usando Blue."}
          </p>

          {userEmail ? (
            <div className="auth-drawer-user">
              <p>Conectado como:</p>
              <strong>{userEmail}</strong>

              <button
                type="button"
                className="auth-drawer-logout"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <div className="auth-drawer-actions">
              <Link href="/login" className="auth-drawer-primary">
                Iniciar sesión
              </Link>

              <Link href="/register" className="auth-drawer-secondary">
                Registrarse
              </Link>
            </div>
          )}
        </Box>
      </Drawer>
    </section>
  );
}