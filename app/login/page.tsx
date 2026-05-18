"use client";

import { TextField, Button, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { saveSession } from "../lib/sessionStorage";
import { sendAccessCode, verifyAccessCode } from "../lib/passwordOtpAuth";
import { toast } from "sonner";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setTimeout(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleSendCode = async () => {
    if (!email.trim()) {
      toast.info("Ingresa tu correo");
      return;
    }

    setLoading(true);

    try {
      await sendAccessCode(email.trim());

      toast.info("Te enviamos un código a tu correo.");
      setStep("code");
      setCooldown(60);
    } catch (error: unknown) {
      console.error(error);

      const message = error instanceof Error ? error.message : "";

      if (message.includes("rate limit")) {
        toast.warning("Has solicitado muchos códigos. Espera unos minutos e inténtalo otra vez.");
      } else {
        toast.error("No se pudo enviar el código.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!code.trim()) {
      toast.info("Ingresa el código");
      return;
    }

    setLoading(true);

    try {
      const session = await verifyAccessCode(email.trim(), code.trim());

      if (session) {
        saveSession(session);
      }

      toast.success("Sesión iniciada correctamente");
      router.push("/testimonials");
    } catch (error) {
      console.error(error);
      toast.error("Código inválido o expirado.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!email.trim()) {
      toast.info("Ingresa un correo válido");
      return;
    }

    if (cooldown > 0) return;

    setResending(true);

    try {
      await sendAccessCode(email.trim());

      toast.info("Te enviamos un nuevo código");
      setCooldown(60);
    } catch (error: unknown) {
      console.error(error);

      const message = error instanceof Error ? error.message : "";

      if (message.includes("rate limit")) {
        toast.warning("Espera unos minutos antes de pedir otro código.");
      } else {
        toast.error("No se pudo reenviar el código.");
      }
    } finally {
      setResending(false);
    }
  };

  return (
    <section className="auth-section">
      <Box className="auth-card">
        <span className="auth-label">
          {step === "email" ? "ACCESO SEGURO" : "VERIFICACIÓN"}
        </span>

        <Typography component="h1" className="auth-title">
          {step === "email" ? "Iniciar sesión" : "Revisa tu correo"}
        </Typography>

        <p className="auth-description">
          {step === "email"
            ? "Ingresa tu correo y te enviaremos un código para acceder a Blue."
            : `Ingresa el código enviado a ${email}.`}
        </p>

        {step === "email" ? (
          <div className="auth-form">
            <TextField
              label="Correo electrónico"
              type="email"
              fullWidth
              margin="dense"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="button"
              variant="contained"
              fullWidth
              className="auth-button"
              disabled={loading}
              onClick={handleSendCode}
            >
              {loading ? "Enviando código..." : "Enviar código"}
            </Button>

            <div className="auth-switch">
              <span>¿Aún no tienes una cuenta?</span>
              <Link href="/register" className="auth-switch-link">
                Registrarse
              </Link>
            </div>
          </div>
        ) : (
          <div className="auth-form">
            <TextField
              label="Código de verificación"
              type="text"
              fullWidth
              margin="dense"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              slotProps={{
                htmlInput: {
                  maxLength: 6,
                  inputMode: "numeric",
                  autoComplete: "one-time-code",
                },
              }}
            />

            <Button
              type="button"
              variant="contained"
              fullWidth
              className="auth-button"
              disabled={loading}
              onClick={handleVerifyCode}
            >
              {loading ? "Verificando..." : "Verificar código"}
            </Button>

            <div className="auth-code-actions">
              <button
                type="button"
                className="auth-secondary-button"
                onClick={handleResendCode}
                disabled={cooldown > 0 || resending}
              >
                {cooldown > 0
                  ? `Reenviar código (${cooldown}s)`
                  : resending
                  ? "Reenviando..."
                  : "Reenviar código"}
              </button>

              <button
                type="button"
                className="auth-secondary-button"
                onClick={() => {
                  setCode("");
                  setStep("email");
                }}
              >
                Cambiar correo
              </button>
            </div>
          </div>
        )}
      </Box>
    </section>
  );
}