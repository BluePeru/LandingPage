"use client";

import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { sendEmailOtp, verifyEmailOtp } from "../lib/otpAuth";
import { saveSession } from "../lib/sessionStorage";
import { toast } from "sonner";

type EmailOtpAuthFormProps = {
  mode?: "login" | "register";
};

export default function EmailOtpAuthForm({ mode = "login" }: EmailOtpAuthFormProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [loading, setLoading] = useState(false);

  const isRegister = mode === "register";

  const handleSendCode = async () => {
    if (!email.trim()) {
      toast.info("Ingresa tu correo");
      return;
    }

    setLoading(true);

    try {
      await sendEmailOtp(email.trim());
      toast.info("Te enviamos un código a tu correo.");
      setStep("code");
    } catch (error) {
      console.error(error);
      toast.error("No se pudo enviar el código.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!token.trim()) {
      toast.info("Ingresa el código");
      return;
    }

    setLoading(true);

    try {
      const session = await verifyEmailOtp(email.trim(), token.trim());

      if (session) {
        saveSession(session);
      }

      toast.success(isRegister ? "Cuenta creada correctamente" : "Sesión iniciada correctamente");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Código inválido o expirado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-section">
      <Box className="auth-card">
        <span className="auth-label">
          {step === "email"
            ? isRegister
              ? "CREA TU CUENTA"
              : "ACCESO SEGURO"
            : "VERIFICACIÓN"}
        </span>

        <Typography component="h1" className="auth-title">
          {step === "email"
            ? isRegister
              ? "Regístrate con tu correo"
              : "Ingresa con tu correo"
            : "Revisa tu correo"}
        </Typography>

        <p className="auth-description">
          {step === "email"
            ? isRegister
              ? "Te enviaremos un código para crear tu cuenta en Blue."
              : "Te enviaremos un código de verificación para acceder a Blue."
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
              {loading ? "Enviando..." : isRegister ? "Enviar código de registro" : "Enviar código"}
            </Button>
          </div>
        ) : (
          <div className="auth-form">
            <TextField
              label="Código de verificación"
              type="text"
              fullWidth
              margin="dense"
              value={token}
              onChange={(e) => setToken(e.target.value)}
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

            <button
              type="button"
              className="auth-secondary-button"
              onClick={() => {
                setStep("email");
                setToken("");
              }}
            >
              Cambiar correo
            </button>
          </div>
        )}
      </Box>
    </section>
  );
}