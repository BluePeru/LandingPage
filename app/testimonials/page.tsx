"use client";

import { supabase } from "../lib/supabaseClient";
import { TextField, Button, Box, Typography, Drawer } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { clearSavedSession } from "../lib/sessionStorage";
import { toast } from "sonner";

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
  user_id: string;
  comment: string;
  created_at: string;
  updated_at: string | null;
  likes: number;
};

export default function TestimonialsPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FeedbackFormData>();

  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [openAuthDrawer, setOpenAuthDrawer] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [editingFeedbackId, setEditingFeedbackId] = useState<string | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const fetchFeedbacks = async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select(`
        id,
        user_id,
        comment,
        created_at,
        updated_at,
        feedback_likes(count)
      `)
      .is("deleted_at", null)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error al cargar feedbacks:", error.message);
      return;
    }

    type RawFeedback = {
      id: string;
      user_id: string;
      comment: string;
      created_at: string;
      updated_at: string | null;
      feedback_likes: { count: number }[];
    };

    const mapped: Feedback[] = (data as RawFeedback[]).map((fb) => ({
      id: fb.id,
      user_id: fb.user_id,
      comment: fb.comment,
      created_at: fb.created_at,
      updated_at: fb.updated_at,
      likes: fb.feedback_likes[0]?.count || 0,
    }));

    setFeedbacks(mapped);
  };
  

  useEffect(() => {
    const feedbackTimer = setTimeout(() => {
      fetchFeedbacks();
    }, 0);

    

    const userTimer = setTimeout(() => {
      const loadUser = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        setUserEmail(user?.email ?? null);
        setCurrentUserId(user?.id ?? null);
      };

      loadUser();
    }, 0);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
      setCurrentUserId(session?.user?.id ?? null);
    });

    return () => {
      clearTimeout(feedbackTimer);
      clearTimeout(userTimer);
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    const disclaimerSeen = sessionStorage.getItem("blueDisclaimerSeen");

    if (!disclaimerSeen) {
      setShowDisclaimer(true);
    }
  }, 0);

  return () => clearTimeout(timer);
}, []);

  const userActiveFeedback = feedbacks.find(
    (fb) => fb.user_id === currentUserId
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    clearSavedSession();
    setUserEmail(null);
    setCurrentUserId(null);
    setOpenAuthDrawer(false);
    reset();
    setEditingFeedbackId(null);
  };

  const handleLike = async (id: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    setOpenAuthDrawer(true);
    return;
  }

  const { data: existingLike } = await supabase
    .from("feedback_likes")
    .select("id")
    .eq("feedback_id", id)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existingLike) {
    const { error } = await supabase
      .from("feedback_likes")
      .delete()
      .eq("id", existingLike.id);

    if (error) {
      toast.error("No se pudo quitar el me gusta.");
      console.error(error.message);
      return;
    }
  } else {
    const { error } = await supabase.from("feedback_likes").insert({
      feedback_id: id,
      user_id: user.id,
    });

    if (error) {
      toast.error("No se pudo dar me gusta.");
      console.error(error.message);
      return;
    }
  }

  fetchFeedbacks();
};

  const handleEdit = (fb: Feedback) => {
    setEditingFeedbackId(fb.id);
    setValue("mensaje", fb.comment);
  };

  const handleCancelEdit = () => {
    setEditingFeedbackId(null);
    reset();
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("¿Quieres eliminar tu testimonio?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from("feedback")
      .update({
        deleted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      toast.error("No se pudo eliminar el comentario.");
      console.error(error.message);
      return;
    }

    toast.success("Comentario eliminado.");
    reset();
    setEditingFeedbackId(null);
    fetchFeedbacks();
  };

  const handleCloseDisclaimer = () => {
  sessionStorage.setItem(
    "blueDisclaimerSeen",
    "true"
  );

  setShowDisclaimer(false);
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

      if (editingFeedbackId) {
        const { error } = await supabase
          .from("feedback")
          .update({
            comment: data.mensaje,
            updated_at: new Date().toISOString(),
          })
          .eq("id", editingFeedbackId);

        if (error) {
          toast.error("No se pudo actualizar el feedback.");
          return;
        }

        toast.success("Tu testimonio fue actualizado.");
        reset();
        setEditingFeedbackId(null);
        fetchFeedbacks();
        return;
      }

      if (userActiveFeedback) {
        toast.info("Ya tienes un testimonio activo. Puedes editarlo o eliminarlo.");
        handleEdit(userActiveFeedback);
        return;
      }

      const { error } = await supabase.from("feedback").insert([
        {
          user_id: user.id,
          comment: data.mensaje,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        toast.error("Error al enviar el feedback. Inténtalo de nuevo.");
      } else {
        toast.success("¡Gracias por tu feedback!");
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
              {feedbacks.slice(0, visibleCount).map((fb) => {
                const isOwner = fb.user_id === currentUserId;

                return (
                  <article key={fb.id} className="comment-card">
                    <div className="comment-avatar">B</div>

                    <div className="comment-content">
                      <div className="comment-top">
                        <div>
                          <h4>Usuario de Blue</h4>
                          {isOwner && (
                            <span className="comment-owner-badge">
                              Tu comentario
                            </span>
                          )}
                        </div>

                        <span>
                          {new Date(fb.created_at).toLocaleDateString()}
                        </span>
                      </div>

                      <p>{fb.comment}</p>

                      <div className="comment-actions-row">
                        <button
                          type="button"
                          className="comment-like"
                          onClick={() => handleLike(fb.id)}
                        >
                          <ThumbUpIcon fontSize="small" />
                          <span>{fb.likes} Me gusta</span>
                        </button>

                        {isOwner && (
                          <div className="comment-owner-actions">
                            <button
                              type="button"
                              onClick={() => handleEdit(fb)}
                            >
                              Editar
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDelete(fb.id)}
                            >
                              Eliminar
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}

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
                  <h3>
                    {editingFeedbackId ? "Edita tu testimonio" : "Deja tu testimonio"}
                  </h3>
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
  Comparte tu experiencia usando Blue. Para evitar spam, pedimos iniciar
  sesión con un código enviado a tu correo. Tu comentario se mostrará
  públicamente como “Usuario de Blue”.
</p>




              {userActiveFeedback && !editingFeedbackId && (
                <div className="testimonial-user-notice">
                  Ya tienes un testimonio activo. Puedes editarlo o eliminarlo desde
                  tu comentario.
                </div>
              )}

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
                {loading
                  ? "Guardando..."
                  : editingFeedbackId
                  ? "Actualizar testimonio"
                  : "Enviar feedback"}
              </Button>

              {editingFeedbackId && (
                <button
                  type="button"
                  className="testimonial-cancel-edit"
                  onClick={handleCancelEdit}
                >
                  Cancelar edición
                </button>
              )}
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
              ? "Tu identidad no se muestra públicamente. Tus comentarios aparecen como “Usuario de Blue”."
              : "Inicia sesión con un código enviado a tu correo para dejar tu experiencia usando Blue y evitar spam."}
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

      {showDisclaimer && (
  <div className="disclaimer-overlay">
    <div className="disclaimer-modal">
      <span className="disclaimer-kicker">
        PRIVACIDAD Y SEGURIDAD
      </span>

      <h3>
        Sobre los testimonios de Blue
      </h3>

      <p>
        Para publicar comentarios y opiniones,
        Blue solicita únicamente la verificación
        de un correo electrónico como medida de
        seguridad destinada a prevenir spam,
        actividad automatizada y usos indebidos
        de la plataforma.
      </p>

      <p>
        Los comentarios se muestran públicamente
        bajo la denominación “Usuario de Blue”.
        El correo electrónico no es utilizado con
        fines comerciales ni compartido con terceros.
      </p>

      <button
        type="button"
        className="disclaimer-button"
        onClick={handleCloseDisclaimer}
      >
        Entendido
      </button>
    </div>
  </div>
)}
    </section>
  );
}