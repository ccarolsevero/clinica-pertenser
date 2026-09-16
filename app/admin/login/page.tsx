import { LoginForm } from "./LoginForm";
import { Suspense } from "react";

export const metadata = {
  title: "Entrar no painel",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
