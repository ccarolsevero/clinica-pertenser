"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const from = useSearchParams().get("from") || "/admin";
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const payload = (await response.json()) as { error?: string };
    setLoading(false);
    if (!response.ok) {
      setError(payload.error || "Não foi possível entrar.");
      return;
    }
    router.replace(from.startsWith("/admin") ? from : "/admin");
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <form className="admin-card" onSubmit={onSubmit}>
        <p className="eyebrow">Painel PertenSer</p>
        <h1>Entrar</h1>
        <p className="lead">Use a senha do painel para editar os textos do site.</p>
        <label>
          Senha
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error ? <p className="admin-error">{error}</p> : null}
        <button className="btn btn-coral" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
