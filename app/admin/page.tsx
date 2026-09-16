import { AdminPanel } from "./AdminPanel";

export const metadata = {
  title: "Painel",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminPanel />;
}
